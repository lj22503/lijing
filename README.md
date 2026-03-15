# 黎静 - 个人作品集网站

这是一个纯前端、可直接部署到 GitHub Pages 的个人作品集网站，专为金融产品经理设计。

## 特性

- **纯静态 HTML/CSS/JS**：无需构建工具，直接部署
- **响应式设计**：完美适配桌面、平板和移动设备
- **Tailwind CSS**：通过 CDN 引入，无需本地安装
- **现代交互**：平滑滚动、动态导航、移动菜单、文章筛选
- **专业设计**：金融科技风格配色（深蓝 + 青色）
- **SEO 优化**：完整的元标签和语义化 HTML
- **单文件解决方案**：所有代码都在 `index.html` 中，易于管理和部署

## 文件结构

```
portfolio-website/
├── index.html          # 主页面（包含所有 HTML、CSS 和 JavaScript）
├── README.md          # 本说明文件
└── .nojekyll          # 防止 GitHub Pages 使用 Jekyll 处理
```

**注意**：原 `css/` 和 `js/` 文件夹中的文件已不再需要，所有样式和脚本都已内联在 `index.html` 中。

## 如何部署到 GitHub Pages

### 方法一：通过 GitHub 网页界面（最简单）

1. **创建新仓库**
   - 访问 [GitHub](https://github.com)
   - 点击右上角 "+" → "New repository"
   - 仓库名填写：`你的用户名.github.io`（例如 `lj22503.github.io`）
   - 选择 "Public"，点击 "Create repository"

2. **上传文件**
   - 在仓库页面，点击 "Add file" → "Upload files"
   - 将 `index.html`、`README.md`、`.nojekyll` 拖拽到上传区域
   - 点击 "Commit changes"

3. **启用 GitHub Pages**
   - 进入仓库 "Settings" → "Pages"
   - 在 "Source" 部分，选择 "Deploy from a branch"
   - 分支选择 "main"，文件夹选择 "/ (root)"
   - 点击 "Save"
   - 等待几分钟，访问 `https://你的用户名.github.io`

### 方法二：通过 Git 命令行

1. **初始化本地仓库**
   ```bash
   cd portfolio-website
   git init
   git add .
   git commit -m "Initial commit: personal portfolio website"
   ```

2. **连接到 GitHub 仓库**
   ```bash
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**（同方法一第3步）

## 自定义内容

### 基本信息修改
在 `index.html` 中搜索并替换以下内容：

| 占位符 | 建议替换为 |
|--------|------------|
| `黎静` | 你的姓名 |
| `lj22503@163.com` | 你的邮箱 |
| `lj22503` | 你的微信/用户名 |
| `github.com/lj22503` | 你的 GitHub 地址 |
| `17602189728` | 你的电话号码 |
| `公众号：最优解人生` | 你的社交媒体 |

### 项目作品修改
在 JavaScript 部分的 `projects` 数组中修改项目数据（在 `index.html` 底部 `<script>` 标签内）：
```javascript
const projects = [
  {
    title: '项目标题',
    period: '时间',
    role: '你的角色',
    results: '成果描述',
    // ...
  }
];
```

### 专栏文章修改
在 JavaScript 部分的 `articlesData` 数组中修改文章数据。

### 图片替换
1. **头像图片**：替换 Hero 部分的 Unsplash 图片 URL
2. **项目图片**：替换 Portfolio 部分的 Unsplash 图片 URL

## 技术说明

### 使用的技术
- **HTML5**：语义化标记
- **CSS3**：自定义样式 + Tailwind CSS
- **JavaScript (ES6)**：交互功能
- **Tailwind CSS v3**：通过 CDN 引入
- **Font Awesome 6**：图标库
- **Google Fonts**：Poppins 和 Inter 字体

### 主要功能实现
1. **响应式导航栏**：桌面/移动适配，滚动高亮
2. **平滑滚动**：点击导航跳转到对应区域
3. **移动菜单**：小屏幕下的汉堡菜单
4. **文章筛选**：按分类筛选专栏文章
5. **模态框**：微信二维码弹窗
6. **动画效果**：滚动淡入、悬停效果

### 浏览器兼容性
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

## 注意事项

1. **图片版权**：当前使用 Unsplash 免费图片，建议替换为自己的图片
2. **表单功能**：联系表单仅前端展示，需要后端支持才能实际发送邮件
3. **二维码**：微信和公众号二维码需要替换为真实的二维码图片
4. **备案信息**：页脚的 ICP 备案号需要替换为真实信息
5. **区块链内容**：已按照要求移除所有区块链、Web3、合约、代币相关内容

## 常见问题

### Q: 如何修改网站配色？
A: 在 CSS 的 `:root` 部分修改颜色变量：
```css
:root {
  --primary: #1E3A5F;    /* 主色调 */
  --secondary: #00B8D4;  /* 点缀色 */
  --light-bg: #F5F7FA;   /* 浅色背景 */
}
```

### Q: 如何添加新的作品？
A: 在 Portfolio 部分的网格中添加新的项目 HTML 结构，或在 JavaScript 的 `projects` 数组中添加数据。

### Q: 网站加载慢怎么办？
A: 可以考虑：
1. 压缩图片大小
2. 使用更轻量级的图片
3. 将 JavaScript 移到外部文件（当前为内联）

### Q: 如何添加分析代码？
A: 在 `</head>` 前添加 Google Analytics 或其他分析代码。

## 许可证

© 2024 黎静。保留所有权利。

## 支持

如有问题，请通过以下方式联系：
- 邮箱：lj22503@163.com
- 微信：lj22503
- GitHub：github.com/lj22503