import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ARD 开发日志',

  description: 'ARD 项目每周工作汇报与开发日志',

  base: '/ARD-weekly-log/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' }
    ],

    sidebar: [
      {
        text: 'ARD 开发日志',
        items: [
          {
            text: '9.02 K3 / StarryOS / ARD 进展',
            link: '/9.02号K3_COM260_StarryOS_ARD_进展'
          },
          {
            text: '7.27 ARD 融合分支架构',
            link: '/7.27ARD融合分支架构'
          },
          {
            text: '7.26 K3 阶段验证信息',
            link: '/26.7.26阶段K3当前验证信息'
          }
        ]
      }
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