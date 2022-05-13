package handler

import (
	models "mental-health-api/model"
	"mental-health-api/pkg/const/firestoreCol"
	"mental-health-api/pkg/firebase"

	"bytes"
	"encoding/json"
	"log"
	"time"

	"cloud.google.com/go/firestore"
	"github.com/gofiber/fiber/v2"

	"fmt"
)

var (
	newline = []byte{'\n'}
	space   = []byte{' '}
)

type messageResponse struct {
	ID        string
	CreatedAt time.Time
	SenderID  string
	Sender    models.User
	Content   string
}

type UserRef struct {
	Name      string
	Email     string
	Picture   string
	CreatedAt int64
}

type MessageResponseAPI struct {
	ID         string    `json:"id"`
	SenderID   string    `json:"senderID"`
	Sender     UserRef   `json:"sender"`
	ReceiverID string    `json:"receiverID"`
	Receiver   UserRef   `json:"receiver"`
	Content    string    `json:"content"`
	CreatedAt  time.Time `json:"createdAt"`
}

type MessagesResponse struct {
	Message []messageResponse
}

// Get All Messages
// @Summary Get All Messages
// @Tags /chat
// @Accept json
// @Produce json
// @Param userid path string true "UserID"
// @Param id path string true "ID"
// @Success 200 ""
// @Router /chat/getall/{userid}/{id} [get]
func GetAllMessages(ctx *fiber.Ctx) error {
	var messagesResponse MessagesResponse

	senderID := ctx.Params("userid")
	receiverID := ctx.Params("id")
	chatID, err := models.GetChatID(senderID, receiverID)
	if err != nil {
		return err
	}
	chatCol := firebase.FirebaseApp.Db.Collection(firestoreCol.CHAT_COLLECTION)
	chat := chatCol.Doc(chatID)
	messagesDocIter := chat.Collection(firestoreCol.MESSAGE_COLLECTION).OrderBy("CreatedAt", firestore.Asc).Documents(firebase.Ctx)
	messages, err := messagesDocIter.GetAll()
	if err != nil {
		return err
	}
	for messgIndex := range messages {
		if err != nil {
			return err
		}
		var message models.Message
		if err = messages[messgIndex].DataTo(&message); err != nil {
			return err
		}

		//get sender-info
		var sender models.User
		if err = sender.GetOne(message.Sender, ""); err != nil {
			fmt.Println("Get_user_id: ", err)
		}

		if sender.Picture == "" {
			sender.Picture = firestoreCol.DEFAULT_PICTURE
		}

		messageResponse := messageResponse{ID: messages[messgIndex].Ref.ID, CreatedAt: message.CreatedAt, SenderID: message.Sender, Sender: sender, Content: message.Content}
		messagesResponse.Message = append(messagesResponse.Message, messageResponse)
	}

	return ctx.Status(fiber.StatusCreated).JSON(messagesResponse)
}

// Connect Chat
// @Summary Update to websocket
// @Tags /chat
// @Accept json
// @Produce json
// @Param userid path string true "UserID"
// @Success 200 ""
// @Router /chat/{userid} [get]
func ChatPage(c *fiber.Ctx) error {
	//models.GetAllMessages(c.Params("userid"), c.Params("id"))
	return c.SendFile("home.html")
}

// Get Conversations' summary
// @Summary Get conversations' summary
// @Tags /chat
// @Accept json
// @Produce json
// @Param userid path string true "UserID"
// @Success 200 {object} models.ChatSummary
// @Router /chat/conversations/{userid} [get]
func GetChatIDs(c *fiber.Ctx) error {
	var chatIDs []string

	userID := c.Params("userid")
	chatCol := firebase.FirebaseApp.Db.Collection(firestoreCol.CHAT_COLLECTION)
	chatDocumentIter := chatCol.Where("users", "array-contains", userID).Documents(firebase.Ctx)
	chatsSnap, err := chatDocumentIter.GetAll()
	if err != nil {
		return err
	}

	conversationsInfo, err := models.ConversationsInfo(chatsSnap, userID)
	if err != nil {
		return err
	}

	for chatIndex := range chatsSnap {
		ID := chatsSnap[chatIndex].Ref.ID
		chatIDs = append(chatIDs, ID)
	}

	fmt.Println("chatIDs: ", chatIDs)
	return c.Status(200).JSON(conversationsInfo)
}

// Change current showEmotion status
// @Summary Change current showEmotion status
// @Tags /chat
// @Accept json
// @Produce json
// @Param userid path string true "UserID"
// @Param id path string true "ID"
// @Success 200 ""
// @Router /chat/emotion/{userid}/{id} [put]
func ShowEmotion(ctx *fiber.Ctx) error {
	senderID := ctx.Params("userid")
	receiverID := ctx.Params("id")
	chatID, err := models.GetChatID(senderID, receiverID)
	if err != nil {
		return err
	}

	chatCol := firebase.FirebaseApp.Db.Collection(firestoreCol.CHAT_COLLECTION)
	chat := chatCol.Doc(chatID)
	chatSnap, err := chat.Get(firebase.Ctx)
	if err != nil {
		return err
	}
	var chatInfo models.Chat
	err = chatSnap.DataTo(&chatInfo)
	if err != nil {
		return err
	}

	showEmotionStatus := chatInfo.ShowEmotion

	fmt.Println("show emotion status: ", showEmotionStatus)
	chat.Update(firebase.Ctx, []firestore.Update{
		{Path: firestoreCol.SHOW_EMOTION, Value: !showEmotionStatus},
	})

	return ctx.Status(200).JSON(!showEmotionStatus)
}

func getUserInfo(senderID, receiverID string) (UserRef, UserRef, error) {
	var sender models.User
	var receiver models.User
	var errUser UserRef
	// get users
	if err := sender.GetOne(senderID, ""); err != nil {
		fmt.Println("Get_user_id: ", err)
		return errUser, errUser, err
	}

	if sender.Picture == "" {
		sender.Picture = firestoreCol.DEFAULT_PICTURE
	}

	senderRef := UserRef{
		Name:      sender.Name,
		Email:     sender.Email,
		Picture:   sender.Picture,
		CreatedAt: sender.CreatedAt,
	}
	if err := receiver.GetOne(receiverID, ""); err != nil {
		fmt.Println("Get_user_id: ", err)
		return errUser, errUser, err
	}

	if receiver.Picture == "" {
		receiver.Picture = firestoreCol.DEFAULT_PICTURE
	}

	receiverRef := UserRef{
		Name:      receiver.Name,
		Email:     receiver.Email,
		Picture:   receiver.Picture,
		CreatedAt: receiver.CreatedAt,
	}

	// convert User to []byte
	byteBuffer := new(bytes.Buffer)

	err := json.NewEncoder(byteBuffer).Encode(senderRef)
	if err != nil {
		log.Fatal("encode error:", err)
	}
	senderByte := byteBuffer.Bytes()
	senderByte = bytes.TrimSpace(bytes.Replace([]byte(senderByte), newline, space, -1))

	err = json.NewEncoder(byteBuffer).Encode(receiverRef)
	if err != nil {
		log.Fatal("encode error:", err)
	}
	receiverByte := byteBuffer.Bytes()
	receiverByte = bytes.TrimSpace(bytes.Replace([]byte(receiverByte), newline, space, -1))

	return senderRef, receiverRef, nil
}

// Send Message
// @Summary Send Message
// @Tags /chat
// @Accept json
// @Produce json
// @Param userid path string true "UserID"
// @Success 200 ""
// @Router /chat/{userid} [post]
func SendMessage(ctx *fiber.Ctx) error {
	var receivedMessage models.ReceivedMessage
	senderID := ctx.Params("userid")
	if err := ctx.BodyParser(&receivedMessage); err != nil {
		fmt.Println(err)
		return ctx.Status(400).JSON(err)
	}

	//database
	id, message, err := models.NewMessage(receivedMessage.ReceiverID, senderID, []byte(receivedMessage.Content))
	if err != nil {
		fmt.Println("messageid err: ", err)
		return ctx.Status(400).JSON(err)
	}
	sender, receiver, err := getUserInfo(senderID, receivedMessage.ReceiverID)
	if err != nil {
		return ctx.Status(400).JSON(err)
	}
	messageRes := MessageResponseAPI{
		ID:         id,
		SenderID:   senderID,
		Sender:     sender,
		ReceiverID: receivedMessage.ReceiverID,
		Receiver:   receiver,
		Content:    receivedMessage.Content,
		CreatedAt:  message.CreatedAt,
	}

	fmt.Println("MessageID: ", id)
	return ctx.JSON(models.Response{
		Status:  fiber.StatusCreated,
		Message: "Send Message successfully",
		Data:    messageRes})
}
