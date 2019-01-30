import React, { Component } from 'react';

class MessageList extends Component {

  render() {
    const texts = this.props.messages.map((message, index) => {
      return(
        <div key={index} class='py-2'>
          <div class=''>{message.senderId}:</div>
          <br />
          <div class='bg-blue inline-block rounded'>{message.text}</div>
        </div>
      )
    })

    return(
      <div>
        {texts}
      </div>
    )
  }
}

export default MessageList
