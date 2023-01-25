import PropTypes from 'prop-types';
import { StatisticsItem, StatisticsList } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <span>Good:</span> <span>{good}</span>{' '}
      </StatisticsItem>
      <StatisticsItem>
        <span>Netural:</span> <span>{neutral}</span>{' '}
      </StatisticsItem>
      <StatisticsItem>
        <span>Bad:</span> <span>{bad}</span>{' '}
      </StatisticsItem>
      <StatisticsItem>
        <span>Total:</span> <span>{countTotalFeedback}</span>{' '}
      </StatisticsItem>
      <StatisticsItem>
        <span>Positive Feedback:</span> <span>{positivePercentage}%</span>{' '}
      </StatisticsItem>
    </StatisticsList>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
