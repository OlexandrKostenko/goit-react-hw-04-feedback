import PropTypes from 'prop-types';
import { StatisticsItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percentagePositive}) => {
    return (
        <>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {total}</StatisticsItem>
        <StatisticsItem>Positive feedback: {percentagePositive}%</StatisticsItem>
        </>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentagePositive: PropTypes.number.isRequired,
}