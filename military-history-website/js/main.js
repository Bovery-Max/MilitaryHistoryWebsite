// Military History Website - Enhanced Interactive Features

document.addEventListener('DOMContentLoaded', function() {

    // =====================
    // Initialize all features
    // =====================
    initModal();
    initActiveNavHighlight();
    initBackToTop();
    initScrollAnimations();
    initImageLightbox();
    initMobileNav();
    initTimelineAnimations();
    initCardHoverEffects();
    initPrintOptimization();
    initKeyboardNavigation();
});

// =====================
// Modal Functionality
// =====================
function initModal() {
    // Create modal element if it doesn't exist
    let modal = document.getElementById('detailModal');
    if (!modal) {
        modal = createModalElement();
        document.body.appendChild(modal);
    }

    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalDescription = document.getElementById('modal-description');
    const closeModalBtn = modal.querySelector('.close-modal');

    // Data for different sections
    const dataSets = {
        battle: {
            marathon: {
                title: "Battle of Marathon",
                date: "490 BCE",
                description: "The Athenian victory over Darius I's invading force preserved Greek independence and Western civilization. Famously associated with the origin of the marathon race. The Greeks, despite being heavily outnumbered, used superior tactics to defeat the Persian forces."
            },
            gaugamela: {
                title: "Battle of Gaugamela",
                date: "331 BCE",
                description: "Alexander the Great's tactical brilliance against a vastly superior Persian force led to the fall of the Achaemenid Empire. Alexander used his famous oblique order to crush the Persian center."
            },
            cannae: {
                title: "Battle of Cannae",
                date: "216 BCE",
                description: "Considered one of the greatest tactical victories in military history, where Hannibal's double envelopment surrounded and destroyed a much larger Roman army. Still studied in military academies worldwide."
            },
            hastings: {
                title: "Battle of Hastings",
                date: "1066",
                description: "The Norman conquest of England began here, fundamentally altering English language, culture, and governance for centuries. William the Conqueror's victory established Norman rule in England."
            },
            waterloo: {
                title: "Battle of Waterloo",
                date: "1815",
                description: "Napoleon's final defeat ended his rule and reshaped the political map of Europe. The battle near Waterloo in present-day Belgium ushered in a century of relative peace."
            },
            gettysburg: {
                title: "Battle of Gettysburg",
                date: "1863",
                description: "Often considered the turning point of the Civil War, where Union forces repelled Pickett's Charge and ended Lee's invasion of the North. The battle resulted in the largest number of casualties in the entire war."
            },
            stalingrad: {
                title: "Battle of Stalingrad",
                date: "1942–1943",
                description: "One of the bloodiest battles in history with nearly 2 million casualties. The Soviet victory marked the beginning of the end for Nazi Germany on the Eastern Front."
            },
            midway: {
                title: "Battle of Midway",
                date: "1942",
                description: "The turning point in the Pacific Theater where US Navy codebreakers anticipated Japanese plans and sank four Japanese aircraft carriers. This battle shifted the balance of naval power in the Pacific."
            },
            dday: {
                title: "D-Day (Normandy Landings)",
                date: "1944",
                description: "The largest amphibious invasion in history established a Western front against Germany. Over 156,000 Allied troops landed on the beaches of Normandy on June 6, 1944."
            }
        },
        leader: {
            suntzu: {
                title: "Sun Tzu",
                date: "c. 544–496 BCE",
                description: "Ancient Chinese military strategist and philosopher, best known for 'The Art of War.' His teachings on strategy, deception, and flexibility have influenced military thinking, business, and philosophy for over two millennia."
            },
            alexander: {
                title: "Alexander the Great",
                date: "356–323 BCE",
                description: "King of Macedon who created one of the largest empires in ancient history, stretching from Greece to northwestern India. Undefeated in battle, he is considered one of history's most successful military commanders."
            },
            hannibal: {
                title: "Hannibal Barca",
                date: "247–183 BCE",
                description: "Carthaginian general considered one of the greatest military tacticians in history. Famous for leading an army including war elephants across the Alps to attack Rome during the Second Punic War."
            },
            juliuscaesar: {
                title: "Julius Caesar",
                date: "100–44 BCE",
                description: "Roman general and statesman who played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire. Conquered Gaul and won the civil war that made him dictator of Rome."
            },
            genghiskhan: {
                title: "Genghis Khan",
                date: "c. 1162–1227",
                description: "Founder and first Great Khan of the Mongol Empire, which became the largest contiguous empire in history. United the nomadic tribes of Northeast Asia through revolutionary military organization."
            },
            napoleon: {
                title: "Napoleon Bonaparte",
                date: "1769–1821",
                description: "French military and political leader who rose to prominence during the French Revolution. Emperor of the French from 1804 to 1815. He modernized military organization with the corps system."
            },
            wellington: {
                title: "Arthur Wellesley, Duke of Wellington",
                date: "1769–1852",
                description: "Anglo-Irish soldier and statesman, one of the leading military figures of 19th-century Britain. Best known for his decisive defeat of Napoleon at the Battle of Waterloo in 1815."
            },
            ataturk: {
                title: "Mustafa Kemal Atatürk",
                date: "1881–1938",
                description: "Turkish field marshal and founder of the Republic of Turkey. Successfully led the Turkish War of Independence after World War I, abolishing the sultanate and caliphate."
            },
            haig: {
                title: "Douglas Haig",
                date: "1861–1928",
                description: "British Army officer and commander of the British Expeditionary Force on the Western Front during World War I. Oversaw the transition to combined arms tactics by the war's end."
            },
            rommel: {
                title: "Erwin Rommel",
                date: "1891–1944",
                description: "German general known as the 'Desert Fox,' celebrated for his leadership of Axis forces in the North African campaign. His mastery of mobile armored warfare earned respect from both allies and adversaries."
            },
            patton: {
                title: "George S. Patton Jr.",
                date: "1885–1945",
                description: "United States Army general who commanded the Third Army in France and Germany after D-Day. Renowned for aggressive armored warfare tactics and inspirational leadership style."
            },
            mehmed: {
                title: "Mehmed the Conqueror",
                date: "1432–1481",
                description: "Ottoman Sultan who conquered Constantinople in 1453, bringing an end to the Byzantine Empire. He transformed the city into the Ottoman capital Istanbul."
            }
        },
        weapon: {
            spears: {
                title: "Spear",
                date: "Prehistoric - Medieval",
                description: "One of the earliest and most important weapons developed by humans. Used for hunting and warfare, the spear consists of a shaft with a pointed head. Versatile and effective both as a thrusting weapon and thrown projectile."
            },
            swords: {
                title: "Sword",
                date: "Bronze Age - Modern",
                description: "Bladed weapon used for cutting or thrusting. Swords have been used for thousands of years and evolved significantly with metallurgical advances throughout human history."
            },
            bows: {
                title: "Bow and Arrow",
                date: "Prehistoric - 16th Century CE",
                description: "Ranged weapon system consisting of an elastic launching device and long-shafted projectiles. Allowed humans to engage targets at a distance greater than melee weapons."
            },
            gunpowder: {
                title: "Gunpowder",
                date: "9th Century CE - Present",
                description: "Chemical explosive used as a propellant in firearms and as a pyrotechnic composition in fireworks. Its discovery revolutionized warfare, leading to modern munitions."
            },
            rifles: {
                title: "Rifle",
                date: "15th Century CE - Present",
                description: "Firearm designed to be fired from the shoulder, with rifling in the barrel that imparts spin to the projectile, improving accuracy and range."
            },
            machineguns: {
                title: "Machine Gun",
                date: "Late 19th Century CE - Present",
                description: "Fully automatic firearm designed to fire rifle cartridges in rapid succession. Revolutionized warfare by allowing small numbers of troops to deliver massive, continuous fire."
            },
            tanks: {
                title: "Tank",
                date: "World War I - Present",
                description: "Armored fighting vehicle designed for front-line combat, combining operational mobility and tactical offensive and defensive capabilities."
            },
            aircraft: {
                title: "Military Aircraft",
                date: "World War I - Present",
                description: "Any aircraft employed by a country's military, including combat and non-combat aircraft for reconnaissance, transport, and direct combat engagement."
            },
            nukes: {
                title: "Nuclear Weapons",
                date: "1945 - Present",
                description: "Explosive device that derives its destructive force from nuclear reactions. Only two nuclear weapons have been used in combat, both by the United States against Japan in World War II."
            }
        },
        uniform: {
            ancient: {
                title: "Ancient Military Uniforms",
                date: "Prehistoric - 5th Century CE",
                description: "Early military dress focused primarily on protection. Ancient warriors wore armor made from leather, bronze, and iron. Distinctive colors began to appear to distinguish friend from foe."
            },
            medieval: {
                title: "Medieval Military Uniforms",
                date: "5th - 15th Century CE",
                description: "Characterized by chain mail and plate armor. Knights wore sophisticated armor that evolved over centuries. Heraldry and coat of arms became important for battlefield identification."
            },
            napoleonic: {
                title: "Napoleonic Era Uniforms",
                date: "Late 18th - Early 19th Century",
                description: "Featured elaborate, colorful uniforms designed to impress and intimidate enemies. Distinctive colors helped identify units amidst battlefield smoke."
            },
            wwi: {
                title: "World War I Uniforms",
                date: "1914-1918",
                description: "Shifted toward practicality and camouflage. Introduced steel helmets, khaki-colored uniforms, and early camouflage patterns for trench warfare."
            },
            wwii: {
                title: "World War II Uniforms",
                date: "1939-1945",
                description: "Further standardized and practical uniforms with improved camouflage. Different theaters required different patterns (jungle, desert, winter)."
            },
            modern: {
                title: "Modern Military Uniforms",
                date: "1945 - Present",
                description: "Highly specialized uniforms featuring flame-resistant materials, moisture-wicking fabrics, modular systems for gear, and advanced camouflage patterns."
            }
        },
        memorial: {
            warmonuments: {
                title: "War Memorials and Monuments",
                date: "Various Eras",
                description: "From simple grave markers to grand national monuments, war memorials serve as focal points for remembrance. Notable examples include the Tomb of the Unknown Soldier, Vietnam Veterans Memorial, and Thiepval Memorial."
            },
            remembrancedays: {
                title: "Remembrance Days and Traditions",
                date: "Various",
                description: "Special days set aside to honor military personnel who died in service. Remembrance Day (Nov 11), Memorial Day (last Monday in May), and ANZAC Day (April 25) are observed worldwide."
            },
            symbols: {
                title: "Symbols of Remembrance",
                date: "Various",
                description: "The red poppy inspired by 'In Flanders Fields' is worn across Commonwealth nations. The bugle call 'Last Post' is sounded at ceremonies worldwide. These symbols serve as powerful reminders of sacrifice."
            },
            veterans: {
                title: "Veterans' Stories and Oral Histories",
                date: "Ongoing",
                description: "Preserving firsthand accounts provides invaluable historical records. Major projects include the Veterans History Project at the Library of Congress and wartime diaries collections."
            },
            cemeteries: {
                title: "Military Cemeteries and Burial Traditions",
                date: "Various",
                description: "Arlington National Cemetery contains over 400,000 graves. The Normandy American Cemetery overlooks Omaha Beach. The Commonwealth War Graves Commission maintains over 1.7 million graves across 153 countries."
            },
            peace: {
                title: "Memorials to Peace and Reconciliation",
                date: "Various",
                description: "Some memorials focus on the hope for peace after conflict. The Hiroshima Peace Memorial Park stands as a reminder of nuclear war's cost. The Peace Palace in The Hague symbolizes international justice."
            }
        },
        resource: {
            essentialreading: {
                title: "Essential Reading",
                date: "Various",
                description: "Foundational books include: The Art of War by Sun Tzu, On War by Carl von Clausewitz, The Second World War by Winston Churchill, A History of Warfare by John Keegan, and With the Old Breed by Eugene B. Sledge."
            },
            digitalarchives: {
                title: "Digital Archives and Museums",
                date: "Various",
                description: "Key online collections: National Archives (US), Imperial War Museums (UK), Library of Congress Veterans History Project, Commonwealth War Graves Commission, The Avalon Project at Yale, and HyperWar Foundation."
            },
            educational: {
                title: "Educational Institutions and Programs",
                date: "Various",
                description: "Leading resources: West Point Digital History Center, King's College London War Studies, University of Leeds Centre for War Studies, Ohio State University Military History programs, and Journal of Military History."
            },
            documentaries: {
                title: "Documentaries and Media",
                date: "Various",
                description: "Top resources: The World at War (1973), Civil War by Ken Burns, War and Civilization with John Keegan, BBC History Magazine, The Great Courses, Hardcore History by Dan Carlin, and History Hit by Dan Snow."
            },
            researchtools: {
                title: "Research and Reference Tools",
                date: "Various",
                description: "Essential tools: JSTOR, Project MUSE, Google Books, WorldCat, Osprey Publishing for illustrated histories, Stackpole Books, and various University Presses specializing in military history."
            }
        },
        section: {
            wars: {
                title: "Major Wars",
                date: "Ancient - Present",
                description: "Explore the pivotal conflicts that changed the course of history, from ancient battles to World Wars and beyond. This section covers the most significant wars that shaped civilizations."
            },
            battles: {
                title: "Famous Battles",
                date: "Ancient - Present",
                description: "Study the most decisive engagements in military history where tactics, leadership, and bravery determined outcomes. From Marathon to D-Day, discover the battles that changed the world."
            },
            leaders: {
                title: "Military Leaders",
                date: "Ancient - Present",
                description: "Discover the legendary commanders and strategists whose vision and courage influenced the fate of nations. From Sun Tzu to modern generals, explore history's greatest military minds."
            },
            weapons: {
                title: "Weapons & Equipment",
                date: "Prehistoric - Present",
                description: "Trace the evolution of military technology from simple tools to sophisticated modern weapons systems. See how innovation in warfare has shaped human history."
            },
            uniforms: {
                title: "Uniforms History",
                date: "Ancient - Present",
                description: "Examine how military dress has evolved, reflecting changes in technology, tactics, and cultural identity. From ancient armor to modern digital camouflage."
            },
            memorials: {
                title: "Memorials & Remembrance",
                date: "Various",
                description: "Learn about the monuments, ceremonies, and traditions that honor those who served and sacrificed. Discover how nations remember their military heritage."
            }
        }
    };

    // Open modal with content
    function openModal(type, id) {
        const dataSet = dataSets[type];
        if (!dataSet || !dataSet[id]) {
            return;
        }

        const data = dataSet[id];
        modalTitle.textContent = data.title;
        modalDate.textContent = data.date;
        modalDescription.textContent = data.description;

        // For "section" type, add a link to navigate to the actual page
        const existingLink = modal.querySelector('.modal-nav-link');
        if (existingLink) {
            existingLink.remove();
        }

        if (type === 'section') {
            const navLink = document.createElement('a');
            navLink.href = id + '.html';
            navLink.className = 'modal-nav-link';
            navLink.textContent = 'Go to ' + data.title + ' →';
            navLink.style.display = 'inline-block';
            navLink.style.marginTop = '1rem';
            navLink.style.padding = '0.5rem 1rem';
            navLink.style.backgroundColor = 'var(--accent-color)';
            navLink.style.color = 'white';
            navLink.style.textDecoration = 'none';
            navLink.style.borderRadius = '4px';
            navLink.style.transition = 'background-color 0.3s ease';
            modal.querySelector('.modal-body').appendChild(navLink);
        }

        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        setTimeout(() => closeModalBtn.focus(), 100);
    }

    // Close modal
    function closeModalFunc() {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Event delegation for read-more links
    document.addEventListener('click', function(e) {
        const target = e.target.closest('.read-more');
        if (target) {
            e.preventDefault();
            const type = target.getAttribute('data-type');
            const id = target.getAttribute('data-id');
            if (type && id) {
                openModal(type, id);
            }
        }
    });

    // Close modal when clicking close button
    closeModalBtn.addEventListener('click', closeModalFunc);

    // Close modal when clicking outside content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunc();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalFunc();
        }
    });

    // Prevent modal content clicks from closing modal
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Create modal element dynamically
function createModalElement() {
    const modal = document.createElement('div');
    modal.id = 'detailModal';
    modal.className = 'modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" role="button" aria-label="Close modal">&times;</span>
            <div class="modal-header">
                <h3 id="modal-title"></h3>
                <h4 id="modal-date"></h4>
            </div>
            <div class="modal-body">
                <p id="modal-description"></p>
            </div>
        </div>
    `;
    return modal;
}

// =====================
// Active Navigation Highlighting
// =====================
function initActiveNavHighlight() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

// =====================
// Back to Top Button
// =====================
function initBackToTop() {
    const button = document.createElement('button');
    button.id = 'backToTop';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    button.innerHTML = '&#9650;';
    document.body.appendChild(button);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });

    // Smooth scroll to top
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =====================
// Scroll Animations
// =====================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.content-card, .timeline-item, .section-title');

    if (!('IntersectionObserver' in window)) {
        // Fallback: just show everything
        animatedElements.forEach(el => el.classList.add('animate-in'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.classList.add('pre-animate');
        observer.observe(el);
    });
}

// =====================
// Image Lightbox
// =====================
function initImageLightbox() {
    const images = document.querySelectorAll('.content-card img, .timeline-item img');

    // Create lightbox element
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close" role="button" aria-label="Close lightbox">&times;</span>
            <img src="" alt="" class="lightbox-image">
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightboxCaption.textContent = this.alt || '';
            lightbox.style.display = 'flex';
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            setTimeout(() => lightboxClose.focus(), 100);
        });
    });

    function closeLightbox() {
        lightbox.style.display = 'none';
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });
}

// =====================
// Mobile Navigation Toggle
// =====================
function initMobileNav() {
    const nav = document.querySelector('nav ul');
    if (!nav) return;

    // Create hamburger button
    const toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-label', 'Toggle navigation');
    toggle.innerHTML = '<span></span><span></span><span></span>';

    const navContainer = document.querySelector('nav');
    navContainer.insertBefore(toggle, nav);

    toggle.addEventListener('click', function() {
        nav.classList.toggle('nav-open');
        toggle.classList.toggle('active');
    });

    // Close mobile nav when clicking a link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('nav-open');
            toggle.classList.remove('active');
        });
    });
}

// =====================
// Timeline Item Animations
// =====================
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length === 0) return;

    if (!('IntersectionObserver' in window)) {
        timelineItems.forEach(el => el.classList.add('timeline-visible'));

        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger the animations
                setTimeout(() => {
                    entry.target.classList.add('timeline-visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    timelineItems.forEach(el => {
        el.classList.add('timeline-pre');
        observer.observe(el);
    });
}

// =====================
// Enhanced Card Hover Effects
// =====================
function initCardHoverEffects() {
    const cards = document.querySelectorAll('.content-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// =====================
// Print Optimization
// =====================
function initPrintOptimization() {
    window.addEventListener('beforeprint', function() {
        // Remove animations for print
        document.body.classList.add('printing');
    });

    window.addEventListener('afterprint', function() {
        document.body.classList.remove('printing');
    });
}

// =====================
// Keyboard Navigation
// =====================
function initKeyboardNavigation() {
    // Allow keyboard navigation for interactive elements
    const interactiveElements = document.querySelectorAll('.content-card, .timeline-item');

    interactiveElements.forEach(el => {
        if (!el.getAttribute('tabindex')) {
            el.setAttribute('tabindex', '0');
        }

        el.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                const link = this.querySelector('a');
                if (link) {
                    e.preventDefault();
                    link.click();
                }
            }
        });
    });
}
