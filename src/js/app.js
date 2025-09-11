document.addEventListener('DOMContentLoaded', () => {
    // Developer tools protection removed for development

    // --- START: Multi-language Support ---
    const translations = {
        en: {
            appTitle: "Catalog Generator",
            languageLabel: "Language",
            step1Title: "Step 1: Upload Product Information",
            chooseFile: "Choose File",
            chooseFiles: "Choose Files",
            noFileChosen: "No file chosen",
            noFilesChosen: "No files chosen",
            downloadTemplate: "Download Template",
            step1Desc: "Use the 'page' column to assign products to specific pages. The tool will automatically adjust the layout for 1-9 products per page.",
            step2Title: "Step 2: Upload Product Pictures",
            step2Desc: "Image filename must match 'SKU'. Recommended size 800x800 pixels, max 2MB.",
            step3Title: "Step 3: Customize Configuration",
            promoDatePlaceholder: "Promotion Date (e.g., May Special)",
            promoTab: "Promotion",
            newArrivalsTab: "New Arrivals",
            promoTitlePlaceholder: "Promotion Title (e.g., Kampanj)",
            newArrivalsTitlePlaceholder: "New Arrivals Title (e.g., NYHETER)",
            footerTitle: "Custom Footer Text",
            appearanceTitle: "Customize Appearance",
            appearanceDesc: "Tip: Name origin flags after the country (e.g., Thailand.png). Other images: Header Logo (400x100), Header BG (600x100 recommended), Page BG (1240x1754), Price Tag (100x100), Footer (100x100).",
            headerLogo: "Header Logo",
            headerBg: "Header BG",
            pageBg: "Page BG",
            priceTagBg: "Price Tag BG",
            originFlags: "Origin Flags",
            footerImage: "Footer Image",
            zoomTitle: "Zoom Preview",
            printButton: "Print or Save as PDF",
            previewHeader: "Product Preview",
            previewText: "Please upload the Excel and image files on the left to begin.",
            statusParsingExcel: "Parsing Excel file...",
            statusParseSuccess: (count) => `Excel parsed successfully with ${count} products found.`,
            statusParseFailed: (error) => `Excel parsing failed with the following error: ${error}`,
            statusProcessingImages: "Processing images...",
            statusImagesSuccess: (processed, total) => `Images processed successfully: ${processed} out of ${total}`,
            statusImageProcessFailed: (name) => `Failed to process the following file: ${name}`,
            statusImageTooLarge: (name) => `The image ${name} is too large (over 2MB) and was skipped.`,
            statusImageCompressFailed: (name) => `Image compression failed for the file ${name}. Using the original file.`,
            statusRenderError: (error) => `The following rendering error occurred: ${error}`,
            statusUnknownError: "An unknown error occurred. Please check your files or refresh the page.",
            statusScriptError: "A script error occurred. Please refresh the page and try again.",
            statusTotalProducts: (total, matched) => `Total ${total} products, found ${matched} matching images.`,
            statusMissingImages: (skus) => `Missing images for the following SKUs: ${skus}`
        },
        zh: {
            appTitle: "产品目录生成器",
            languageLabel: "语言",
            step1Title: "第一步：上传产品信息",
            chooseFile: "选择文件",
            chooseFiles: "选择多个文件",
            noFileChosen: "未选择文件",
            noFilesChosen: "未选择文件",
            downloadTemplate: "下载模板",
            step1Desc: "使用 'page' 列将产品分配到特定页面。工具将自动为每页1-9个产品调整布局。",
            step2Title: "第二步：上传产品图片",
            step2Desc: "图片文件名必须与'SKU'匹配。推荐尺寸800x800像素，最大2MB。",
            step3Title: "第三步：自定义配置",
            promoDatePlaceholder: "促销日期 (例如, 五月特惠)",
            promoTab: "促销",
            newArrivalsTab: "新品",
            promoTitlePlaceholder: "促销标题 (例如, Kampanj)",
            newArrivalsTitlePlaceholder: "新品标题 (例如, NYHETER)",
            footerTitle: "自定义页脚文本",
            appearanceTitle: "自定义外观",
            appearanceDesc: "提示：将原产地旗帜命名为国家名 (例如, Thailand.png)。其他图片：页眉Logo (400x100), 页眉背景 (推荐600x100), 页面背景 (1240x1754), 价格标签 (100x100), 页脚 (100x100)。",
            headerLogo: "页眉Logo",
            headerBg: "页眉背景",
            pageBg: "页面背景",
            priceTagBg: "价格标签背景",
            originFlags: "原产地旗帜",
            footerImage: "页脚图片",
            zoomTitle: "缩放预览",
            printButton: "打印或另存为PDF",
            previewHeader: "产品预览",
            previewText: "请在左侧上传Excel和图片文件以开始。",
            statusParsingExcel: "正在解析Excel文件...",
            statusParseSuccess: (count) => `Excel解析成功，找到 ${count} 个产品。`,
            statusParseFailed: (error) => `Excel解析失败: ${error}`,
            statusProcessingImages: "正在处理图片...",
            statusImagesSuccess: (processed, total) => `图片处理成功: ${processed} / ${total}`,
            statusImageProcessFailed: (name) => `处理文件失败: ${name}`,
            statusImageTooLarge: (name) => `图片 ${name} 太大 (超过2MB)，已跳过。`,
            statusImageCompressFailed: (name) => `图片压缩失败: ${name}。使用原始文件。`,
            statusRenderError: (error) => `渲染时发生错误: ${error}`,
            statusUnknownError: "发生未知错误。请检查您的文件或刷新页面。",
            statusScriptError: "发生脚本错误。请刷新页面重试。",
            statusTotalProducts: (total, matched) => `共 ${total} 个产品，找到 ${matched} 张匹配图片。`,
            statusMissingImages: (skus) => `以下SKU缺少图片: ${skus}`
        },
        sv: {
            appTitle: "Kataloggenerator",
            languageLabel: "Språk",
            step1Title: "Steg 1: Ladda upp produktinformation",
            chooseFile: "Välj fil",
            chooseFiles: "Välj filer",
            noFileChosen: "Ingen fil vald",
            noFilesChosen: "Inga filer valda",
            downloadTemplate: "Ladda ner mall",
            step1Desc: "Använd 'page'-kolumnen för att tilldela produkter till specifika sidor. Verktyget justerar automatiskt layouten för 1-9 produkter per sida.",
            step2Title: "Steg 2: Ladda upp produktbilder",
            step2Desc: "Bildens filnamn måste matcha 'SKU'. Rekommenderad storlek 800x800 pixlar, max 2MB.",
            step3Title: "Steg 3: Anpassa konfiguration",
            promoDatePlaceholder: "Kampanjdatum (t.ex. Maj-special)",
            promoTab: "Kampanj",
            newArrivalsTab: "Nyheter",
            promoTitlePlaceholder: "Kampanjtitel (t.ex. Kampanj)",
            newArrivalsTitlePlaceholder: "Nyhetstitel (t.ex. NYHETER)",
            footerTitle: "Anpassad sidfotstext",
            appearanceTitle: "Anpassa utseende",
            appearanceDesc: "Tips: Namnge ursprungsflaggor efter landet (t.ex. Thailand.png). Andra bilder: Sidhuvud-logotyp (400x100), Sidhuvud-bakgrund (600x100 rekommenderas), Sidbakgrund (1240x1754), Prislapp (100x100), Sidfot (100x100).",
            headerLogo: "Sidhuvud-logotyp",
            headerBg: "Sidhuvud BG",
            pageBg: "Sidbakgrund",
            priceTagBg: "Prislapp BG",
            originFlags: "Ursprungsflaggor",
            footerImage: "Sidfotsbild",
            zoomTitle: "Zooma förhandsgranskning",
            printButton: "Skriv ut eller spara som PDF",
            previewHeader: "Produktförhandsgranskning",
            previewText: "Vänligen ladda upp Excel- och bildfilerna till vänster för att börja.",
            statusParsingExcel: "Analyserar Excel-fil...",
            statusParseSuccess: (count) => `Excel analyserades framgångsrikt med ${count} produkter hittade.`,
            statusParseFailed: (error) => `Excel-analys misslyckades med följande fel: ${error}`,
            statusProcessingImages: "Bearbetar bilder...",
            statusImagesSuccess: (processed, total) => `Bilder bearbetade framgångsrikt: ${processed} av ${total}`,
            statusImageProcessFailed: (name) => `Misslyckades med att bearbeta följande fil: ${name}`,
            statusImageTooLarge: (name) => `Bilden ${name} är för stor (över 2MB) och hoppades över.`,
            statusImageCompressFailed: (name) => `Bildkomprimering misslyckades för filen ${name}. Använder originalfilen.`,
            statusRenderError: (error) => `Följande renderingsfel inträffade: ${error}`,
            statusUnknownError: "Ett okänt fel inträffade. Kontrollera dina filer eller uppdatera sidan.",
            statusScriptError: "Ett skriptfel inträffade. Uppdatera sidan och försök igen.",
            statusTotalProducts: (total, matched) => `Totalt ${total} produkter, hittade ${matched} matchande bilder.`,
            statusMissingImages: (skus) => `Saknar bilder för följande SKU:er: ${skus}`
        }
    };

    let currentLang = localStorage.getItem('language') || 'en';
    let userHasUploaded = false; // Flag to check if user has uploaded their own files

    const languageSelector = document.getElementById('language-selector');

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        languageSelector.value = lang;

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (translations[lang] && translations[lang][key]) {
                const translation = translations[lang][key];
                if (typeof translation === 'function') {
                    // Functions are used for dynamic status messages, handle them elsewhere
                } else {
                    el.textContent = translation;
                }
            }
        });
        
        document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
            const key = el.dataset.langPlaceholder;
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        
        // Re-render preview to update placeholder text if visible
        renderPreview();
    }

    languageSelector.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    // --- END: Multi-language Support ---

    // --- START: Direct Access (Password Protection Removed) ---
    const appWrapper = document.getElementById('app-wrapper');

    function checkAccess() {
        // Direct access granted - no password required
        appWrapper.classList.remove('hidden');
        loadInitialPreview();
    }

    // --- END: Direct Access ---

    // Global variables to store data
    let productData = [];
    let productImages = {};
    let originImages = {};
    let backgroundUrl = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1240&h=1754&fit=crop&crop=center';
    let logoUrl = '';
    let priceTagUrl = '';
    let footerLogoUrl = '';
    let headerBackgroundUrl = '';
    let footerImageUrl = '';
    let bannerImageUrl = '';
    let currentTab = 'promotion';
    let backgroundOverlayColor = '#8B4513';
    let backgroundOverlayOpacity = 30;
    let gradientOverlayColor = '#ffffff';
    let gradientOverlayOpacity = 60;
    let enableGradientOverlay = false;
    let productImageAreaColor = '#ffffff';
    
    // Page layout settings
    let pageLayouts = {
        1: '2x2',
        2: '2x2', 
        3: '2x2'
    };

    // --- START: Sample Data ---
    const sampleProductData = [
        { page: 1, sku: '1120', name: 'Lee Kum Kee Double Deluxe Soy Sauce', size: '500ml', brand: 'Lee Kum Kee', origin: 'Hong Kong', price: 89.90, bbd: '2026-12-31', unit: 'st', remark: 'Premium' },
        { page: 1, sku: '1122', name: 'Kungsörnen Skimmed Milk Powder', size: '10kg', brand: 'Kungsörnen', origin: 'Sweden', price: 299.90, bbd: '2026-06-30', unit: 'st', remark: 'Bulk' },
        { page: 1, sku: '1126', name: 'Gold Kili Ginseng Chrysanthemum Drink', size: '180g', brand: 'Gold Kili', origin: 'Singapore', price: 149.90, bbd: '2026-01-15', unit: 'st', remark: 'Natural' },
        { page: 1, sku: '1134', name: 'Chaokoh Coconut Milk', size: '2900ml', brand: 'Chaokoh', origin: 'Thailand', price: 79.90, bbd: '2025-10-20', unit: 'st', remark: 'Hot Sale' },
    ];
    const sampleProductImages = {
        '1120': 'images/1120.png',
        '1122': 'images/1122.png',
        '1126': 'images/1126.png',
        '1134': 'images/1134.png',
    };
    const sampleOriginImages = {
        'Hong Kong': 'images/CTFood biglogo (1).png',
        'Sweden': 'images/CTFood biglogo (1).png',
        'Singapore': 'images/CTFood biglogo (1).png',
        'Thailand': 'images/CTFood biglogo (1).png',
    };
    // --- END: Sample Data ---
    
    function loadInitialPreview() {
        if (!userHasUploaded) {
            productData = sampleProductData;
            productImages = sampleProductImages;
            originImages = sampleOriginImages;
            // You can also set sample URLs for logo, background etc. if you want
            // logoUrl = 'images/CTFood biglogo (1).png';
            renderPreview();
        }
    }

    // DOM element references
    const excelFileInput = document.getElementById('excelFile');
    const imageFilesInput = document.getElementById('imageFiles');
    const backgroundFileInput = document.getElementById('backgroundFile');
    const logoFileInput = document.getElementById('logoFile');
    const priceTagFileInput = document.getElementById('priceTagFile');
    const originFlagFilesInput = document.getElementById('originFlagFiles');
    const footerLogoFileInput = document.getElementById('footerLogoFile');
    const headerBackgroundFileInput = document.getElementById('headerBackgroundFile');
    const promoTimeInput = document.getElementById('promoTime');
    const promoTextInput = document.getElementById('promoText');
    const newArrivalsTextInput = document.getElementById('newArrivalsText');
    const footerTextInput = document.getElementById('footerText');
    const printBtn = document.getElementById('printBtn');
    const previewArea = document.getElementById('preview');
    const statusDiv = document.getElementById('status');
    const downloadTemplateBtn = document.getElementById('downloadTemplateBtn');
    
    // Tab elements
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    // Zoom controls
    const zoomSlider = document.getElementById('zoomSlider');
    const zoomValueSpan = document.getElementById('zoomValue');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    
    // Tab switching functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            currentTab = tabName;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(`${tabName}-content`).classList.add('active');
            renderPreview();
        });
    });

    // --- Start of Zoom Functionality ---
    function updateZoom(value) {
        const zoomLevel = Math.max(50, Math.min(150, value)); // Clamp value between 50 and 150
        if (previewArea) previewArea.style.transform = `scale(${zoomLevel / 100})`;
        if (zoomValueSpan) zoomValueSpan.textContent = zoomLevel;
        if (zoomSlider) zoomSlider.value = zoomLevel;
    }

    if (zoomSlider) {
        zoomSlider.addEventListener('input', (e) => {
            updateZoom(parseInt(e.target.value, 10));
        });
    }

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => {
            const currentZoom = parseInt(zoomSlider.value, 10);
            updateZoom(currentZoom + 10);
        });
    }

    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => {
            const currentZoom = parseInt(zoomSlider.value, 10);
            updateZoom(currentZoom - 10);
        });
    }
    // --- End of Zoom Functionality ---

    // Rich text editor toolbar
    const toolbar = document.querySelector('.toolbar');
    toolbar.addEventListener('click', (e) => {
        const command = e.target.closest('[data-command]')?.dataset.command;
        if (command) {
             e.preventDefault();
             document.execCommand(command, false, null);
             footerTextInput.focus();
        }
    });
    
    const fontNameSelect = document.getElementById('fontNameSelect');
    const fontSizeSelect = document.getElementById('fontSizeSelect');
    const fontColorPicker = document.getElementById('fontColorPicker');

    fontNameSelect.addEventListener('change', (e) => {
        document.execCommand('fontName', false, e.target.value);
        footerTextInput.focus();
    });
    fontSizeSelect.addEventListener('change', (e) => {
        document.execCommand('fontSize', false, e.target.value);
        footerTextInput.focus();
    });
    fontColorPicker.addEventListener('input', (e) => {
        document.execCommand('foreColor', false, e.target.value);
        footerTextInput.focus();
    });
    
    function getTranslation(key, ...args) {
        const langPack = translations[currentLang] || translations.en;
        const translation = langPack[key];
        if (typeof translation === 'function') {
            return translation(...args);
        }
        return translation || key;
    }
    
    function addStatusMessage(key, type = 'info', ...args) {
        if (!statusDiv) return;
        const text = getTranslation(key, ...args);
        const div = document.createElement('div');
        const typeClasses = {
            error: 'status-message error',
            success: 'status-message success',
            warning: 'status-message warning',
            info: 'status-message info'
        };
        const icons = { error: '⚠', success: '✓', warning: '⚠', info: 'ℹ' };
        div.className = typeClasses[type] || typeClasses.info;
        div.innerHTML = `<span class="status-icon">${icons[type] || icons.info}</span>${text}`;
        statusDiv.appendChild(div);
    }
    
    function clearStatus() {
        if (statusDiv) statusDiv.innerHTML = '';
    }
    
    window.addEventListener('unhandledrejection', event => {
        console.error('Unhandled Rejection:', event.reason);
        addStatusMessage('statusUnknownError', 'error');
    });

    window.onerror = (message, source, lineno, colno, error) => {
        console.error('Global Error:', { message, source, lineno, colno, error });
        addStatusMessage('statusScriptError', 'error');
    };

    function debounce(func, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    function updateBackgroundOverlay() {
        const overlays = document.querySelectorAll('.page-overlay');
        overlays.forEach(overlay => {
            const opacity = backgroundOverlayOpacity / 100;
            const rgb = hexToRgb(backgroundOverlayColor);
            overlay.style.backgroundColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
        });
    }

    function updateGradientOverlay() {
        const gradientOverlays = document.querySelectorAll('.page-gradient-overlay');
        gradientOverlays.forEach(overlay => {
            if (enableGradientOverlay) {
                const opacity = gradientOverlayOpacity / 100;
                const rgb = hexToRgb(gradientOverlayColor);
                overlay.style.background = `linear-gradient(180deg, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity}) 0%, transparent 100%)`;
                overlay.style.display = 'block';
            } else {
                overlay.style.display = 'none';
            }
        });
    }
    
    // Update product image area background color
    function updateProductImageAreaColor() {
        const productImageAreas = document.querySelectorAll('.product-image-area');
        productImageAreas.forEach(area => {
            area.style.backgroundColor = productImageAreaColor;
        });
    }

    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function adjustNameFontSizes() {
        document.querySelectorAll('.product-name-container').forEach(container => {
            const nameElement = container.querySelector('.product-name');
            if (!nameElement) return;
            nameElement.style.fontSize = '0.875rem';
            let currentFontSize = 14;
            while (nameElement.scrollHeight > container.clientHeight && currentFontSize > 8) {
                currentFontSize--;
                nameElement.style.fontSize = currentFontSize + 'px';
            }
        });
    }

    function adjustPriceFontSizes() {
        document.querySelectorAll('.price-tag').forEach(container => {
            const priceNumber = container.querySelector('.price-number');
            if (!priceNumber) return;
            priceNumber.style.fontSize = '1.25rem';
            let currentFontSize = 20;
            while (priceNumber.scrollWidth > container.clientWidth * 0.85 && currentFontSize > 10) {
                currentFontSize--;
                priceNumber.style.fontSize = currentFontSize + 'px';
            }
        });
    }
    
    function adjustRemarkFontSizes() {
        document.querySelectorAll('.remark-tag').forEach(remarkElement => {
            const container = remarkElement.parentElement;
            if (!container) return;
            remarkElement.style.fontSize = '0.75rem';
            let currentFontSize = 12;
            while (remarkElement.scrollWidth > container.clientWidth * 0.85 && currentFontSize > 8) {
                currentFontSize--;
                remarkElement.style.fontSize = currentFontSize + 'px';
            }
        });
    }

    function formatPrice(price) {
        const num = parseFloat(price || 0);
        return num.toFixed(2).replace('.', ',');
    }

    function normalizeData(data) {
        const filteredData = data.filter(row => (row.SKU || row.sku) && String(row.SKU || row.sku).trim() !== '');
        const standardKeys = ['page', 'sku', 'name', 'size', 'brand', 'origin', 'price', 'bbd', 'unit', 'remark'];
        return filteredData.map(row => {
            const newRow = {};
            const rowKeys = Object.keys(row);
            for (const stdKey of standardKeys) {
                const foundKey = rowKeys.find(rowKey => rowKey.toLowerCase() === stdKey);
                newRow[stdKey] = foundKey ? row[foundKey] : '';
            }
            return newRow;
        });
    }

    const renderPreview = () => {
        if (productData.length === 0 && userHasUploaded) {
            const header = getTranslation('previewHeader');
            const text = getTranslation('previewText');
            previewArea.innerHTML = `<div class="flex items-center justify-center h-full border-2 border-dashed border-gray-300 rounded-lg"><div class="text-center"><svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z" /></svg><h3 class="mt-2 text-sm font-medium text-gray-900">${header}</h3><p class="mt-1 text-sm text-gray-500">${text}</p></div></div>`;
            printBtn.classList.add('hidden');
            clearStatus();
            return;
        }

        previewArea.classList.add('loading');
        
        setTimeout(() => {
            try {
                previewArea.innerHTML = '';
                clearStatus();

                let matchedCount = 0;
                const missingImages = [];
                productData.forEach(product => {
                    const productCode = product['sku'];
                    if (productImages[productCode]) matchedCount++;
                    else missingImages.push(productCode);
                });

                if (userHasUploaded) {
                    addStatusMessage('statusTotalProducts', 'info', productData.length, matchedCount);
                    if (missingImages.length > 0) {
                        addStatusMessage('statusMissingImages', 'error', missingImages.join(', '));
                    }
                }

                const promoTime = promoTimeInput.value;
                const isPriceHidden = currentTab === 'new-arrivals';
                const newArrivalsText = newArrivalsTextInput.value || 'New Arrivals';
                const promoText = currentTab === 'promotion' ? (promoTextInput.value || 'Kampanj') : newArrivalsText;
                const totalPages = productData.reduce((max, p) => Math.max(max, parseInt(p.page) || 0), 0);

                for (let i = 1; i <= totalPages; i++) {
                    const pageProducts = productData.filter(p => parseInt(p.page) === i);
                    if (pageProducts.length === 0) continue;

                    const page = document.createElement('div');
                    page.className = 'page';
                    if (backgroundUrl) page.style.backgroundImage = `url(${backgroundUrl})`;
                    
                    // Create overlay div
                    const overlay = document.createElement('div');
                    overlay.className = 'page-overlay';
                    page.appendChild(overlay);
                    
                    // Set initial overlay color
                    const opacity = backgroundOverlayOpacity / 100;
                    const rgb = hexToRgb(backgroundOverlayColor);
                    overlay.style.backgroundColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;

                    // Create gradient overlay
                    const gradientOverlay = document.createElement('div');
                    gradientOverlay.className = 'page-gradient-overlay';
                    page.appendChild(gradientOverlay);
                    
                    // Set initial gradient overlay
                    if (enableGradientOverlay) {
                        const gradientOpacity = gradientOverlayOpacity / 100;
                        const gradientRgb = hexToRgb(gradientOverlayColor);
                        gradientOverlay.style.background = `linear-gradient(180deg, rgba(${gradientRgb.r}, ${gradientRgb.g}, ${gradientRgb.b}, ${gradientOpacity}) 0%, transparent 100%)`;
                    } else {
                        gradientOverlay.style.display = 'none';
                    }

                    const header = document.createElement('div');
                    header.className = 'page-header flex items-center justify-between pb-6 pl-6';
                    header.style.position = 'relative';
                    header.style.zIndex = '10';

                    // Left side - CT FOOD Logo
                    const logoContainer = document.createElement('div');
                    logoContainer.className = 'flex items-center';
                    logoContainer.innerHTML = `<img src="images/CTFood biglogo (1).png" alt="CT FOOD Logo" style="max-height: 60px; max-width: 200px; object-fit: contain;">`;

                    // Right side - Oriental decorations and promo text
                    const rightContainer = document.createElement('div');
                    rightContainer.className = 'flex items-center space-x-4';
                    
                    // Banner image
                    const bannerContainer = document.createElement('div');
                    bannerContainer.className = 'header-banner-container';
                    const bannerImageSrc = bannerImageUrl || 'images/banner_top.png';
                    bannerContainer.innerHTML = `
                        <img src="${bannerImageSrc}" alt="Promotional Banner" style="max-height: 80px; max-width: 200px; object-fit: contain;">
                    `;
                    
                    rightContainer.appendChild(bannerContainer);

                    header.appendChild(logoContainer);
                    header.appendChild(rightContainer);

                    const content = document.createElement('div');
                    const layout = pageLayouts[i] || '2x2';
                    content.className = `page-content layout-${layout}`;
                    const numProducts = pageProducts.length;
                    content.setAttribute('data-product-count', numProducts);
                    
                        let cardHeight, cardWidth;
                        const actualProductCount = Math.min(numProducts, 4); // Limit to max 4
                        if (actualProductCount === 1) { cardWidth = '60%'; cardHeight = '500px'; } 
                        else if (actualProductCount === 2) { cardWidth = 'calc(50% - 5mm)'; cardHeight = '400px'; } 
                        else if (actualProductCount === 3) { cardWidth = 'calc(33.333% - 7mm)'; cardHeight = '380px'; } 
                        else if (actualProductCount === 4) { cardWidth = 'calc(50% - 5mm)'; cardHeight = '350px'; }

                    // Limit to maximum 4 products per page
                    const limitedPageProducts = pageProducts.slice(0, 4);
                    limitedPageProducts.forEach(product => {
                        const card = document.createElement('div');
                        card.className = 'product-card';
                        
                        const imageUrl = productImages[product['sku']] || 'images/1120.png';
                        const price = formatPrice(product['price']);
                        const unit = product['unit'] || '';
                        const brand = product['brand'] || '';
                        const originValue = product['origin'] || '';
                        
                        // Brand and origin flag
                        let brandOriginHTML = '';
                        if (brand || originValue) {
                            brandOriginHTML = '<div class="brand-origin-container">';
                            
                            // Add brand name
                            if (brand) {
                                brandOriginHTML += `<div class="brand-name">${brand}</div>`;
                            }
                            
                            // Add origin flag
                            if (originValue) {
                                const origins = originValue.split(',').map(o => o.trim());
                                const firstOrigin = origins[0];
                                const imageKey = Object.keys(originImages).find(k => k.toLowerCase() === firstOrigin.toLowerCase());
                                const originImageUrl = imageKey ? originImages[imageKey] : null;
                                if (originImageUrl) {
                                    brandOriginHTML += `<img src="${originImageUrl}" alt="${firstOrigin}" class="origin-flag" title="${firstOrigin}">`;
                                }
                            }
                            
                            brandOriginHTML += '</div>';
                        }
                        
                        // Chinese translation (you can add a mapping here)
                        const chineseNames = {
                            'Coconut Milk': '椰奶',
                            'Cooking Oil Special': '菜油',
                            'Frying Oil Long Life': '炸油',
                            'Ox Fillet': '牛里脊肉',
                            'Pangasius Fillet': '鲶鱼片'
                        };
                        const chineseName = chineseNames[product['name']] || '';

                        card.innerHTML = `
                            <div class="product-image-area">
                                ${brandOriginHTML}
                                <img src="${imageUrl}" alt="${product['name']}" class="product-image">
                            </div>
                            <div class="product-name-container">
                                <div class="product-sku">${product['sku'] || ''}:</div>
                                <div class="product-name">${product['name'] || ''}</div>
                                ${product['size'] ? `<div class="product-size">${product['size']}</div>` : ''}
                                ${chineseName ? `<div class="product-chinese">${chineseName}</div>` : ''}
                            </div>
                            <div class="price-tag">
                                <img src="images/Group 1.png" alt="Price tag background">
                                <div class="price-number">${price}:-</div>
                                <div class="price-unit">/ ${unit || ''}</div>
                            </div>
                        `;
                        
                        content.appendChild(card);
                    });

                    const footer = document.createElement('div');
                    footer.className = 'page-footer mt-auto pt-4 pb-4';
                    footer.style.position = 'relative';
                    footer.style.zIndex = '10';
                    
                    const footerTextValue = footerTextInput.innerHTML;
                    const footerMainContentHTML = `
                        <div class="flex items-start justify-between">
                            <!-- Left side - Fortune Cookie with CT FOOD logo -->
                            <div class="flex items-center">
                                <!-- Fortune Cookie or Custom Footer Image -->
                                <div class="relative">
                                    <img src="${footerImageUrl || 'images/fortune_cookie.png'}" alt="CT FOOD Footer Image" style="height: 70px; width: auto; object-fit: contain;">
                                </div>
                            </div>
                            
                            <!-- Right side - Contact info and terms -->
                            <div class="flex-1 ml-2">
                                <div class="text-blue-800 font-semibold text-xs mb-0.5" style="font-size: 10px;">
                                    STOCKHOLM: 08 581 658 80 | order.sth@ctfood.se | www.ctfood.se
                                </div>
                                <div class="w-full h-px bg-blue-300 mb-1"></div>
                                <div class="text-blue-800 text-xs leading-tight" style="font-size: 9px;">
                                    ${footerTextValue}
                                </div>
                            </div>
                        </div>
                    `;
                    footer.innerHTML = footerMainContentHTML;

                    page.appendChild(header);
                    page.appendChild(content);
                    page.appendChild(footer);
                    previewArea.appendChild(page);
                }

                previewArea.classList.remove('loading');
                setTimeout(() => {
                    if (currentTab === 'promotion') {
                       adjustNameFontSizes();
                    }
                    adjustPriceFontSizes();
                    adjustRemarkFontSizes();
                }, 100);
                printBtn.classList.remove('hidden');
            } catch (error) {
                console.error('Rendering error:', error);
                previewArea.classList.remove('loading');
                addStatusMessage('statusRenderError', 'error', error.message);
            }
            
            // Apply product image area background color after rendering
            updateProductImageAreaColor();
        }, 50);
    };

    async function handleImageUpload(file, skipCompression = false) {
        userHasUploaded = true;
        if (skipCompression) {
            return URL.createObjectURL(file);
        }
        if (file.size > 2 * 1024 * 1024) {
            addStatusMessage('statusImageTooLarge', 'error', file.name);
            return null;
        }
        const options = { maxSizeMB: 1, maxWidthOrHeight: 800, useWebWorker: false };
        try {
            if (typeof imageCompression === 'undefined') {
                console.warn('imageCompression library not loaded. Skipping compression.');
                return URL.createObjectURL(file);
            }
            const compressedFile = await imageCompression(file, options);
            return URL.createObjectURL(compressedFile);
        } catch (error) {
            console.error("Image compression error: ", error);
            addStatusMessage('statusImageCompressFailed', 'warning', file.name);
            return URL.createObjectURL(file);
        }
    }

    async function processImageFiles(files, targetObject, nameSpan) {
        userHasUploaded = true;
        if (files.length === 0) {
            nameSpan.textContent = getTranslation('noFilesChosen');
            return;
        }
        nameSpan.textContent = `${files.length} ${getTranslation('filesSelected') || 'files selected'}`;
        clearStatus();
        addStatusMessage('statusProcessingImages', 'info');
        
        Object.keys(targetObject).forEach(key => URL.revokeObjectURL(targetObject[key]));
        for (const key in targetObject) { delete targetObject[key]; }

        let processedCount = 0;
        for (const file of files) {
            try {
                const imageUrl = await handleImageUpload(file);
                if (imageUrl) {
                    const fileName = file.name.split('.').slice(0, -1).join('.');
                    targetObject[fileName] = imageUrl;
                    processedCount++;
                }
            } catch (error) {
                addStatusMessage('statusImageProcessFailed', 'error', file.name);
            }
        }
        addStatusMessage('statusImagesSuccess', 'success', processedCount, files.length);
        renderPreview();
    }

    async function setupImageInput(inputId, urlVariableSetter, imageTypeName, skipCompression = false) {
        const input = document.getElementById(inputId);
        input.addEventListener('change', async (event) => {
            userHasUploaded = true;
            const file = event.target.files[0];
            const fileNameSpan = document.getElementById(inputId + 'Name');
            if (!file) {
                fileNameSpan.textContent = getTranslation('noFileChosen');
                urlVariableSetter('');
                renderPreview();
                saveSettings();
                return;
            }
            fileNameSpan.textContent = file.name;
            try {
                const url = await handleImageUpload(file, skipCompression);
                urlVariableSetter(url);
                renderPreview();
                saveSettings();
            } catch (error) {
                addStatusMessage('statusImageLoadFailed', 'error', imageTypeName, error.message);
            }
        });
    }

    // Load saved settings from localStorage
    function loadSavedSettings() {
        // Load background overlay settings
        const savedOverlayColor = localStorage.getItem('backgroundOverlayColor');
        const savedOverlayOpacity = localStorage.getItem('backgroundOverlayOpacity');
        
        if (savedOverlayColor) {
            backgroundOverlayColor = savedOverlayColor;
            document.getElementById('backgroundOverlayColor').value = savedOverlayColor;
        }
        
        if (savedOverlayOpacity) {
            backgroundOverlayOpacity = parseInt(savedOverlayOpacity);
            document.getElementById('backgroundOverlayOpacity').value = backgroundOverlayOpacity;
            document.getElementById('overlayOpacityValue').textContent = backgroundOverlayOpacity;
        }

        // Load gradient overlay settings
        const savedGradientColor = localStorage.getItem('gradientOverlayColor');
        const savedGradientOpacity = localStorage.getItem('gradientOverlayOpacity');
        const savedEnableGradient = localStorage.getItem('enableGradientOverlay');
        
        // Load product image area color
        const savedProductImageAreaColor = localStorage.getItem('productImageAreaColor');
        
        if (savedGradientColor) {
            gradientOverlayColor = savedGradientColor;
            document.getElementById('gradientOverlayColor').value = savedGradientColor;
        }
        
        if (savedGradientOpacity) {
            gradientOverlayOpacity = parseInt(savedGradientOpacity);
            document.getElementById('gradientOverlayOpacity').value = gradientOverlayOpacity;
            document.getElementById('gradientOpacityValue').textContent = gradientOverlayOpacity;
        }
        
        if (savedEnableGradient) {
            enableGradientOverlay = savedEnableGradient === 'true';
            document.getElementById('enableGradientOverlay').checked = enableGradientOverlay;
        }
        
        if (savedProductImageAreaColor) {
            productImageAreaColor = savedProductImageAreaColor;
            document.getElementById('productImageAreaColor').value = productImageAreaColor;
        }

        // Load page layout settings
        const savedPageLayouts = localStorage.getItem('pageLayouts');
        if (savedPageLayouts) {
            pageLayouts = JSON.parse(savedPageLayouts);
            document.getElementById('page1Layout').value = pageLayouts[1] || '2x2';
            document.getElementById('page2Layout').value = pageLayouts[2] || '2x2';
            document.getElementById('page3Layout').value = pageLayouts[3] || '2x2';
        }
        
        // Load promo settings
        const savedPromoTime = localStorage.getItem('promoTime');
        const savedPromoText = localStorage.getItem('promoText');
        const savedNewArrivalsText = localStorage.getItem('newArrivalsText');
        
        if (savedPromoTime) {
            document.getElementById('promoTime').value = savedPromoTime;
        }
        
        if (savedPromoText) {
            document.getElementById('promoText').value = savedPromoText;
        }
        
        if (savedNewArrivalsText) {
            document.getElementById('newArrivalsText').value = savedNewArrivalsText;
        }
        
        // Load footer text
        const savedFooterText = localStorage.getItem('footerText');
        if (savedFooterText) {
            document.getElementById('footerText').innerHTML = savedFooterText;
        }
        
        // Load saved image URLs
        const savedBackgroundUrl = localStorage.getItem('backgroundUrl');
        const savedLogoUrl = localStorage.getItem('logoUrl');
        const savedPriceTagUrl = localStorage.getItem('priceTagUrl');
        const savedFooterLogoUrl = localStorage.getItem('footerLogoUrl');
        const savedHeaderBackgroundUrl = localStorage.getItem('headerBackgroundUrl');
        const savedFooterImageUrl = localStorage.getItem('footerImageUrl');
        const savedBannerImageUrl = localStorage.getItem('bannerImageUrl');
        
        if (savedBackgroundUrl) {
            backgroundUrl = savedBackgroundUrl;
            document.getElementById('backgroundFileName').textContent = 'Background loaded';
        }
        if (savedLogoUrl) {
            logoUrl = savedLogoUrl;
            document.getElementById('logoFileName').textContent = 'Logo loaded';
        }
        if (savedPriceTagUrl) {
            priceTagUrl = savedPriceTagUrl;
            document.getElementById('priceTagFileName').textContent = 'Price tag loaded';
        }
        if (savedFooterLogoUrl) {
            footerLogoUrl = savedFooterLogoUrl;
            document.getElementById('footerLogoFileName').textContent = 'Footer logo loaded';
        }
        if (savedHeaderBackgroundUrl) {
            headerBackgroundUrl = savedHeaderBackgroundUrl;
            document.getElementById('headerBackgroundFileName').textContent = 'Header background loaded';
        }
        if (savedFooterImageUrl) {
            footerImageUrl = savedFooterImageUrl;
            document.getElementById('footerImageFileName').textContent = 'Footer image loaded';
        }
        if (savedBannerImageUrl) {
            bannerImageUrl = savedBannerImageUrl;
            document.getElementById('bannerImageFileName').textContent = 'Banner image loaded';
        }
    }

    // Save settings to localStorage
    function saveSettings() {
        localStorage.setItem('backgroundOverlayColor', backgroundOverlayColor);
        localStorage.setItem('backgroundOverlayOpacity', backgroundOverlayOpacity.toString());
        localStorage.setItem('gradientOverlayColor', gradientOverlayColor);
        localStorage.setItem('gradientOverlayOpacity', gradientOverlayOpacity.toString());
        localStorage.setItem('productImageAreaColor', productImageAreaColor);
        localStorage.setItem('enableGradientOverlay', enableGradientOverlay.toString());
        localStorage.setItem('pageLayouts', JSON.stringify(pageLayouts));
        localStorage.setItem('promoTime', document.getElementById('promoTime').value);
        localStorage.setItem('promoText', document.getElementById('promoText').value);
        localStorage.setItem('newArrivalsText', document.getElementById('newArrivalsText').value);
        localStorage.setItem('footerText', document.getElementById('footerText').innerHTML);
        
        // Save background image URL
        if (backgroundUrl) {
            localStorage.setItem('backgroundUrl', backgroundUrl);
        }
        
        // Save footer image URL
        if (footerImageUrl) {
            localStorage.setItem('footerImageUrl', footerImageUrl);
        }
        if (logoUrl) {
            localStorage.setItem('logoUrl', logoUrl);
        }
        if (bannerImageUrl) {
            localStorage.setItem('bannerImageUrl', bannerImageUrl);
        }
        if (priceTagUrl) {
            localStorage.setItem('priceTagUrl', priceTagUrl);
        }
        if (footerLogoUrl) {
            localStorage.setItem('footerLogoUrl', footerLogoUrl);
        }
        if (headerBackgroundUrl) {
            localStorage.setItem('headerBackgroundUrl', headerBackgroundUrl);
        }
    }

    // Event listeners
    excelFileInput.addEventListener('change', (event) => {
        userHasUploaded = true;
        const file = event.target.files[0];
        if (!file) {
            document.getElementById('excelFileName').textContent = getTranslation('noFileChosen');
            return;
        }
        document.getElementById('excelFileName').textContent = file.name;
        clearStatus();
        addStatusMessage('statusParsingExcel', 'info');
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, {type: 'array'});
                const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
                productData = normalizeData(jsonData);
                addStatusMessage('statusParseSuccess', 'success', productData.length);
                renderPreview();
            } catch (error) {
                addStatusMessage('statusParseFailed', 'error', error.message);
            }
        };
        reader.readAsArrayBuffer(file);
    });

    imageFilesInput.addEventListener('change', async (event) => {
        await processImageFiles(Array.from(event.target.files), productImages, document.getElementById('imageFilesName'));
    });

    originFlagFilesInput.addEventListener('change', async (event) => {
        await processImageFiles(Array.from(event.target.files), originImages, document.getElementById('originFlagFilesName'));
    });

    setupImageInput('backgroundFile', url => backgroundUrl = url, '背景图片');
    setupImageInput('logoFile', url => logoUrl = url, 'logo图片');
    setupImageInput('priceTagFile', url => priceTagUrl = url, '价格标签图片');
    setupImageInput('footerLogoFile', url => footerLogoUrl = url, '页脚logo图片');
    setupImageInput('headerBackgroundFile', url => headerBackgroundUrl = url, '页眉背景', true);
    setupImageInput('footerImageFile', url => footerImageUrl = url, '页脚图片');
    setupImageInput('bannerImageFile', url => bannerImageUrl = url, '横幅图片');

    promoTimeInput.addEventListener('input', debounce(() => {
        renderPreview();
        saveSettings();
    }, 300));
    promoTextInput.addEventListener('input', debounce(() => {
        renderPreview();
        saveSettings();
    }, 300));
    newArrivalsTextInput.addEventListener('input', debounce(() => {
        renderPreview();
        saveSettings();
    }, 300));
    footerTextInput.addEventListener('input', debounce(() => {
        renderPreview();
        saveSettings();
    }, 300));

    // Background overlay controls
    const backgroundOverlayColorInput = document.getElementById('backgroundOverlayColor');
    const backgroundOverlayOpacityInput = document.getElementById('backgroundOverlayOpacity');
    const overlayOpacityValueSpan = document.getElementById('overlayOpacityValue');

    backgroundOverlayColorInput.addEventListener('input', (e) => {
        backgroundOverlayColor = e.target.value;
        updateBackgroundOverlay();
        saveSettings();
    });

    backgroundOverlayOpacityInput.addEventListener('input', (e) => {
        backgroundOverlayOpacity = parseInt(e.target.value);
        overlayOpacityValueSpan.textContent = backgroundOverlayOpacity;
        updateBackgroundOverlay();
        saveSettings();
    });

    // Gradient overlay controls
    const gradientOverlayColorInput = document.getElementById('gradientOverlayColor');
    const gradientOverlayOpacityInput = document.getElementById('gradientOverlayOpacity');
    const gradientOpacityValueSpan = document.getElementById('gradientOpacityValue');
    const enableGradientOverlayCheckbox = document.getElementById('enableGradientOverlay');

    gradientOverlayColorInput.addEventListener('input', (e) => {
        gradientOverlayColor = e.target.value;
        updateGradientOverlay();
        saveSettings();
    });

    gradientOverlayOpacityInput.addEventListener('input', (e) => {
        gradientOverlayOpacity = parseInt(e.target.value);
        gradientOpacityValueSpan.textContent = gradientOverlayOpacity;
        updateGradientOverlay();
        saveSettings();
    });

    enableGradientOverlayCheckbox.addEventListener('change', (e) => {
        enableGradientOverlay = e.target.checked;
        updateGradientOverlay();
        saveSettings();
    });
    
    // Product image area background color control
    const productImageAreaColorInput = document.getElementById('productImageAreaColor');
    
    productImageAreaColorInput.addEventListener('input', (e) => {
        productImageAreaColor = e.target.value;
        updateProductImageAreaColor();
        saveSettings();
    });

    // Page layout controls
    const page1LayoutSelect = document.getElementById('page1Layout');
    const page2LayoutSelect = document.getElementById('page2Layout');
    const page3LayoutSelect = document.getElementById('page3Layout');

    page1LayoutSelect.addEventListener('change', (e) => {
        pageLayouts[1] = e.target.value;
        saveSettings();
        renderPreview();
    });

    page2LayoutSelect.addEventListener('change', (e) => {
        pageLayouts[2] = e.target.value;
        saveSettings();
        renderPreview();
    });

    page3LayoutSelect.addEventListener('change', (e) => {
        pageLayouts[3] = e.target.value;
        saveSettings();
        renderPreview();
    });

    printBtn.addEventListener('click', () => window.print());

    // Clear settings button
    const clearSettingsBtn = document.getElementById('clearSettingsBtn');
    clearSettingsBtn.addEventListener('click', () => {
        if (confirm('确定要清除所有保存的设置吗？这将重置所有自定义内容。')) {
            // Clear localStorage
            localStorage.removeItem('backgroundOverlayColor');
            localStorage.removeItem('backgroundOverlayOpacity');
            localStorage.removeItem('gradientOverlayColor');
            localStorage.removeItem('gradientOverlayOpacity');
            localStorage.removeItem('enableGradientOverlay');
            localStorage.removeItem('productImageAreaColor');
            localStorage.removeItem('pageLayouts');
            localStorage.removeItem('promoTime');
            localStorage.removeItem('promoText');
            localStorage.removeItem('newArrivalsText');
            localStorage.removeItem('footerText');
            localStorage.removeItem('backgroundUrl');
            localStorage.removeItem('logoUrl');
            localStorage.removeItem('priceTagUrl');
            localStorage.removeItem('footerLogoUrl');
            localStorage.removeItem('headerBackgroundUrl');
            localStorage.removeItem('footerImageUrl');
            localStorage.removeItem('bannerImageUrl');
            
            // Reset to defaults
            backgroundOverlayColor = '#8B4513';
            backgroundOverlayOpacity = 30;
            gradientOverlayColor = '#ffffff';
            gradientOverlayOpacity = 60;
            enableGradientOverlay = false;
            productImageAreaColor = '#ffffff';
            pageLayouts = { 1: '2x2', 2: '2x2', 3: '2x2' };
            backgroundUrl = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1240&h=1754&fit=crop&crop=center';
            logoUrl = '';
            priceTagUrl = '';
            footerLogoUrl = '';
            headerBackgroundUrl = '';
            footerImageUrl = '';
            bannerImageUrl = '';
            
            // Reset form fields
            document.getElementById('backgroundOverlayColor').value = backgroundOverlayColor;
            document.getElementById('backgroundOverlayOpacity').value = backgroundOverlayOpacity;
            document.getElementById('overlayOpacityValue').textContent = backgroundOverlayOpacity;
            document.getElementById('gradientOverlayColor').value = gradientOverlayColor;
            document.getElementById('gradientOverlayOpacity').value = gradientOverlayOpacity;
            document.getElementById('gradientOpacityValue').textContent = gradientOverlayOpacity;
            document.getElementById('enableGradientOverlay').checked = enableGradientOverlay;
            document.getElementById('productImageAreaColor').value = productImageAreaColor;
            document.getElementById('page1Layout').value = pageLayouts[1];
            document.getElementById('page2Layout').value = pageLayouts[2];
            document.getElementById('page3Layout').value = pageLayouts[3];
            document.getElementById('promoTime').value = 'September 2013';
            document.getElementById('promoText').value = 'Erbjudanden';
            document.getElementById('newArrivalsText').value = 'NYHETER';
            document.getElementById('footerText').innerHTML = 'Med reservation för slutförsäljning och tryckfel. Priserna är angivna i svenska kronor exkl. moms och gäller under December 2024. Leveransvillkor: fritt vårt lager. Leveranstid: 1-3 dagar. Betalningsvillkor: 15 dagar netto efter godkänd sedvanlig kreditprövning.';
            
            // Reset file name displays
            document.getElementById('backgroundFileName').textContent = '未选择文件';
            document.getElementById('logoFileName').textContent = '未选择文件';
            document.getElementById('priceTagFileName').textContent = '未选择文件';
            document.getElementById('footerLogoFileName').textContent = '未选择文件';
            document.getElementById('headerBackgroundFileName').textContent = '未选择文件';
            document.getElementById('footerImageFileName').textContent = 'No file chosen (using default fortune cookie)';
            document.getElementById('bannerImageFileName').textContent = 'No file chosen (using default banner)';
            
            // Re-render preview
            renderPreview();
            addStatusMessage('statusSettingsCleared', 'success');
        }
    });

    downloadTemplateBtn.addEventListener('click', () => {
        const templateData = [{ page: 1, sku: '2327', name: 'Coconut Milk', size: '6x2900ml', brand: 'Aroy-D', origin: 'Thailand,Vietnam', price: 83.90, bbd: '2026-12-31', unit: 'st', remark: 'Hot Sale' }];
        const ws = XLSX.utils.json_to_sheet(templateData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Products');
        XLSX.writeFile(wb, 'catalog_template.xlsx');
    });

    // Make functions globally available
    window.renderPreview = renderPreview;
    window.handleImageUpload = handleImageUpload;
    window.processImageFiles = processImageFiles;
    window.setupImageInput = setupImageInput;
    window.loadSavedSettings = loadSavedSettings;
    window.saveSettings = saveSettings;

    // Initial setup
    setLanguage(currentLang);
    loadSavedSettings();
    checkAccess();
});
