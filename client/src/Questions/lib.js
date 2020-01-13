import { sortBy, prop } from 'ramda'
import MultiMultiChoice from './MultiMultiChoice'
import OpenText from './OpenText'
import Rating from './Rating'
import SingleMultiChoice from './SingleMultiChoice'

export const getQustionComponent = type => {
  switch (type) {
    case 'open':
      return OpenText
    case 'multiplechoice':
      return SingleMultiChoice
    case 'multipleselect':
      return MultiMultiChoice
    case 'likert':
      return Rating
    default:
      return Error('Unknown question type')
  }
}

export const sortByOrder = sortBy(prop('order'))
