interface MessageProp {
    text: string
}

const Message = ({
    messages
}) => {
    return (
        <div className="chat-window">
            {messages.map((msg: MessageProp) => (
                <div className="message">{msg.text}</div>
            ))}
        </div>
    )

}

export default Message