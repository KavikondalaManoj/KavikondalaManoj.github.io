document.addEventListener('DOMContentLoaded', () => {

    // 1. Core Light/Dark Layout Theme Engine Integration
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        if (currentTheme === 'light') {
            htmlElement.setAttribute('data-theme', 'dark');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    });

    // 2. Direct On-Page Search Content Filter Pipeline
    const searchInput = document.getElementById('portfolioSearch');
    const sections = document.querySelectorAll('.portfolio-section');

    searchInput.addEventListener('input', (e) => {
        const filterQuery = e.target.value.toLowerCase().trim();

        sections.forEach(section => {
            const innerContent = section.textContent.toLowerCase();
            if (innerContent.includes(filterQuery)) {
                section.style.display = 'block';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            } else {
                section.style.opacity = '0';
                section.style.transform = 'translateY(4px)';
                // Graceful layout transition collapse
                setTimeout(() => {
                    if (searchInput.value.trim() !== "") {
                        section.style.display = 'none';
                    }
                }, 200);
            }
        });
    });

    // 3. Top Right Navigation Reset Button Action
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 4. Contact Message Pipeline Interface Engine (Mailto Generation)
    const sendEmailBtn = document.getElementById('sendEmailBtn');
    sendEmailBtn.addEventListener('click', () => {
        const name = document.getElementById('senderName').value.trim();
        const subject = document.getElementById('msgSubject').value.trim();
        const messageBody = document.getElementById('msgBody').value.trim();

        if (!name || !subject || !messageBody) {
            alert('Please fill out all the fields in the contact widget to dispatch your request.');
            return;
        }

        const targetEmail = "KavikondalaManoj@gmail.com";
        const computedSubject = encodeURIComponent(`[Portfolio Request] ${subject}`);
        const formattedBody = encodeURIComponent(`Hi Manoj,\n\n${messageBody}\n\nBest regards,\n${name}`);

        // Construct standard validation mail link matrix
        window.location.href = `mailto:${targetEmail}?subject=${computedSubject}&body=${formattedBody}`;
    });
});
