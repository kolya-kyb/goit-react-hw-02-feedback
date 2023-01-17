import PropTypes from 'prop-types';
import { Message } from './Notification.style';

const Notification = ({message}) => {
    return  (
<Message> {message}</Message>
    )
}

export default Notification

Notification.propTypes = {
    title: PropTypes.string
  };