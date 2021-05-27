import { writable } from 'svelte/store'

import lightdm from '../constants/lightdm'
import { getLocalStorage } from "../helpers/functions";
import { DEFAULT_SESSION } from "../constants/variables";

export const defaultSession = writable(getLocalStorage(DEFAULT_SESSION) || lightdm.sessions[0].key)
export const isAuthenticated = writable(lightdm.is_authenticated)
export const inAuthentication = writable(lightdm.in_authentication)
export const isAuthenticationError = writable(false)
export const isLogin = writable(false)
