import React, { useEffect, useRef, useState } from 'react'
import {
  AiFillNotification,
  AiOutlineCloseCircle,
  AiOutlineSend
} from 'react-icons/ai'

function ChatbotModal() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [chatShow, setChatShow] = useState(false)
  const [suggestion, setSuggestion] = useState('')
  const [newMessageAlert, setNewMessageAlert] = useState(false)
  const messageContainerRef = useRef(null)

  const handleBotReply = input => {
    if (input.includes('hello')) {
      return 'Hi there! How can I help you today?'
    } else if (input.includes('help')) {
      return 'What kind of help do you need?'
    } else {
      return "Sorry, I didn't understand. Can you please rephrase your message?"
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    let date = new Date()
    var seconds = date.getSeconds()
    var minutes = date.getMinutes()
    var hour = date.getHours()
    var time = `${hour}:${minutes} ${seconds}`
    const userMessage = {
      text: inputValue,
      sender: 'user',
      // date: date,
      time: time
    }
    const botMessage = {
      text: handleBotReply(inputValue),
      sender: 'bot',
      // date: date,
      time: time
    }
    const message = [userMessage, botMessage]
    setMessages([...messages, ...message])
    setInputValue('')
    setSuggestion('')
    setNewMessageAlert(true)
    setTimeout(() => {
      setNewMessageAlert(false)
    }, 5000)
  }

  const handleInputChange = event => {
    const currentInputValue = event.target.value.toLowerCase()
    setSuggestion(handleBotReply(currentInputValue))
    setInputValue(currentInputValue)
  }

  const scrollToBottom = () => {
    const messageContainer = messageContainerRef.current
    // messageContainer.scrollTop = messageContainer.scrollHeight
    messageContainer.lastChild.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    })
    setNewMessageAlert(false)
    console.log(messageContainer)
  }

  useEffect(() => { }, [messages])

  // const handleSearch = () => {
  //   const searchTerm = window.prompt('Enter search term:')
  //   if (searchTerm) {
  //     const messageIndex = messages.findIndex(message =>
  //       message.text.toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //     if (messageIndex !== -1) {
  //       const messageElement =
  //         messageContainerRef.current.children[messageIndex]
  //       messageElement.scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'nearest'
  //       })
  //     }
  //   }
  // }

  return (
    <>
      {chatShow ? (
        <div
          className=' p-4'
          style={{
            width: '90%',
            maxWidth: '400px',
            height: '50%'
            // maxHeight: '200px'
          }}
        >
          <div className='bg-transparent '>
            <div className='flex justify-between items-center bg-blue-500 w-100 px-2 py-1 mb-2 rounded-md '>
              <h3 className='text-lg font-semibold text-white'>Bot</h3>
              {newMessageAlert && (
                <p
                  onClick={scrollToBottom}
                  className='text-sm font-medium flex flex-row justify-between items-center mx-2 text-center bg-opacity-100 px-2 py-1 w-full bg-yellow-600 backdrop-blur-lg text-white rounded-md'
                >
                  <AiFillNotification size={20} /> New message!
                </p>
              )}
              <button
                onClick={() => setChatShow(false)}
                className='text-red-500 font-bold text-lg focus:outline-none'
              >
                <AiOutlineCloseCircle size={30} />
              </button>
            </div>
            <div className='bg-green-100 px-4 py-2 rounded-b-xl '>
              <div
                ref={messageContainerRef}
                className='mb-4 overflow-y-scroll'
                style={{ maxHeight: '200px', height: '80%' }}
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`text-sm font-medium mb-2 mx-2 flex flex-col ${message.sender === 'user' ? 'text-right' : 'text-left'
                      }`}
                    style={{
                      color: message.sender === 'user' ? '#eee' : '#eee',
                      backgroundColor:
                        message.sender === 'user' ? '#218aff' : '#aeb9cc',
                      padding: '0.5rem',
                      borderRadius:
                        message.sender === 'user'
                          ? '0.5rem 0 0.5rem 0.5rem'
                          : '0 0.5rem 0.5rem 0.5rem'
                    }}
                  >
                    <b className='font-extrabold capitalize caption-top text-gray-700 '>
                      {message.sender === 'user' ? 'You' : message.sender} :{' '}
                    </b>
                    <p className='text-gray-800 capitalize' >{message.text}</p>
                    {/* {message.date} */}
                    <p className='text-xs text-neutral-50 '>{message.time}</p>
                  </div>
                ))}

                {suggestion && (
                  <p className='text-sm font-medium mb-2 mx-2 text-left'>
                    <span className='font-extrabold'>Bot : </span>
                    {suggestion}
                  </p>
                )}
              </div>
              <form
                onSubmit={handleSubmit}
                className={'flex flex-row items-center'}
              >
                <input
                  type='text'
                  placeholder='Type your message here...'
                  value={inputValue}
                  onChange={handleInputChange}
                  className='border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none'
                />
                <button
                  type='submit                '
                  className='bg-blue-500 text-white rounded-lg p-1 mx-2'
                >
                  <AiOutlineSend size={25} />
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setChatShow(true)}
          className='fixed bottom-16 left-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        >
          Chat with Bot
        </button>
      )}
    </>
  )
}

export default ChatbotModal
