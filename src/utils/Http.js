import axios from 'axios'

const Http = {}
Http.auth = {}
Http.apiVersion = '/api'

const request = async (method, url, data, headers = {}) => {
  try {        
    const result = await axios(url, Object.assign({
      method: method,
      withCredentials: true,
      headers: headers
    }, data))
    return result
  } catch (e) {    
    if (e.response && e.response.status === 400) {
      if (e.response.data.message) {
        console.error(e.response.data.message)
        alert(e.response.data.message)        
      }      
    } else {          
      alert(e.response.data.message)       
      console.error(e)            
    }
    return e.response
    // window.location.href = '/'
  } 
}

Http.get = async (url, params) => {
  return request('get', Http.apiVersion + url, {params})
}
Http.post = async (url, data) => {
  return request('post', Http.apiVersion + url, {data}, {'Content-Type': 'application/json'})
}
Http.put = async (url, data) => {
  return request('put', Http.apiVersion + url, {data}, {'Content-Type': 'application/json'})
}
Http.delete = async (url, params) => {
  return request('delete', Http.apiVersion + url, {params})
}

export default Http