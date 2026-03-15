// 主要JavaScript文件
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded触发');
    console.log('personalInfo变量:', typeof personalInfo !== 'undefined' ? '已定义' : '未定义');
    if (typeof personalInfo !== 'undefined') {
        console.log('personalInfo内容:', personalInfo);
    }

    // 初始化功能
    initMobileMenu();
    updateCurrentYear();
    initSkillBars();
    initContactForm();

    // 添加滚动效果
    initScrollEffects();

    // 加载模拟数据（实际使用时替换为真实数据）
    loadMockData();
});

// 移动端菜单切换
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // 切换菜单图标
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });

        // 点击链接后关闭菜单（移动端）
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    if (icon.classList.contains('fa-times')) {
                        icon.classList.replace('fa-times', 'fa-bars');
                    }
                }
            });
        });
    }
}

// 更新当前年份
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// 初始化技能条动画
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level');

    // 创建Intersection Observer来检测技能条是否进入视图
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target;
                const width = skillLevel.style.width;
                skillLevel.style.width = '0';

                // 延迟后恢复原始宽度以创建动画效果
                setTimeout(() => {
                    skillLevel.style.width = width;
                }, 300);

                observer.unobserve(skillLevel);
            }
        });
    }, {
        threshold: 0.5
    });

    skillBars.forEach(bar => observer.observe(bar));
}

// 初始化联系表单
function initContactForm() {
    const contactForm = document.getElementById('messageForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 获取表单数据
            const formData = {
                name: this.querySelector('input[type="text"]').value,
                email: this.querySelector('input[type="email"]').value,
                subject: this.querySelectorAll('input[type="text"]')[1].value,
                message: this.querySelector('textarea').value
            };

            // 简单验证
            if (!formData.name || !formData.email || !formData.message) {
                alert('请填写所有必填字段！');
                return;
            }

            // 模拟发送消息（实际使用时替换为真实API调用）
            console.log('发送消息:', formData);
            alert('感谢您的消息！我会尽快回复您。');

            // 重置表单
            this.reset();
        });
    }
}

// 初始化滚动效果
function initScrollEffects() {
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            navbar.style.padding = '1rem 0';
        }
    });

    // 滚动时高亮当前部分
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// 加载模拟数据（实际使用时替换为真实数据）

// 填充个人信息
function populatePersonalInfo() {
    console.log('populatePersonalInfo函数执行');
    try {
        // 使用content.js中的数据，如果存在的话
        console.log('检查personalInfo:', typeof window.personalInfo !== 'undefined' ? window.personalInfo.name : '未定义');
        if (typeof window.personalInfo !== 'undefined') {
            // 更新Hero区域
            const heroTitle = document.querySelector('.hero-title .highlight');
            if (heroTitle) heroTitle.textContent = window.personalInfo.name;

            const heroSubtitle = document.querySelector('.hero-subtitle');
            if (heroSubtitle) heroSubtitle.textContent = window.personalInfo.title;

            const heroDescription = document.querySelector('.hero-description');
            if (heroDescription) heroDescription.textContent = window.personalInfo.tagline;

            // 更新关于我区域
            const aboutName = document.querySelector('.about-text h3');
            if (aboutName) aboutName.textContent = window.personalInfo.name;

            const aboutText = document.querySelector('.about-text p');
            if (aboutText) aboutText.textContent = window.personalInfo.aboutText;

            // 更新详细信息
            const detailItems = document.querySelectorAll('.detail-item span');
            if (detailItems.length >= 3) {
                detailItems[0].textContent = window.personalInfo.location;
                detailItems[1].textContent = window.personalInfo.currentPosition;
                detailItems[2].textContent = window.personalInfo.highestEducation;
            }

            // 更新统计数据
            const statItems = document.querySelectorAll('.stat-item h4');
            if (statItems.length >= 3 && window.personalInfo.stats) {
                statItems[0].textContent = window.personalInfo.stats.projectsCompleted;
                statItems[1].textContent = window.personalInfo.stats.clientsSatisfied;
                statItems[2].textContent = window.personalInfo.stats.yearsExperience;
            }

            // 更新联系方式
            const contactItems = document.querySelectorAll('.contact-item p');
            if (contactItems.length >= 4 && typeof window.contactInfo !== 'undefined') {
                contactItems[0].textContent = window.contactInfo.email;
                contactItems[1].textContent = window.contactInfo.phone;
                contactItems[2].textContent = window.contactInfo.github;
                contactItems[3].textContent = window.contactInfo.wechat;
            }

            // 更新网站标题和页脚
            document.title = window.personalInfo.name + " - 个人作品集";
            const footerText = document.querySelector('.footer p');
            if (footerText) {
                const year = new Date().getFullYear();
                footerText.innerHTML = `&copy; ${year} ${window.personalInfo.name}. ${window.siteConfig?.footerText || '保留所有权利'}.`;
            }
        }
    } catch (error) {
        console.log('填充个人信息时出错，使用默认值:', error);
    }
}

function loadMockData() {
    console.log('loadMockData函数执行');
    console.log('skillsData:', typeof window.skillsData !== 'undefined' ? '已定义' : '未定义');
    console.log('experienceData:', typeof window.experienceData !== 'undefined' ? '已定义' : '未定义');

    // 首先填充个人信息
    populatePersonalInfo();

    // 使用content.js中的数据（如果存在），否则使用模拟数据
    const skillsDataToUse = typeof window.skillsData !== 'undefined' ? window.skillsData : {
        '技术技能': [
            { name: 'HTML/CSS', level: 90 },
            { name: 'JavaScript', level: 85 },
            { name: 'React', level: 80 },
            { name: 'Node.js', level: 75 },
            { name: 'Python', level: 70 }
        ],
        '设计技能': [
            { name: 'UI/UX设计', level: 85 },
            { name: '视觉设计', level: 80 },
            { name: '原型设计', level: 75 }
        ],
        '其他技能': [
            { name: '项目管理', level: 85 },
            { name: '团队协作', level: 90 },
            { name: '沟通能力', level: 95 }
        ]
    };

    const experienceDataToUse = typeof window.experienceData !== 'undefined' ? window.experienceData : [
        {
            date: '2022-至今',
            title: '前端开发工程师',
            company: '科技公司',
            description: '负责公司主要产品的前端开发，使用React和TypeScript构建高性能Web应用。'
        },
        {
            date: '2020-2022',
            title: '全栈开发工程师',
            company: '初创公司',
            description: '参与产品从0到1的开发，负责前后端架构设计和实现。'
        },
        {
            date: '2018-2020',
            title: 'Web开发实习生',
            company: '互联网公司',
            description: '参与多个客户项目的Web开发，学习并实践现代前端技术。'
        }
    ];

    const educationDataToUse = typeof window.educationData !== 'undefined' ? window.educationData : [
        {
            degree: '计算机科学硕士',
            school: '知名大学',
            date: '2016-2018',
            description: '研究方向：人机交互与前端技术'
        },
        {
            degree: '软件工程学士',
            school: '知名大学',
            date: '2012-2016',
            description: '主修课程：数据结构、算法、Web开发'
        }
    ];

    const projectsDataToUse = typeof window.projectsData !== 'undefined' ? window.projectsData : [
        {
            name: '电商平台重构',
            description: '使用React和Node.js重构大型电商平台，提升性能30%',
            tags: ['React', 'Node.js', 'MongoDB'],
            image: 'images/project-placeholder.svg'
        },
        {
            name: '数据分析仪表板',
            description: '开发实时数据可视化仪表板，支持复杂数据交互',
            tags: ['D3.js', 'Vue.js', 'Express'],
            image: 'images/project-placeholder.svg'
        },
        {
            name: '移动应用开发',
            description: '跨平台移动应用开发，支持iOS和Android',
            tags: ['React Native', 'Redux', 'Firebase'],
            image: 'images/project-placeholder.svg'
        }
    ];

    const blogDataToUse = typeof blogData !== 'undefined' ? blogData : [
        {
            title: '现代前端开发最佳实践',
            date: '2023-10-15',
            category: '技术',
            excerpt: '探讨现代前端开发中的最佳实践和工具链选择。'
        },
        {
            title: '用户体验设计原则',
            date: '2023-09-22',
            category: '设计',
            excerpt: '分享在用户体验设计中需要遵循的核心原则。'
        },
        {
            title: '团队协作与代码规范',
            date: '2023-08-30',
            category: '团队',
            excerpt: '如何在团队中建立有效的协作和代码规范。'
        }
    ];

    // 技能数据
    const skillsData = {
        '技术技能': [
            { name: 'HTML/CSS', level: 90 },
            { name: 'JavaScript', level: 85 },
            { name: 'React', level: 80 },
            { name: 'Node.js', level: 75 },
            { name: 'Python', level: 70 }
        ],
        '设计技能': [
            { name: 'UI/UX设计', level: 85 },
            { name: '视觉设计', level: 80 },
            { name: '原型设计', level: 75 }
        ],
        '其他技能': [
            { name: '项目管理', level: 85 },
            { name: '团队协作', level: 90 },
            { name: '沟通能力', level: 95 }
        ]
    };

    // 工作经验数据
    const experienceData = [
        {
            date: '2022-至今',
            title: '前端开发工程师',
            company: '科技公司',
            description: '负责公司主要产品的前端开发，使用React和TypeScript构建高性能Web应用。'
        },
        {
            date: '2020-2022',
            title: '全栈开发工程师',
            company: '初创公司',
            description: '参与产品从0到1的开发，负责前后端架构设计和实现。'
        },
        {
            date: '2018-2020',
            title: 'Web开发实习生',
            company: '互联网公司',
            description: '参与多个客户项目的Web开发，学习并实践现代前端技术。'
        }
    ];

    // 教育背景数据
    const educationData = [
        {
            degree: '计算机科学硕士',
            school: '知名大学',
            date: '2016-2018',
            description: '研究方向：人机交互与前端技术'
        },
        {
            degree: '软件工程学士',
            school: '知名大学',
            date: '2012-2016',
            description: '主修课程：数据结构、算法、Web开发'
        }
    ];

    // 项目数据
    const projectsData = [
        {
            name: '电商平台重构',
            description: '使用React和Node.js重构大型电商平台，提升性能30%',
            tags: ['React', 'Node.js', 'MongoDB'],
            image: 'images/project-placeholder.svg'
        },
        {
            name: '数据分析仪表板',
            description: '开发实时数据可视化仪表板，支持复杂数据交互',
            tags: ['D3.js', 'Vue.js', 'Express'],
            image: 'images/project-placeholder.svg'
        },
        {
            name: '移动应用开发',
            description: '跨平台移动应用开发，支持iOS和Android',
            tags: ['React Native', 'Redux', 'Firebase'],
            image: 'images/project-placeholder.svg'
        }
    ];

    // 博客数据
    const blogData = [
        {
            title: '现代前端开发最佳实践',
            date: '2023-10-15',
            category: '技术',
            excerpt: '探讨现代前端开发中的最佳实践和工具链选择。'
        },
        {
            title: '用户体验设计原则',
            date: '2023-09-22',
            category: '设计',
            excerpt: '分享在用户体验设计中需要遵循的核心原则。'
        },
        {
            title: '团队协作与代码规范',
            date: '2023-08-30',
            category: '团队',
            excerpt: '如何在团队中建立有效的协作和代码规范。'
        }
    ];

    // 渲染技能数据
    renderSkills(skillsDataToUse);

    // 渲染工作经验数据
    renderExperience(experienceDataToUse);

    // 渲染教育背景数据
    renderEducation(educationDataToUse);

    // 渲染项目数据
    renderProjects(projectsDataToUse);

    // 渲染博客数据
    renderBlog(blogDataToUse);
}

// 渲染技能
function renderSkills(skillsData) {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = '';

    Object.entries(skillsData).forEach(([category, skills]) => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'skill-category';

        let skillsHTML = `<h3>${category}</h3><div class="skill-items">`;

        skills.forEach(skill => {
            skillsHTML += `
                <div class="skill-item">
                    <span class="skill-name">${skill.name}</span>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: ${skill.level}%"></div>
                    </div>
                </div>
            `;
        });

        skillsHTML += '</div>';
        categoryElement.innerHTML = skillsHTML;
        skillsGrid.appendChild(categoryElement);
    });
}

// 渲染工作经验
function renderExperience(experienceData) {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    timeline.innerHTML = '';

    experienceData.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index % 2 === 0 ? '' : 'even'}`;

        timelineItem.innerHTML = `
            <div class="timeline-date">${exp.date}</div>
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <p>${exp.description}</p>
            </div>
        `;

        timeline.appendChild(timelineItem);
    });
}

// 渲染教育背景
function renderEducation(educationData) {
    const educationGrid = document.querySelector('.education-grid');
    if (!educationGrid) return;

    educationGrid.innerHTML = '';

    educationData.forEach(edu => {
        const educationItem = document.createElement('div');
        educationItem.className = 'education-item';

        educationItem.innerHTML = `
            <h3>${edu.degree}</h3>
            <h4>${edu.school}</h4>
            <div class="education-date">${edu.date}</div>
            <p>${edu.description}</p>
        `;

        educationGrid.appendChild(educationItem);
    });
}

// 渲染项目
function renderProjects(projectsData) {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.name}">
            </div>
            <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="#" class="project-link">查看详情</a>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// 渲染博客
function renderBlog(blogData) {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    blogGrid.innerHTML = '';

    blogData.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';

        blogCard.innerHTML = `
            <div class="blog-content">
                <h3>${post.title}</h3>
                <div class="blog-meta">
                    <span class="blog-date">${post.date}</span>
                    <span class="blog-category">${post.category}</span>
                </div>
                <p>${post.excerpt}</p>
                <a href="#" class="blog-link">阅读全文</a>
            </div>
        `;

        blogGrid.appendChild(blogCard);
    });
}