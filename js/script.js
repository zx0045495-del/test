// 小祥科技 - 交互脚本

document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const backToTop = document.getElementById('backToTop');
    const contactForm = document.getElementById('contactForm');
    
    // 滚动时改变导航栏样式
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        // 显示/隐藏返回顶部按钮
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
        
        // 高亮当前导航链接
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // 移动端菜单切换
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // 点击导航链接关闭移动端菜单
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // 返回顶部按钮
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 表单提交处理
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // 这里应该发送到服务器
            // 暂时用模拟成功
            alert('感谢您的留言！我们会尽快与您联系。');
            contactForm.reset();
        });
    }
    
    // 服务卡片悬停效果增强
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.service-icon i');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon i');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // 团队卡片动画
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const avatar = this.querySelector('.team-avatar i');
            avatar.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            const avatar = this.querySelector('.team-avatar i');
            avatar.style.transform = 'scale(1)';
        });
    });
    
    // 统计数据动画
    const statItems = document.querySelectorAll('.stat-item');
    let animated = false;
    
    function animateStats() {
        if (animated) return;
        
        const aboutSection = document.getElementById('about');
        const sectionTop = aboutSection.offsetTop;
        const sectionHeight = aboutSection.clientHeight;
        
        if (window.scrollY > sectionTop - 300) {
            statItems.forEach(item => {
                const target = parseInt(item.querySelector('h4').textContent);
                let current = 0;
                const increment = target / 50;
                const h4 = item.querySelector('h4');
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    h4.textContent = Math.floor(current) + (item.querySelector('h4').textContent.includes('%') ? '%' : '+');
                }, 20);
            });
            
            animated = true;
        }
    }
    
    window.addEventListener('scroll', animateStats);
    
    // 页面加载时的初始动画
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // 英雄区域图标动画
    const techIcons = document.querySelectorAll('.tech-illustration i');
    techIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.5}s`;
        icon.style.animation = `float 3s ease-in-out infinite`;
    });
    
    // 添加CSS动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        .loaded .hero h1,
        .loaded .hero .subtitle {
            animation: fadeInUp 1s ease-out;
        }
        
        .loaded .service-card,
        .loaded .team-card {
            animation: fadeInUp 0.8s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // 新闻通讯订阅
    const newsletterBtn = document.querySelector('.newsletter button');
    const newsletterInput = document.querySelector('.newsletter input');
    
    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener('click', function() {
            const email = newsletterInput.value;
            if (email && validateEmail(email)) {
                newsletterInput.value = '';
                alert('感谢订阅我们的新闻通讯！');
            } else {
                alert('请输入有效的电子邮箱地址。');
            }
        });
        
        newsletterInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                newsletterBtn.click();
            }
        });
    }
    
    // 邮箱验证函数
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // 社交图标悬停效果
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            const iconElement = this.querySelector('i');
            iconElement.style.transform = 'scale(1.2)';
        });
        
        icon.addEventListener('mouseleave', function() {
            const iconElement = this.querySelector('i');
            iconElement.style.transform = 'scale(1)';
        });
    });
    
    // 初始化页面滚动位置
    window.dispatchEvent(new Event('scroll'));
});