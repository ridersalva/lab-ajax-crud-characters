class APIHandler {
  constructor (axiosApp) {
    this.axiosApp = axios.create({
      baseURL: 'https://minions-api.herokuapp.com'
    })
  }

  getFullList () {
return this.axiosApp.get('/characters')
  }

  getOneRegister(charactersId) {
return this.axiosApp.get(`/characters/${charactersId}`)
  }

  createOneRegister(body) {
    return this.axiosApp.post(`/characters/`,body)
  }

  updateOneRegister () {
return this.axiosApp.put(`/characters`)
  }

  deleteOneRegister(charactersId) {
    return this.axiosApp.delete(`/characters/${charactersId}`)
  }
}
