// Function to check if the current page is the homepage
function isHomepage() {
    const currentPath = window.location.pathname;
    const isHome = (currentPath === '/' || currentPath.endsWith('/index.html'));
    console.log("isHomepage() check result:", isHome); // Keep this line for local dev
    return isHome;
}

// Function to check if it's a mobile device (based on screen width)
function isMobileDevice() {
    return window.matchMedia("(max-width: 768px)").matches;
}

// Function to get theme-appropriate particle colors
function getParticleColors() {
    const isDarkMode = document.body.getAttribute('data-md-color-scheme') === 'slate';
    
    if (isDarkMode) {
        return {
            nodeColor: "#FFB300",      // Amber accent - warm and subtle
            lineColor: "#546E7A",      // Blue grey - low contrast, non-distracting
            nodeOpacity: 0.18,         // Reduced for reading comfort
            lineOpacity: 0.06          // Very subtle connections
        };
    } else {
        return {
            nodeColor: "#FF6F00",      // Deep orange - warm but not aggressive
            lineColor: "#78909C",      // Light blue grey - barely visible
            nodeOpacity: 0.12,         // Lower for light backgrounds
            lineOpacity: 0.04          // Almost invisible but present
        };
    }
}

// Function to initialize particles
function initParticles() {
    if (!isHomepage()) {
        const existingParticlesDiv = document.getElementById('particles-js');
        if (existingParticlesDiv) {
            existingParticlesDiv.remove();
        }
        return;
    }

    if (document.getElementById('particles-js')) {
        return;
    }

    const particlesDiv = document.createElement('div');
    particlesDiv.id = 'particles-js';
    document.body.appendChild(particlesDiv);

    const colors = getParticleColors();

    let particlesConfig = {
        "particles": {
            "number": {
                "value": 30, // Slightly increased for better effect
                "density": {
                    "enable": true,
                    "value_area": 1200 // Adjusted for optimal spacing
                }
            },
            "color": {
                "value": colors.nodeColor // Dynamic color based on theme
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": colors.nodeOpacity, // Dynamic opacity
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 0.4, // Slightly faster for more life
                    "opacity_min": colors.nodeOpacity * 0.3, // Proportional minimum
                    "sync": false
                }
            },
            "size": {
                "value": 4, // Slightly smaller for elegance
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.8, // Gentle pulsing
                    "size_min": 1.5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 220, // Optimized distance
                "color": colors.lineColor, // Dynamic color
                "opacity": colors.lineOpacity, // Dynamic opacity
                "width": 1.2 // Slightly thicker for better visibility
            },
            "move": {
                "enable": true,
                "speed": 0.5, // Slightly faster movement
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 160,
                    "line_linked": {
                        "opacity": colors.lineOpacity * 4 // More visible on hover
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    };

    // Disable interactivity for mobile devices
    if (isMobileDevice()) {
        particlesConfig.interactivity.events.onhover.enable = false;
    }

    if (typeof particlesJS === 'function') {
        particlesJS('particles-js', particlesConfig);
    } else {
        console.error("particlesJS function not found. Is particles.min.js loaded?");
    }
}

document.addEventListener('DOMContentLoaded', initParticles);

const mdContent = document.querySelector("[data-md-component='content']");
if (mdContent) {
    const observer = new MutationObserver((mutationsList, observer) => {
        observer.disconnect();

        const existingParticlesDiv = document.getElementById('particles-js');
        if (isHomepage()) {
            if (!existingParticlesDiv) {
                initParticles();
            }
        } else {
            if (existingParticlesDiv) {
                existingParticlesDiv.remove();
            }
        }
        observer.observe(mdContent, { childList: true, subtree: true });
    });
    observer.observe(mdContent, { childList: true, subtree: true });
}

// Update the theme observer to reinitialize particles when theme changes
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    
    const body = document.querySelector("body");
    const schemeObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === "data-md-color-scheme") {
                // Remove existing particles and reinitialize with new colors
                const existingParticlesDiv = document.getElementById('particles-js');
                if (existingParticlesDiv) {
                    existingParticlesDiv.remove();
                }
                setTimeout(initParticles, 100); // Small delay to ensure DOM update
            }
        });
    });
    schemeObserver.observe(body, { attributes: true });
});