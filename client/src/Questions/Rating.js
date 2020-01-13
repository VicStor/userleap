import React from 'react'
import { Rate } from 'antd'

import { questionPropTypes } from './contants'

const Rating = ({ id, props, setAnswer, answer }) => (
  <div className='frn jcc aic'>
    <div className='text-center'>{props.labels.left}</div>
    <Rate className='fn' count={3} onChange={setAnswer} value={answer} />
    <div className='text-center'>{props.labels.right}</div>
  </div>
)

Rating.propTypes = {
  ...questionPropTypes
}

export default Rating
