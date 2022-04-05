// Package docs GENERATED BY THE COMMAND ABOVE; DO NOT EDIT
// This file was generated by swaggo/swag
package docs

import "github.com/swaggo/swag"

const docTemplate = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{escape .Description}}",
        "title": "{{.Title}}",
        "contact": {},
        "license": {
            "name": "Apache 2.0",
            "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        },
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/chat/conversations/{userid}": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/chat"
                ],
                "summary": "Get conversations' summary",
                "parameters": [
                    {
                        "type": "string",
                        "description": "UserID",
                        "name": "userid",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.ChatSummary"
                        }
                    }
                }
            }
        },
        "/chat/emotion/{userid}/{id}": {
            "put": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/chat"
                ],
                "summary": "Change current showEmotion status",
                "parameters": [
                    {
                        "type": "string",
                        "description": "UserID",
                        "name": "userid",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "ID",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": ""
                    }
                }
            }
        },
        "/chat/getall/{userid}/{id}": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/chat"
                ],
                "summary": "Get All Messages",
                "parameters": [
                    {
                        "type": "string",
                        "description": "UserID",
                        "name": "userid",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "ID",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": ""
                    }
                }
            }
        },
        "/chat/{userid}": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/chat"
                ],
                "summary": "Update to websocket",
                "parameters": [
                    {
                        "type": "string",
                        "description": "UserID",
                        "name": "userid",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": ""
                    }
                }
<<<<<<< HEAD
            },
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/chat"
                ],
                "summary": "Send Message",
                "parameters": [
                    {
                        "type": "string",
                        "description": "UserID",
                        "name": "userid",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": ""
                    }
                }
=======
>>>>>>> 6051be67b771e84552cb6b338d2f7f788fb3ba6a
            }
        },
        "/post": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/post"
                ],
                "summary": "Get All Posts",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Response"
                        }
                    }
                }
            },
            "post": {
                "description": "EVENT_emotion = 0\nPOST__happy = 1\nPOST__sad = 2\nPOST__scared = 3\nPOST__angry = 4\nPOST__worry = 5\nPOST__normal = 6\nPOST__depression = 7",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/post"
                ],
                "summary": "Create Post",
                "parameters": [
                    {
                        "description": "Post",
                        "name": "post",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/models.Post"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Response"
                        }
                    }
                }
            }
        },
        "/post/{postid}": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/post"
                ],
                "summary": "Get a post",
                "parameters": [
                    {
                        "type": "array",
                        "items": {
                            "type": "integer"
                        },
                        "description": "PostID",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Response"
                        }
                    }
                }
            },
            "put": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/post"
                ],
                "summary": "Update Post",
                "parameters": [
                    {
                        "type": "array",
                        "items": {
                            "type": "integer"
                        },
                        "description": "PostID",
                        "name": "id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "description": "Post",
                        "name": "post",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/models.Post"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Response"
                        }
                    }
                }
            },
            "delete": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/post"
                ],
                "summary": "Delete a post",
                "parameters": [
                    {
                        "type": "array",
                        "items": {
                            "type": "integer"
                        },
                        "description": "PostID",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Response"
                        }
                    }
                }
            }
        },
        "/user": {
            "put": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/user"
                ],
                "summary": "Update User",
                "parameters": [
                    {
                        "description": "User",
                        "name": "user",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/models.User"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.User"
                        }
                    }
                }
            },
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/user"
                ],
                "summary": "Create User",
                "parameters": [
                    {
                        "description": "User",
                        "name": "user",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/models.User"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Response"
                        }
                    }
                }
            },
            "delete": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/user"
                ],
                "summary": "Delete User",
                "parameters": [
                    {
                        "type": "string",
                        "description": "UserID",
                        "name": "userID",
                        "in": "header",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": ""
                    }
                }
            }
        },
        "/user-feel": {
            "get": {
                "description": "EVENT_emotion = 0\nPOST__happy = 1\nPOST__sad = 2\nPOST__scared = 3\nPOST__angry = 4\nPOST__worry = 5\nPOST__normal = 6\nPOST__depression = 7",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/user-feel"
                ],
                "summary": "Get User's Feel",
                "parameters": [
                    {
                        "type": "string",
                        "description": "UserID",
                        "name": "UserID",
                        "in": "header",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": ""
                    }
                }
            },
            "post": {
                "description": "EVENT_emotion = 0\nPOST__happy = 1\nPOST__sad = 2\nPOST__scared = 3\nPOST__angry = 4\nPOST__worry = 5\nPOST__normal = 6\nPOST__depression = 7",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/user-feel"
                ],
                "summary": "Create User's Feel",
                "parameters": [
                    {
                        "description": "User Feel",
                        "name": "UserFeel",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/models.UserFeel"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": ""
                    }
                }
            }
        },
        "/user/get-info": {
            "get": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/user"
                ],
                "summary": "Get User",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Response"
                        }
                    }
                }
            }
        },
        "/user/login": {
            "post": {
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "/user"
                ],
                "summary": "Login",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/models.Response"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "models.ChatSummary": {
            "type": "object",
            "properties": {
                "chatID": {
                    "type": "string"
                },
                "friend": {
                    "$ref": "#/definitions/models.User"
                },
                "lastMessage": {
                    "$ref": "#/definitions/models.Message"
                },
                "showEmotion": {
                    "type": "boolean"
                }
            }
        },
        "models.Message": {
            "type": "object",
            "properties": {
                "content": {
                    "type": "string"
                },
                "createdAt": {
                    "type": "string"
                },
                "sender": {
                    "type": "string"
                }
            }
        },
        "models.Post": {
            "type": "object",
            "properties": {
                "created_at": {
                    "type": "integer"
                },
                "deleted": {
                    "type": "boolean"
                },
                "deleted_at": {
                    "type": "integer"
                },
                "detail": {
                    "type": "string"
                },
                "emotion": {
                    "type": "integer"
                },
                "expert": {
                    "$ref": "#/definitions/models.User"
                },
                "firebase_user_id": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "picture": {
                    "type": "string"
                },
                "title": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "integer"
                }
            }
        },
        "models.Response": {
            "type": "object",
            "properties": {
                "data": {},
                "error": {
                    "type": "boolean"
                },
                "message": {
                    "type": "string"
                },
                "status": {
                    "type": "integer"
                }
            }
        },
        "models.User": {
            "type": "object",
            "properties": {
                "bio": {
                    "type": "string"
                },
                "created_at": {
                    "type": "integer"
                },
                "deleted": {
                    "type": "boolean"
                },
                "deleted_at": {
                    "type": "integer"
                },
                "email": {
                    "type": "string"
                },
                "firebase_user_id": {
                    "type": "string"
                },
                "is_expert": {
                    "type": "boolean"
                },
                "name": {
                    "type": "string"
                },
                "picture": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "integer"
                }
            }
        },
        "models.UserFeel": {
            "type": "object",
            "properties": {
                "created_at": {
                    "type": "integer"
                },
                "deleted": {
                    "type": "boolean"
                },
                "deleted_at": {
                    "type": "integer"
                },
                "feel_id": {
                    "type": "integer"
                },
                "firebase_user_id": {
                    "type": "string"
                },
<<<<<<< HEAD
                "id": {
                    "type": "string"
                },
=======
>>>>>>> 6051be67b771e84552cb6b338d2f7f788fb3ba6a
                "reason": {
                    "type": "string"
                },
                "updated_at": {
                    "type": "integer"
                }
            }
        }
    }
}`

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = &swag.Spec{
	Version:          "1.0",
	Host:             "localhost:8080",
	BasePath:         "/",
	Schemes:          []string{},
	Title:            "Mental Health Api",
	Description:      "Swagger for Mental Health Api App",
	InfoInstanceName: "swagger",
	SwaggerTemplate:  docTemplate,
}

func init() {
	swag.Register(SwaggerInfo.InstanceName(), SwaggerInfo)
}
