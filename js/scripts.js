document.addEventListener("DOMContentLoaded", function () {
    const dynamicName = document.getElementById("dynamic-name");
    const dynamicRole = document.getElementById("dynamic-role");

    const nameText = "Kayla Rose Ca-ang";
    const roleTexts = [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Software Engineer",
    ];

    function typeWriter(element, text, delay, callback) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, delay);
            } else if (callback) {
                setTimeout(callback, 1000); // Wait 1 second before calling the callback
            }
        }
        type();
    }

    function loopTyping() {
        dynamicName.innerHTML = ""; // Clear the name text
        typeWriter(dynamicName, nameText, 100, () => {
            let roleIndex = 0;

            function typeNextRole() {
                dynamicRole.innerHTML = ""; // Clear the role text
                typeWriter(dynamicRole, roleTexts[roleIndex], 100, () => {
                    roleIndex = (roleIndex + 1) % roleTexts.length; // Loop back to the start
                    setTimeout(typeNextRole, 1000); // Wait 1 second before typing the next role
                });
            }

            typeNextRole();
        });
    }

    loopTyping();
});

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Pagination effect
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                const navLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (entry.isIntersecting) {
                    navLinks.forEach(link => link.classList.remove("text-blue-600", "font-bold"));
                    navLink.classList.add("text-blue-600", "font-bold");
                }
            });
        },
        { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
});
    document.addEventListener('DOMContentLoaded', function () {
        const swiper = new Swiper('.swiper-container', {
            loop: true, // Enable looping
            pagination: {
                el: '.swiper-pagination',
                clickable: true, // Allow clicking on pagination bullets
            },
            slidesPerView: 1, // Show one slide at a time
            spaceBetween: 20, // Add spacing between slides
            breakpoints: {
                768: {
                    slidesPerView: 2, // Show 2 slides on medium screens
                },
                1024: {
                    slidesPerView: 3, // Show 3 slides on large screens
                },
            },
        });
    });
  function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let birthday = new Date(`October 23, ${currentYear}`);
    if (now > birthday) {
      birthday = new Date(`October 23, ${currentYear + 1}`);
    }
    const diff = birthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('countdown').textContent =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();
