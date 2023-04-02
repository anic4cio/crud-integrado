import axios from 'axios'

export interface UniversitiesInfo {
  state_province: string
  web_pages: string[]
  country: string
  name: string
  alpha_two_code: string
  domains: string[]
}

const getUniversityByCountry = async (apiUrl: string) => {
  try {
    const response = await axios({
      method: 'get',
      url: apiUrl,
      responseType: 'json'
    })
      .then((response) => response)
      return response.data as UniversitiesInfo[]
  } catch (error) {
    console.error('Something wrong with Universities Hipolabs API')
   throw error
  }
}

const returnAllUniversitiesUrl = () => {
  return {
    argentina: 'http://universities.hipolabs.com/search?country=argentina',
    brazil: 'http://universities.hipolabs.com/search?country=brazil',
    chile: 'http://universities.hipolabs.com/search?country=chile',
    colombia: 'http://universities.hipolabs.com/search?country=colombia',
    paraguay: 'http://universities.hipolabs.com/search?country=paraguay',
    peru: 'http://universities.hipolabs.com/search?country=peru',
    suriname: 'http://universities.hipolabs.com/search?country=suriname',
    uruguay: 'http://universities.hipolabs.com/search?country=uruguay'
  }
}

const returnUniversitiesOfAllCountries = async () => {
  const university = returnAllUniversitiesUrl()
  const uniOfArgentina = await getUniversityByCountry(university.argentina)
  const uniOfBrazil = await getUniversityByCountry(university.brazil)
  const uniOfChile = await getUniversityByCountry(university.chile)
  const uniOfColombia = await getUniversityByCountry(university.colombia)
  const uniOfParaguay = await getUniversityByCountry(university.paraguay)
  const uniOfPeru = await getUniversityByCountry(university.peru)
  const uniOfSuriname = await getUniversityByCountry(university.suriname)
  const uniOfUruguay = await getUniversityByCountry(university.uruguay)
  return {
    uniOfArgentina,
    uniOfBrazil,
    uniOfChile,
    uniOfColombia,
    uniOfParaguay,
    uniOfPeru,
    uniOfSuriname,
    uniOfUruguay,
  }
}

export default {
  getUniversityByCountry,
  returnAllUniversitiesUrl,
  returnUniversitiesOfAllCountries
}
