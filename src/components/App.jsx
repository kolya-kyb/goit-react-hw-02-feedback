import Section from "./Section/Section"
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import  Message  from "./Notification/Notification";

import buttons from 'data/buttons.json';
import { Component } from "react";

export class App extends Component{

state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (txt) =>{
  
    this.setState((prevState )=>  ({[txt]: prevState[txt] +1}))
  }

  countTotalFeedback() {
   return Object.values(this.state).reduce((acc, value) => acc + value, 0);
    }
    positivePercentage() {
        return Math.floor((this.state.good * 100) / this.countTotalFeedback())
    }

render () {
    const {good, neutral, bad} = this.state;
    // const {buttons} = this.props;
    // const statsValues = Object.values(this.state);
    // const total = statsValues.reduce((acc, value) => acc + value, 0);
    // const positivePercentage = Math.floor((good * 100) / total);
    // console.log(this.state)
    // const {statistics} = this.props;

    
    //   const statisticsItems =statistics.map(({id,text}) => <StatisticsItem key={id}><span>{text}</span> <span>{}</span> </StatisticsItem>);     
    return (
        <>
       <Section title="Please leave feedback">
       <FeedbackOptions options={buttons} onLeaveFeedback={this.handleClick}/>
      </Section>
     
      <Section title="Statistic">
      {this.countTotalFeedback()? <Statistics good={good}
            neutral={neutral}
            bad={bad} 
            countTotalFeedback={this.countTotalFeedback()}
            positivePercentage={this.positivePercentage()}

             />: <Message message="There is no feedback"/>}
      </Section>
        
        
       
        </>
    )
}
};
