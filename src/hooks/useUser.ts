import { useEffect, useState } from 'react'
import { userToken } from '../types/user'

export function useUser () {
  const [userToken, setUserToken] = useState<userToken>({
    auth: undefined
  })
  useEffect(() => {
    const user = window.localStorage.getItem('EmpreseToken')
    if (user) {
      setUserToken({
        auth: true,
        token: user
      })
    } else {
      setUserToken({
        auth: false,
        token: null
      })
    }

  }, [userToken.auth])
  
  return { userToken }
}
