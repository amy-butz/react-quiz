import React from 'react';
import PropTypes from 'prop-types';

  function Result(props) {
    return (
      <div className="result">
        Your personality type is <strong>{props.quizResult}</strong>! 
        \nYou may enjoy listening to 
        {/* this is where Spotify api should go */}
      </div>
    );
  }

  Result.propTypes = {
    quizResult: React.PropTypes.string.isRequired,
  };

  export default Result;