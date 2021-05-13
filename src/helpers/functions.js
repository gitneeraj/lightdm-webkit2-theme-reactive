import {
  defaultSession,
  isAuthenticationError,
  isLogin,
  isAuthenticated
} from '../store'
import lightdm from '../constants/lightdm'

export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value)
}

export const getLocalStorage = key => {
  return window.localStorage.getItem(key)
}

const authenticationSuccess = () => {
  let session = null
  defaultSession.subscribe(value => (session = value))
  isAuthenticationError.update(() => false)
  isLogin.update(() => false)
  isAuthenticated.update(() => true)
  lightdm.start_session_sync()
}

const authenticationFail = () => {
  isAuthenticated.update(() => false)
  isLogin.update(() => false)
  isAuthenticationError.update(() => true)
  setTimeout(() => {
    isAuthenticationError.update(() => false)
  }, 5000)
}

export const initiateAuthenticationComplete = () => {
  // @ts-ignore
  window.authentication_complete = () => {
    if (lightdm.is_authenticated) {
      authenticationSuccess()
    } else {
      authenticationFail()
    }
  }
}
