// @ts-nocheck
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

export const updateSettings = (newSettings, settingName) => {
  const oldSettings = JSON.parse(getLocalStorage(SETTINGS))
  const finalSettings = {
      ...oldSettings,
	[settingName]:{
	...oldSettings[settingName],
	...newSettings
	}
    }
  setLocalStorage(
    SETTINGS,
    JSON.stringify(finalSettings)
  )
  settings.update(() => (finalSettings))
}

export const getImages = async (dir) => {
  const backgroundImagesDir =
    (window.greeter_config &&
      window.greeter_config.branding &&
      window.greeter_config.branding.background_images) ||
    '/usr/share/backgrounds'

  return window.theme_utils && await window.theme_utils.dirlist(dir ? dir : backgroundImagesDir)
}


export const findImages = async (dirlist) => {
  let images = [],
    subdirs = [],
    recursion = 0
  // Check image files/dir, and push it to its respective array
  for (let file of dirlist) {
    if (file.match(/(png|PNG)|(jpg|JPEG)|(bmp|BMP)/)) {
      images.push(file)
    } else if (!file.match(/\w+\.\w+/)) {
      subdirs.push(file)
    }
  }
  // Search recursively
  if (subdirs.length && recursion < 3) {
    recursion++
    for (let dir of subdirs) {
      let list = await getImages(dir)

      if (list && list.length) {
	var toadd = await findImages(list)
	images.push.apply(images, toadd)
      }
    }
  }
  // Return array of images
  return images
}
