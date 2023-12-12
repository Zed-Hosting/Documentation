// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zed Hosting',
  tagline: 'Documentation Source',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.zedhosting.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Zed-Hosting', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
           // 'https://github.com/Zed-Hosting/Documentation',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://docs.zedhosting.net_o4de3k0o5xl@docs.zedhosting.net/plesk-git/docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Zed Hosting',
        logo: {
          alt: 'Zed Hosting',
          src: 'img/logo.svg',
        },
        items: [
          /*{
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },*/
          {to: '/docs/game-servers/intro', label: 'Gaming', position: 'left'},
          {to: '/docs/virtual-private-servers/intro', label: 'VPS', position: 'left'},
          {to: '/docs/web-servers/intro', label: 'Web', position: 'left'},
          {to: '/docs/faq/powerdown', label: 'FAQ', position: 'left'},
          //{to: '/blog', label: 'Blog', position: 'left'},
          {to: 'https://zedhosting.net/link.php?id=1', label: 'Website', position: 'right'},
          {
            href: 'https://zedhosting.net/link.php?id=2',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Welcome',
                to: '/docs/intro',
              },
              {
                label: 'Getting Started',
                to: '/gaming/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Gaming',
                to: '/docs/game-servers/intro',
              },
              {
                label: 'VPS',
                href: '/docs/virtual-private-servers/intro',
              },
              {
                label: 'FAQ',
                href: '/docs/faq/powerdown',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zed Hosting, Inc. Built with ❤️ by Us for You.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
