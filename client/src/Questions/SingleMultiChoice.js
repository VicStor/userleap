import React from 'react'
import { Button } from 'antd'
import { equals } from 'ramda'

import { questionPropTypes } from './contants'
import { sortByOrder } from './lib'

const SingleMultiChoice = ({ id, props, setAnswer, answer }) => (
  <div className='fcn'>
    {sortByOrder(props.options).map(option => (
      <Button
        className='answer-button'
        type={equals(answer, option.value) ? 'primary' : undefined}
        name={option.value}
        onClick={ev => {
          setAnswer(ev.target.name)
        }}
      >
        {option.label}
      </Button>
    ))}
  </div>
)

SingleMultiChoice.propTypes = {
  ...questionPropTypes
}

export default SingleMultiChoice
