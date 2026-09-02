# VitePress 搭建日志

## 2026-09-02

### 阶段结果

VitePress 本地环境搭建成功。

环境：

- Windows
- Node.js v24.20.0
- npm 11.19.0
- VitePress 1.6.4

本地地址：

`http://localhost:5173/ARD-weekly-log/`

结果：

- 首页正常显示
- Markdown 文件可以被 VitePress 读取
- 本地搜索正常
- GitHub 链接正常

### 当前状态

✅ VitePress 本地运行成功

下一步：

GitHub Actions 自动构建并部署到 blog 分支。

### GitHub Actions 第一次构建

第一次自动构建失败。

原因：

VitePress 检测到 `temp/setup-log.md` 中的 localhost 地址并将其判定为 dead link。

处理：

将 localhost 地址改为代码文本，避免参与 dead link 检查。

### 左侧日志边栏

已在 VitePress 中加入左侧日志导航。

当前包含：

- 9.02 K3 / StarryOS / ARD 进展
- 7.27 ARD 融合分支架构
- 7.26 K3 阶段验证信息

结果：

✅ 左侧日志切换正常  
✅ 右侧本页目录正常  
✅ 页面布局正常