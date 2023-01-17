import PropTypes from 'prop-types';

import {ButtonsItem, FeedbackButton, ButtonsList} from './FeedbackOptions.styled'


const FeedbackOptions = ({options,  onLeaveFeedback }) => {
   const buttonItems = options.map( ({id, text, type}) => 
   <ButtonsItem key={id}>
        <FeedbackButton onClick={() => onLeaveFeedback(text) } type={type}>{text}</FeedbackButton>
    </ButtonsItem>) ;
   
   return(
<ButtonsList>
            {buttonItems}
        </ButtonsList>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape(
       { id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        type: PropTypes.oneOf(["submit", "button", "reset"])}
    )),
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  