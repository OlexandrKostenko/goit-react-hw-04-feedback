import PropTypes from 'prop-types';
import { Button } from './FeedBackOptions.styled';

export const FeedBackOptions = ({options, onLeaveFeedBack}) => {
    return (
        <>
        {options.map((option) => (
        <Button key={option} onClick={() => onLeaveFeedBack(option)}>{option}</Button>))}
        </>
    )
}

FeedBackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedBack: PropTypes.func.isRequired,
}