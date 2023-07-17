import axios from 'axios'

// Put your baseurl in .env
const baseURL = 'https://jsonplaceholder.typicode.com/'

const axiosInstance = axios.create({
  baseURL,
})

axiosInstance.interceptors.request.use(
  function (config) {
    // const session = JSON.parse(localStorage.getItem('session')) || {}
    // const accessToken = session.accessToken

    return {
      ...config,
      headers: {
        ...config.headers,
        // ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
    }
  },
  function (error) {
    return Promise.reject(error)
  }
)

// axiosInstance.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     return response.data
//   },
//   function (error) {
//     const config = error?.config
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     const { response: { status = null, data } = {} } = error
//     if (status === 401 && config.url !== '/auth/login') {
//       removeSession()
//       window.location.replace('/login')
//       return axios(config)
//     }

//     return Promise.reject(data)
//   }
// )

export default axiosInstance
