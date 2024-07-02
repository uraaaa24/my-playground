'use client'

import { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tortor in libero sollicitudin lacinia'
  ])

  const scrollToBottom = () => {
    scroll.scrollToBottom({
      containerId: 'chat-container',
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuint'
    })
  }

  // 新しいメッセージを2秒ごとに追加
  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tortor in libero sollicitudin lacinia'
      ])
    }, 500)

    return () => clearInterval(interval)
  }, [])

  // messages ステートの変更を監視してスクロールを行う
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div id="chat-container">
      {messages.map((message, index) => (
        <div key={index} className="m-2 rounded-lg border border-gray-200 bg-red-300 p-4">
          {message}
        </div>
      ))}
    </div>
  )
}

export default ChatComponent
