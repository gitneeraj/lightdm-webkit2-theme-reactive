export const getAbsolutePath = () =>
  window.location.protocol === 'file:'
    ? '/usr/share/lightdm-webkit/themes/reactive/'
    : ''
