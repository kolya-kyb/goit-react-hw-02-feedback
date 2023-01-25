import PropTypes from 'prop-types';

import {
  ButtonsItem,
  FeedbackButton,
  ButtonsList,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonItems = options.map(name => (
    <ButtonsItem key={name}>
      <FeedbackButton onClick={() => onLeaveFeedback(name)} type="button">
        {name}
      </FeedbackButton>
    </ButtonsItem>
  ));

  return <ButtonsList>{buttonItems}</ButtonsList>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
