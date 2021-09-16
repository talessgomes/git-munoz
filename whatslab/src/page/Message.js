import React from "react";
import {MessageContainer,
     SendContainer,
      InputContainer,
      NameInput,
      SendInput
    } from "./styled"

export default class Message extends React.Component {
    state = {
        messages: [],
        userValue: "",
        messageValue: ""
    }

    onChangeUserValue = (event) => {
        this.setState({userValue: event.target.value})
    }

    onChangeMessageValue = (event) => {
        this.setState({messageValue: event.target.value})
    }

    sendMessage = () => {
        const newMessage = {
            user: this.state.userValue,
            text: this.state.messageValue
        }
        console.log(newMessage)
        const newMessagesArray = [newMessage, ...this.state.messages]

        this.setState({messages:newMessagesArray, messageValue: ""})
    }

    render() {
        console.log(this.state.userValue)
        console.log(this.state.messageValue)
        return (
            <MessageContainer>
                <SendContainer>
                    {this.state.messages.map((message, index) => {
                        return(
                            <p key={index}>
                        <strong>{message.user}</strong>: {message.text}
                           </p>
                        )
                    })}
                </SendContainer>
                <InputContainer>
                <NameInput 
                onChange={this.onChangeUserValue}
                value={this.state.userValue}
                placeholder={"Nome"}
                />
                <SendInput 
                onChange={this.onChangeMessageValue}
                value={this.state.messageValue}
                placeholder={"Mensagem"}
                />
                <button onClick={this.sendMessage}>enviar</button>
                </InputContainer>
            </MessageContainer>
        )
    }
}
