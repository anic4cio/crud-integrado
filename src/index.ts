import axios from 'axios'
import fs from 'fs'

interface UniversitiesInfoObj {
  state_province: string
  web_pages: string[]
  country: string
  name: string
  alpha_two_code: string
  domais: string[]
}

const getUniversityByCountry = async (url: string) => {
  const response = await axios({
    method: 'get',
    url,
    responseType: 'json'
  })
  .then((response) => response)

  return response.data as UniversitiesInfoObj[]
}

const returnAllUniversitiesUrl = () => {
  const argentina = 'http://universities.hipolabs.com/search?country=argentina'
  const brazil = 'http://universities.hipolabs.com/search?country=brazil'
  const chile = 'http://universities.hipolabs.com/search?country=chile'
  const colombia = 'http://universities.hipolabs.com/search?country=colombia'
  const paraguay = 'http://universities.hipolabs.com/search?country=paraguay'
  const peru = 'http://universities.hipolabs.com/search?country=peru'
  const suriname = 'http://universities.hipolabs.com/search?country=suriname'
  const uruguay = 'http://universities.hipolabs.com/search?country=uruguay'
}
