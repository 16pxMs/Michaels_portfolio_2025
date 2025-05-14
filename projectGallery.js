// Project Gallery Data
const projectGalleryData = [
    {
        id: "project1",
        title: "Eversend App Redesign",
        description: "A comprehensive UX/UI redesign that increased conversion rates and streamlined user experience for a fintech mobile application.",
        thumbnail:"/pexels-alina-chernii-682289345-31414924.jpg",
        galleryImages: [
            "/pexels-alina-chernii-682289345-31414924.jpg",
            "/Images/eversend-gallery-2.jpg",
            "/Images/eversend-gallery-3.jpg"
        ]
    },
    {
        id: "project2",
        title: "Design System Creation",
        description: "Developed a scalable design system that improved development efficiency and maintained visual consistency across multiple platforms.",
        thumbnail:"/pexels-alina-chernii-682289345-31414924.jpg",
        galleryImages: [
            "/Images/design-system-gallery-1.jpg",
            "/Images/design-system-gallery-2.jpg"
        ]
    },
    {
        id: "project3",
        title: "KYC Flow Optimization",
        description: "Redesigned the Know Your Customer (KYC) flow to reduce friction and increase user onboarding completion rates.",
        thumbnail:"/pexels-alina-chernii-682289345-31414924.jpg",
        galleryImages: [
            "/Images/kyc-gallery-1.jpg",
            "/Images/kyc-gallery-2.jpg",
            "/Images/kyc-gallery-3.jpg"
        ]
    },
    {
        id: "project4",
        title: "App Store Conversion Boost",
        thumbnail:"/pexels-alina-chernii-682289345-31414924.jpg",
        description: "Strategically redesigned App Store and Google Play screenshots to dramatically improve app store conversion rates.",
        galleryImages: [
            "/Images/app-store-gallery-1.jpg",
            "/Images/app-store-gallery-2.jpg"
        ]
    }
];

// Project Gallery Page Creation with Thumbnail Preview
function createProjectGalleryPage(projectId) {
    const project = projectGalleryData.find(p => p.id === projectId);
    if (!project) return;
  
    // Update page content
    document.getElementById('project-title').textContent = project.title;
    document.querySelector('.detailCopy').textContent = project.description;
  
    const carouselTrack = document.querySelector('.carousel-track');
    const thumbnailTrack = document.querySelector('.thumbnail-track');
    
    // Clear any existing content
    carouselTrack.innerHTML = '';
    thumbnailTrack.innerHTML = '';
    
    // Create carousel slides and thumbnails
    project.galleryImages.forEach((src, index) => {
        // Create main slide
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.dataset.index = index;
        
        const img = document.createElement('img');
        img.className = 'carousel-image';
        img.src = src;
        img.alt = `${project.title} gallery image ${index + 1}`;
        slide.appendChild(img);
        carouselTrack.appendChild(slide);
        
        // Create thumbnail preview
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail-item';
        thumbnail.dataset.index = index;
        
        const thumbImg = document.createElement('img');
        thumbImg.src = src;
        thumbImg.alt = `Thumbnail ${index + 1}`;
        thumbnail.appendChild(thumbImg);
        thumbnailTrack.appendChild(thumbnail);
        
        // Click handler for thumbnails
        thumbnail.addEventListener('click', () => {
            moveToSlide(index);
        });
    });
    
    // Initialize carousel functionality
    setupCarousel();
}

function setupCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const thumbnails = Array.from(document.querySelectorAll('.thumbnail-item'));
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    if (slideCount === 0) return; // Exit if no slides
    
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