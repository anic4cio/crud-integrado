import universitiesGetter, { UniversitiesInfo } from '.'

test('universities api response data should be a valid UniversitiesInfo', async () => {
  const universities = universitiesGetter.returnAllUniversitiesUrl()
  for (let uni in universities) {
    const university = await universitiesGetter.getUniversityByCountry(uni)
    expect(university).not.toBe(undefined)
  }
})


