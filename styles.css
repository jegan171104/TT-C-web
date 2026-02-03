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

    // Observe only video cards here (service cards use a staggered reveal below)
    const animatedElements = document.querySelectorAll('.video-card');
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

// Ensure service cards are visible and static (no stagger/tilt animations)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.service-card').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = '';
        el.classList.remove('visible', 'float', 'dragging');
    });
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
        'seo': {
            title: 'SEO (Search Engine Optimization)',
            description: 'Optimize your website to rank on Google\'s first page — keywords, content, backlinks, and technical SEO.',
            features: [
                'Keyword research & strategy',
                'On-page & technical SEO',
                'Content optimization',
                'Backlink building',
                'Local SEO and GMB optimization',
                'Monthly ranking & traffic reports'
            ],
            benefits: [
                'Higher Google rankings',
                'Increased organic traffic',
                'Sustained lead growth',
                'Better visibility for target keywords'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>`
        },
        'social-media': {
            title: 'Social Media Marketing (SMM)',
            description: 'Instagram, Facebook, YouTube and Twitter (X): account setup, posts, reels, and engagement growth services.',
            features: [
                'Account setup & branding',
                'Content calendar & posting',
                'Reels and short-form video strategy',
                'Community management',
                'Engagement & follower growth tactics'
            ],
            benefits: [
                'Improved brand presence',
                'Higher engagement rates',
                'Organic follower growth'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`
        },
        'social-ads': {
            title: 'Social Media Ads (Paid Ads)',
            description: 'Instagram/Facebook/YouTube ads — campaign setup to drive leads, sales and followers.',
            features: [
                'Audience targeting & creative setup',
                'Ad copy & creative production',
                'A/B testing & optimization',
                'Conversion tracking & pixels'
            ],
            benefits: [
                'Faster lead generation',
                'Measurable ROI',
                'Scalable ad performance'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11h4l3 9 4-18 3 9h4"></path></svg>`
        },
        'google-ads': {
            title: 'Google Ads (PPC)',
            description: 'Google Search Ads and Display Ads — paid results ("Ad") to drive traffic and conversions.',
            features: [
                'Search & Display campaign setup',
                'Keyword bidding & match types',
                'Remarketing & audience lists',
                'Conversion tracking & optimization'
            ],
            benefits: [
                'Immediate visibility on search',
                'Targeted traffic',
                'Trackable conversions'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8"></path></svg>`
        },
        'content-marketing': {
            title: 'Content Marketing',
            description: 'Blog posts, captions, reel scripts and video content that build value for your brand.',
            features: [
                'Content strategy & planning',
                'Blog writing & SEO content',
                'Reels scripts & video concepts',
                'Caption writing & repurposing'
            ],
            benefits: [
                'Stronger brand authority',
                'Better organic discoverability',
                'Content that converts'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>`
        },
        'email-marketing': {
            title: 'Email Marketing',
            description: 'Offers, updates and follow-up emails — automated email campaigns tailored for businesses.',
            features: [
                'Campaign design & templates',
                'Segmentation & automation',
                'A/B testing for subject lines',
                'Performance reporting'
            ],
            benefits: [
                'Higher retention & repeat sales',
                'Direct customer communication',
                'Measurable campaign ROI'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"></path><path d="M22 6l-10 7L2 6"></path></svg>`
        },
        'whatsapp-marketing': {
            title: 'WhatsApp Marketing',
            description: 'Broadcast messages, automation, and customer follow-ups through WhatsApp for direct engagement.',
            features: [
                'Template & broadcast campaigns',
                'Automation flows & quick replies',
                'Customer follow-up sequences'
            ],
            benefits: [
                'High open rates',
                'Direct customer touchpoint',
                'Fast follow-ups'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-1.5 4.7L21 21l-4.8-1.4a8.5 8.5 0 01-7-7V3h1a8.5 8.5 0 017 8.5z"></path></svg>`
        },
        'influencer-marketing': {
            title: 'Influencer Marketing',
            description: 'Instagram & YouTube influencer collaborations to promote your brand and reach new audiences.',
            features: [
                'Influencer discovery & outreach',
                'Campaign briefs & coordination',
                'Performance tracking & reporting'
            ],
            benefits: [
                'Authentic reach',
                'Content amplification',
                'Improved brand trust'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="4"></circle><path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"></path></svg>`
        },
        'graphic-design': {
            title: 'Graphic Design',
            description: 'Posters, banners, thumbnails, and ad creatives to visually communicate your message.',
            features: [
                'Poster & banner design',
                'Ad creative sets',
                'Thumbnails & social templates'
            ],
            benefits: [
                'Professional visuals',
                'Higher ad CTRs',
                'Consistent brand look'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="14" rx="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle></svg>`
        },
        'video-marketing': {
            title: 'Video Marketing',
            description: 'Reels, ad videos and long-form YouTube content to engage audiences and drive conversions.',
            features: [
                'Reels & short-form production',
                'Ad video creation',
                'YouTube channel content & strategy'
            ],
            benefits: [
                'Higher engagement',
                'Improved conversion rates',
                'Stronger storytelling'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2"></rect></svg>`
        },
        'landing-promotion': {
            title: 'Website / Landing Page Promotion',
            description: 'Promote landing pages and websites to drive traffic and capture leads for your campaigns.',
            features: [
                'Traffic campaigns & funnels',
                'Conversion rate optimization',
                'Lead magnet & form setups'
            ],
            benefits: [
                'Increased leads',
                'Better campaign ROI',
                'Optimized conversion paths'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18"></path><path d="M12 3v18"></path></svg>`
        },
        'analytics-reporting': {
            title: 'Analytics & Reporting',
            description: 'Detailed reports on reach, clicks, leads and sales to measure and improve campaign performance.',
            features: [
                'Custom report dashboards',
                'Weekly / monthly insights',
                'Funnel & attribution analysis'
            ],
            benefits: [
                'Clear performance visibility',
                'Data-driven decisions',
                'Improved ROI over time'
            ],
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"></path><path d="M18 9l-5 5-3-3"></path></svg>`
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

    // If user clicks the modal CTA (Get Started) close modal and hide services section
    if (modalCta) {
        modalCta.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();

            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                servicesSection.style.transition = 'opacity 420ms ease, max-height 420ms ease';
                servicesSection.style.opacity = '0';
                servicesSection.style.maxHeight = '0';
                setTimeout(() => { servicesSection.style.display = 'none'; }, 450);
            }

            // Scroll to contact section after hiding services
            const contact = document.getElementById('contact');
            if (contact) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = contact.offsetTop - navbarHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    }

    // Create a persistent "View services" pill to restore the hidden section
    function ensureViewServicesPill() {
        if (document.getElementById('viewServicesPill')) return document.getElementById('viewServicesPill');
        const btn = document.createElement('button');
        btn.id = 'viewServicesPill';
        btn.className = 'view-services-pill';
        btn.textContent = 'View services';
        btn.setAttribute('aria-label', 'View services');
        btn.addEventListener('click', function() {
            const servicesSection = document.getElementById('services');
            if (!servicesSection) return;
            servicesSection.style.display = '';
            // allow layout then animate back
            requestAnimationFrame(() => {
                servicesSection.style.maxHeight = '';
                servicesSection.style.opacity = '1';
            });
            // remove pill with fade
            btn.classList.remove('show');
            setTimeout(() => { btn.remove(); }, 260);
            // scroll to services
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = servicesSection.offsetTop - navbarHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        });
        document.body.appendChild(btn);
        // small delay to enable transition
        setTimeout(() => btn.classList.add('show'), 20);
        return btn;
    }

    // When services are hidden (modal CTA), show the pill
    if (modalCta) {
        modalCta.addEventListener('click', function() {
            // small delay to ensure services were hidden
            setTimeout(() => { ensureViewServicesPill(); }, 280);
        });
    }
});

// Services carousel controls (prev/next + drag-to-scroll)
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.services-grid.carousel');
    const prev = document.querySelector('.services-prev');
    const next = document.querySelector('.services-next');
    if (!container) return;

    const scrollAmount = () => Math.round(container.clientWidth * 0.7);

    if (prev) {
        prev.addEventListener('click', () => {
            container.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
        });
    }
    if (next) {
        next.addEventListener('click', () => {
            container.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
        });
    }

    // Drag to scroll
    let isDown = false, startX, scrollLeft;
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('dragging');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });
    container.addEventListener('mouseleave', () => { isDown = false; container.classList.remove('dragging'); });
    container.addEventListener('mouseup', () => { isDown = false; container.classList.remove('dragging'); });
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 1; // scroll-fast
        container.scrollLeft = scrollLeft - walk;
    });

    // Keyboard accessibility: arrow keys when focused
    container.setAttribute('tabindex', '0');
    container.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { container.scrollBy({ left: 260, behavior: 'smooth' }); }
        if (e.key === 'ArrowLeft') { container.scrollBy({ left: -260, behavior: 'smooth' }); }
    });
});
