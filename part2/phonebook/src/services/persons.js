import axios from 'axios'
//const baseUrl = 'https://phonebookmirja.herokuapp.com/App/persons' 
//const baseUrl = 'http://localhost:3001/App/persons'
const baseUrl = '/App/persons'


const getAll = () => {
    const request = axios.get(baseUrl)
    console.log({baseUrl})
    return request.then(response => response.data)
  }
  
  const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
  }
  
  const update = (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, newPerson)
    return request.then(response => response.data)
  }

  const deleete = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
  }

export default {   getAll,   create, update, deleete     }