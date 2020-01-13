import React from 'react'
import { Button } from 'antd'
import { equals, not, compose } from 'ramda'

import { questionPropTypes } from './contants'
import { sortByOrder } from './lib'

const MultiMultiChoice = ({ id, props, setAnswer, answer }) => (
  <div className='fcn'>
    {sortByOrder(props.options).map(option => (
      <Button
        className='answer-button'
        type={answer && answer.includes(option.value) ? 'primary' : undefined}
        name={option.value}
        onClick={ev => {
          if (!answer) return setAnswer([ev.target.name])
          answer.includes(ev.target.name)
            ? setAnswer(answer.filter(compose(not, equals(ev.target.name))))
            : setAnswer([...answer, ev.target.name])
        }}
      >
        {option.label}
      </Button>
    ))}
  </div>
)

MultiMultiChoice.propTypes = {
  ...questionPropTypes
}

export default MultiMultiChoice
