// JavaScript Animations for Portfolio

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for navigation links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Fade-in effect for sections with smoother animation
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
        observer.observe(section);
    });

    // Hover animation for project cards with smoother scaling
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        project.addEventListener("mouseover", () => {
            project.style.transition = "transform 0.2s ease-out, box-shadow 0.2s ease-out";
            project.style.transform = "scale(1.05)";
            project.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
        });

        project.addEventListener("mouseout", () => {
            project.style.transition = "transform 0.2s ease-out, box-shadow 0.2s ease-out";
            project.style.transform = "scale(1)";
            project.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        });
    });
});
