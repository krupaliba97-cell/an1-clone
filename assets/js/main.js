// Utility: HTML Escaping for XSS Defense
export function escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Utility: URL Protocol Sanitization (Blocks javascript: and data: URI vectors)
export function sanitizeUrl(url, fallback = 'https://via.placeholder.com/300') {
    if (!url || typeof url !== 'string') return fallback;
    try {
        const parsed = new URL(url);
        if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
            return parsed.href;
        }
    } catch (_) {}
    return fallback;
}

// Generate App Card HTML with AN1-Style Squircle Icon Layout
export function createAppCard(app) {
    const rawId = encodeURIComponent(app.id || '');
    const title = escapeHTML(app.title || 'Unknown App');
    const developer = escapeHTML(app.developer || 'Unknown');
    const size = escapeHTML(app.size || 'N/A');
    const category = escapeHTML(app.category || 'App');
    const imageUrl = sanitizeUrl(app.image_url);

    return `
        <a href="app.html?id=${rawId}" class="card" aria-label="${title}">
            ${app.is_mod ? '<span class="badge">MOD</span>' : ''}
            <div class="card-icon-wrap">
                <img src="${imageUrl}" alt="${title}" class="card-icon" loading="lazy" width="76" height="76">
            </div>
            <div class="card-content">
                <div class="card-title">${title}</div>
                <div class="card-dev">${developer}</div>
                <div class="card-rating">★ 4.8</div>
                <div class="card-meta">
                    <span class="meta-tag">${size}</span>
                    <span class="meta-cat">${category}</span>
                </div>
            </div>
        </a>
    `;
}
