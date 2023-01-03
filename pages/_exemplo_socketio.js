import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8888', { transports : ['websocket'] });

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Escuta as mensagens enviadas pelo servidor
    socket.on('message', message => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  function handleSubmit(e) {
    e.preventDefault();

    // Envia a mensagem para o servidor
    socket.emit('send message', newMessage);

    // Limpa o campo de mensagem
    setNewMessage('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages.map(message => (
          <li key={message}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Chat;