import AppFooter from './components/AppFooter'
import React from 'react'
import { ThemeSwitch } from 'nextra-theme-docs'

export default {
  logo: <span><strong>BWINF GUIDE</strong></span>,
  footer: {
    component: AppFooter
  },
  project: {
    link: 'https://github.com/bwinf-guide/bwinf-guide'
  },
  primaryHue: 48,
  primarySaturation: 100,
  themeSwitch: {
    useOptions() {
      return {
        light: 'Hell',
        dark: 'Dunkel',
        system: 'System'
      }
    }
  },
  editLink: {
    text: "Diese Seite auf Github bearbeiten →",
  },
  feedback: {
    content: "Fragen? Gib uns ein Feedback →"
  },
  search: {
    placeholder: "Durchsuchen..."
  },
  navbar: {
    extraContent: <><ThemeSwitch lite={true} /></>
  }
}
