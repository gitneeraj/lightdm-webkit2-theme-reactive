/* eslint-disable no-unused-vars */
const lightdm = () => {
  const defaultLightDM = {
    in_authentication: false,
    is_authenticated: false,
    authentication_user: null,
    default_session: 'default',
    can_suspend: true,
    can_hibernate: true,
    can_shutdown: true,
    can_restart: true,
    select_user: 'johnny',
    sessions: [
      {
        name: 'DWM',
        key: 'dwm'
      },
      {
        name: 'awesome wm',
        key: 'awesome'
      },
      {
        name: 'bspwm',
        key: 'bspwm'
      },
      {
        name: 'KDE Plasma',
        key: 'plasma'
      },
      {
        name: 'Gnome 3',
        key: 'gnome'
      },
      {
        name: 'XFCE 4',
        key: 'xfce'
      },
      {
        name: 'Cinnamon',
        key: 'cinnamon'
      },
      {
        name: 'i3wm',
        key: 'i3'
      },
      {
        name: 'xmonad',
        key: 'xmonad'
      },
      {
        name: 'Deepin',
        key: 'deepin'
      },
      {
        name: 'Budgie',
        key: 'budgie'
      },
      {
        name: 'Ubuntu',
        key: 'ubuntu'
      },
      {
        name: 'Elementary OS',
        key: 'elementary'
      },
      {
        name: 'Enlightenment',
        key: 'enlightenment'
      },
      {
        name: 'Liri',
        key: 'liri'
      },
      {
        name: 'Mate',
        key: 'lxde'
      },
      {
        name: 'Mate',
        key: 'mate'
      }
    ],
    users: [
      {
        display_name: 'Captain America',
        username: 'captain',
        image: 'images/profiles/captain.png'
      },
      {
        display_name: 'Tony Stark',
        username: 'stark',
        image: 'images/profiles/stark.png'
      }
    ],
    languages: [
      {
        name: 'American English',
        code: 'en_US.utf8'
      }
    ],
    language: 'American English',
    authenticate: username => {
      return setTimeout(() => Promise.resolve(), 1000)
    },
    cancel_authentication: () => {
      defaultLightDM.is_authenticated = false
      console.log('cancelling authentication...')
    },
    respond: password => {
      if (password === 'toor') {
        defaultLightDM.is_authenticated = true
      }
      // @ts-ignore
      window.authentication_complete()
    },
    start_session_sync: session => {
      console.log(`Logged with session: '${session}'!`)
    },
    shutdown: () => {
      console.log('System is shutting down...')
    },
    restart: () => {
      console.log('System is rebooting...')
    },
    hibernate: () => {
      console.log('System is hibernating...')
    },
    suspend: () => {
      console.log('System is suspending...')
    }
  }

  // @ts-ignore
  return window.lightdm || defaultLightDM
}

export default lightdm()
