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

    let particlesConfig = {
        "particles": {
            "number": {
                "value": 25, // **Fewer, more distinct nodes (neurons)**
                "density": {
                    "enable": true,
                    "value_area": 1000 // Increase value_area for a sparser distribution
                }
            },
            "color": {
                "value": "#26A69A" // Your accent color for the nodes
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
                "value": 0.15, // **Very low opacity for subtle nodes**
                "random": false,
                "anim": {
                    "enable": true, // **Enable slight opacity animation for "breathing" effect**
                    "speed": 0.3, // Very slow "breathing"
                    "opacity_min": 0.05, // Minimum opacity
                    "sync": false
                }
            },
            "size": {
                "value": 5.5, // Slightly larger nodes than before, but still small
                "random": true,
                "anim": {
                    "enable": true, // **Enable slight size animation for "pulse" effect**
                    "speed": 0.6, // Very slow size pulse
                    "size_min": 1, // Minimum size
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 250, // **Increased distance for fewer, longer connections**
                "color": "#1565C0", // Your primary color for the connections
                "opacity": 0.08, // **Extremely low opacity for very faint lines**
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 0.3, // **Even slower movement for nodes**
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
                    "enable": true, // Desktop hover still enabled
                    "mode": "grab" // Or "repulse" for a subtle push away
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 180, // Adjust hover distance
                    "line_linked": {
                        "opacity": 0.3 // **Reduced hover line opacity for subtlety**
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

document.addEventListener('DOMContentLoad', () => {
    const body = document.querySelector("body");
    const schemeObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === "data-md-color-scheme") {
                initParticles();
            }
        });
    });
    schemeObserver.observe(body, { attributes: true });
});