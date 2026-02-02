// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Calculate offset for fixed navbar
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class when scrolling down
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    function highlightActiveSection() {
        const scrollPosition = window.pageYOffset + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Call once on load

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards and video cards
    const animatedElements = document.querySelectorAll('.service-card, .video-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Handle CTA button click
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    // Lazy load videos for better performance
    const videoIframes = document.querySelectorAll('iframe[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    // Videos are already set to lazy load via HTML attribute
                    videoObserver.unobserve(iframe);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        videoIframes.forEach(iframe => {
            videoObserver.observe(iframe);
        });
    }
});

// Add active class styling via JavaScript (if needed)
// This can be handled in CSS with :target pseudo-class, but JS provides better control
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: var(--primary-color);
        }
        .nav-link.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
});

// Service Details Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Service details data
    const serviceDetails = {
        'social-media': {
            title: 'Social Media Marketing',
            description: 'Transform your brand\'s online presence with our comprehensive social media marketing strategies. We help businesses build meaningful connections, increase engagement, and drive conversions across all major platforms.',
            features: [
                'Custom content strategy for each platform',
                'Daily posting and community management',
                'Influencer partnerships and collaborations',
                'Social media advertising campaigns',
                'Analytics and performance tracking',
                'Brand voice and messaging development'
            ],
            benefits: [
                'Increased brand awareness and visibility',
                'Higher engagement rates and follower growth',
                'Improved customer relationships',
                'Better ROI on marketing investments',
                'Competitive advantage in your industry'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>`
        },
        'seo': {
            title: 'SEO Optimization',
            description: 'Boost your website\'s visibility and drive organic traffic with our proven SEO strategies. We optimize every aspect of your online presence to rank higher on search engines and attract qualified leads.',
            features: [
                'Comprehensive keyword research and analysis',
                'On-page and technical SEO optimization',
                'Content strategy and optimization',
                'Link building and backlink acquisition',
                'Local SEO for geographic targeting',
                'Monthly performance reports and insights'
            ],
            benefits: [
                'Higher search engine rankings',
                'Increased organic website traffic',
                'Better user experience and site performance',
                'Long-term sustainable growth',
                'Cost-effective marketing solution'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
            </svg>`
        },
        'content': {
            title: 'Content Creation',
            description: 'Create compelling, high-quality content that resonates with your audience and drives action. From stunning visuals to engaging videos, we produce content that tells your brand\'s story and converts viewers into customers.',
            features: [
                'Professional video production and editing',
                'Social media graphics and designs',
                'Blog posts and written content',
                'Photography and image editing',
                'Animated graphics and motion design',
                'Branded templates and style guides'
            ],
            benefits: [
                'Professional, polished brand image',
                'Increased engagement and shares',
                'Better conversion rates',
                'Consistent brand messaging',
                'Time-saving content production'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>`
        },
        'advertising': {
            title: 'Paid Advertising',
            description: 'Maximize your advertising ROI with data-driven paid campaigns across Facebook, Google, and other platforms. We create, optimize, and manage ads that deliver measurable results and drive business growth.',
            features: [
                'Campaign strategy and planning',
                'Ad creative design and development',
                'Audience targeting and segmentation',
                'A/B testing and optimization',
                'Budget management and bid strategies',
                'Real-time performance monitoring'
            ],
            benefits: [
                'Immediate visibility and traffic',
                'Precise audience targeting',
                'Measurable ROI and conversions',
                'Scalable campaign growth',
                'Expert campaign management'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>`
        }
    };

    // Get modal elements
    const modal = document.getElementById('serviceModal');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const modalClose = modal.querySelector('.modal-close');
    const modalTitle = document.getElementById('modalTitle');
    const modalIcon = document.getElementById('modalIcon');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalBenefits = document.getElementById('modalBenefits');
    const modalCta = modal.querySelector('.modal-cta');

    // Get all service cards
    const serviceCards = document.querySelectorAll('.service-card[data-service]');

    // Function to open modal
    function openModal(serviceId) {
        const service = serviceDetails[serviceId];
        if (!service) return;

        // Populate modal content
        modalTitle.textContent = service.title;
        modalIcon.innerHTML = service.icon;
        modalDescription.textContent = service.description;

        // Populate features
        modalFeatures.innerHTML = '';
        service.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            modalFeatures.appendChild(li);
        });

        // Populate benefits
        modalBenefits.innerHTML = '';
        service.benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            modalBenefits.appendChild(li);
        });

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Function to close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Add click event listeners to service cards
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceId = this.getAttribute('data-service');
            openModal(serviceId);
        });
    });

    // Close modal on overlay click
    modalOverlay.addEventListener('click', closeModal);

    // Close modal on close button click
    modalClose.addEventListener('click', closeModal);

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Prevent modal content clicks from closing modal
    modal.querySelector('.modal-content').addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
