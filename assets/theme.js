/* ===== FUTURISTIC THEME JAVASCRIPT - BLACK DADDY E-COMMERCE ===== */

class FuturisticTheme {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.initAnimations();
    this.initThemeToggle();
    this.initProductGallery();
    this.initCartFunctionality();
    this.initSearchFunctionality();
    this.initSmoothScrolling();
    this.initParallaxEffects();
  }

  setupEventListeners() {
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Mobile menu
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu(mobileMenu));
    }

    // Add to cart buttons
    document.addEventListener('click', (e) => {
      if (e.target.matches('.add-to-cart-btn')) {
        this.handleAddToCart(e);
      }
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    }

    // Smooth scroll for anchor links
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          this.smoothScrollTo(target);
        }
      }
    });

    // Intersection Observer for animations
    this.setupIntersectionObserver();
  }

  initAnimations() {
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.1}s`;
    });

    // Hover effects for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => this.addHoverEffect(card));
      card.addEventListener('mouseleave', () => this.removeHoverEffect(card));
    });

    // Text typing effect
    const typingElements = document.querySelectorAll('.typing-effect');
    typingElements.forEach(element => {
      this.initTypingEffect(element);
    });
  }

  initThemeToggle() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.setAttribute('data-theme', savedTheme);
    }
  }

  toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.setAttribute('data-theme', newTheme);
    }

    // Animate theme transition
    this.animateThemeTransition();
  }

  animateThemeTransition() {
    const overlay = document.createElement('div');
    overlay.className = 'theme-transition-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--primary-color);
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(overlay);
    
    setTimeout(() => {
      overlay.style.opacity = '1';
      setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(overlay);
        }, 300);
      }, 150);
    }, 10);
  }

  initProductGallery() {
    const productImages = document.querySelectorAll('.product-image');
    const productThumbnails = document.querySelectorAll('.product-thumbnail');
    
    productThumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        const targetImage = thumbnail.getAttribute('data-image');
        this.switchProductImage(targetImage);
      });
    });

    // Image zoom effect
    productImages.forEach(image => {
      image.addEventListener('mousemove', (e) => this.handleImageZoom(e, image));
      image.addEventListener('mouseleave', () => this.resetImageZoom(image));
    });
  }

  switchProductImage(imageSrc) {
    const mainImage = document.querySelector('.product-main-image');
    if (mainImage) {
      mainImage.style.opacity = '0';
      setTimeout(() => {
        mainImage.src = imageSrc;
        mainImage.style.opacity = '1';
      }, 200);
    }

    // Update active thumbnail
    document.querySelectorAll('.product-thumbnail').forEach(thumb => {
      thumb.classList.remove('active');
    });
    document.querySelector(`[data-image="${imageSrc}"]`).classList.add('active');
  }

  handleImageZoom(e, image) {
    const rect = image.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    image.style.transformOrigin = `${x * 100}% ${y * 100}%`;
    image.style.transform = 'scale(1.2)';
  }

  resetImageZoom(image) {
    image.style.transform = 'scale(1)';
  }

  initCartFunctionality() {
    // Cart drawer toggle
    const cartToggle = document.querySelector('.cart-toggle');
    const cartDrawer = document.querySelector('.cart-drawer');
    
    if (cartToggle && cartDrawer) {
      cartToggle.addEventListener('click', () => this.toggleCartDrawer(cartDrawer));
    }

    // Close cart drawer when clicking outside
    document.addEventListener('click', (e) => {
      if (cartDrawer && !cartDrawer.contains(e.target) && !cartToggle.contains(e.target)) {
        this.closeCartDrawer(cartDrawer);
      }
    });
  }

  toggleCartDrawer(cartDrawer) {
    cartDrawer.classList.toggle('open');
    document.body.classList.toggle('cart-open');
  }

  closeCartDrawer(cartDrawer) {
    cartDrawer.classList.remove('open');
    document.body.classList.remove('cart-open');
  }

  async handleAddToCart(e) {
    e.preventDefault();
    const button = e.target;
    const productId = button.getAttribute('data-product-id');
    const variantId = button.getAttribute('data-variant-id') || productId;
    
    // Show loading state
    const originalText = button.textContent;
    button.textContent = 'Adding...';
    button.disabled = true;

    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: variantId,
          quantity: 1
        })
      });

      if (response.ok) {
        const cartData = await response.json();
        this.updateCartCount(cartData.item_count);
        this.showNotification('Product added to cart!', 'success');
        
        // Animate cart icon
        this.animateCartIcon();
      } else {
        throw new Error('Failed to add to cart');
      }
    } catch (error) {
      this.showNotification('Failed to add product to cart', 'error');
    } finally {
      button.textContent = originalText;
      button.disabled = false;
    }
  }

  updateCartCount(count) {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
      cartCount.textContent = count;
      cartCount.classList.add('updated');
      setTimeout(() => cartCount.classList.remove('updated'), 300);
    }
  }

  animateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
      cartIcon.classList.add('bounce');
      setTimeout(() => cartIcon.classList.remove('bounce'), 600);
    }
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      background: ${type === 'success' ? 'var(--primary-color)' : 'var(--secondary-color)'};
      color: var(--text-dark);
      border-radius: var(--radius-md);
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      font-family: var(--font-secondary);
      font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  initSearchFunctionality() {
    const searchModal = document.querySelector('.search-modal');
    const searchToggle = document.querySelector('.search-toggle');
    
    if (searchToggle && searchModal) {
      searchToggle.addEventListener('click', () => this.toggleSearchModal(searchModal));
    }

    // Close search modal with escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchModal) {
        this.closeSearchModal(searchModal);
      }
    });
  }

  toggleSearchModal(searchModal) {
    searchModal.classList.toggle('open');
    const searchInput = searchModal.querySelector('.search-input');
    if (searchInput) {
      searchInput.focus();
    }
  }

  closeSearchModal(searchModal) {
    searchModal.classList.remove('open');
  }

  async handleSearch(query) {
    if (query.length < 2) return;
    
    try {
      const response = await fetch(`/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product&resources[limit]=5`);
      const data = await response.json();
      
      this.displaySearchResults(data.resources.results.products);
    } catch (error) {
      console.error('Search error:', error);
    }
  }

  displaySearchResults(products) {
    const resultsContainer = document.querySelector('.search-results');
    if (!resultsContainer) return;
    
    if (products.length === 0) {
      resultsContainer.innerHTML = '<p>No products found</p>';
      return;
    }
    
    const resultsHTML = products.map(product => `
      <div class="search-result-item">
        <img src="${product.featured_image}" alt="${product.title}">
        <div class="search-result-content">
          <h4>${product.title}</h4>
          <p>${product.price}</p>
        </div>
      </div>
    `).join('');
    
    resultsContainer.innerHTML = resultsHTML;
  }

  initSmoothScrolling() {
    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          this.smoothScrollTo(targetElement);
        }
      });
    });
  }

  smoothScrollTo(element) {
    const offsetTop = element.offsetTop - 100;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }

  initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => observer.observe(element));
  }

  addHoverEffect(card) {
    card.style.transform = 'translateY(-10px) scale(1.02)';
    card.style.boxShadow = '0 25px 50px rgba(0, 255, 136, 0.3)';
  }

  removeHoverEffect(card) {
    card.style.transform = 'translateY(0) scale(1)';
    card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
  }

  initTypingEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.borderRight = '2px solid var(--primary-color)';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        element.style.borderRight = 'none';
      }
    };
    
    typeWriter();
  }

  toggleMobileMenu(mobileMenu) {
    mobileMenu.classList.toggle('open');
    document.body.classList.toggle('mobile-menu-open');
  }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new FuturisticTheme();
});

// Export for use in other scripts
window.FuturisticTheme = FuturisticTheme; 