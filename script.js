const games = [
    {
        title: "Off Road 4x4 Driving Simulator (MOD, Unlimited Money)",
        developer: "Azur Interactive Games",
        img: "https://an1.com/uploads/posts/2023-10/1697915274_offroad-4x4.jpg",
        rating: "4.0",
        mod: true
    },
    {
        title: "Global Truck Online (MOD, Unlimited Money)",
        developer: "Star Games Apps",
        img: "https://an1.com/uploads/posts/2025-05/1746985983_global-truck-online.png",
        rating: "4.3",
        mod: true
    },
    {
        title: "Vita Mahjong",
        developer: "Vita Studio",
        img: "https://an1.com/uploads/posts/2026-06/1781949644_vita-mahjong.png",
        rating: "3.7",
        mod: false
    },
    {
        title: "Castle Busters (MOD, Unlimited Money)",
        developer: "VOODOO",
        img: "https://an1.com/uploads/posts/2026-07/1785056605_castle-busters.png",
        rating: "3.8",
        mod: true
    },
    {
        title: "Pou (MOD, Unlimited Coins)",
        developer: "Zakeh",
        img: "https://an1.com/uploads/posts/2023-06/1687166872_pou.png",
        rating: "3.8",
        mod: true
    },
    {
        title: "Business Empire (MOD, Unlimited Money)",
        developer: "AAA Fun",
        img: "https://an1.com/uploads/posts/2026-10/1791573168_business-empire.png",
        rating: "3.7",
        mod: true
    },
    {
        title: "Bowmasters (MOD, Unlimited Coins)",
        developer: "Playgendary Limited",
        img: "https://an1.com/uploads/posts/2025-02/1739444758_bowmasters.png",
        rating: "3.6",
        mod: true
    },
    {
        title: "TOY WARS - Army Men Strike",
        developer: "Volcano Force",
        img: "https://an1.com/uploads/posts/2024-05/1715719383_army-men-strike.png",
        rating: "3.8",
        mod: false
    }
];

const gamesGrid = document.getElementById('games-grid');

function renderGames() {
    gamesGrid.innerHTML = '';
    
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        
        let badgeHtml = '';
        if (game.mod) {
            badgeHtml = `<div class="game-badge">MOD</div>`;
        }
        
        card.innerHTML = `
            ${badgeHtml}
            <img src="${game.img}" alt="${game.title}" class="game-img">
            <div class="game-info">
                <div class="game-title" title="${game.title}">${game.title}</div>
                <div class="game-dev">${game.developer}</div>
                <div class="game-meta">
                    <span>★ ${game.rating}</span>
                    <span>Download</span>
                </div>
            </div>
        `;
        
        gamesGrid.appendChild(card);
    });
}

// Initial render
document.addEventListener('DOMContentLoaded', renderGames);
