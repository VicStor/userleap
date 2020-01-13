import PropTypes from 'prop-types'

const questionPropTypes = {
  id: PropTypes.number.isRequired,
  props: PropTypes.object,
  setAnswer: PropTypes.func.isRequired,
  answer: PropTypes.any
}

export { questionPropTypes }
