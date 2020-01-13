import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { is } from 'ramda'
import { Pagination } from 'antd'

import { getQuestions, postAnswer } from './api'
import Question from './Questions'
import logo from './Logo.svg'

const Survey = ({ surveyId }) => {
  const [isLoading, setLoading] = useState(false)
  const [survey, setSurvey] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState(null)

  useEffect(() => {
    setLoading(true)
    getQuestions(surveyId)
      .then(surveyData => {
        setSurvey(surveyData)
      })
      .catch(err => {
        setSurvey(err)
      })
      .then(_ => {
        setLoading(false)
      })
  }, [surveyId])

  if (isLoading || !survey) return <div>Loading...</div>
  if (is(Error, survey)) return <div>Error...</div>
  return (
    <div className='survey-container'>
      <div className='logo-container'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <div className='survey-intro'>{survey.intro}</div>
      <div className='question-wrapper'>
        <Question
          {...survey.questions[currentQuestion]}
          answer={answer}
          setAnswer={setAnswer}
        />
        <Pagination
          className='question-pagination'
          defaultPageSize={1}
          current={currentQuestion + 1}
          total={survey.questions.length}
          onChange={question => {
            postAnswer({
              surveyId: 154,
              visitorId: 6941884,
              form: {
                [survey.questions[currentQuestion].id]: answer
              }
            }).then(_ => {
              setAnswer(null)
              setCurrentQuestion(question - 1)
            })
          }}
          itemRender={(page, type, originalElement) =>
            type === 'page' ? <div className='question-page' /> : null
          }
        />
      </div>
    </div>
  )
}

Survey.propTypes = {
  surveyId: PropTypes.number.isRequired
}

export default Survey
