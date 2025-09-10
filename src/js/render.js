// Rendering functions for the catalog generator

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

                const header = document.createElement('div');
                header.className = 'page-header flex items-center justify-between pb-6';
                header.style.position = 'relative';
                header.style.zIndex = '10';

                // Left side - CT FOOD Logo
                const logoContainer = document.createElement('div');
                logoContainer.className = 'flex items-center';
                logoContainer.innerHTML = logoUrl ? 
                    `<img src="${logoUrl}" alt="CT FOOD Logo" style="max-height: 60px; max-width: 200px; object-fit: contain;">` : 
                    `<div class="bg-blue-600 text-white px-4 py-2 rounded">
                        <h2 class="text-2xl font-bold">CT FOOD</h2>
                        <p class="text-xs">ORIENTEN NÄRA TILL HANDS</p>
                    </div>`;

                // Right side - Oriental decorations and promo text
                const rightContainer = document.createElement('div');
                rightContainer.className = 'flex items-center space-x-4';
                
                // Decorative elements (mooncakes and lanterns)
                const decorations = document.createElement('div');
                decorations.className = 'flex items-center space-x-2';
                decorations.innerHTML = `
                    <div class="w-8 h-8 bg-yellow-300 rounded-full border-2 border-yellow-600"></div>
                    <div class="w-8 h-8 bg-yellow-300 rounded-full border-2 border-yellow-600"></div>
                    <div class="w-8 h-8 bg-yellow-300 rounded-full border-2 border-yellow-600"></div>
                `;
                
                // Promo text
                const promoContainer = document.createElement('div');
                promoContainer.className = 'text-right';
                promoContainer.innerHTML = `
                    <h3 class="text-3xl font-bold text-red-600 mb-1">${promoText}</h3>
                    <p class="text-lg font-semibold text-gray-800">${promoTime}</p>
                `;
                
                rightContainer.appendChild(decorations);
                rightContainer.appendChild(promoContainer);

                header.appendChild(logoContainer);
                header.appendChild(rightContainer);

                const content = document.createElement('div');
                content.className = 'page-content';
                const numProducts = pageProducts.length;
                content.setAttribute('data-product-count', numProducts);
                
                let cardHeight, cardWidth;
                if (numProducts === 1) { cardWidth = '60%'; cardHeight = '500px'; } 
                else if (numProducts === 2) { cardWidth = 'calc(50% - 5mm)'; cardHeight = '400px'; } 
                else if (numProducts === 3) { cardWidth = 'calc(33.333% - 7mm)'; cardHeight = '380px'; } 
                else if (numProducts === 4) { cardWidth = 'calc(50% - 5mm)'; cardHeight = '350px'; } 
                else if (numProducts <= 6) { cardWidth = 'calc(33.333% - 7mm)'; cardHeight = '300px'; } 
                else { cardWidth = 'calc(33.333% - 7mm)'; cardHeight = '160px'; }

                pageProducts.forEach(product => {
                    const card = document.createElement('div');
                    card.className = 'product-card';
                    
                    const imageUrl = productImages[product['sku']] || 'https://via.placeholder.com/200x200/e2e8f0/333333?text=No+Image';
                    const price = formatPrice(product['price']);
                    const unit = product['unit'] || '';
                    const brand = product['brand'] || '';
                    const originValue = product['origin'] || '';
                    
                    // Origin flag
                    let originFlagHTML = '';
                    if (originValue) {
                        const origins = originValue.split(',').map(o => o.trim());
                        const firstOrigin = origins[0];
                        const imageKey = Object.keys(originImages).find(k => k.toLowerCase() === firstOrigin.toLowerCase());
                        const originImageUrl = imageKey ? originImages[imageKey] : null;
                        if (originImageUrl) {
                            originFlagHTML = `<img src="${originImageUrl}" alt="${firstOrigin}" class="origin-flag" title="${firstOrigin}">`;
                        }
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
                            ${originFlagHTML}
                            <img src="${imageUrl}" alt="${product['name']}" class="product-image" 
                                 onload="console.log('Image loaded:', '${imageUrl}')" 
                                 onerror="console.log('Image failed:', '${imageUrl}'); this.src='https://via.placeholder.com/200x200/e2e8f0/333333?text=Image+Failed'">
                        </div>
                        <div class="product-name-container">
                            <div class="product-name">${product['name'] || ''}</div>
                            <div class="product-sku">#${product['sku'] || ''}: ${product['size'] || ''}</div>
                            ${chineseName ? `<div class="product-chinese">${chineseName}</div>` : ''}
                        </div>
                        <div class="price-tag">
                            <div class="price-number">${price}:-</div>
                            <div class="price-unit">${unit || ''}</div>
                        </div>
                    `;
                    
                    content.appendChild(card);
                });

                const footer = document.createElement('div');
                footer.className = 'page-footer mt-auto pt-4';
                footer.style.position = 'relative';
                footer.style.zIndex = '10';
                
                const footerTextValue = footerTextInput.innerHTML;
                const footerMainContentHTML = `
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                            <div class="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                                <span class="font-bold">CT FOOD</span>
                                <span class="text-xs ml-2">the orient at close range</span>
                            </div>
                            <div class="w-8 h-8 bg-yellow-300 rounded-full border-2 border-yellow-600"></div>
                        </div>
                        <div class="text-right text-xs text-gray-800">
                            <div class="font-semibold">MALMÖ: 040 888 10 | STOCKHOLM: 08 581 658 80</div>
                            <div>www.ctfood.se | info@ctfood.se</div>
                            <div class="mt-1 text-gray-600">${footerTextValue}</div>
                        </div>
                    </div>
                    <div class="text-center text-xs text-gray-500 mt-2">${i} / ${totalPages}</div>
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
}

// Save settings to localStorage
function saveSettings() {
    localStorage.setItem('backgroundOverlayColor', backgroundOverlayColor);
    localStorage.setItem('backgroundOverlayOpacity', backgroundOverlayOpacity.toString());
    localStorage.setItem('promoTime', document.getElementById('promoTime').value);
    localStorage.setItem('promoText', document.getElementById('promoText').value);
    localStorage.setItem('newArrivalsText', document.getElementById('newArrivalsText').value);
    localStorage.setItem('footerText', document.getElementById('footerText').innerHTML);
    
    // Save background image URL
    if (backgroundUrl) {
        localStorage.setItem('backgroundUrl', backgroundUrl);
    }
    if (logoUrl) {
        localStorage.setItem('logoUrl', logoUrl);
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
