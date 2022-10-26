import PropTypes from 'prop-types';
import Stat from './Stat/Stat';
import { StatisticsWrapper, StatTitle, StatList } from './Statistics.styled';

export default function Statistics({title, stats}) {
    return (<StatisticsWrapper>
        {title && <StatTitle>Upload stats</StatTitle>}
          
        <StatList>
            {
                stats.map(({ id, label, percentage }) => (
                    <Stat
                        key={id}
                        label = {label}
                        percentage = {percentage}
                    />
                ))}
        </StatList>
    </StatisticsWrapper>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}