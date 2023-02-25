import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const array = Object.keys(options);
    return (
        <div className={css.feedbackoptions}>
        {array.map((option, index) => (
            <button className={css.btn} key={index} type="button" onClick={onLeaveFeedback}>
                {option}
            </button>
        ))}
        </div>           
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  }

export default FeedbackOptions;