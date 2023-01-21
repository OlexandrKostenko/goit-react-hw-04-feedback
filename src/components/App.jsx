import { useState } from "react";
import { SectionBox } from "./Section/Section";
import { FeedBackOptions } from "./FeedBackOptions/FeedBackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";



export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedBack = event => {
    switch (event) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1)
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        console.log('Something was wrong :(')
    };
  };

  const countTotalFeedBack = () => {
    return good + neutral + bad;
  };

const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedBack() > 0) {
      return Math.floor((good / countTotalFeedBack()) * 100);
    }
  }

  return (
      <>
            <SectionBox title='Please leave feadback'>
                <FeedBackOptions 
                options={['good', 'neutral', 'bad']} 
                onLeaveFeedBack={onLeaveFeedBack}></FeedBackOptions>
            </SectionBox>

            {!countTotalFeedBack() ? (<Notification message='No feedback given'></Notification>) : (<SectionBox title="Statistics">
                <Statistics 
                good={good} 
                neutral={neutral} 
                bad={bad}
                total={countTotalFeedBack()}
                percentagePositive={countPositiveFeedbackPercentage()}
                ></Statistics>
            </SectionBox> )}
            </>
  );
};
