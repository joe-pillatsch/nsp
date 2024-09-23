document.addEventListener("DOMContentLoaded", function() {
    // Define an array of carousel configurations
    const carousels = [
        {
            id: 'carouselHomeStudio', // ID of the carousel container
            captionId: 'home-studio-caption-text', // ID of the caption container
            captions: [
                "East Nashville, TN",
                "Brentwood, TN",
                "South Light Sound",
                "Bellevue, TN",
                "East Nashville, TN"
            ]
        },
        {
            id: 'carouselCommercial',
            captionId: 'commercial-caption-text',
            captions: [
                "Office, Marathon Village, Nashville TN",
                "Office, Marathon Village, Nashville TN",
                "Office, Marathon Village, Nashville TN",
                "Office, Marathon Village, Nashville TN",
                "Homegrown Taproom, Donelson TN",
                "Homegrown Taproom, Donelson TN"
            ]
        }
        // Add more carousels here as needed
    ];

    // Function to update the caption for a specific carousel
    function updateCaption(carouselConfig) {
        const carouselElement = document.getElementById(carouselConfig.id);
        
        // Find the active slide index
        const activeIndex = [...carouselElement.querySelectorAll('.carousel-item')].findIndex(item => item.classList.contains('active'));
        
        // Ensure the index is valid and update the caption text
        if (activeIndex >= 0 && activeIndex < carouselConfig.captions.length) {
            document.getElementById(carouselConfig.captionId).innerText = carouselConfig.captions[activeIndex];
        }
    }

    // Initialize captions for all carousels
    carousels.forEach(carouselConfig => {
        const carouselElement = document.getElementById(carouselConfig.id);

        // Set the initial caption
        updateCaption(carouselConfig);

        // Listen for slide change event to update the caption dynamically
        if (carouselElement) {
            carouselElement.addEventListener('slid.bs.carousel', function() {
                updateCaption(carouselConfig);
            });
        }
    });
});