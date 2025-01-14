class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('selectedLanguage') || 'zh';
    this.init();
  }

  init() {
    // 初始化语言选择器事件
    document.querySelectorAll('.language-bar a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = this.getLangCodeFromElement(e.target);
        this.switchLanguage(lang);
      });
    });

    // 初始化页面语言
    this.updateLanguageBar();
    this.translatePage();
  }

  getLangCodeFromElement(element) {
    // 根据显示文本获取语言代码
    const langMap = {
      '中文': 'zh',
      'English': 'en',
      'kiswahili': 'sw'
      // 可以继续添加其他语言映射...
    };
    return langMap[element.textContent];
  }

  updateLanguageBar() {
    // 更新语言栏的激活状态
    document.querySelectorAll('.language-bar a').forEach(link => {
      link.classList.remove('active');
      if (this.getLangCodeFromElement(link) === this.currentLang) {
        link.classList.add('active');
      }
    });
  }

  switchLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
    this.updateLanguageBar();
    this.translatePage();
  }

  translatePage() {
    const currentTranslations = translations[this.currentLang];

    // 翻译导航项
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (currentTranslations[key]) {
        element.textContent = currentTranslations[key];
      }
    });
  }
} 