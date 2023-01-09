import { Component } from "react";
import { SectionBox } from "./Section/Section";
import { FeedBackOptions } from "./FeedBackOptions/FeedBackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";



export class Vouter extends Component {
    state= {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onLeaveFeedBack = event => {
        const {name} = event.target;
        this.setState(prevState => ({
            [name]:prevState[name] +1,
        }));
    };

    countTotalFeedBack = () => {
        const {good, neutral, bad} = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const {good} = this.state;
        if (this.countTotalFeedBack() > 0) {
            return Math.floor((good/this.countTotalFeedBack())*100);
        }
    }

    render() {
        const {good, neutral, bad} = this.state;
        return (
            <>
            <SectionBox title='Please leave feadback'>
                <FeedBackOptions 
                options={Object.keys(this.state)} 
                onLeaveFeedBack={this.onLeaveFeedBack}></FeedBackOptions>
            </SectionBox>

            {!this.countTotalFeedBack() ? (<Notification message='No feedback given'></Notification>) : (<SectionBox title="Statistics">
                <Statistics 
                good={good} 
                neutral={neutral} 
                bad={bad}
                total={this.countTotalFeedBack()}
                percentagePositive={this.countPositiveFeedbackPercentage()}
                ></Statistics>
            </SectionBox> )}

            </>
        )
    }
}