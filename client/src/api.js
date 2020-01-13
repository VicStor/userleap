import axios from 'axios'

import { baseURL } from './config'

export const request = axios.create({
  baseURL
})

export const getQuestions = surveyId =>
  request.get('/questions').then(resp => resp.data)

export const postAnswer = answer =>
  request.post('/responses', {
    body: answer
  })
