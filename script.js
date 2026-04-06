// 狗王多栋 - 互动效果

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 30px rgba(255, 154, 86, 0.3)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(255, 154, 86, 0.1)';
    }
});

// 滚动动画观察器
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.reason-card, .trait-card, .gallery-item'
    );
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });
});

// 按钮点击效果
const btnPrimary = document.querySelector('.btn-primary');
if (btnPrimary) {
    btnPrimary.addEventListener('click', () => {
        // 滚动到关于区域
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// 相册项点击效果
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // 添加点击动画
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
        
        // 如果是主图片
        if (this.classList.contains('main')) {
            const messages = [
                '🐕 汪汪！我是多栋！',
                '💕 我爱我的主人！',
                '🎾 我们一起玩吧！',
                '😊 今天心情超好！',
                '🦴 有零食吗？'
            ];
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            
            // 创建提示框
            const toast = document.createElement('div');
            toast.textContent = randomMsg;
            toast.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #ff9a56, #ffb3ba);
                color: white;
                padding: 2rem 3rem;
                border-radius: 20px;
                font-size: 1.5rem;
                font-weight: 700;
                z-index: 10000;
                box-shadow: 0 20px 60px rgba(255, 154, 86, 0.5);
                animation: popup 0.5s ease-out;
            `;
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.animation = 'popout 0.5s ease-out';
                setTimeout(() => toast.remove(), 500);
            }, 2000);
        }
    });
});

// 添加弹出动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes popup {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes popout {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
    }
`;
document.head.appendChild(style);

// 理由卡片悬停特效
document.querySelectorAll('.reason-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.reason-icon');
        icon.style.transform = 'scale(1.3) rotate(360deg)';
        icon.style.transition = 'transform 0.6s ease-out';
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.reason-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// 特征卡片点击效果
document.querySelectorAll('.trait-card').forEach(card => {
    card.addEventListener('click', function() {
        const traits = {
            '活泼开朗': '多栋总是充满活力，每天都像打了鸡血一样！🎉',
            '勇敢守护': '虽然看起来可爱，但保护家人时可是很勇敢的哦！💪',
            '忠诚温暖': '无论何时何地，多栋永远陪伴在你身边！❤️'
        };
        
        const title = this.querySelector('h4').textContent;
        const message = traits[title] || '多栋真是太棒了！🐕';
        
        alert(message);
    });
});

// 添加随机爪印效果
function createPawPrint() {
    const paw = document.createElement('div');
    paw.textContent = '🐾';
    paw.style.cssText = `
        position: fixed;
        font-size: 2rem;
        pointer-events: none;
        z-index: 9999;
        animation: fade-fall 3s ease-out forwards;
        opacity: 0.7;
    `;
    
    paw.style.left = Math.random() * window.innerWidth + 'px';
    paw.style.top = '-50px';
    
    document.body.appendChild(paw);
    
    setTimeout(() => paw.remove(), 3000);
}

// 添加下落动画
const pawStyle = document.createElement('style');
pawStyle.textContent = `
    @keyframes fade-fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(pawStyle);

// 每隔几秒添加一个爪印
setInterval(createPawPrint, 3000);

// 页面加载动画
window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    setTimeout(() => {
        hero.style.transition = 'opacity 1.5s ease-in-out';
        hero.style.opacity = '1';
    }, 100);
});

// 滚动进度条
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 4px;
    background: linear-gradient(90deg, #ff9a56, #ffb3ba, #ffd93d);
    z-index: 10001;
    transition: width 0.1s ease-out;
    box-shadow: 0 0 10px rgba(255, 154, 86, 0.6);
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// 控制台彩蛋
console.log('%c🐕 狗王多栋', 'color: #ff9a56; font-size: 32px; font-weight: bold;');
console.log('%c汪汪！欢迎来到我的网站！', 'color: #ffb3ba; font-size: 18px;');
console.log('%c🐾 记得给你的狗狗一个大大的拥抱哦！', 'color: #ffd93d; font-size: 14px;');

console.log('💕 网站已加载完成！');
