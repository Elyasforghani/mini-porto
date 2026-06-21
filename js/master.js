 // Initialize Swiper Component
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 24,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 }
            }
        });

        // Initialize GSAP Scroll Animation Engine
        gsap.registerPlugin(ScrollTrigger);

        // Hero Sequence Trigger
        gsap.from(".hero-anim", {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
        });

        // Scroll Reveal Trigger Logic
        const revealSections = gsap.utils.toArray('.reveal');
        revealSections.forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%", 
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power2.out"
            });
        });