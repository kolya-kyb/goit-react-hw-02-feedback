import PropTypes from "prop-types";

import { StatisticsList, ButtonsItem, ButtonsList, FeedbackButton, Section, Title, StatisticsItem } from "./Feedback.styled";

import { Component } from "react";

class Feedback extends Component {
    static defaultProps = {
        buttons : [],
        type: "submit"

    }
    state = {
        good: 1,
        neutral: 1,
        bad: 1
      }

      handleClick({text}){
        this.setState((pstate)=>  ({[text]: pstate[text] +1}))
      }

      countTotalFeedback() {
       return Object.values(this.state).reduce((acc, value) => acc + value, 0);
        }
        positivePercentage() {
            return Math.floor((this.state.good * 100) / this.countTotalFeedback())
        }

    render () {
        const {good, neutral, bad} = this.state;
        const {buttons} = this.props;
        // const statsValues = Object.values(this.state);
        // const total = statsValues.reduce((acc, value) => acc + value, 0);
        // const positivePercentage = Math.floor((good * 100) / total);
        // console.log(this.state)
        // const {statistics} = this.props;

        const buttonItems = buttons.map( ({id, text, type}) => <ButtonsItem key={id}>
            <FeedbackButton onClick={()=> this.handleClick({text})} type={type}>{text}</FeedbackButton>
        </ButtonsItem>) ;
        //   const statisticsItems =statistics.map(({id,text}) => <StatisticsItem key={id}><span>{text}</span> <span>{}</span> </StatisticsItem>);     
        return (
            <Section>
            <Title>Please leave feedback</Title>
            <ButtonsList>
                {buttonItems}
            </ButtonsList>
            <Title>Statistics</Title>
                <StatisticsList>
                <StatisticsItem ><span>Good</span> <span>{good}</span> </StatisticsItem>
                <StatisticsItem ><span>Netural</span> <span>{neutral}</span> </StatisticsItem>
                <StatisticsItem ><span>Bad</span> <span>{bad}</span> </StatisticsItem>
                <StatisticsItem ><span>Total</span> <span>{this.countTotalFeedback()}</span> </StatisticsItem>
                <StatisticsItem ><span>Positive Feedback</span> <span>{this.positivePercentage()}%</span> </StatisticsItem>

                </StatisticsList>
            </Section>
        )
    }
}

export default Feedback;