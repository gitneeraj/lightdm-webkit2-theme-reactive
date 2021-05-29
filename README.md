# Reactive - A LightDM Webkit2 Greeter theme

Fast, Modern and simple theme for lightdm webkit2 greeter written in Svelte javascript frontend framework for less bloat.

[![Build and Release CI](https://github.com/gitneeraj/lightdm-webkit2-theme-reactive/actions/workflows/build.yml/badge.svg)](https://github.com/gitneeraj/lightdm-webkit2-theme-reactive/actions/workflows/build.yml)

## Features

- Simple login screen
- Choose desktop environment/Window Manager to login
- Power options to shutdown, restart & suspend
- Choose for DARK or LIGHT theme

## Installation

This theme requires `lightdm-webkit2-greeter` to be installed in prior.

### Arch Linux

This package is available in AUR repository. So following should be the preferred method to install. You can choose your favirote AUR helper(e.g. YAY or PARU)

```sh
paru -S lightdm-webkit2-theme-reactive
```

### Non Arch linux users

If you are on any other linux distro than Arch, you can choose to build it from source. But make sure you have all the required toolkit to do so. Here are general steps to install the theme -

```sh
git clone https://aur.archlinux.org/lightdm-webkit2-theme-reactive.git
cd lightdm-webkit2-theme-reactive
makepkg -si
```

## Note

This theme is still in active development and some feature may be added/removed before it hits 1.0.0. If you encounter any issues related to its functionality, please create a issue on the github repo. Thanks & Peace!
