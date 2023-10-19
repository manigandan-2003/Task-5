import PropTypes from 'prop-types';
import './AgeResult.css'; 

const AgeResult = ({ age }) => {
  return (
    <h3>You are {age.years} years</h3>
  );
};

AgeResult.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number.isRequired,
    months: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
  }),
};

export default AgeResult;