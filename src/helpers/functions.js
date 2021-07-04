import {
  isAuthenticationError,
  isLogin,
  isAuthenticated,
  settings
} from '../store'
import lightdm from '../constants/lightdm'
import { DEFAULT_SESSION, SETTINGS } from '../constants/variables'

export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value)
}

export const getLocalStorage = key => {
  return window.localStorage.getItem(key)
}

const authenticationSuccess = () => {
  let session = getLocalStorage(DEFAULT_SESSION) || lightdm.sessions[0].key
  isAuthenticationError.update(() => false)
  isLogin.update(() => false)
  isAuthenticated.update(() => true)
  lightdm.start_session_sync(session)
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

export const updateSettings = newSettings => {
  const oldSettings = JSON.parse(getLocalStorage(SETTINGS))
  setLocalStorage(
    SETTINGS,
    JSON.stringify({
      ...oldSettings,
      ...newSettings
    })
  )
  settings.update(() => ({
    ...oldSettings,
    ...newSettings
  }))
}
