import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-client'
import './App.css';
import MessageList from './components/MessageList/messageList'
import {instanceLocator, tokenUrl} from './config'

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'Jacob',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: '19379289',
        hooks: {
          onNewMessage: message => {
            console.log('message.text: ', message.text)
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        }
      })
      currentUser.sendMessage({
        text: "fuck you bitch",
        roomId: currentUser.rooms[0].id
      });
    })
  }

  render() {
    return (
      <div class=''>
        <MessageList messages={this.state.message} />
      </div>
    );
  }
}

export default App;
