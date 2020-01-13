import React from 'react'
import PropTypes from 'prop-types'

import { questionPropTypes } from './contants'
import { getQustionComponent } from './lib'

const Question = ({ id, type, props, answer, setAnswer }) => {
  const QuestionComponent = getQustionComponent(type)
  return (
    <div className='question-container'>
      <div className='question-message'>{props.message}</div>
      <QuestionComponent
        id={id}
        props={props}
        setAnswer={setAnswer}
        answer={answer}
      />
    </div>
  )
}

Question.propTypes = {
  type: PropTypes.oneOf(['open', 'multiplechoice', 'multipleselect', 'likert'])
    .isRequired,
  ...questionPropTypes
}

export default Question
