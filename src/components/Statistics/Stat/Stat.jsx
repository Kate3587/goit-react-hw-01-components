import PropTypes from 'prop-types';
import {StatItem, StatLabel, StatPerc} from '../Stat/Stat.styled'

export default function Stat({label,percentage}) {
    return (
        <StatItem>
            <StatLabel>{label}</StatLabel>
            <StatPerc>{percentage}%</StatPerc>
        </StatItem>
    );
};

Stat.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};
