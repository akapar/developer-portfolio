// Applications Data Array
const appsData = [
    {
        id: "dava-belgelerim",
        title: "Dava Belgelerim",
        category: "legal",
        featured: true, // Asymmetric display (two columns)
        badge: "Tüm Platformlar (Mobil & Masaüstü)",
        icon: "fa-solid fa-scale-balanced",
        image: "assets/dava_belgelerim_logo.png",
        description: "UYAP formatındaki (.udf) resmi dava dosyalarını mobil cihazlarınızda ve bilgisayarınızda anında görüntüleyin. Belgeleri PDF, DOC veya TXT formatlarına dönüştürün, toplu işlem yapın ve güvenle paylaşın.",
        specs: [
            "Gelişmiş .udf XML Ayrıştırıcı & Çevrimdışı Görüntüleyici",
            "Karanlık & Kalitesiz TIFF Taramaları Netleştirme Algoritması",
            "Klasör Yapısını Koruyan Akıllı Toplu PDF Dönüştürücü",
            "Cihaz İçi Tam Arama (İnternet/Bulut Bağlantısı Gerekmez)"
        ],
        tags: ["Flutter", "Dart", "UDF Parser", "TIFF to PDF", "Toplu Dönüştürücü", "Windows & Linux & Android & iOS"],
        primaryLink: "dava-belgelerim.html",
        primaryLabel: "Detaylar",
        secondaryLink: null,
        secondaryLabel: null
    },
    {
        id: "gazelist",
        title: "Gazelist",
        category: "productivity",
        featured: true, // Double column display
        badge: "All Platforms (Mobile & Desktop)",
        icon: "fa-solid fa-list-check",
        image: "assets/gazelist_logo.png",
        description: "A secure, hierarchical task manager and Pomodoro timer. Nest subtasks to any depth, track focus time, sync automatically with Google Drive, and analyze your productivity history with absolute privacy.",
        specs: [
            "Unlimited Nested Task Hierarchy & Drag-and-Drop",
            "Task-Bound Focus Timer with Ambient Notification Chimes",
            "Dynamic Tagging (#tag/@person) with Autocomplete Overlays",
            "Preserved Activity History & Google Drive Automatic Sync"
        ],
        tags: ["Flutter", "Dart", "Pomodoro Timer", "Google Drive Sync", "Local Database", "Windows & macOS & Android & iOS"],
        primaryLink: "gazelist.html",
        primaryLabel: "Details",
        secondaryLink: null,
        secondaryLabel: null
    },
    {
        id: "uyap-cevirici",
        title: "UYAP Çevirici",
        category: "legal",
        featured: false,
        badge: "Masaüstü Eklentisi",
        icon: "fa-solid fa-file-word",
        image: "assets/uyap_cevirici_logo.png",
        description: "Google Dokümanlar™ ve UYAP (.udf) arasında biçimlendirme, liste ve görselleri kayıpsız koruyarak çift yönlü dönüşüm sağlayan, sunucusuz mimarisiyle %100 güvenli Google Workspace eklentisi.",
        tags: ["Google Apps Script", "Google Docs API", "UDF Converter"],
        primaryLink: "https://workspace.google.com/u/0/marketplace/app/uyap_%C3%A7evirici/46494924541?flow_type=2",
        primaryLabel: "Workspace Market",
        secondaryLink: null,
        secondaryLabel: null,
        privacyLink: "https://docs.google.com/document/d/1LR-iZAjOx-KvHIVGvq_rD-ggNL-kazE313tVN0KN1-E/edit?usp=drive_link",
        termsLink: "https://docs.google.com/document/d/1E7JcIYNrASBJGuPS7mJ1Uvtl5zlyAAe8pR7OYr_5A6M/edit?usp=drive_link"
    },
    {
        id: "aka-manage-calendar",
        title: "AKA Manage Calendar",
        category: "productivity",
        featured: false,
        badge: "Masaüstü Eklentisi",
        icon: "fa-solid fa-calendar-days",
        image: "assets/aka_manage_calendar_logo.png",
        description: "A Google Sheets add-on to manage your Google Calendar. Import calendar events to a spreadsheet, make edits directly, and sync changes back effortlessly.",
        tags: ["Google Apps Script", "Calendar API", "Sheets API"],
        primaryLink: "https://workspace.google.com/marketplace/app/aka_manage_calendar/189500482061?flow_type=2",
        primaryLabel: "Workspace Market",
        secondaryLink: "https://docs.google.com/document/d/19GNkEbijz8NM67Slep9rG_Oj47UuDeDtzXfztLE3Gg0/edit?usp=drive_link",
        secondaryLabel: "FAQ",
        privacyLink: "https://docs.google.com/document/d/1Jacmk31uC3ZyXc2IcHkNnZ4UR9JG1lS5_8Bk-L_2C9I/edit?usp=drive_link",
        termsLink: "https://docs.google.com/document/d/1OTaf-fy37WqbtvKoRt9cx7RnbLNJJv7QCzUCKcof-fM/edit?usp=drive_link"
    },
    {
        id: "aka-ticked-tasks",
        title: "AKA Ticked Tasks",
        category: "productivity",
        featured: false,
        badge: "Masaüstü Eklentisi",
        icon: "fa-solid fa-list-check",
        image: "assets/aka_ticked_tasks_logo.png",
        description: "A Google Sheets add-on to download and analyze completed Google Tasks. Export task details, view completion statistics, and measure adherence to due dates.",
        tags: ["Google Apps Script", "Tasks API", "Data Analytics"],
        primaryLink: "https://workspace.google.com/u/0/marketplace/app/aka_ticked_tasks/409148054319?flow_type=2",
        primaryLabel: "Workspace Market",
        secondaryLink: "#",
        secondaryLabel: "Support",
        privacyLink: "https://docs.google.com/document/d/1rBKscDN-bbinsbZV-ZYFpKEJMm8h4hQ3Ufb148z0KLY/edit?usp=drive_link",
        termsLink: "https://docs.google.com/document/d/1Ynn5EepzCedaAKbN8vyHB3pU96Bl-vdWfDxBk2yM_G4/edit?usp=drive_link"
    }
];

// Inject App Cards
const appGrid = document.getElementById('appGrid');

function renderApps(filterCategory = 'all') {
    appGrid.innerHTML = '';
    
    const filteredApps = filterCategory === 'all' 
        ? appsData 
        : appsData.filter(app => app.category === filterCategory);
        
    filteredApps.forEach(app => {
        const card = document.createElement('div');
        card.className = `app-card ${app.featured ? 'featured' : ''}`;
        card.setAttribute('data-category', app.category);
        
        // Tags HTML
        const tagsHTML = app.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('');
        
        // Footer Buttons HTML
        let footerButtonsHTML = '';
        if (app.primaryLink) {
            footerButtonsHTML += `<a href="${app.primaryLink}" class="app-link app-link-primary"><i class="fa-solid fa-download"></i> ${app.primaryLabel}</a>`;
        }
        if (app.secondaryLink) {
            footerButtonsHTML += `<a href="${app.secondaryLink}" class="app-link app-link-secondary"><i class="fa-solid fa-circle-info"></i> ${app.secondaryLabel}</a>`;
        }

        // Get category label
        const categoryLabel = app.badge || 'Masaüstü Uygulaması';

        // Legal Links HTML
        let legalLinksHTML = '';
        if (app.privacyLink || app.termsLink) {
            legalLinksHTML = `
                <div class="app-legal-links">
                    ${app.privacyLink ? `<a href="${app.privacyLink}" target="_blank" class="legal-link"><i class="fa-solid fa-shield-halved"></i> Privacy Policy</a>` : ''}
                    ${app.termsLink ? `<a href="${app.termsLink}" target="_blank" class="legal-link"><i class="fa-solid fa-scale-balanced"></i> Terms</a>` : ''}
                </div>
            `;
        }

        // Specs List HTML (only for featured/asymmetric layout)
        let specsHTML = '';
        if (app.featured && app.specs) {
            const listItems = app.specs.map(spec => `<li class="spec-item"><i class="fa-solid fa-square-check"></i> <span>${spec}</span></li>`).join('');
            specsHTML = `
                <div class="app-specs-panel">
                    <span class="spec-title">[ Yetenekler & Özellikler ]</span>
                    <ul class="spec-list">
                        ${listItems}
                    </ul>
                </div>
            `;
        }

        // Inside card html depends on featured or not
        if (app.featured) {
            card.innerHTML = `
                <div class="app-card-layout">
                    <div class="app-featured-split">
                        <div>
                            ${app.image ? `<div class="app-preview-container"><img class="app-preview" src="${app.image}" alt="${app.title} preview"></div>` : ''}
                            <div class="app-header">
                                <div class="app-icon">
                                    <i class="${app.icon}"></i>
                                </div>
                                <div class="app-title-group">
                                    <h3>${app.title}</h3>
                                    <span class="app-category">${categoryLabel}</span>
                                </div>
                            </div>
                            <div class="app-body">
                                <p>${app.description}</p>
                                <div class="tech-tags">
                                    ${tagsHTML}
                                </div>
                                ${legalLinksHTML}
                            </div>
                        </div>
                        ${specsHTML}
                    </div>
                    <div class="app-footer">
                        ${footerButtonsHTML}
                    </div>
                </div>
            `;
        } else {
            card.innerHTML = `
                <div class="app-card-layout">
                    <div>
                        ${app.image ? `<div class="app-preview-container"><img class="app-preview" src="${app.image}" alt="${app.title} preview"></div>` : ''}
                        <div class="app-header">
                            <div class="app-icon">
                                <i class="${app.icon}"></i>
                            </div>
                            <div class="app-title-group">
                                <h3>${app.title}</h3>
                                <span class="app-category">${categoryLabel}</span>
                            </div>
                        </div>
                        <div class="app-body">
                            <p>${app.description}</p>
                            <div class="tech-tags">
                                ${tagsHTML}
                            </div>
                            ${legalLinksHTML}
                        </div>
                    </div>
                    <div class="app-footer">
                        ${footerButtonsHTML}
                    </div>
                </div>
            `;
        }
        appGrid.appendChild(card);
    });
}

// Sliding Indicator Logic for Filter Buttons
const filterIndicator = document.getElementById('filterIndicator');
const filterControls = document.getElementById('filterControls');
const filterButtons = document.querySelectorAll('.filter-btn');

function updateFilterIndicator(activeBtn) {
    if (!filterIndicator || !activeBtn) return;
    
    // Offset relative to the parent (.filter-controls)
    const leftOffset = activeBtn.offsetLeft;
    const buttonWidth = activeBtn.offsetWidth;
    
    filterIndicator.style.left = `${leftOffset}px`;
    filterIndicator.style.width = `${buttonWidth}px`;
}

// Attach filter button actions
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updateFilterIndicator(btn);
        
        const filter = btn.getAttribute('data-filter');
        renderApps(filter);
    });
});

// Window resize listener to keep sliding indicator positioned correctly
window.addEventListener('resize', () => {
    const activeBtn = document.querySelector('.filter-btn.active');
    updateFilterIndicator(activeBtn);
});

// Live Terminal Typing Simulation Ticker in Hero
const terminalBody = document.getElementById('terminalBody');
const terminalLogs = [
    { type: 'command', text: 'parse-udf --file="karar_tutanak_2026.udf"' },
    { type: 'status', text: 'Reading binary UDF header structure...' },
    { type: 'success', text: '[OK] Header verified. XML payload found (Size: 312KB).' },
    { type: 'status', text: 'Decrypting embedded electronic signature...' },
    { type: 'success', text: '[OK] E-Signature: Valid (Adalet Bakanligi Sertifikasi).' },
    { type: 'command', text: 'convert-tiff-to-pdf --input="tarama_ek_03.tiff"' },
    { type: 'status', text: 'Enhancing scan contrast & reducing backgrounds...' },
    { type: 'success', text: '[OK] Contrast calibrated. Compression ratio: 4.8x.' },
    { type: 'success', text: '[OK] PDF generated: tarama_ek_03.pdf (824 KB).' },
    { type: 'command', text: 'sync-google-calendar --sheet="AKA Court Hearings"' },
    { type: 'status', text: 'Authenticating with Google Workspace API...' },
    { type: 'success', text: '[OK] Retrieved 8 events. Synchronized with spreadsheet.' },
    { type: 'command', text: 'gazelist-sync --account="aka@kapar.org"' },
    { type: 'status', text: 'Verifying database checksums & syncing with Drive...' },
    { type: 'success', text: '[OK] Merged 42 local and 12 remote tasks. 0 conflicts.' }
];

let logIndex = 0;
let terminalLineNumber = 6;

function appendTerminalLog() {
    if (!terminalBody) return;
    
    const log = terminalLogs[logIndex];
    const logElement = document.createElement('div');
    logElement.className = 'terminal-line';
    
    let spanClass = 'muted';
    let textHTML = log.text;
    
    if (log.type === 'command') {
        textHTML = `$ <span class="accent">${log.text}</span>`;
    } else if (log.type === 'status') {
        textHTML = `<span class="muted">[status]</span> ${log.text}`;
    } else if (log.type === 'success') {
        textHTML = `<span class="success">[ok]</span> ${log.text}`;
    }
    
    logElement.innerHTML = `<span class="muted">${terminalLineNumber}  </span>${textHTML}`;
    terminalBody.appendChild(logElement);
    
    // Auto-scroll to show latest logs
    terminalBody.scrollTop = terminalBody.scrollHeight;
    
    // Prune top logs if too many lines to keep widget clean
    const lines = terminalBody.querySelectorAll('.terminal-line');
    if (lines.length > 9) {
        lines[0].remove();
    }
    
    // Increment log settings
    logIndex = (logIndex + 1) % terminalLogs.length;
    terminalLineNumber++;
}

// Initialize Render & Animations
document.addEventListener('DOMContentLoaded', () => {
    renderApps('all');
    
    // Initialize filter capsule
    const activeBtn = document.querySelector('.filter-btn.active');
    setTimeout(() => {
        updateFilterIndicator(activeBtn);
    }, 100);
    
    // Start terminal logs ticker
    setInterval(appendTerminalLog, 2500);
});

// Dynamic Header Styling on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '0.3rem 0';
        header.style.backgroundColor = 'rgba(12, 12, 11, 0.95)';
    } else {
        header.style.padding = '0';
        header.style.backgroundColor = 'rgba(12, 12, 11, 0.85)';
    }
});
