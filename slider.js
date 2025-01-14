class Slider {
  constructor() {
    this.currentSlide = 0;
    this.slides = [
      {
        image: 'assets/slides/confucius-institute.jpg',
        alt: 'Confucius Institute at University of Zambia'
      },
      {
        image: 'assets/slides/chinese-class.jpg',
        alt: 'Chinese language class'
      },
      {
        image: 'assets/slides/calligraphy.jpg',
        alt: 'Chinese calligraphy learning'
      },
      {
        image: 'assets/slides/online-class.jpg',
        alt: 'Online Chinese learning'
      },
      {
        image: 'assets/slides/students.jpg',
        alt: 'Students learning Chinese'
      }
    ];

    this.init();
    this.startAutoSlide();
  }

  init() {
    const slider = document.querySelector('.slider');
    if (!slider) return;

    slider.innerHTML = '';

    // 创建背景图片元素
    const backgroundImage = document.createElement('div');
    backgroundImage.className = 'background-image';
    document.body.appendChild(backgroundImage);

    // 创建轮播图
    this.slides.forEach((slide, index) => {
      const slideDiv = document.createElement('div');
      slideDiv.className = 'slide';
      slideDiv.style.backgroundImage = `url(${slide.image})`;
      slider.appendChild(slideDiv);
    });

    this.updateSlides();
    this.updateBackground();
  }

  updateSlides() {
    const slides = document.querySelectorAll('.slide');

    // 先将所有slide设置为不可见
    slides.forEach(slide => {
      slide.style.visibility = 'hidden';
    });

    slides.forEach((slide, index) => {
      slide.classList.remove('position-0', 'position-1', 'position-2', 'position-3', 'position-4');

      let position = (index - this.currentSlide + slides.length) % slides.length;
      slide.classList.add(`position-${position}`);

      // 设置延迟后显示
      setTimeout(() => {
        slide.style.visibility = 'visible';
      }, 50);
    });
  }

  updateBackground() {
    const backgroundImage = document.querySelector('.background-image');
    if (backgroundImage) {
      backgroundImage.style.backgroundImage = `url(${this.slides[this.currentSlide].image})`;
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateSlides();
    this.updateBackground();
  }

  startAutoSlide() {
    setInterval(() => this.nextSlide(), 5000);
  }
} 