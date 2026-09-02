import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ARD 开发日志',

  description: 'ARD 项目每周工作汇报与开发日志',

  base: '/ARD-weekly-log/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/zhangyanggcat-eng/ARD-weekly-log'
      }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: '本页目录'
    }
  }
})