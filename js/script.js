        // Complete iLUNARA Website Script

        // ============ NAVIGATION & MOBILE MENU ============
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');

        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.innerHTML = mainNav.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        // ============ SECTION MANAGEMENT ============
        const sections = {
            hero: document.getElementById('heroSection'),
            skinType: document.getElementById('skinTypeSection'),
            concerns: document.getElementById('concernsSection'),
            shop: document.getElementById('shopSection'),
            bestsellers: document.getElementById('bestsellersSection'),
            profile: document.getElementById('profileSection')
        };

        const navLinks = {
            home: document.getElementById('homeNavLink'),
            skinType: document.getElementById('skinTypeLink'),
            concerns: document.getElementById('concernsLink'),
            shop: document.getElementById('shopLink'),
            bestsellers: document.getElementById('bestsellersLink'),
            profile: document.getElementById('profileLink')
        };

        const ctaButton = document.getElementById('shopCta');
        const logoLink = document.getElementById('homeLink');

        // Hide all sections except hero initially
        function hideAllSections() {
            Object.values(sections).forEach(section => {
                section.style.display = 'none';
                section.classList.remove('active');
            });
        }

        // Show a specific section
        function showSection(sectionName) {
            hideAllSections();

            if (sectionName === 'home') {
                sections.hero.style.display = 'flex';
                sections.hero.classList.add('active');
                document.body.style.paddingTop = '80px';

                // Scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                sections[sectionName].style.display = 'block';
                sections[sectionName].classList.add('active');
                document.body.style.paddingTop = '80px';

                // Scroll to top of the section
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }

            // Update active nav link
            Object.values(navLinks).forEach(link => {
                if (link.classList) {
                    link.classList.remove('active');
                }
            });

            if (sectionName !== 'home' && navLinks[sectionName]) {
                navLinks[sectionName].classList.add('active');
            }

            // Close mobile menu
            mainNav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

            // Highlight products if showing shop section
            if (sectionName === 'shop') {
                setTimeout(() => {
                    highlightRecommendedProducts(selectedSkinType);
                }, 100);
            }
        }

        // ============ EVENT LISTENERS ============
        navLinks.home.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('home');
        });

        navLinks.skinType.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('skinType');
        });

        navLinks.concerns.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('concerns');
        });

        navLinks.shop.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('shop');
        });

        navLinks.bestsellers.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('bestsellers');
        });

        navLinks.profile.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('profile');
        });

        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('home');
        });

        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('shop');
        });

        // ============ PRODUCT RECOMMENDATION SYSTEM ============
        let selectedSkinType = 'normal';
        let selectedProductCategory = '';

        // UPDATED PRODUCT DATABASE with more products
        const productRecommendations = {
            // ☀️ SUNSCREENS
            sunscreen: {
                oily: [
                    {
                        id: 1,
                        name: "Earth Rhythm Phyto Shield Matte Mineral Sunscreen SPF 50",
                        type: "100% Mineral • Matte Finish",
                        description: "Mineral sunscreen with zinc oxide filters that sits as a physical barrier and reflects UV rays. Matte, powdery feel and oil-free, non-sticky texture perfect for oily or acne-prone skin.",
                        features: [
                            "SPF 50 Protection",
                            "100% Mineral (Zinc Oxide)",
                            "Matte Finish",
                            "Oil-Free Formula",
                            "Non-Sticky Texture",
                            "Physical Barrier Protection"
                        ],
                        price: "₹799",
                        link: "https://earthrhythm.com/products/spf-50-matte-mineral-sunscreen-phyto-shield",
                        rating: 4.2,
                        bestFor: "Oily/Acne-Prone Skin",
                        ingredients: ["Zinc Oxide", "Mineral Filters"]
                    },
                    {
                        id: 2,
                        name: "Re'equil Ultra Matte Dry Touch Sunscreen Gel SPF 50",
                        type: "Matte Gel • Sweat-Resistant",
                        description: "Mineral/chemical hybrid sunscreen offering SPF 50 and strong broad-spectrum protection, with a matte finish and sweat/water resistance. Good for oily skin in hot, humid conditions.",
                        features: [
                            "SPF 50 PA++++",
                            "Matte Finish",
                            "Sweat/Water Resistant",
                            "Non-Greasy",
                            "Broad Spectrum",
                            "No White Cast"
                        ],
                        price: "₹645",
                        link: "https://www.bigbasket.com/pd/40342837/reequil-ultra-matte-dry-touch-sunscreen-with-spf-50-pa-50-g/",
                        rating: 4.5,
                        bestFor: "Oily/Acne-Prone Skin",
                        ingredients: ["Zinc Oxide", "Titanium Dioxide", "Chemical Filters"]
                    }
                ],
                dry: [
                    {
                        id: 3,
                        name: "The Derma Co Ultra Light Zinc Mineral Sunscreen SPF 50",
                        type: "Mineral • Broad-Spectrum",
                        description: "Mineral sunscreen combining zinc oxide + glycerin, giving SPF 50 broad-spectrum protection while remaining oil-free and water/sweat-resistant. Light but protective formula for dry skin.",
                        features: [
                            "SPF 50 PA+++",
                            "Broad-Spectrum UVA/UVB",
                            "Oil-Free",
                            "No White Cast",
                            "Sweat/Water-Resistant",
                            "Zinc Oxide + Glycerin"
                        ],
                        price: "₹649",
                        link: "https://thedermaco.com/product/ultra-light-zinc-mineral-sunscreen-with-spf-50-for-broad-spectrum-uva-uvb-blue-light-protection-50g",
                        rating: 4.3,
                        bestFor: "Dry Skin",
                        ingredients: ["Zinc Oxide", "Glycerin"]
                    },
                    {
                        id: 4,
                        name: "Dr. Sheth's Ceramide & Vitamin C SPF 50 Sunscreen",
                        type: "Skin-Barrier Friendly",
                        description: "Formulated for Indian skin with barrier-supporting ceramides and antioxidant Vitamin C. Offers broad-spectrum UV protection while soothing sensitive skin.",
                        features: [
                            "SPF 50 Protection",
                            "Ceramides + Vitamin C",
                            "Broad-Spectrum",
                            "No Harsh Irritants",
                            "Lightweight Formula",
                            "Skin-Barrier Support"
                        ],
                        price: "₹699",
                        link: "http://www.myntra.com/Face-Sunscreen/DR.+SHETHS/DR-SHETHS-Ceramide--Vitamin-C-SPF-50-Sunscreen--In-Vivo-Tested-50-g/23370400/buy",
                        rating: 4.5,
                        bestFor: "Sensitive/Reactive Skin",
                        ingredients: ["Ceramides", "Vitamin C"]
                    }
                ],
                sensitive: [
                    {
                        id: 5,
                        name: "Gabit 100% Mineral Sunscreen SPF 50+",
                        type: "100% Mineral • Broad-Spectrum",
                        description: "Mineral-based, broad-spectrum SPF 50+ sunscreen that's gentle, free from chemical filters/silicones, and offers pollution + blue-light protection. Balanced for normal/combination skin.",
                        features: [
                            "SPF 50+ Protection",
                            "100% Mineral",
                            "Broad-Spectrum",
                            "Pollution + Blue-Light Protection",
                            "Balanced Hydration",
                            "All-Skin-Types Friendly"
                        ],
                        price: "₹899",
                        link: "https://www.amazon.in/Gabit-Sunscreen-Resistant-Protection-Spectrum/dp/B0CLD2R2J6",
                        rating: 4.6,
                        bestFor: "Normal/Combination Skin",
                        ingredients: ["Mineral Filters", "Antioxidants"]
                    },
                    {
                        id: 6,
                        name: "Minimalist SPF 50 PA++++ Multivitamin Sunscreen",
                        type: "All-Type Vitamin Sunscreen",
                        description: "Broad-spectrum sunscreen with vitamins and skin-friendly filters, lightweight but slightly more moisturizing than matte gels — good for normal to dry or combination skin.",
                        features: [
                            "SPF 50 PA++++",
                            "Multivitamin Complex",
                            "No White Cast",
                            "Lightweight",
                            "Broad Spectrum",
                            "Photoaging Protection"
                        ],
                        price: "₹664",
                        link: "https://www.nykaa.com/minimalist-spf-50-pa-sunscreen-with-multi-vitamin-for-reducing-photoaging-no-white-cast/p/17999996",
                        rating: 4.4,
                        bestFor: "Normal/Dry/Combination Skin",
                        ingredients: ["Vitamin Complex", "Broad Spectrum Filters"]
                    }
                ],
                normal: [
                    {
                        id: 7,
                        name: "Dot & Key Vitamin C + E Super Bright Sunscreen SPF",
                        type: "Brightening SPF",
                        description: "Broad-spectrum sunscreen with added antioxidants (vitamin C & E), offering UV protection plus skin brightening / glow — good for people concerned with dullness, uneven tone, pigmentation.",
                        features: [
                            "SPF 50 PA++++",
                            "Vitamin C + E",
                            "Brightening Effect",
                            "Antioxidant Protection",
                            "Lightweight",
                            "No White Cast"
                        ],
                        price: "₹387",
                        link: "https://www.nykaa.com/dot-key-vitamin-c-e-super-bright-sunscreen-spf-50-pa/p/10665518",
                        rating: 4.3,
                        bestFor: "All Skin Types",
                        ingredients: ["Vitamin C", "Vitamin E", "Broad Spectrum Filters"]
                    },
                    {
                        id: 8,
                        name: "Foxtale Essentials Brightening SPF 50 Sunscreen",
                        type: "Daily Brightening SPF",
                        description: "Balanced sunscreen + brightening formula (with vitamin C and niacinamide) that protects skin and helps fight pigmentation/dullness over time; good for all skin types.",
                        features: [
                            "SPF 50 Protection",
                            "Vitamin C + Niacinamide",
                            "Brightening Formula",
                            "UVA/UVB Filters",
                            "No White Cast",
                            "Non-Greasy"
                        ],
                        price: "₹297",
                        link: "https://www.purplle.com/product/foxtale-essentials-brightening-spf-50-sunscreen-with-vitamin-c-and-niacinamide",
                        rating: 4.2,
                        bestFor: "All Skin Types",
                        ingredients: ["Vitamin C", "Niacinamide", "Broad Spectrum Filters"]
                    }
                ]
            },

            // 🧴 FACE-WASHES
            facewash: {
                oily: [
                    {
                        id: 101,
                        name: "La Roche-Posay Effaclar Purifying Foaming Gel",
                        type: "Purifying Foaming Gel",
                        description: "Gentle foaming gel cleanser that removes excess sebum and impurities without over-stripping. Formulated for oily/combination/acne-prone skin; helps mattify and clarify pore congestion.",
                        features: [
                            "Foaming Gel Formula",
                            "Removes Excess Sebum",
                            "Mattifying Effect",
                            "Clarifies Pore Congestion",
                            "Fragrance-Minimal",
                            "Daily Use"
                        ],
                        price: "₹2,185",
                        link: "https://www.flipkart.com/la-roche-posay-effaclar-purifying-foaming-gel-cleanser-oily-skin-13-52-fl-oz/p/itm0e1cd51fe070f",
                        rating: 4.6,
                        bestFor: "Oily/Acne-Prone Skin",
                        ingredients: ["Zinc PID", "Thermal Spring Water"]
                    },
                    {
                        id: 102,
                        name: "CeraVe Foaming Facial Cleanser",
                        type: "Ceramide Foaming Cleanser",
                        description: "Soap-free foaming cleanser with essential ceramides + niacinamide + hyaluronic acid. Cleanses oil and impurities but helps maintain skin barrier (less rebound oiliness).",
                        features: [
                            "Ceramides + Niacinamide",
                            "Soap-Free Formula",
                            "Maintains Skin Barrier",
                            "Non-Comedogenic",
                            "Dermatologist-Developed",
                            "Oil Control"
                        ],
                        price: "₹920",
                        link: "https://www.amazon.in/CeraVe-Foaming-Cleanser-Normal-Dermatologist-Developed/dp/B07C5SKVL7",
                        rating: 4.5,
                        bestFor: "Normal to Oily Skin",
                        ingredients: ["Ceramides", "Niacinamide", "Hyaluronic Acid"]
                    }
                ],
                dry: [
                    {
                        id: 103,
                        name: "Cetaphil Gentle Skin Cleanser",
                        type: "Soap-Free • Hydrating",
                        description: "Mild, non-foaming cleanser that gently removes dirt and impurities without stripping away natural oils. Provides hydration so skin stays soft and not overly dry.",
                        features: [
                            "Soap-Free Formula",
                            "Hydrating",
                            "pH-Balanced",
                            "Non-Irritating",
                            "Non-Foaming",
                            "Gentle Cleansing"
                        ],
                        price: "₹1,169",
                        link: "https://www.flipkart.com/beauty-and-grooming/body-face-skin-care/body-and-face-care/face-wash/cetaphil~brand/pr?sid=g9b%2Cema%2C5la%2Cjav",
                        rating: 4.4,
                        bestFor: "Dry/Sensitive Skin",
                        ingredients: ["Gentle Surfactants", "Hydrating Agents"]
                    },
                    {
                        id: 104,
                        name: "CeraVe Hydrating/Ceramide Cleanser",
                        type: "Hydrating Ceramide Cleanser",
                        description: "Creamy, non-foaming cleanser with ceramides and hyaluronic acid to hydrate while cleansing. Designed to preserve/restore skin barrier; suitable for daily gentle cleansing for dry skin.",
                        features: [
                            "Ceramides + Hyaluronic Acid",
                            "Creamy Non-Foaming",
                            "Preserves Skin Barrier",
                            "Fragrance-Free",
                            "Dermatologist-Developed",
                            "Gentle Cleansing"
                        ],
                        price: "₹1,000",
                        link: "https://www.amazon.in/Cerave-Foaming-Facial-Cleanser-Ounce/dp/B003YMJJSK",
                        rating: 4.5,
                        bestFor: "Dry/Normal Skin",
                        ingredients: ["Ceramides", "Hyaluronic Acid"]
                    }
                ],
                sensitive: [
                    {
                        id: 105,
                        name: "Cetaphil Gentle Skin Cleanser (Sensitive)",
                        type: "Fragrance-Free • Hypoallergenic",
                        description: "Formulated to avoid harsh surfactants, fragrances, and strong detergents. Cleanses without stripping natural moisture or triggering irritation, safe for daily use.",
                        features: [
                            "Fragrance-Free",
                            "Soap-Free",
                            "pH-Balanced",
                            "Non-Irritating",
                            "Hypoallergenic",
                            "Gentle Formula"
                        ],
                        price: "₹1,169",
                        link: "https://www.flipkart.com/beauty-and-grooming/body-face-skin-care/body-and-face-care/face-wash/cetaphil~brand/pr?sid=g9b%2Cema%2C5la%2Cjav",
                        rating: 4.4,
                        bestFor: "Sensitive/Reactive Skin",
                        ingredients: ["Gentle Cleansers", "Moisture Barrier Support"]
                    },
                    {
                        id: 106,
                        name: "Kiehl's Ultra Facial Cleanser",
                        type: "Gentle Daily Cleanser",
                        description: "Mild, non-stripping cleanser that removes surface dirt while keeping skin comfortable. Good for dry or dehydrated skin that still needs a reliable everyday cleanser.",
                        features: [
                            "Mild Formula",
                            "Non-Stripping",
                            "Suitable for Daily Use",
                            "Comfortable Cleansing",
                            "Makeup-Light Days",
                            "Follow with Moisturizer"
                        ],
                        price: "₹960",
                        link: "https://www.nykaa.com/kiehl-s-ultra-facial-cleanser/p/27616",
                        rating: 4.3,
                        bestFor: "Dry/Normal/Sensitive Skin",
                        ingredients: ["Squalane", "Avocado Oil"]
                    }
                ],
                normal: [
                    {
                        id: 107,
                        name: "CeraVe Foaming Facial Cleanser (Normal/Combo)",
                        type: "Balanced Cleanse • Oil-Control",
                        description: "Strikes balance between removing excess oil/dirt and being gentle enough not to overly dry skin. Perfect for combination skin with both oily and normal areas.",
                        features: [
                            "Balanced Formula",
                            "Oil-Control",
                            "Gentle Enough for Regular Use",
                            "Non-Comedogenic",
                            "Deep Cleansing",
                            "Fresh Feeling"
                        ],
                        price: "₹920",
                        link: "https://www.amazon.in/CeraVe-Foaming-Cleanser-Normal-Dermatologist-Developed/dp/B07C5SKVL7",
                        rating: 4.3,
                        bestFor: "Normal/Combination Skin",
                        ingredients: ["Balanced Cleansers", "Oil-Control Agents"]
                    },
                    {
                        id: 108,
                        name: "The Ordinary Squalane Cleanser",
                        type: "Gentle Hydrating Cleanser",
                        description: "Oil-based melting cleanser that gently dissolves makeup & sunscreen and leaves skin soft — rinseable. Good when you want hydration preserved on drier cheeks but also clean pores on oilier areas.",
                        features: [
                            "Oil-Based Melting Cleanser",
                            "Gentle Makeup Removal",
                            "Preserves Hydration",
                            "Rinseable Formula",
                            "Good for Double Cleanse",
                            "Softens Skin"
                        ],
                        price: "₹5,650",
                        link: "https://www.nykaa.com/the-ordinary-squalane-cleanser/p/5003140",
                        rating: 4.6,
                        bestFor: "Combination/Normal Skin",
                        ingredients: ["Squalane", "Emollients"]
                    }
                ]
            },

            // 🔄 TONERS
            toner: {
                oily: [
                    {
                        id: 201,
                        name: "Lacto Calamine Cucumber Face Toner",
                        type: "Budget Pore-Tightening",
                        description: "A classic for oily/acne-prone skin: cucumber + green tea + niacinamide help control excess oil, tighten pores, and soothe skin. Lightweight and refreshing.",
                        features: [
                            "Cucumber + Green Tea",
                            "Niacinamide",
                            "Oil Control",
                            "Pore Tightening",
                            "Refreshing",
                            "Budget-Friendly"
                        ],
                        price: "₹104",
                        link: "https://www.firstcry.com/lacto-calamine/lacto-calamine-cucumber-with-green-tea-and-niacinamide-face-toner-120-ml/13000532/product-detail",
                        rating: 4.2,
                        bestFor: "Oily/Acne-Prone Skin",
                        ingredients: ["Cucumber", "Green Tea", "Niacinamide"]
                    },
                    {
                        id: 202,
                        name: "Minimalist PHA 3% Toner",
                        type: "Gentle Exfoliating Toner",
                        description: "A gentle, alcohol-free toner with PHA (a mild exfoliating acid) that helps clear dead skin, unclog pores and refine texture. Useful if you get blackheads, congested pores or oily shine.",
                        features: [
                            "3% PHA",
                            "Alcohol-Free",
                            "Gentle Exfoliation",
                            "Pore Refining",
                            "Texture Improvement",
                            "Non-Drying"
                        ],
                        price: "₹379",
                        link: "https://beminimalist.co/products/pha-3-biotic-toner?currency=INR&variant=37451276484769",
                        rating: 4.5,
                        bestFor: "Oily/Combination Skin",
                        ingredients: ["PHA (Polyhydroxy Acid)"]
                    }
                ],
                dry: [
                    {
                        id: 203,
                        name: "The Face Shop Rice & Ceramide Moisturizing Toner",
                        type: "Hydrating Ceramide Toner",
                        description: "A richer, moisturizing toner that uses rice extracts and ceramides to deliver hydration and help skin retain moisture. Good if your skin feels tight or flaky after cleansing.",
                        features: [
                            "Rice Extracts",
                            "Ceramides",
                            "Deep Hydration",
                            "Moisture Retention",
                            "Rich Texture",
                            "Skin Barrier Support"
                        ],
                        price: "₹899",
                        link: "https://thefaceshop.in/products/rice-ceramide-moisturizing-toner?currency=INR&variant=46446219755672",
                        rating: 4.6,
                        bestFor: "Dry/Dehydrated Skin",
                        ingredients: ["Rice Extracts", "Ceramides"]
                    },
                    {
                        id: 204,
                        name: "Cetaphil Healthy Radiance Refresh Facial Toner",
                        type: "Gentle Brightening Toner",
                        description: "Gentle, fragrance-free and hypoallergenic toner that provides hydration and helps revive dull, dry skin. Includes skin-brightening actives to help improve tone while nourishing.",
                        features: [
                            "Fragrance-Free",
                            "Hypoallergenic",
                            "Hydrating",
                            "Brightening Actives",
                            "Gentle Formula",
                            "Dull Skin Revival"
                        ],
                        price: "₹824",
                        link: "https://www.nykaa.com/cetaphil-bhr-brightness-refresh-toner/p/1171880",
                        rating: 4.4,
                        bestFor: "Dry/Sensitive Skin",
                        ingredients: ["Brightening Actives", "Hydrating Agents"]
                    }
                ],
                sensitive: [
                    {
                        id: 205,
                        name: "Dot & Key Rice Water Probiotics Hydrating Toner",
                        type: "Hydrating Probiotic Toner",
                        description: "Lightweight but deeply hydrating, with rice water + probiotics + hyaluronic acid to support skin barrier, lock in moisture, and give a dewy finish. Good for daily use if skin easily gets dry.",
                        features: [
                            "Rice Water + Probiotics",
                            "Hyaluronic Acid",
                            "Skin Barrier Support",
                            "Deep Hydration",
                            "Dewy Finish",
                            "Alcohol-Free"
                        ],
                        price: "₹199",
                        link: "https://www.amazon.in/Hydrating-Hyaluronic-Sensitive-Alcohol-Free-Exfoliates/dp/B09RWQ54C5",
                        rating: 4.3,
                        bestFor: "Sensitive/Dry Skin",
                        ingredients: ["Rice Water", "Probiotics", "Hyaluronic Acid"]
                    },
                    {
                        id: 206,
                        name: "Himalaya Refreshing & Clarifying Toner",
                        type: "Budget Gentle Toner",
                        description: "A budget-friendly toner that gently restores pH balance, refreshes skin, and can be used daily even on sensitive skin.",
                        features: [
                            "Budget-Friendly",
                            "pH Balancing",
                            "Refreshing",
                            "Gentle Formula",
                            "Daily Use",
                            "Suitable for Sensitive Skin"
                        ],
                        price: "₹90",
                        link: "https://www.nykaa.com/himalaya-refreshing-&-clarifying-toner/p/3409",
                        rating: 4.1,
                        bestFor: "Sensitive/Normal Skin",
                        ingredients: ["Botanical Extracts", "pH Balancers"]
                    }
                ],
                normal: [
                    {
                        id: 207,
                        name: "Lacto Calamine Cucumber Toner (Combination)",
                        type: "Oil Control Toner",
                        description: "Helps keep T-zone oil under control while the cucumber and green tea maintain a bit of calm, balancing oily/dry zones. Good 'all-in-one' when you don't want different products.",
                        features: [
                            "Balances Oily/Dry Zones",
                            "Cucumber + Green Tea",
                            "T-Zone Oil Control",
                            "Calming Effect",
                            "All-in-One Solution",
                            "Refreshing"
                        ],
                        price: "₹104",
                        link: "https://www.firstcry.com/lacto-calamine/lacto-calamine-cucumber-with-green-tea-and-niacinamide-face-toner-120-ml/13000532/product-detail",
                        rating: 4.2,
                        bestFor: "Combination Skin",
                        ingredients: ["Cucumber", "Green Tea", "Niacinamide"]
                    },
                    {
                        id: 208,
                        name: "Minimalist PHA 3% Toner (Combination)",
                        type: "Balanced Exfoliating Toner",
                        description: "A gentle exfoliating toner that can help manage oil and clogged pores without over-drying — useful if parts of your face are oily, other parts dry.",
                        features: [
                            "3% PHA",
                            "Balanced Exfoliation",
                            "Manages Oil & Dryness",
                            "Non-Over-Drying",
                            "Pore Refining",
                            "Alcohol-Free"
                        ],
                        price: "₹379",
                        link: "https://beminimalist.co/products/pha-3-biotic-toner?currency=INR&variant=37451276484769",
                        rating: 4.5,
                        bestFor: "Combination Skin",
                        ingredients: ["PHA (Polyhydroxy Acid)"]
                    }
                ]
            },

            // 🧪 FACE SERUMS
            serum: {
                oily: [
                    {
                        id: 301,
                        name: "The Derma Co Sali-Cinamide Anti-Acne Serum",
                        type: "Anti-Acne Serum",
                        description: "Targets active acne and acne marks — uses 2% salicylic acid + 5% niacinamide to deeply cleanse pores, control excess sebum, and reduce blemishes.",
                        features: [
                            "2% Salicylic Acid",
                            "5% Niacinamide",
                            "Acne & Mark Treatment",
                            "Pore Cleansing",
                            "Sebum Control",
                            "Blemish Reduction"
                        ],
                        price: "₹332",
                        link: "https://www.purplle.com/product/the-derma-co-sali-cinamide-anti-acne-face-serum",
                        rating: 4.3,
                        bestFor: "Oily/Acne-Prone Skin",
                        ingredients: ["Salicylic Acid", "Niacinamide"]
                    },
                    {
                        id: 302,
                        name: "Plum 10% Niacinamide & Rice Water Face Serum",
                        type: "Niacinamide Serum",
                        description: "Lightweight niacinamide-rich serum with fermented rice water, squalane, caffeine & vitamin E — helps regulate sebum, calm inflammation, minimize pores, and brighten skin.",
                        features: [
                            "10% Niacinamide",
                            "Fermented Rice Water",
                            "Sebum Regulation",
                            "Pore Minimizing",
                            "Brightening",
                            "Anti-Inflammatory"
                        ],
                        price: "₹259",
                        link: "https://www.amazon.in/Plum-Niacinamide-Fermented-Blemish-Free-Fragrance-Free/dp/B097R8B7J7",
                        rating: 4.5,
                        bestFor: "Oily/Combination Skin",
                        ingredients: ["Niacinamide", "Rice Water", "Squalane"]
                    }
                ],
                dry: [
                    {
                        id: 303,
                        name: "Cetaphil Optimal Hydration 48H Activation Serum",
                        type: "Hydrating Serum",
                        description: "Deeply hydrating serum with HydroSensitiv Complex, hyaluronic acid, vitamin E and Pro-Vit B5 — helps boost water content, soothe sensitivity, and improve skin's moisture barrier.",
                        features: [
                            "HydroSensitiv Complex",
                            "Hyaluronic Acid",
                            "48H Hydration",
                            "Sensitivity Soothing",
                            "Moisture Barrier Improvement",
                            "Vitamin E + B5"
                        ],
                        price: "₹722",
                        link: "https://www.nykaa.com/cetaphil-optimal-hydration-activation-serum/p/11327470",
                        rating: 4.6,
                        bestFor: "Dry/Dehydrated Skin",
                        ingredients: ["Hyaluronic Acid", "Vitamin E", "Pro-Vitamin B5"]
                    },
                    {
                        id: 304,
                        name: "The Derma Co Snail Peptide 96 Hydrating Serum",
                        type: "Barrier Hydration Serum",
                        description: "Moisturizing serum with snail-mucin + peptides + niacinamide — helps skin retain hydration for up to 24 hours, improves skin texture, and smoothens skin.",
                        features: [
                            "Snail Mucin",
                            "Peptides",
                            "Niacinamide",
                            "24H Hydration",
                            "Texture Improvement",
                            "Skin Smoothing"
                        ],
                        price: "₹524",
                        link: "https://thedermaco.com/product/peptide-serum-with-snail-mucin-80ml",
                        rating: 4.4,
                        bestFor: "Dry/Combination Skin",
                        ingredients: ["Snail Mucin", "Peptides", "Niacinamide"]
                    }
                ],
                sensitive: [
                    {
                        id: 305,
                        name: "Dr. Sheth's Cica & Ceramide Overnight Repair Serum",
                        type: "Soothing • Barrier Repair",
                        description: "Gentle, skin-barrier-supportive serum with ceramides and soothing agents to calm irritation, strengthen skin barrier, and help skin recover from stress/damage.",
                        features: [
                            "Ceramides + Cica",
                            "Soothing Formula",
                            "Barrier Repair",
                            "Gentle for Sensitive Skin",
                            "Overnight Repair",
                            "Calms Irritation"
                        ],
                        price: "₹799",
                        link: "https://www.drsheths.com/products/dr-sheths-cica-ceramide-overnight-repair-serum-30ml",
                        rating: 4.5,
                        bestFor: "Sensitive/Reactive Skin",
                        ingredients: ["Ceramides", "Cica", "Soothing Agents"]
                    }
                ],
                normal: [
                    {
                        id: 306,
                        name: "The Derma Co 10% Vitamin C + Niacinamide Face Serum",
                        type: "Brightening Serum",
                        description: "Combines vitamin C, niacinamide and hyaluronic acid — helps fade acne marks, dark spots, blemishes; improves skin glow & evenness; supports collagen and reduces early fine lines.",
                        features: [
                            "10% Vitamin C",
                            "Niacinamide",
                            "Hyaluronic Acid",
                            "Dark Spot Fading",
                            "Skin Glow Improvement",
                            "Collagen Support"
                        ],
                        price: "₹519",
                        link: "https://thedermaco.com/product/10-vitamin-c-face-serum-with-niacinamide-hyaluronic-acid-for-skin-radiance-30ml",
                        rating: 4.0,
                        bestFor: "Normal/Combination Skin",
                        ingredients: ["Vitamin C", "Niacinamide", "Hyaluronic Acid"]
                    },
                    {
                        id: 307,
                        name: "Minimalist Vitamin C Brightening Face Serum",
                        type: "Brightening Serum",
                        description: "Uses a stable Vitamin C derivative + acetyl glucosamine for gentle brightening + hydration — helps improve overall skin tone, texture and glow without being overly harsh.",
                        features: [
                            "Stable Vitamin C Derivative",
                            "Acetyl Glucosamine",
                            "Gentle Brightening",
                            "Hydration",
                            "Skin Tone Improvement",
                            "Texture Refinement"
                        ],
                        price: "₹284",
                        link: "https://www.amazon.in/Minimalist-Formulated-Sensitive-Irritating-Brightening/dp/B0CW1M1BC1",
                        rating: 4.2,
                        bestFor: "Normal/Sensitive Skin",
                        ingredients: ["Vitamin C Derivative", "Acetyl Glucosamine"]
                    }
                ]
            },

            // 💧 MOISTURIZERS
            moisturizer: {
                oily: [
                    {
                        id: 401,
                        name: "The Derma Co 5% Nia-Ceramide Mattifying Moisturizer",
                        type: "Oil-Free Mattifying Moisturizer",
                        description: "Oil-free, lightweight moisturizer with niacinamide + ceramide complex + Zinc PCA. Provides hydration while controlling oil shine and helping mattify skin.",
                        features: [
                            "5% Niacinamide + Ceramides",
                            "Oil-Free Formula",
                            "Mattifying Effect",
                            "Zinc PCA",
                            "Non-Comedogenic",
                            "Lightweight Texture"
                        ],
                        price: "₹599",
                        link: "https://thedermaco.com/product/5-percent-niacinamide-ceramide-face-mattifying-moisturizer-for-oily-skin",
                        rating: 4.4,
                        bestFor: "Oily/Acne-Prone Skin",
                        ingredients: ["Niacinamide", "Ceramides", "Zinc PCA"]
                    },
                    {
                        id: 402,
                        name: "Sebamed Clear Face Care Gel",
                        type: "Water-Based Gel Moisturizer",
                        description: "Water-based gel moisturizer; maintains skin's pH (5.5), includes hyaluronic acid & aloe vera to hydrate without clogging pores.",
                        features: [
                            "pH 5.5 Balanced",
                            "Hyaluronic Acid + Aloe Vera",
                            "Water-Based Gel",
                            "Non-Clogging",
                            "Lightweight",
                            "Non-Sticky"
                        ],
                        price: "₹470",
                        link: "https://www.nykaa.com/sebamed-clear-face-care-gel/p/23180",
                        rating: 4.5,
                        bestFor: "Oily/Acne-Prone Skin",
                        ingredients: ["Hyaluronic Acid", "Aloe Vera"]
                    }
                ],
                dry: [
                    {
                        id: 403,
                        name: "CeraVe Moisturizing Cream",
                        type: "Rich Ceramide Cream",
                        description: "Rich cream with ceramides + hyaluronic acid to deeply hydrate, restore skin barrier, and prevent moisture loss. Non-comedogenic, suitable even for face & body.",
                        features: [
                            "Ceramides + Hyaluronic Acid",
                            "Deep Hydration",
                            "Skin Barrier Restoration",
                            "Non-Comedogenic",
                            "Face & Body Use",
                            "Rich Cream Texture"
                        ],
                        price: "₹359",
                        link: "https://www.amazon.in/CeraVe-Moisturizers-Moisturizing-Cream-Very/dp/B07CH8F17Q",
                        rating: 4.7,
                        bestFor: "Dry/Very Dry Skin",
                        ingredients: ["Ceramides", "Hyaluronic Acid"]
                    },
                    {
                        id: 404,
                        name: "Neutrogena Hydro Boost Water Gel",
                        type: "Gel-Cream Hydration",
                        description: "Gel-cream texture with hyaluronic acid, absorbs quickly, provides lightweight hydration — good for skin that's dry but doesn't like heavy creams.",
                        features: [
                            "Hyaluronic Acid Gel-Cream",
                            "Quick Absorption",
                            "Lightweight Hydration",
                            "Non-Greasy",
                            "Suitable Under Makeup",
                            "Non-Clogging"
                        ],
                        price: "₹650",
                        link: "https://www.nykaa.com/neutrogena-hydro-boost-water-gel/p/15858",
                        rating: 4.6,
                        bestFor: "Dry/Normal Skin",
                        ingredients: ["Hyaluronic Acid", "Light Emollients"]
                    }
                ],
                sensitive: [
                    {
                        id: 405,
                        name: "Cetaphil Moisturizing Lotion",
                        type: "Gentle Sensitive Skin Lotion",
                        description: "Lightweight lotion but with enough emollients (like glycerin, macadamia-oil) to lock in moisture — good for face & body. Gentle, non-comedogenic and suitable for sensitive skin.",
                        features: [
                            "Gentle Formula",
                            "Lightweight Lotion",
                            "Sensitive Skin Suitable",
                            "Face & Body Use",
                            "Non-Comedogenic",
                            "Moisture Locking"
                        ],
                        price: "₹520",
                        link: "https://www.nykaa.com/cetaphil-moisturising-lotion/p/26620",
                        rating: 4.5,
                        bestFor: "Sensitive/Dry Skin",
                        ingredients: ["Glycerin", "Macadamia Oil", "Emollients"]
                    }
                ],
                normal: [
                    {
                        id: 406,
                        name: "Re'equil Oil Free Moisturizer",
                        type: "Balanced Oil-Free Moisturizer",
                        description: "Lightweight, oil-free moisturizer designed for normal to oily or combination skin — absorbs quickly, non-greasy finish, keeps skin hydrated without shine.",
                        features: [
                            "Oil-Free Formula",
                            "Lightweight Texture",
                            "Quick Absorption",
                            "Non-Greasy Finish",
                            "Sebum Balance",
                            "Daily Use"
                        ],
                        price: "₹350",
                        link: "https://www.nykaa.com/re-equil-oil-free-mattifying-moisturiser/p/471131",
                        rating: 4.3,
                        bestFor: "Normal/Combination Skin",
                        ingredients: ["Light Emollients", "Hydrating Agents"]
                    },
                    {
                        id: 407,
                        name: "Neutrogena Hydro Boost Water Gel (Normal)",
                        type: "Versatile Gel-Cream",
                        description: "Versatile gel-cream that works well for normal to combination skin. Provides hydration without heaviness, suitable for all seasons.",
                        features: [
                            "Versatile Formula",
                            "All-Season Use",
                            "Hydration Without Heaviness",
                            "Balanced Texture",
                            "Quick Absorption",
                            "Non-Greasy"
                        ],
                        price: "₹650",
                        link: "https://www.nykaa.com/neutrogena-hydro-boost-water-gel/p/15858",
                        rating: 4.6,
                        bestFor: "Normal/Combination Skin",
                        ingredients: ["Hyaluronic Acid", "Balanced Emollients"]
                    }
                ]
            },

            // 🧴 ACNE PATCHES
            acnePatches: {
                oily: [
                    {
                        id: 501,
                        name: "Dot & Key CICA Face Wash (2% Salicylic Acid + Green Tea)",
                        type: "Salicylic Acid • Acne Treatment",
                        description: "Sulphate-free, non-comedogenic face wash with 2% salicylic acid. Exfoliates inside pores, removes excess oil and bacteria, cuts down breakouts without overly drying.",
                        features: [
                            "2% Salicylic Acid",
                            "Green Tea Extract",
                            "Sulphate-Free",
                            "Non-Comedogenic",
                            "Pore Exfoliation",
                            "Oil & Bacteria Removal"
                        ],
                        price: "₹399",
                        link: "https://www.amazon.in/Salicylic-Sensitive-Sulphate-Blemish-Clearing/dp/B0BCJZ289Q",
                        rating: 4.5,
                        bestFor: "Oily/Acne-Prone Skin",
                        ingredients: ["Salicylic Acid", "Green Tea", "CICA"]
                    },
                    {
                        id: 502,
                        name: "Cosrx Acne Pimple Master Patch",
                        type: "Hydrocolloid Acne Patches",
                        description: "Hydrocolloid patches that absorb pus and impurities from pimples overnight. Creates optimal healing environment and prevents picking/touching.",
                        features: [
                            "Hydrocolloid Technology",
                            "Overnight Treatment",
                            "Absorbs Impurities",
                            "Prevents Picking",
                            "Creates Healing Environment",
                            "Invisible Wear"
                        ],
                        price: "₹450",
                        link: "https://maccaron.in/en/products/cosrx_acne-pimple-master-patch-24-patches/687/",
                        rating: 4.7,
                        bestFor: "All Acne Types",
                        ingredients: ["Hydrocolloid", "Healing Agents"]
                    }
                ],
                dry: [
                    {
                        id: 503,
                        name: "CeraVe Acne Treatment Face Wash",
                        type: "Acne Treatment + Barrier Support",
                        description: "Balances acne-treatment with skin-barrier support (ceramides + niacinamide). Treats/prevents breakouts while being gentler on dry skin.",
                        features: [
                            "Salicylic Acid",
                            "Ceramides",
                            "Niacinamide",
                            "Skin-Barrier Support",
                            "Gentle Formula",
                            "Breakout Prevention"
                        ],
                        price: "₹1,299",
                        link: "https://www.ubuy.co.in/product/1BP3O3J34-cerave-acne-treatment-face-wash-salicylic-acid-cleanser-with-purifying-clay-niacinamide-and-ceramides-pore-control-and-blackhead-remover-8",
                        rating: 4.6,
                        bestFor: "Dry Skin with Acne",
                        ingredients: ["Salicylic Acid", "Ceramides", "Niacinamide"]
                    }
                ],
                sensitive: [
                    {
                        id: 504,
                        name: "Kaya Skin Clinic Acne Care Purifying Cleanser",
                        type: "Salicylic Acid • Gentle Formula",
                        description: "Dermatologist-developed cleanser for acne prone skin. Gentle and hypoallergenic formula removes excess oil/impurities without heavy irritation.",
                        features: [
                            "Salicylic Acid",
                            "Gentle Formula",
                            "Hypoallergenic",
                            "Purifying Cleanser",
                            "No Heavy Irritation",
                            "Dermatologist-Developed"
                        ],
                        price: "₹475",
                        link: "https://www.amazon.in/Kaya-Skin-Clinic-Purifying-Cleanser/dp/B008KH67ZM",
                        rating: 4.4,
                        bestFor: "Sensitive Acne-Prone Skin",
                        ingredients: ["Salicylic Acid", "Gentle Cleansers"]
                    }
                ],
                normal: [
                    {
                        id: 505,
                        name: "The Derma Co 1% Salicylic Acid Gel Face Wash",
                        type: "Salicylic Acid Gel • Active Acne",
                        description: "Lightweight gel-wash that exfoliates pores, removes oil & bacteria, and helps prevent new pimples. Balanced for combination skin - effective yet not overly harsh.",
                        features: [
                            "1% Salicylic Acid",
                            "Gel Formula",
                            "Active Acne Treatment",
                            "Pore Exfoliation",
                            "Oil & Bacteria Removal",
                            "Balanced Formula"
                        ],
                        price: "₹349",
                        link: "https://www.amazon.in/Derma-Co-Salicylic-Witch-Active/dp/B095J52W7P",
                        rating: 4.3,
                        bestFor: "Normal/Combination Acne-Prone Skin",
                        ingredients: ["Salicylic Acid", "Witch Hazel"]
                    }
                ]
            },

            // 🌑 ANTI-AGING/DARK SPOT CORRECTORS
            antiAging: {
                dry: [
                    {
                        id: 601,
                        name: "AXIS-Y Dark Spot Correcting Glow Serum - 5% Niacinamide",
                        type: "Niacinamide • Brightening",
                        description: "Lightweight yet hydrating serum with 5% niacinamide and brightening actives. Fades dark spots, evens skin tone, improves glow without drying out skin.",
                        features: [
                            "5% Niacinamide",
                            "Dark Spot Correcting",
                            "Hydrating Formula",
                            "Non-Sticky",
                            "Skin Tone Evening",
                            "Glow Improvement"
                        ],
                        price: "₹1,299",
                        link: "https://www.amazon.in/AXIS-Y-Dark-Spot-Correcting-Serum/dp/B091238V7N",
                        rating: 4.0,
                        bestFor: "Dry Skin with Dark Spots",
                        ingredients: ["Niacinamide", "Brightening Actives"]
                    }
                ],
                oily: [
                    {
                        id: 602,
                        name: "The Derma Co 10% Vitamin C + 5% Niacinamide Serum",
                        type: "Vitamin C + Niacinamide • Brightening",
                        description: "Blends Vitamin C (brightening & pigmentation-fading) with Niacinamide (skin-barrier support). Targets dark spots, uneven tone, and dullness - lightweight for oily skin.",
                        features: [
                            "10% Vitamin C",
                            "5% Niacinamide",
                            "Dark Spot Targeting",
                            "Lightweight Formula",
                            "Uneven Tone Correction",
                            "Dullness Reduction"
                        ],
                        price: "₹699",
                        link: "https://www.amazon.in/Derma-Co-Niacinamide-Hyaluronic-Radiance/dp/B096MQ1BSV",
                        rating: 3.9,
                        bestFor: "Oily/Combination Skin",
                        ingredients: ["Vitamin C", "Niacinamide", "Hyaluronic Acid"]
                    }
                ],
                sensitive: [
                    {
                        id: 603,
                        name: "Natural Vibes Acne & Dark Spot Corrector Serum",
                        type: "Gentle • Vitamin C + Niacinamide",
                        description: "Formulated with active + plant-based ingredients to reduce dark spots, acne-marks, and hyperpigmentation while hydrating and soothing sensitive skin.",
                        features: [
                            "Vitamin C",
                            "Niacinamide",
                            "Hyaluronic Acid",
                            "Gentle Formula",
                            "Plant-Based Ingredients",
                            "Sensitive Skin Suitable"
                        ],
                        price: "₹599",
                        link: "https://www.naturalvibes.in/products/acne-dark-spot-corrector-face-serum-with-hyaluronic-acid-vitamin-c-niacinamide-30-ml",
                        rating: 4.5,
                        bestFor: "Sensitive Skin with Pigmentation",
                        ingredients: ["Vitamin C", "Niacinamide", "Hyaluronic Acid", "Botanical Extracts"]
                    }
                ],
                normal: [
                    {
                        id: 604,
                        name: "The Derma Co 2% Kojic Acid Cream",
                        type: "Kojic Acid • Pigmentation Correction",
                        description: "Uses kojic acid + pigmentation-targeting actives to fade dark spots, even out skin tone, and reduce pigmentation over time. Effective yet not too heavy.",
                        features: [
                            "2% Kojic Acid",
                            "Pigmentation Correction",
                            "Brightening Effect",
                            "Dark Spot Removal",
                            "Balanced Formula",
                            "Skin Tone Evening"
                        ],
                        price: "₹549",
                        link: "https://www.amazon.in/Derma-Co-Kojic-Pigmentation-Removal/dp/B08TQTZ3TC",
                        rating: 4.3,
                        bestFor: "Normal/Combination Skin",
                        ingredients: ["Kojic Acid", "Pigmentation Actives"]
                    }
                ]
            },

            // ✨ BRIGHTENING CREAMS
            brightening: {
                normal: [
                    {
                        id: 701,
                        name: "Kozicare Skin Lightening Cream with Kojic Acid & Glutathione",
                        type: "Budget Brightening Cream",
                        description: "Affordable, widely used brightening cream that claims to reduce dark spots, pigmentation, tan and even out skin tone. Contains kojic acid + glutathione + arbutin.",
                        features: [
                            "Kojic Acid",
                            "Glutathione",
                            "Arbutin",
                            "Dark Spot Reduction",
                            "Pigmentation Control",
                            "Even Skin Tone"
                        ],
                        price: "₹159",
                        link: "https://www.flipkart.com/kozicare-skin-lightening-cream-kojic-acid-arbutin-glutathione-all-types/p/itm1b52332535704",
                        rating: 4.1,
                        bestFor: "All Skin Types",
                        ingredients: ["Kojic Acid", "Glutathione", "Arbutin"]
                    },
                    {
                        id: 702,
                        name: "POND'S Bright Beauty Anti-Spot Serum Cream",
                        type: "Mainstream Brightening Cream",
                        description: "Popular drugstore-level brightening cream with niacinamide (Vitamin B3) + SPF15 that aims to fade dark spots and give a brighter complexion.",
                        features: [
                            "Niacinamide (Vitamin B3)",
                            "SPF 15",
                            "Dark Spot Fading",
                            "Brightening",
                            "Moisturizing",
                            "Everyday Use"
                        ],
                        price: "₹330",
                        link: "https://ponds.in/products/bright-beauty-serum-cream",
                        rating: 4.3,
                        bestFor: "Normal/Dry Skin",
                        ingredients: ["Niacinamide", "SPF Filters"]
                    }
                ],
                dry: [
                    {
                        id: 703,
                        name: "Kozicare Skin Lightening Non-Sticky Cream Lotion",
                        type: "Brightening Lotion",
                        description: "A lotion-style brightening product (with kojic acid, arbutin, niacinamide, vitamin C & glutathione) targeting pigmentation, dark spots, uneven tone, melasma, etc.",
                        features: [
                            "Kojic Acid + Arbutin",
                            "Niacinamide + Vitamin C",
                            "Glutathione",
                            "Lotion Texture",
                            "Non-Sticky",
                            "Pigmentation Targeting"
                        ],
                        price: "₹185",
                        link: "https://www.kozicarein.com/products/kozicare-skin-lightening-non-sticky-cream-lotion-1000000033359",
                        rating: 4.2,
                        bestFor: "Dry/Normal Skin",
                        ingredients: ["Kojic Acid", "Arbutin", "Niacinamide", "Vitamin C", "Glutathione"]
                    }
                ],
                oily: [
                    {
                        id: 704,
                        name: "POND'S Bright Beauty Fairness Cream",
                        type: "Fairness Cream",
                        description: "Another fairness/brightening cream from the same line, intended for daily use to improve dullness, give glow and lighten tone over time.",
                        features: [
                            "Brightening Formula",
                            "Daily Use",
                            "Dullness Improvement",
                            "Glow Enhancement",
                            "Lightweight",
                            "Subtle Fairness"
                        ],
                        price: "₹159",
                        link: "https://www.amazon.in/PONDS-Bright-Beauty-Fairness-Cream/dp/B099QVJGCR",
                        rating: 4.0,
                        bestFor: "Oily/Combination Skin",
                        ingredients: ["Brightening Actives", "Moisturizers"]
                    }
                ],
                sensitive: [
                    {
                        id: 705,
                        name: "Kozicare Skin Whitening Cream 15 gm",
                        type: "Gentle Brightening Cream",
                        description: "Small-pack brightening cream with claims of brightening, dark-spot reduction, and even tone. Gentle formulation suitable for sensitive skin.",
                        features: [
                            "Gentle Formula",
                            "Dark Spot Reduction",
                            "Even Tone",
                            "Small Pack",
                            "Suitable for Sensitive Skin",
                            "Budget-Friendly"
                        ],
                        price: "₹157",
                        link: "https://www.apollopharmacy.in/otc/kozicare-skin-lightening-cream-15-gm",
                        rating: 4.1,
                        bestFor: "Sensitive Skin",
                        ingredients: ["Kojic Acid", "Gentle Brighteners"]
                    }
                ]
            },

            // 👁️ EYE CREAMS
            eyecream: {
                normal: [
                    {
                        id: 801,
                        name: "iLUNARA Royal Eye Cream",
                        type: "Anti-Aging Eye Treatment",
                        description: "Premium eye cream formulated with retinol, hyaluronic acid, and caffeine to reduce puffiness, dark circles, and fine lines around the eyes.",
                        features: [
                            "Retinol + Hyaluronic Acid",
                            "Caffeine",
                            "Reduces Puffiness",
                            "Diminishes Dark Circles",
                            "Fine Line Reduction",
                            "Gentle Formula"
                        ],
                        price: "₹4,150",
                        link: "#",
                        rating: 4.7,
                        bestFor: "All Skin Types",
                        ingredients: ["Retinol", "Hyaluronic Acid", "Caffeine", "Peptides"]
                    }
                ],
                dry: [
                    {
                        id: 802,
                        name: "Cetaphil Hydrating Eye Gel-Cream",
                        type: "Hydrating Eye Treatment",
                        description: "Gentle, fragrance-free eye gel-cream with hyaluronic acid and ceramides to hydrate and soothe the delicate eye area, reducing dryness and fine lines.",
                        features: [
                            "Hyaluronic Acid",
                            "Ceramides",
                            "Fragrance-Free",
                            "Hydrating Gel-Cream",
                            "Soothes Delicate Skin",
                            "Reduces Dryness"
                        ],
                        price: "₹3,000",
                        link: "https://www.amazon.in/Cetaphil-Hydrating-Gel-Cream-Hyaluronic-0-5/dp/B07798MG7Q",
                        rating: 4.5,
                        bestFor: "Dry/Sensitive Skin",
                        ingredients: ["Hyaluronic Acid", "Ceramides", "Soothing Agents"]
                    }
                ],
                oily: [
                    {
                        id: 803,
                        name: "The Ordinary Caffeine Solution 5% + EGCG",
                        type: "Lightweight Eye Serum",
                        description: "Lightweight eye serum with high concentration caffeine and EGCG to reduce puffiness and dark circles without heaviness or greasiness.",
                        features: [
                            "5% Caffeine",
                            "EGCG (Green Tea)",
                            "Lightweight Serum",
                            "Reduces Puffiness",
                            "Dark Circle Reduction",
                            "Non-Greasy"
                        ],
                        price: "$28.00",
                        link: "https://www.nykaa.com/the-ordinary-caffeine-solution-5-egcg/p/5003154",
                        rating: 4.4,
                        bestFor: "Oily/Combination Skin",
                        ingredients: ["Caffeine", "EGCG", "Lightweight Carriers"]
                    }
                ],
                sensitive: [
                    {
                        id: 804,
                        name: "La Roche-Posay Toleriane Ultra Yeux",
                        type: "Soothing Eye Cream",
                        description: "Ultra-gentle eye cream specifically formulated for sensitive eyes. Soothes, hydrates, and reduces signs of fatigue without irritation.",
                        features: [
                            "Ultra-Gentle Formula",
                            "Sensitive Eye Specific",
                            "Soothing",
                            "Hydrating",
                            "Reduces Fatigue Signs",
                            "Non-Irritating"
                        ],
                        price: "₹3,600",
                        link: "https://www.caretobeauty.com/in/la-roche-posay-toleriane-dermallergo-eye-cream-20ml/",
                        rating: 4.6,
                        bestFor: "Sensitive/Reactive Skin",
                        ingredients: ["Neurosensine", "Shea Butter", "Glycerin"]
                    }
                ]
            }
        };

        // Product category display names
        const productCategories = {
            sunscreen: "☀️ Sunscreen",
            facewash: "🧴 Face Wash",
            toner: "🔄 Toner",
            serum: "🧪 Serum",
            moisturizer: "💧 Moisturizer",
            antiAging: "🌑 Anti-Aging",
            acnePatches: "🧴 Acne Treatment",
            brightening: "✨ Brightening Cream",
            eyecream: "👁️ Eye Cream"
        };

        // Skin type display names
        const skinTypeNames = {
            normal: 'Normal/Combination Skin',
            dry: 'Dry Skin',
            oily: 'Oily/Acne-Prone Skin',
            sensitive: 'Sensitive/Reactive Skin'
        };

        // Function to show product recommendations
        function showProductRecommendations(productCategory, skinType) {
            selectedProductCategory = productCategory;
            selectedSkinType = skinType || selectedSkinType;

            const modal = document.getElementById('productModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalBody = document.getElementById('productModalBody');

            const products = productRecommendations[productCategory]?.[selectedSkinType] || [];

            // Update modal title
            modalTitle.textContent = `${productCategories[productCategory]} for ${skinTypeNames[selectedSkinType]}`;

            // Generate category tabs
            const categoryTabs = Object.keys(productCategories).map(cat => `
                <div class="product-tab ${cat === productCategory ? 'active' : ''}" 
                     onclick="switchProductCategory('${cat}')">
                    ${productCategories[cat]}
                </div>
            `).join('');

            // Generate products HTML
            const productsHTML = products.map(product => `
                <div class="enhanced-product-card">
                    <div class="product-card-badge">Best for ${skinTypeNames[selectedSkinType]}</div>
                    
                    <div class="product-card-header">
                        <h3>${product.name}</h3>
                        <span class="product-type">${product.type}</span>
                        
                        ${product.ingredients ? `
                            <div style="margin-top: 10px;">
                                ${product.ingredients.map(ing => `
                                    <span class="ingredient-highlight">${ing}</span>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                    
                    <div class="product-card-body">
                        <div class="product-rating">
                            ${Array(5).fill().map((_, i) => `
                                <i class="fas fa-star${i < Math.floor(product.rating) ? '' : i < product.rating ? '-half-alt' : ''}"></i>
                            `).join('')}
                            <span style="color: #666; font-size: 12px; margin-left: 5px;">${product.rating}/5</span>
                        </div>
                        
                        <div class="product-description">
                            ${product.description}
                        </div>
                        
                        <ul class="product-features">
                            ${product.features.map(feature => `
                                <li><i class="fas fa-check-circle"></i> ${feature}</li>
                            `).join('')}
                        </ul>
                        
                        ${product.bestFor ? `
                            <div style="text-align: center; margin: 15px 0; color: var(--royal-purple); font-weight: 600;">
                                <i class="fas fa-check-circle"></i> Best for: ${product.bestFor}
                            </div>
                        ` : ''}
                        
                        <div class="product-price">${product.price}</div>
                        
                        ${product.link !== '#' ? `
                            <a href="${product.link}" target="_blank" class="buy-now-btn">
                                <i class="fas fa-shopping-cart"></i> Buy Now - ${product.price}
                            </a>
                        ` : `
                            <button class="buy-now-btn" onclick="alert('Product coming soon!')">
                                <i class="fas fa-shopping-cart"></i> Coming Soon - ${product.price}
                            </button>
                        `}
                    </div>
                </div>
            `).join('');

            // Generate benefits text based on skin type and category
            const benefitsText = getBenefitsText(productCategory, selectedSkinType);

            modalBody.innerHTML = `
                <div class="modal-skin-type-banner">
                    <h3>Select Your Skin Type</h3>
                    <div class="modal-skin-type-tags">
                        ${Object.keys(skinTypeNames).map(type => `
                            <div class="modal-skin-tag ${type === selectedSkinType ? 'active' : ''}" 
                                 onclick="showProductRecommendations('${productCategory}', '${type}')">
                                ${skinTypeNames[type]}
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="product-category-tabs">
                    ${categoryTabs}
                </div>
                
                ${products.length > 0 ? `
                    <div class="enhanced-product-grid">
                        ${productsHTML}
                    </div>
                    
                    <div class="product-benefits">
                        <h4>Why These Products Work for ${skinTypeNames[selectedSkinType]}</h4>
                        <p>${benefitsText}</p>
                        <p><strong>Pro Tip:</strong> ${getProTip(productCategory, selectedSkinType)}</p>
                    </div>
                ` : `
                    <div style="text-align: center; padding: 50px;">
                        <i class="fas fa-exclamation-circle" style="font-size: 48px; color: var(--royal-gold); margin-bottom: 20px;"></i>
                        <h3 style="color: var(--royal-purple); margin-bottom: 15px;">No Recommendations Available</h3>
                        <p style="color: #666;">We're currently updating our recommendations for this combination. Please try another skin type.</p>
                    </div>
                `}
            `;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Function to switch product categories
        function switchProductCategory(category) {
            showProductRecommendations(category, selectedSkinType);
        }

        // Function to get benefits text
        function getBenefitsText(category, skinType) {
            const benefits = {
                sunscreen: {
                    normal: "These sunscreens provide balanced protection without disrupting your skin's natural equilibrium.",
                    dry: "Hydrating formulas prevent further moisture loss while offering strong UV protection.",
                    oily: "Lightweight, non-greasy formulas protect without clogging pores or causing shine.",
                    sensitive: "Gentle, mineral-based formulas provide protection without irritation or reactions."
                },
                facewash: {
                    normal: "Gentle cleansers maintain your skin's natural balance while effectively removing impurities.",
                    dry: "Creamy formulas cleanse without stripping essential moisture from your skin.",
                    oily: "Deep-cleansing formulas remove excess oil and impurities without over-drying.",
                    sensitive: "Soothing formulas cleanse gently without causing redness or irritation."
                },
                toner: {
                    normal: "Balancing formulas prepare your skin for treatment while maintaining its natural pH.",
                    dry: "Hydrating toners replenish moisture and create the perfect base for serums.",
                    oily: "Pore-refining formulas control oil and minimize the appearance of pores.",
                    sensitive: "Calming toners soothe irritation and strengthen the skin's barrier."
                },
                serum: {
                    normal: "Targeted serums address specific concerns while maintaining skin harmony.",
                    dry: "Hydrating serums deliver intense moisture and repair the skin barrier.",
                    oily: "Oil-regulating serums balance sebum production and refine texture.",
                    sensitive: "Gentle serums repair and strengthen without causing irritation."
                },
                moisturizer: {
                    normal: "Lightweight formulas provide perfect hydration without heaviness.",
                    dry: "Rich creams deliver intense nourishment and lock in moisture.",
                    oily: "Oil-free formulas hydrate while controlling shine throughout the day.",
                    sensitive: "Soothing creams calm and protect sensitive skin without irritation."
                },
                antiAging: {
                    normal: "Advanced formulas target fine lines while maintaining skin balance.",
                    dry: "Nourishing creams deeply hydrate while reducing signs of aging.",
                    oily: "Lightweight formulas target aging concerns without adding excess oil.",
                    sensitive: "Gentle formulas reduce signs of aging without causing reactions."
                },
                acnePatches: {
                    normal: "Effective treatments target breakouts while being balanced for normal skin.",
                    dry: "Gentle formulas treat acne while respecting dry skin's moisture needs.",
                    oily: "Powerful formulas target excess oil and prevent future breakouts.",
                    sensitive: "Soothing formulas treat acne while calming inflammation."
                },
                brightening: {
                    normal: "These creams work to even out skin tone while maintaining your skin's natural radiance.",
                    dry: "Hydrating brighteners improve tone without causing dryness or flakiness.",
                    oily: "Lightweight formulas target pigmentation while regulating shine.",
                    sensitive: "Gentle brighteners gradually even tone without irritation."
                },
                eyecream: {
                    normal: "Specialized eye treatments address delicate eye area concerns while being gentle enough for daily use.",
                    dry: "Rich, hydrating formulas combat dryness and fine lines around the eyes.",
                    oily: "Lightweight, non-greasy formulas reduce puffiness without causing milia.",
                    sensitive: "Ultra-gentle formulas soothe and protect the delicate eye area."
                }
            };

            return benefits[category]?.[skinType] || "Specially formulated for your skin type's unique needs and concerns.";
        }

        // Function to get pro tips
        function getProTip(category, skinType) {
            const tips = {
                sunscreen: "Apply 2 fingers worth of sunscreen every morning, and reapply every 2 hours when outdoors.",
                facewash: "Use lukewarm water and massage gently for 60 seconds before rinsing thoroughly.",
                toner: "Apply with clean hands or cotton pad, gently patting into skin for better absorption.",
                serum: "Apply to damp skin for better penetration and follow with moisturizer to lock in benefits.",
                moisturizer: "Apply while skin is still slightly damp from previous steps to lock in hydration.",
                antiAging: "Use consistently every night and always follow with sunscreen in the morning.",
                acnePatches: "Apply on clean, dry skin before bed for best overnight results.",
                brightening: "Consistency is key - use daily and always follow with SPF 30+ sunscreen.",
                eyecream: "Apply with ring finger using gentle tapping motions—never pull or drag the delicate skin."
            };

            return tips[category] || "Use as part of your daily skincare routine for best results. Patch test new products first.";
        }

        // Function to close product modal
        function closeProductModal() {
            const modal = document.getElementById('productModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Function to handle product click in shop section
        function handleProductClick(productCategory) {
            showProductRecommendations(productCategory, selectedSkinType);
        }

        // Function to set skin type and highlight relevant products
        function setSkinTypeForProducts(skinType) {
            selectedSkinType = skinType;

            // Update all skin type cards to remove selection
            document.querySelectorAll('.category-card').forEach(card => {
                card.classList.remove('selected-skin-type');
            });

            // Highlight relevant products in shop section
            highlightRecommendedProducts(skinType);
        }

        // Function to highlight recommended products
        function highlightRecommendedProducts(skinType) {
            // Remove all highlights first
            document.querySelectorAll('.product-card').forEach(card => {
                card.classList.remove('highlighted');
            });

            // Add highlights based on skin type
            const productHighlights = {
                normal: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], // All products
                dry: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], // All products
                oily: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], // All products
                sensitive: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] // All products
            };

            const highlights = productHighlights[skinType] || [];
            highlights.forEach(index => {
                const productCard = document.querySelectorAll('.product-card')[index];
                if (productCard) {
                    productCard.classList.add('highlighted');

                    // Make product clickable
                    productCard.style.cursor = 'pointer';
                    productCard.onclick = function (e) {
                        e.preventDefault();

                        // Map index to product category
                        const categories = ['facewash', 'toner', 'serum', 'moisturizer', 'sunscreen', 'antiAging', 'acnePatches', 'brightening', 'eyecream', 'serum', 'brightening', 'moisturizer', 'serum', 'moisturizer', 'facewash', 'moisturizer', 'serum', 'antiAging', 'serum'];
                        if (categories[index]) {
                            handleProductClick(categories[index]);
                        }
                    };

                    // Make product icon clickable
                    const productIcon = productCard.querySelector('.product-img');
                    if (productIcon) {
                        productIcon.style.cursor = 'pointer';
                        productIcon.onclick = function (e) {
                            e.preventDefault();
                            const categories = ['facewash', 'toner', 'serum', 'moisturizer', 'sunscreen', 'antiAging', 'acnePatches', 'brightening', 'eyecream', 'serum', 'brightening', 'moisturizer', 'serum', 'moisturizer', 'facewash', 'moisturizer', 'serum', 'antiAging', 'serum'];
                            if (categories[index]) {
                                handleProductClick(categories[index]);
                            }
                        };
                    }
                }
            });
        }


        // Function to show ALL products for a specific skin type
        function showAllProductsForSkinType(skinType) {
            selectedSkinType = skinType;
            const modal = document.getElementById('productModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalBody = document.getElementById('productModalBody');

            // Update modal title
            modalTitle.textContent = `Complete Routine for ${skinTypeNames[skinType]}`;

            // 1. Gather all categories that have products for this skinType
            // We want to loop through 'productCategories' order so it looks structured
            // (Sunscreen -> Facewash -> Toner, etc. or however you prefer defined order)

            // Let's use the order defined in 'productCategories' keys
            const orderedCategories = Object.keys(productCategories);

            let fullContentHTML = `
                <div class="modal-skin-type-banner">
                    <h3>Your Personalized Routine</h3>
                    <p>Here are all the products recommended for <strong>${skinTypeNames[skinType]}</strong>.</p>
                </div>
                <div class="all-products-container">
            `;

            let hasProducts = false;

            orderedCategories.forEach(categoryKey => {
                const categoryName = productCategories[categoryKey];
                const products = productRecommendations[categoryKey]?.[skinType] || [];

                if (products.length > 0) {
                    hasProducts = true;

                    // Generate HTML for this category's products
                    const categoryProductsHTML = products.map(product => {
                        const isLiked = isWishlisted(product.name);
                        // Pick a placeholder image based on category if possible, or generic
                        const placeholderImg = `images/${categoryKey === 'antiAging' ? 'anti-aging serum.png' :
                            categoryKey === 'acnePatches' ? 'acne defence patches.jpeg' :
                                categoryKey === 'eyecream' ? 'eye cream.jpeg' :
                                    categoryKey === 'brightening' ? 'brightening cream.jpeg' :
                                        categoryKey === 'facewash' ? 'cleanser(blue).jpeg' :
                                            categoryKey === 'toner' ? 'toner3.png' :
                                                categoryKey === 'moisturizer' ? 'moisturizer.jpeg' :
                                                    categoryKey === 'sunscreen' ? 'sunscreen (2).png' : 'serum.png'}`;

                        return `
                        <div class="enhanced-product-card" style="margin-bottom: 20px; position: relative;">
                             <button class="wishlist-btn ${isLiked ? 'active' : ''}" 
                                     onclick="toggleWishlist(event, '${product.name.replace(/'/g, "\\'")}', '${product.price}', '${placeholderImg}', '${product.type}')"
                                     style="top: 10px; right: 10px; background: rgba(255,255,255,0.9); border: 1px solid #eee;">
                                <i class="${isLiked ? 'fas' : 'far'} fa-heart"></i>
                            </button>
                            <div class="product-card-header">
                                <h3>${product.name}</h3>
                                <span class="product-type">${product.type}</span>
                            </div>
                            <div class="product-card-body">
                                <div class="product-rating">
                                    <span style="color: #ffb400;">★</span> ${product.rating}/5
                                </div>
                                <p class="product-description">${product.description}</p>
                                <div class="product-price">${product.price}</div>
                                ${product.link !== '#' ? `
                                    <a href="${product.link}" target="_blank" class="buy-now-btn">
                                        <i class="fas fa-shopping-cart"></i> Buy Now
                                    </a>
                                ` : `
                                    <button class="buy-now-btn" disabled>Coming Soon</button>
                                `}
                            </div>
                        </div>
                    `}).join('');

                    // Add Category Header and Grid
                    fullContentHTML += `
                        <div class="category-block" style="margin-bottom: 40px;">
                            <h2 style="
                                color: var(--royal-purple);
                                border-bottom: 2px solid var(--royal-gold);
                                padding-bottom: 10px;
                                margin-bottom: 20px;
                                font-family: 'Playfair Display', serif;
                            ">${categoryName}</h2>
                            <div class="enhanced-product-grid">
                                ${categoryProductsHTML}
                            </div>
                        </div>
                    `;
                }
            });

            fullContentHTML += `</div>`; // close container

            if (!hasProducts) {
                fullContentHTML = `
                    <div style="text-align: center; padding: 50px;">
                        <h3>No products found for this skin type yet.</h3>
                    </div>
                `;
            }

            modalBody.innerHTML = fullContentHTML;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // ============ AUTH FUNCTIONS ============
        let currentUser = null;
        const API_URL = 'http://localhost:3000/api';

        async function checkLogin() {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const res = await fetch(`${API_URL}/user/profile`, {
                        headers: { 'x-access-token': token }
                    });
                    const data = await res.json();
                    if (res.ok) {
                        currentUser = data;
                        console.log("Logged in as:", currentUser.name);
                        // Optional: Update UI to show name
                    } else {
                        // Token invalid/expired
                        localStorage.removeItem('token');
                        currentUser = null;
                    }
                } catch (e) {
                    console.error("Auth Error:", e);
                    // Don't log out immediately on network error, but effectively offline
                }
            }
        }

        function logout() {
            localStorage.removeItem('token');
            currentUser = null;
            closeProductModal();
            alert('Safely logged out from the royal court.');
            window.location.reload();
        }

        function renderLoginForm() {
            const modalBody = document.getElementById('productModalBody');
            modalBody.innerHTML = `
                <div class="auth-form">
                    <div style="text-align: center; margin-bottom: 20px; color: var(--royal-purple);">
                        <i class="fas fa-crown" style="font-size: 40px; margin-bottom: 10px;"></i>
                        <h3 style="font-family: 'Cinzel', serif;">Royal Access</h3>
                        <p style="color: #666; font-size: 14px;">Enter your credentials to proceed</p>
                    </div>
                    <input type="email" id="loginEmail" class="auth-input" placeholder="Royal Email Address">
                    <input type="password" id="loginPassword" class="auth-input" placeholder="Password">
                    <button class="auth-btn" onclick="handleLogin()">Enter Palace</button>
                    <div id="loginError" class="error-msg"></div>
                    <div class="switch-auth" onclick="document.getElementById('modalTitle').textContent='Royal Registration'; renderRegisterForm()">New to the court? Join here</div>
                </div>
            `;
        }

        function renderRegisterForm() {
            const modalBody = document.getElementById('productModalBody');
            modalBody.innerHTML = `
                <div class="auth-form">
                    <div style="text-align: center; margin-bottom: 20px; color: var(--royal-purple);">
                         <i class="fas fa-scroll" style="font-size: 40px; margin-bottom: 10px;"></i>
                        <h3 style="font-family: 'Cinzel', serif;">Join the Court</h3>
                    </div>
                    <input type="text" id="regName" class="auth-input" placeholder="Full Name">
                    <input type="email" id="regEmail" class="auth-input" placeholder="Email Address">
                    <input type="password" id="regPassword" class="auth-input" placeholder="Choose Password">
                     <button class="auth-btn" onclick="handleRegister()">Proclaim Membership</button>
                    <div id="regError" class="error-msg"></div>
                    <div class="switch-auth" onclick="document.getElementById('modalTitle').textContent='Royal Access Required'; renderLoginForm()">Already a member? Enter</div>
                </div>
            `;
        }

        async function handleLogin() {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const errorDiv = document.getElementById('loginError');
            errorDiv.textContent = '';

            if (!email || !password) {
                errorDiv.textContent = 'Please provide both email and password.';
                return;
            }

            document.querySelector('.auth-btn').innerText = 'Verifying...';

            try {
                const res = await fetch(`${API_URL}/auth/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                const data = await res.json();

                if (res.ok) {
                    localStorage.setItem('token', data.token);
                    currentUser = data.user; // Note: this user obj is minimal from login
                    // Fetch full profile to be sure
                    await checkLogin();
                    closeProductModal();
                    // alert(`Welcome back, ${currentUser.name}!`);
                    // Open the profile automatically?
                    showProfileModal('Account');
                } else {
                    errorDiv.textContent = data.message || 'Login failed.';
                    document.querySelector('.auth-btn').innerText = 'Enter Palace';
                }
            } catch (e) {
                errorDiv.textContent = 'Connection error. Is the Backend running?';
                document.querySelector('.auth-btn').innerText = 'Enter Palace';
                console.error(e);
            }
        }

        async function handleRegister() {
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const errorDiv = document.getElementById('regError');
            errorDiv.textContent = '';

            if (!name || !email || !password) {
                errorDiv.textContent = 'All fields are required.';
                return;
            }

            document.querySelector('.auth-btn').innerText = 'Registering...';

            try {
                const res = await fetch(`${API_URL}/auth/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, password })
                });
                const data = await res.json();

                if (res.ok) {
                    alert('Registration successful! Please login.');
                    renderLoginForm();
                } else {
                    errorDiv.textContent = data.message || 'Registration failed.';
                    document.querySelector('.auth-btn').innerText = 'Proclaim Membership';
                }
            } catch (e) {
                errorDiv.textContent = 'Connection error.';
                document.querySelector('.auth-btn').innerText = 'Proclaim Membership';
            }
        }

        // ============ INITIALIZATION ============
        document.addEventListener('DOMContentLoaded', function () {
            checkLogin(); // Check auth on load
            // Add click events to skin type cards
            document.querySelectorAll('.category-card').forEach(card => {
                card.addEventListener('click', function () {
                    const cardText = this.querySelector('h3').textContent.toLowerCase();

                    // Check for Skin Types
                    let skinType = '';
                    if (cardText.includes('normal')) skinType = 'normal';
                    else if (cardText.includes('dry')) skinType = 'dry';
                    else if (cardText.includes('oily')) skinType = 'oily';
                    else if (cardText.includes('sensitive')) skinType = 'sensitive';

                    if (skinType) {
                        // Previous behavior: setSkinTypeForProducts(skinType);
                        // New behavior: Open modal with all products
                        showAllProductsForSkinType(skinType);
                    } else {
                        // Check for Concerns
                        let productCategory = '';
                        if (cardText.includes('anti-aging')) productCategory = 'antiAging';
                        else if (cardText.includes('dehydration')) productCategory = 'moisturizer';
                        else if (cardText.includes('dark spots')) productCategory = 'serum';
                        else if (cardText.includes('acne')) productCategory = 'acnePatches';
                        else if (cardText.includes('whitening')) productCategory = 'brightening';

                        if (productCategory) {
                            showProductRecommendations(productCategory, selectedSkinType);
                        }
                    }
                });
            });

            // Profile Section Interactivity
            const profileSection = document.querySelector('.profile-section');
            if (profileSection) {
                profileSection.addEventListener('click', function (e) {
                    const card = e.target.closest('.category-card');
                    if (card) {
                        const title = card.querySelector('h3').textContent;
                        showProfileModal(title);
                    }
                });
            }

            // Function to show Profile Modal
            function showProfileModal(title) {
                const modal = document.getElementById('productModal');
                const modalTitle = document.getElementById('modalTitle');
                const modalBody = document.getElementById('productModalBody');

                modalTitle.textContent = title;

                // CHECK LOGIN STATE
                if (!currentUser) {
                    modalTitle.textContent = "Royal Access Required";
                    renderLoginForm();
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    return;
                }

                let content = '';

                if (title === 'Account') {
                    content = `
                        <div style="text-align: center; padding: 30px;">
                            <div style="width: 100px; height: 100px; background: linear-gradient(135deg, var(--royal-gold), var(--soft-gold)); border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 40px; color: var(--royal-purple); box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                                <i class="fas fa-crown"></i>
                            </div>
                            <h3 style="color: var(--royal-purple); margin-bottom: 10px; font-family: 'Cinzel', serif;">${currentUser ? currentUser.name : 'Guest'}</h3>
                            <p style="color: #666;">Royal Member</p>
                            <div style="margin-top: 30px; text-align: left; background: #fff; padding: 30px; border-radius: 15px; border: 1px solid #eee; box-shadow: 0 5px 20px rgba(0,0,0,0.05);">
                                <p style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;"><i class="fas fa-envelope" style="color: var(--royal-gold);"></i> <strong>Email:</strong> ${currentUser ? currentUser.email : ''}</p>
                                <p style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;"><i class="fas fa-phone" style="color: var(--royal-gold);"></i> <strong>Phone:</strong> ${currentUser && currentUser.phone ? currentUser.phone : 'Not provided'}</p>
                                <p style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;"><i class="fas fa-map-marker-alt" style="color: var(--royal-gold);"></i> <strong>Address:</strong> ${currentUser && currentUser.address ? currentUser.address : 'Not provided'}</p>
                            </div>
                            <button onclick="logout()" class="cta-button" style="margin-top: 30px; background: #f8f8f8; color: #666; border: 1px solid #ddd; box-shadow: none;">Logout</button>
                        </div>
                    `;
                } else if (title === 'Orders') {
                    content = `
                        <div style="padding: 20px;">
                            <div style="text-align: center; padding: 40px; color: #888;">
                                <i class="fas fa-shopping-bag" style="font-size: 40px; margin-bottom: 15px; color: var(--royal-gold); opacity: 0.5;"></i>
                                <p>You have no recent orders, Your Highness.</p>
                                <button class="cta-button" onclick="closeProductModal(); document.querySelector('a[href=\\'#shop\\']').click();" style="margin-top: 20px;">Shop Royal Collection</button>
                            </div>
                        </div>
                    `;
                } else if (title === 'Wishlist') {
                    const wishlist = getWishlist();
                    if (wishlist.length === 0) {
                        content = `
                            <div style="padding: 20px; text-align: center;">
                                <p style="margin-bottom: 20px;">Your wishlist is empty, Your Highness.</p>
                                <button class="cta-button" onclick="closeProductModal(); document.querySelector('a[href=\\'#shop\\']').click();">Explore Collection</button>
                            </div>
                        `;
                    } else {
                        content = `
                            <div style="padding: 20px;">
                                <p style="text-align: center; margin-bottom: 20px;">Your personal collection of desires.</p>
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                                    ${wishlist.map(item => `
                                        <div style="border: 1px solid #eee; padding: 15px; border-radius: 10px; position: relative;">
                                            <button onclick="toggleWishlist(event, '${item.name.replace(/'/g, "\\'")}', '${item.price}', '${item.image.replace(/\\/g, '\\\\')}', '${item.type}')" style="position: absolute; top: 10px; right: 10px; background: white; border: 1px solid #eee; border-radius: 50%; width: 25px; height: 25px; display: flex; align-items: center; justify-content: center; color: #e74c3c; cursor: pointer; z-index: 10;">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                            <div style="height: 120px; display: flex; align-items: center; justify-content: center; margin-bottom: 10px; border-radius: 8px; overflow: hidden;">
                                                <img src="${item.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="${item.name}">
                                            </div>
                                            <h5 style="font-size: 14px; margin-bottom: 5px; height: 40px; overflow: hidden;">${item.name}</h5>
                                            <p style="font-size: 12px; color: var(--royal-purple); font-weight: bold;">${item.price}</p>
                                            <button class="cta-button" style="width: 100%; padding: 8px; font-size: 12px; margin-top: 10px;">Add to Bag</button>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }

                }

                modalBody.innerHTML = content;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            // Add click handlers to shop and bestsellers products
            const productSections = [document.getElementById('shopSection'), document.getElementById('bestsellersSection')];
            productSections.forEach(section => {
                if (section) {
                    section.addEventListener('click', function (e) {
                        const clickedElement = e.target;
                        const productCard = clickedElement.closest('.product-card');

                        if (productCard && productCard.classList.contains('highlighted')) {
                            e.preventDefault();

                            // Get product index
                            const allProducts = Array.from(document.querySelectorAll('.product-card'));
                            const productIndex = allProducts.indexOf(productCard);

                            // Map index to product category
                            const categories = ['facewash', 'toner', 'serum', 'moisturizer', 'sunscreen', 'antiAging', 'acnePatches', 'brightening', 'eyecream', 'serum', 'brightening', 'moisturizer', 'serum', 'moisturizer', 'facewash', 'moisturizer', 'serum', 'antiAging', 'serum'];
                            if (categories[productIndex]) {
                                handleProductClick(categories[productIndex]);
                            }
                        }
                    });
                }
            });

            // Modal close button
            const closeModalBtn = document.getElementById('closeModal');
            if (closeModalBtn) {
                closeModalBtn.addEventListener('click', closeProductModal);
            }

            // Close modal when clicking outside
            const modal = document.getElementById('productModal');
            if (modal) {
                modal.addEventListener('click', function (e) {
                    if (e.target === modal) {
                        closeProductModal();
                    }
                });
            }

            // Close modal with Escape key
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && modal.classList.contains('active')) {
                    closeProductModal();
                }
            });

            // Initialize with normal skin type
            setSkinTypeForProducts('normal');

            // Initialize hero section as active
            hideAllSections();
            sections.hero.style.display = 'flex';
            sections.hero.classList.add('active');

            // INJECT WISHLIST BUTTONS INTO STATIC CARDS
            document.querySelectorAll('.product-card').forEach(card => {
                const name = card.querySelector('h3').textContent;
                const price = card.querySelector('p').textContent;
                const imgElement = card.querySelector('img');
                const img = imgElement ? imgElement.getAttribute('src') : 'images/ilunara_logo.png';
                const type = card.querySelector('.description')?.textContent || 'Skincare';

                const btn = document.createElement('button');
                btn.className = 'wishlist-btn';

                if (isWishlisted(name)) {
                    btn.classList.add('active');
                    btn.innerHTML = '<i class="fas fa-heart"></i>';
                } else {
                    btn.innerHTML = '<i class="far fa-heart"></i>';
                }

                btn.onclick = (e) => toggleWishlist(e, name, price, img, type);

                card.style.position = 'relative';
                // wrapper for image might mask absolute position, ensure it's on top
                card.appendChild(btn);
            });
        });


        // ============ WISHLIST LOGIC ============
        function getWishlist() {
            return JSON.parse(localStorage.getItem('ilunara_wishlist')) || [];
        }

        function isWishlisted(productName) {
            const wishlist = getWishlist();
            return wishlist.some(item => item.name === productName);
        }

        function toggleWishlist(e, name, price, image, type) {
            e.stopPropagation(); // Prevent card click
            if (e.target.tagName !== 'BUTTON' && !e.target.closest('button')) return;

            const btn = e.currentTarget;
            let wishlist = getWishlist();
            const index = wishlist.findIndex(item => item.name === name);

            if (index > -1) {
                // Remove
                wishlist.splice(index, 1);
                btn.classList.remove('active');
                btn.querySelector('i').className = 'far fa-heart';
            } else {
                // Add
                wishlist.push({ name, price, image, type });
                btn.classList.add('active');
                btn.querySelector('i').className = 'fas fa-heart';
            }

            localStorage.setItem('ilunara_wishlist', JSON.stringify(wishlist));

            // If we are in the profile wishlist view, re-render it
            const modalTitle = document.getElementById('modalTitle');
            if (modalTitle && modalTitle.textContent === 'Wishlist') {
                showProfileModal('Wishlist');
            }
        }
