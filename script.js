// script.js

// Function to toggle the mobile navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = link.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Select the target section
        const offset = 70; // Offset for fixed header

        // Scroll to the target section
        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth' // Smooth scroll
        });

        // Close the mobile menu after clicking a link
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }
    });
});

// Close the mobile menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
        navbar.classList.remove('active');
    }
});