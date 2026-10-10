// Generate App Card HTML — pure utility, no side effects
export function createAppCard(app) {
    const title = app.title || 'Unknown App';
    const developer = app.developer || 'Unknown';
    const size = app.size || 'N/A';
    const category = app.category || '';
    const imageUrl = app.image_url || 'https://via.placeholder.com/300';

    return `
        <a href="app.html?id=${app.id}" class="card">
            ${app.is_mod ? '<div class="badge">MOD</div>' : ''}
            <div class="card-img-wrap">
                <img src="${imageUrl}" alt="${title}" class="card-img" loading="lazy">
            </div>
            <div class="card-content">
                <div class="card-title">${title}</div>
                <div class="card-dev">${developer}</div>
                <div class="card-meta">
                    <span>${size}</span>
                    <span>${category}</span>
                </div>
            </div>
        </a>
    `;
}
