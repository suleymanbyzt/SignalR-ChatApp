import SendMessageForm from './SendMessageForm';
import MessageContainer from './MessageContainer';
import { Button } from 'react-bootstrap';

const Chat = ({ sendMessage, messages, users, closeConnection }) => <div>
    <div className='leave-room'>
        <Button variant='danger' onClick={() => closeConnection()}>Leave Room</Button>
    </div>
    <div className='chat'>
        <MessageContainer messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
    </div>
</div>

export default Chat;