import React from 'react';

interface ChatContextType {
    ws: WebSocket;
}
const ChatContext = React.createContext<ChatContextType>(null!);

export const useChat = () => {
    const context = React.useContext(ChatContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider');
    }
    return context;
};

export default ChatContext;
