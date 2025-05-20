// Project Gallery Data
const projectGalleryData = [
    {
        id: "project1",
        title: "UX/UI-Designed Aviation Training Portal for Student Pilots & Instructors",
        description: "A comprehensive UX/UI redesign that increased conversion rates and streamlined user experience for a fintech mobile application.",
        thumbnail:"/Featured_projects/Certifly/Certifly_cover.png",
        liveLink: "https://app.certifly.us/",
        galleryImages: [
            {
                src: "/Featured_projects/Certifly/Sign_up.png",
                description: "Home screen redesign showing new navigation structure"
            },
           
            {
                src: "/Featured_projects/Certifly/Dashboard_Active_dashboard.png",
                description: "Home screen redesign showing new navigation structure"
            },

            {
                src: "/Featured_projects/Certifly/St_Trainer_Trainer_details.png"
                ,
                description: "Student view: This beta lets students search for pilot trainers, but with few available, most already know who they want to train with."
            },

            {
                src: "/Featured_projects/Certifly/St_Trainer_filter_result.png"
                ,
                description: "Student view: This beta lets students search for pilot trainers, but with few available, most already know who they want to train with."
            },

            {
                src: "/Featured_projects/Certifly/St_Dashboard_Trainer_detail_Aircraft.png"
                ,
                description: "Student view: This beta lets students search for pilot trainers, but with few available, most already know who they want to train with."
            },

            {
                src: "/Featured_projects/Certifly/Student_Dashboard_onboard 1.png"
                ,
                description: "Student view: This beta lets students search for pilot trainers, but with few available, most already know who they want to train with."
            },

            {
                src: "/Featured_projects/Certifly/Student_Messaging_Active.png"
                ,
                description: "Student view: This beta lets students search for pilot trainers, but with few available, most already know who they want to train with."
            },

            {
                src: "/Featured_projects/Certifly/Student_Messaging_Search_No results.png"
                ,
                description: "Student view: This beta lets students search for pilot trainers, but with few available, most already know who they want to train with."
            },

            {
                src: "/Featured_projects/Certifly/Trainer_Dashboard_Active.png`"
                ,
                description: "Student view: This beta lets students search for pilot trainers, but with few available, most already know who they want to train with."
            }
        ]
    },

    {
        id: "project2",
        title: "Designed Influencer Marketing Web App, – Boosted Retention Leading to $50M Acquisition",
        description: "Developed a scalable design system that improved development efficiency and maintained visual consistency across multiple platforms.",
        thumbnail:"/featured_projects/Amped/Amped_cover.png",
        galleryImages: [
            {
                src: "/pexels-alina-chernii-682289345-31414924.jpg",
                description: "Home screen redesign showing new navigation structure"
            },
           
            
            {
                src: "/pexels-alina-chernii-682289345-31414924.jpg",
                description: "Home screen redesign showing new navigation structure"
            }
        ]
    },

    {
        id: "project3",
        title: "KYC Flow Optimization",
        description: "Redesigned the Know Your Customer (KYC) flow to reduce friction and increase user onboarding completion rates.",
        thumbnail:"/pexels-alina-chernii-682289345-31414924.jpg",
        galleryImages: [
            {
                src: "/pexels-alina-chernii-682289345-31414924.jpg",
                description: "Home screen redesign showing new navigation structure"
            },
           
            

            {
                src: "/pexels-alina-chernii-682289345-31414924.jpg",
                description: "Home screen redesign showing new navigation structure"
            }
        ]
    },

];

function createProjectGalleryPage(projectId) {
    const project = projectGalleryData.find(p => p.id === projectId);
    if (!project) return;

    // Update main project info
    document.getElementById('project-title').textContent = project.title;
    document.querySelector('.detailCopy').textContent = project.description;

    if (project.liveLink) {
        // Check if we already have a link button (for page refreshes)
        let existingButton = document.querySelector('.live-project-link');
        if (existingButton) {
            existingButton.remove(); // Remove existing button if it exists
        }
        
        // Create the link container div
        const linkContainer = document.createElement('div');
        linkContainer.className = 'live-project-link-container';
        
        // Create the actual link element
        const liveLink = document.createElement('a');
        liveLink.href = project.liveLink;
        liveLink.className = 'live-project-link';
        liveLink.textContent = 'View Live Project';
        liveLink.target = '_blank'; 

        // Add the link to the container
        linkContainer.appendChild(liveLink);

        document.querySelector('.projectDetails').appendChild(linkContainer)


    }

    // Get DOM elements
    const carouselTrack = document.querySelector('.carousel-track');
    const thumbnailTrack = document.querySelector('.thumbnail-track');
    const thumbnailContainer = document.querySelector('.thumbnail-preview-container');

    // Check if description container already exists
    let descriptionContainer = document.querySelector('.image-description-container');
    
    // Only create if it doesn't exist
    if (!descriptionContainer) {
        descriptionContainer = document.createElement('div');
        descriptionContainer.className = 'image-description-container';
        const descriptionText = document.createElement('p');
        descriptionText.className = 'current-image-description';
        descriptionContainer.appendChild(descriptionText);
        
        // Insert description above thumbnails
        thumbnailContainer.parentNode.insertBefore(descriptionContainer, thumbnailContainer);
    }

    // Clear existing content
    carouselTrack.innerHTML = '';
    thumbnailTrack.innerHTML = '';

    // Create slides and thumbnails
    project.galleryImages.forEach((imageData, index) => {
        // Main carousel slide
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.dataset.index = index;
        slide.dataset.description = imageData.description;

        const img = document.createElement('img');
        img.className = 'carousel-image';
        img.src = imageData.src;
        img.alt = `${project.title} - Image ${index + 1}`;
        slide.appendChild(img);
        carouselTrack.appendChild(slide);

        // Thumbnail item
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail-item';
        thumbnail.dataset.index = index;

        const thumbImg = document.createElement('img');
        thumbImg.src = imageData.src;
        thumbImg.alt = `${project.title} thumbnail ${index + 1}`;
        thumbnail.appendChild(thumbImg);
        thumbnailTrack.appendChild(thumbnail);
    });

    // Initialize carousel
    setupCarousel();
}

function setupCarousel() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const images = Array.from(document.querySelectorAll('.carousel-image'));
    const thumbnails = Array.from(document.querySelectorAll('.thumbnail-item'));
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const descriptionText = document.querySelector('.current-image-description');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    if (slideCount === 0) return;

    Promise.all(images.map((img, index) => {
        return new Promise(resolve => {
            if (img.complete) {
                console.log(`Image ${index} already loaded: ${img.src}`);
                resolve();
            } else {
                img.onload = () => {
                    console.log(`Image ${index} loaded successfully: ${img.src}`);
                    resolve();
                };
                img.onerror = () => {
                    console.error(`Image ${index} failed to load: ${img.src}`);
                    img.src = '/path/to/fallback-image.jpg';
                    resolve();
                };
            }
        });
    })).then(() => {
        console.log('All images processed, initializing carousel...');
        
        const slideWidth = track.clientWidth;
        console.log(`Slide width: ${slideWidth}px`);
        
        slides.forEach((slide, index) => {
            slide.style.flex = `0 0 ${slideWidth}px`;
            slide.style.width = `${slideWidth}px`;
            console.log(`Positioned slide ${index} at ${slideWidth * index}px`);
        });

        const moveToSlide = (index) => {
            track.style.transform = `translateX(-${slideWidth * index}px)`;
            currentSlide = index;
            
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            if (thumbnails[currentSlide]) {
                thumbnails[currentSlide].classList.add('active');
            }
            
            if (descriptionText) {
                descriptionText.textContent = slides[currentSlide].dataset.description;
            }
        };

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slideCount;
                moveToSlide(currentSlide);
            });
        }
        
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slideCount) % slideCount;
                moveToSlide(currentSlide);
            });
        }
        
        const resizeObserver = new ResizeObserver(entries => {
            const newWidth = entries[0].contentRect.width;
            slides.forEach(slide => {
                slide.style.flex = `0 0 ${newWidth}px`;
                slide.style.width = `${newWidth}px`;
            });
            moveToSlide(currentSlide);
        });
        resizeObserver.observe(track);
        
        moveToSlide(0);
    }).catch(error => {
        console.error('Carousel initialization failed:', error);
    });
} 


// Setup Project Card Listeners (unchanged)
function setupProjectCardListeners() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        const projectData = projectGalleryData[index];
        
        // Set project ID and update content
        card.setAttribute('data-project-id', projectData.id);
        
        const titleElement = card.querySelector('.project-info p');
        if (titleElement) titleElement.textContent = projectData.title;
        
        const imageElement = card.querySelector('.project-image img');
        if (imageElement) {
            imageElement.src = projectData.thumbnail;
            imageElement.alt = `${projectData.title} Thumbnail`;
        }

        // Add click event
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            window.location.href = `gallery_project.html?project=${projectId}`;
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('gallery_project.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('project');
        if (projectId) createProjectGalleryPage(projectId);
    } else {
        setupProjectCardListeners();
    }
});

window.createProjectGalleryPage = createProjectGalleryPage;
window.projectGalleryData = projectGalleryData;