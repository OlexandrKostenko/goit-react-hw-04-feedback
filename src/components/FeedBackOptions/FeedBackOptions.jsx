import PropTypes from 'prop-types';
import { Button } from './FeedBackOptions.styled';

export const FeedBackOptions = ({options, onLeaveFeedBack}) => {
    return (
        <>
        {options.map((option) => (
        <Button key={option} onClick={onLeaveFeedBack} name={option}>{option}</Button>))}
        </>
    )
}

FeedBackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedBack: PropTypes.func.isRequired,
}