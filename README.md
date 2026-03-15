# 黎静 - 个人作品集网站

这是一个为金融产品经理黎静创建的个人作品集网站，展示其专业技能、工作经历、项目作品和博客专栏。

## 功能特点

- ✅ 响应式设计，适配桌面、平板和手机
- ✅ 现代简约风格，采用Anthropic品牌配色
- ✅ 8个主要部分：首页、关于我、技能、工作经验、教育背景、项目作品、博客/专栏、联系方式
- ✅ 交互功能：平滑滚动导航、移动端汉堡菜单、技能条动画、表单验证
- ✅ 动态内容加载，便于维护和更新

## 网站结构

```
portfolio-website/
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件（响应式设计）
├── js/
│   ├── main.js        # 主要功能脚本
│   └── content.js     # 内容配置文件（可编辑）
├── images/
│   └── project-placeholder.svg  # 项目图片占位符
└── README.md          # 本文件
```

## 如何编辑内容

所有网站内容都在 `js/content.js` 文件中配置，包括：

1. **个人信息** - 姓名、职业、简介、联系方式等
2. **专业技能** - 技能分类和熟练程度
3. **工作经验** - 工作经历详情
4. **教育背景** - 教育经历
5. **项目作品** - 项目列表和描述
6. **博客专栏** - 文章列表

### 修改步骤

1. 打开 `js/content.js` 文件
2. 编辑相应的配置对象
3. 保存文件后在浏览器中刷新页面查看变化

## 本地测试

### 方法1：直接打开文件
- 双击 `index.html` 文件，用默认浏览器打开
- 或右键选择其他浏览器打开

### 方法2：使用本地服务器（推荐）
```bash
# 使用Python启动简单HTTP服务器
cd portfolio-website
python -m http.server 8000

# 或使用Node.js http-server
npx http-server .
```

然后在浏览器中访问：http://localhost:8000

### 测试响应式设计

在浏览器中：
1. 按 F12 打开开发者工具
2. 点击手机/平板图标切换设备模拟
3. 测试不同屏幕尺寸下的显示效果

## 部署到GitHub Pages

### 步骤1：创建GitHub仓库
1. 登录GitHub
2. 点击右上角 "+" → "New repository"
3. 仓库名：`username.github.io` (将username替换为你的GitHub用户名)
4. 选择"Public"，不勾选"Initialize this repository with a README"

### 步骤2：上传网站文件
```bash
# 进入项目目录
cd portfolio-website

# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "初始提交：个人作品集网站"

# 添加远程仓库
git remote add origin https://github.com/username/username.github.io.git

# 推送到GitHub
git push -u origin main
```

### 步骤3：启用GitHub Pages
1. 进入GitHub仓库页面
2. 点击"Settings" → "Pages"
3. 在"Source"部分，选择"main"分支，点击"Save"
4. 稍等几分钟，访问 `https://username.github.io` 查看网站

## 自定义域名（可选）

如需使用自定义域名：
1. 在域名注册商处添加CNAME记录指向 `username.github.io`
2. 在Git仓库根目录创建 `CNAME` 文件，内容为你的域名
3. 在GitHub Pages设置中配置自定义域名

## 后续维护

### 更新内容
1. 编辑 `js/content.js` 文件
2. 提交并推送更改：
```bash
git add .
git commit -m "更新个人资料"
git push
```

### 更新设计
- 修改 `css/style.css` 文件中的样式变量
- 调整 `index.html` 中的HTML结构

## 技术支持

如遇到问题，请检查：
1. 浏览器控制台是否有JavaScript错误（F12 → Console）
2. 所有文件路径是否正确
3. GitHub Pages构建状态（Settings → Pages）

## 许可证

本项目仅供个人作品集展示使用。