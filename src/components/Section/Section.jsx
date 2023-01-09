import PropTypes from 'prop-types';
import { Section, Title } from './Section.styled';

export const SectionBox = ({title, children}) => {
    return (
        <Section>
            <Title>{title}</Title>
            {children}
        </Section>
    )
}

SectionBox.propTypes = {
    title: PropTypes.string.isRequired,
}