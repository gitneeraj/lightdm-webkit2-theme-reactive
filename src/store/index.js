import { writable } from 'svelte/store'

import lightdm from '../constants/lightdm'

export const defaultSession = writable(lightdm.default_session)
export const isAuthenticated = writable(lightdm.is_authenticated)
export const inAuthentication = writable(lightdm.in_authentication)
export const isAuthenticationError = writable(false)
export const isLogin = writable(false)
