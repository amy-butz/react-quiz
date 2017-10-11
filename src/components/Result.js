import React from 'react';
import PropTypes from 'prop-types';
import ResultMap from '../api/Maps';

  function Result(props) {
    return (
      <div className="result">
        {/* <ResultMap /> */}
         Your personality type is <strong>{props.quizResult}</strong>! 
      </div>
    );
  }

  Result.propTypes = {
    quizResult: React.PropTypes.string.isRequired,
  };

  export default Result;