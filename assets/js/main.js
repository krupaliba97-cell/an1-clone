// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', currentTheme);
if(themeToggle) {
    themeToggle.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    });
}

// Generate App Card HTML
export function createAppCard(app) {
    return `
        <a href="app.html?id=${app.id}" class="card">
            ${app.is_mod ? '<div class="badge">MOD</div>' : ''}
            <div class="card-img-wrap">
                <img src="${app.image_url || 'https://via.placeholder.com/300'}" alt="${app.title}" class="card-img">
            </div>
            <div class="card-content">
                <div class="card-title">${app.title}</div>
                <div class="card-dev">${app.developer}</div>
                <div class="card-meta">
                    <span>${app.size || 'N/A'}</span>
                    <span>${app.category || ''}</span>
                </div>
            </div>
        </a>
    `;
}
