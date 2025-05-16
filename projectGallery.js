// Project Gallery Data
const projectGalleryData = [
    {
        id: "project1",
        title: "UX/UI-Designed Aviation Training Portal for Student Pilots & Instructors",
        description: "A comprehensive UX/UI redesign that increased conversion rates and streamlined user experience for a fintech mobile application.",
        thumbnail:"/featured_projects/Certifly/Certifly_cover.png",
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
        id: "project2",
        title: "Designed Influencer Marketing Web App, – Boosted Retention Leading to $50M Acquisition",
        description: "Developed a scalable design system that improved development efficiency and maintained visual consistency across multiple platforms.",
        thumbnail:"/featured_projects/Amped/Amped_cover.png`",
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

    {
        id: "project4",
        title: "App Store Conversion Boost",
        description: "Strategically redesigned App Store and Google Play screenshots to dramatically improve app store conversion rates.",
        thumbnail:"/pexels-alina-chernii-682289345-31414924.jpg",
        galleryImages: [
            {
                src: "/pexels-alina-chernii-682289345-31414924.jpg",
                description: "Home screen redesign showing new navigation structure"
            },
           
            {
                src: "/pexels-alina-chernii-682289345-31414924.jpg",
                description: "Home screen redesign showing new navigation structure"
            },

            {
                src: "/pexels-alina-chernii-682289345-31414924.jpg",
                description: "Home screen redesign showing new navigation structure"
            }
        ]
    }
];

function createProjectGalleryPage(projectId) {
    const project = projectGalleryData.find(p => p.id === projectId);
    if (!project) return;

    // Update main project info
    document.getElementById('project-title').textContent = project.title;
    document.querySelector('.detailCopy').textContent = project.description;

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
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const thumbnails = Array.from(document.querySelectorAll('.thumbnail-item'));
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const descriptionText = document.querySelector('.current-image-description');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    if (slideCount === 0) return;
    
    // Set initial positions
    const slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach((slide, index) => {
        slide.style.left = `${slideWidth * index}px`;
    });
    
    // Update carousel position
    const moveToSlide = (index) => {
        track.style.transform = `translateX(-${slideWidth * index}px)`;
        currentSlide = index;
        
        // Update active thumbnail
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        if (thumbnails[currentSlide]) {
            thumbnails[currentSlide].classList.add('active');
        }
        
        // Update image description if element exists
        if (descriptionText) {
            descriptionText.textContent = slides[currentSlide].dataset.description;
        }

        // Center the active thumbnail
        centerThumbnail(index);
    };
        
    // Center the active thumbnail in the preview track
    const updateActiveThumbnail = (index) => {
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        if (thumbnails[index]) {
            thumbnails[index].classList.add('active');
        }
    };
    
    // Button click handlers
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slideCount;
        moveToSlide(currentSlide);
    });
    
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        moveToSlide(currentSlide);
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        const newSlideWidth = slides[0].getBoundingClientRect().width;
        slides.forEach((slide, index) => {
            slide.style.left = `${newSlideWidth * index}px`;
        });
        moveToSlide(currentSlide);
    });
    
    // Set first slide as active initially
    moveToSlide(0);
    
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

// Page Initialization (unchanged)
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