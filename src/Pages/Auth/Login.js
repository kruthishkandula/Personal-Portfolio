import { useContext, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import useHttpService from '../../services/http'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const { post } = useHttpService()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { setUserToken } = useContext(AppContext)
  const navigation = useNavigate()

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const response = await post('/api/auth/login', { email, password })
      if (response.status === 200) {
        if (response.data.status === 'success') {
          console.log(navigation)
          //   navigation.navigate('/')
          setUserToken(response.data.accessToken)
          alert(response.data.message)
        } else {
          alert(response.data.message)
        }
      } else {
        alert(response.status)
      }
    } catch (error) {
      console.log(error)
      setError('Invalid email or password')
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Sign in to your account
        </h2>
        {error && (
          <p className='mt-2 text-center text-sm text-red-600'>{error}</p>
        )}
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form className='space-y-6' onSubmit={handleLogin}>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email address
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  required
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <div className='mt-1'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  required
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='text-sm'>
                <a
                  href='/forgot-password'
                  className='font-medium text-blue-600 hover:text-blue-500'
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
