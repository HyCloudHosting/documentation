import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img
        src="/logo-min.png"
        alt="HyCloud Hosting"
        width={28}
        height={28}
      />
      <strong>HyCloud Docs</strong>
    </div>
  ),
  head: (
    <>
      <link rel="icon" href="/logo-min.png" />
    </>
  ),
  chat: {
    link: 'https://discord.hycloudhosting.com',
  },
  docsRepositoryBase: 'https://github.com/HyCloudHosting',

  useNextSeoProps() {
    return {
      titleTemplate: '%s | HyCloud Docs',
    }
  },

  editLink: {
    component: null,
  },

  feedback: {
    content: null,
  },

  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} <strong>HyCloud Hosting -</strong> All
        rights reserved.
      </span>
    ),
  },
}



export default config