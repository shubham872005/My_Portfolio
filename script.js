// ================================
// Portfolio JavaScript
// ================================

// ---------- Typing Animation ----------
if (document.getElementById("typing") && typeof Typed !== "undefined") {
    new Typed("#typing", {
        strings: [
            "Data Analyst",
            "AI / ML Engineer",
            "Python Developer",
            "Power BI Developer"
        ],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1400,
        loop: true
    });
}

// ---------- Mobile Menu ----------
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuBtn.classList.toggle("active");
    });
}

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// ---------- Sticky Header ----------
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 40);
});

// ---------- Smooth Scrolling ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ---------- Active Navigation Link ----------
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll(".navbar a").forEach(link => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }
    });
});

// ---------- Scroll To Top Button ----------
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 400 ? "flex" : "none";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ---------- Counter Animation (supports decimals, e.g. CGPA 8.93) ----------
const counters = document.querySelectorAll(".stats h2[data-target]");

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseFloat(el.dataset.target);
            const isDecimal = el.dataset.decimal === "true";
            const duration = 1200;
            const start = performance.now();

            const update = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const value = target * progress;
                el.textContent = isDecimal ? value.toFixed(2) : Math.ceil(value);
                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    el.textContent = (isDecimal ? target.toFixed(2) : target) + (isDecimal ? "" : "+");
                }
            };
            requestAnimationFrame(update);
            counterObserver.unobserve(el);
        }
    });
});

counters.forEach(counter => counterObserver.observe(counter));

// ---------- Reveal-on-scroll Animation ----------
const revealTargets = document.querySelectorAll(
    ".project-card, .skill-card, .about-content, .about-image, .stats div"
);
revealTargets.forEach(el => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealTargets.forEach(el => revealObserver.observe(el));

// ---------- Footer Year ----------
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// ---------- Contact Form (front-end only placeholder) ----------
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector("button[type='submit']");
        const original = btn.innerHTML;
        btn.innerHTML = "Message sent ✓";
        contactForm.reset();
        setTimeout(() => { btn.innerHTML = original; }, 2500);
    });
}

// ---------- Console Message ----------
console.log("%cPortfolio by Shubham 🚀", "color:#39ff8a;font-size:16px;font-weight:bold;");
