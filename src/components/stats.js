import PropTypes from 'prop-types';
import {
StatsSection,
StatsTitle,
StatsContent,
StatsList,
StatsName,
StatsNumber

} from './stats.styled';

function Statistics({ title, stats }) {
 
  return (
    <StatsSection>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatsContent>
        {stats.map(stat => (
          <StatsList
          key={stat.id} >
         <StatsName>{stat.label}</StatsName>
            <StatsNumber>{stat.percentage}%</StatsNumber>
          </StatsList>
      ))}
        
      </StatsContent>
    </StatsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;