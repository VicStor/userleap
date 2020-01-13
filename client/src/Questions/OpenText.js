import React from 'react'
import { Input } from 'antd'

import { questionPropTypes } from './contants'

const { TextArea } = Input

const OpenText = ({ id, props, setAnswer, answer }) => {
  return (
    <TextArea
      rows={4}
      value={answer}
      onChange={ev => {
        setAnswer(ev.target.value)
      }}
    />
  )
}

OpenText.propTypes = {
  ...questionPropTypes
}

export default OpenText
