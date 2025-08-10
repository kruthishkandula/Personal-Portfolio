import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const httpService = axios.create({
  baseURL: 'https://steel-lemon-9flr-master-xgxsiekuhq-as.a.run.app',
  // baseURL: 'http://localhost:3005',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
    // 'subscriberid': 'personalblogsubscriberid'
  }
})

const useHttpService = () => {
  const { userToken, setUserToken } = useContext(AppContext)
  const navigate = useNavigate()

  const get = async (url, config) => {
    try {
      const response = await httpService.get(url, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      })
      return response.data
    } catch (error) {
      handleErrors(error)
    }
  }

  const post = async (url, data, config) => {
    try {
      const respnse = await httpService.post(url, data, {
        headers: {
          ...config,
          Authorization: `Bearer ${userToken}`
        }
      })
      return respnse
    } catch (error) {
      console.log(error)
      handleErrors(error)
    }
  }

  const put = async (url, data, config) => {
    try {
      console.log(url)
      const response = await httpService.put(url, data, {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${userToken}`
        }
      })
      console.log(response)
      return response
    } catch (error) {
      handleErrors(error)
    }
  }

  const remove = async (url, config) => {
    try {
      const response = await httpService.delete(url, {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${userToken}`
        }
      })
      return response.data
    } catch (error) {
      handleErrors(error)
    }
  }

  const handleErrors = error => {
    console.log({ error })
    if (error.response.status === 401) {
      // navigate to login page if token has expired
      setUserToken(null) // clear token from global context
      navigate('/login')
    } else {
      // handle other errors
      console.error(error)
    }
  }

  return { get, post, put, remove }
}

export default useHttpService
