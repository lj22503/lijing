@echo off
echo === GitHub Pages故障排除指南 ===
echo.
echo 步骤1: 检查GitHub Pages是否已启用
echo 1. 打开浏览器访问: https://github.com/lj22503/portfolio-website
echo 2. 点击 "Settings" 标签
echo 3. 在左侧菜单中找到 "Pages"
echo 4. 确认配置如下:
echo    - Source: "Deploy from a branch"
echo    - Branch: "main" 分支
echo    - Folder: "/" (根目录)
echo 5. 如果没有启用，设置以上配置并保存
echo.
echo 步骤2: 等待部署完成
echo GitHub Pages部署通常需要2-10分钟
echo 部署状态会显示在Pages设置页面的顶部
echo.
echo 步骤3: 访问网站
echo 部署完成后，访问: https://lj22503.github.io/portfolio-website/
echo 如果仍然不显示内容，请尝试:
echo - 强制刷新浏览器 (Ctrl+F5 或 Cmd+Shift+R)
echo - 清除浏览器缓存
echo - 使用隐私模式/无痕模式访问
echo.
echo 步骤4: 检查控制台错误
echo 1. 按F12打开开发者工具
echo 2. 查看Console标签页是否有JavaScript错误
echo 3. 如果有错误，请告诉我具体的错误信息
echo.
echo 步骤5: 本地测试
echo 本地服务器正在运行: http://localhost:8000
echo 请先确认本地版本是否正常工作
echo.
pause