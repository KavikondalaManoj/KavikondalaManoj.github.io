document.addEventListener('DOMContentLoaded', () => {
    // 2. Theme Switching Logic Engine
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

    // 1. Live Instant Portfolio Filtering Engine (Search)
    const searchInput = document.getElementById('sectionSearch');
    const sections = document.querySelectorAll('.filterable-section, #expertise, #courses');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        sections.forEach(section => {
            const sectionText = section.textContent.toLowerCase();
            if (sectionText.includes(query)) {
                section.style.display = '';
                section.style.opacity = '1';
                section.style.transform = 'scale(1)';
            } else {
                section.style.opacity = '0';
                section.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    if(searchInput.value.toLowerCase().trim() !== "") {
                        section.style.display = 'none';
                    }
                }, 200);
            }
        });
    });
});
