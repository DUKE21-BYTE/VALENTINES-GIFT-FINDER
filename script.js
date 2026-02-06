/* ===== DARK MODE ===== */
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.documentElement.classList.add("dark");
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function (event) {
    if (event.matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

/* ===== DATA ===== */
var CATEGORIES = [
  {
    id: "foodie",
    name: "Foodies",
    desc: "Culinary delights",
    icon: "fa-utensils",
    cls: "cat-foodie",
  },
  {
    id: "adventure",
    name: "Adventure Seekers",
    desc: "Thrill & travel",
    icon: "fa-mountain-sun",
    cls: "cat-adventure",
  },
  {
    id: "tech",
    name: "Tech Lovers",
    desc: "Gadgets & gear",
    icon: "fa-microchip",
    cls: "cat-tech",
  },
  {
    id: "creative",
    name: "Creative Partners",
    desc: "Art & expression",
    icon: "fa-palette",
    cls: "cat-creative",
  },
  {
    id: "wellness",
    name: "Self-Love & Wellness",
    desc: "Relaxation & care",
    icon: "fa-spa",
    cls: "cat-wellness",
  },
  {
    id: "distance",
    name: "Long-Distance",
    desc: "Love across miles",
    icon: "fa-paper-plane",
    cls: "cat-distance",
  },
];

var GIFTS = [
  {
    name: "Gourmet Chocolate Collection",
    category: "foodie",
    price: 28,
    visual: "vis-food",
    icon: "fa-candy-cane",
    tag: "Best Seller",
    lastMinute: false,
    desc: "Artisan truffles and bonbons from award-winning chocolatiers. A classic with a luxurious twist.",
  },
  {
    name: "Wine & Cheese Tasting Box",
    category: "foodie",
    price: 65,
    visual: "vis-food",
    icon: "fa-wine-glass",
    tag: "Popular",
    lastMinute: false,
    desc: "Curated pairing of fine wines and artisan cheeses delivered to your door for a romantic evening.",
  },
  {
    name: "Cooking Class for Two",
    category: "foodie",
    price: 89,
    visual: "vis-food",
    icon: "fa-fire-burner",
    tag: "Experience",
    lastMinute: false,
    desc: "Learn to cook a romantic Italian dinner together with a professional chef — in person or virtual.",
  },
  {
    name: "Gourmet Subscription Box",
    category: "foodie",
    price: 45,
    visual: "vis-food",
    icon: "fa-box-open",
    tag: "Monthly",
    lastMinute: false,
    desc: "Monthly deliveries of curated snacks, sauces, and delicacies from around the world.",
  },
  {
    name: "Restaurant Gift Card",
    category: "foodie",
    price: 50,
    visual: "vis-food",
    icon: "fa-receipt",
    tag: "Last Minute",
    lastMinute: true,
    desc: "Digital gift card to their favorite restaurant — instant delivery, zero stress.",
  },
  {
    name: "Hot Air Balloon Experience",
    category: "adventure",
    price: 180,
    visual: "vis-adventure",
    icon: "fa-hot-air-balloon",
    tag: "Premium",
    lastMinute: false,
    desc: "Soar above breathtaking landscapes at sunrise. An unforgettable aerial adventure for two.",
  },
  {
    name: "Scenic Helicopter Tour",
    category: "adventure",
    price: 250,
    visual: "vis-adventure",
    icon: "fa-helicopter",
    tag: "Luxury",
    lastMinute: false,
    desc: "A thrilling helicopter ride over the city skyline or coastal cliffs with champagne on landing.",
  },
  {
    name: "Adventure Gift Voucher",
    category: "adventure",
    price: 75,
    visual: "vis-adventure",
    icon: "fa-ticket",
    tag: "Flexible",
    lastMinute: true,
    desc: "Choose from hundreds of experiences — kayaking, rock climbing, zip-lining, and more.",
  },
  {
    name: "Weekend Camping Kit",
    category: "adventure",
    price: 95,
    visual: "vis-adventure",
    icon: "fa-campground",
    tag: "Unique",
    lastMinute: false,
    desc: "Everything you need for a romantic glamping weekend: fairy lights, blankets, and gourmet trail snacks.",
  },
  {
    name: "Smart Watch (Latest Gen)",
    category: "tech",
    price: 199,
    visual: "vis-tech",
    icon: "fa-clock",
    tag: "Top Pick",
    lastMinute: false,
    desc: "Track fitness, stay connected, and look stylish. The gift that keeps giving every day.",
  },
  {
    name: "Wireless Earbuds Pro",
    category: "tech",
    price: 79,
    visual: "vis-tech",
    icon: "fa-headphones",
    tag: "Popular",
    lastMinute: false,
    desc: "Premium noise-cancelling earbuds with spatial audio for the ultimate listening experience.",
  },
  {
    name: "Smart Home Starter Kit",
    category: "tech",
    price: 55,
    visual: "vis-tech",
    icon: "fa-house-signal",
    tag: "Trending",
    lastMinute: false,
    desc: "Smart lights, plugs, and a mini speaker to upgrade their space with voice-controlled ambiance.",
  },
  {
    name: "Digital Art Tablet",
    category: "tech",
    price: 120,
    visual: "vis-tech",
    icon: "fa-pen-fancy",
    tag: "Creative",
    lastMinute: false,
    desc: "For the partner who loves to sketch and design — a pressure-sensitive drawing tablet with stylus.",
  },
  {
    name: "Streaming Service Bundle",
    category: "tech",
    price: 25,
    visual: "vis-tech",
    icon: "fa-tv",
    tag: "Last Minute",
    lastMinute: true,
    desc: "Gift card for their favorite streaming platforms — movies, music, games. Instant delivery.",
  },
  {
    name: "Pottery Workshop for Two",
    category: "creative",
    price: 68,
    visual: "vis-creative",
    icon: "fa-hand-sparkles",
    tag: "Hands-On",
    lastMinute: false,
    desc: "Channel your inner artist together. Make mugs, bowls, or sculptures in a cozy studio.",
  },
  {
    name: "Watercolor Paint Set",
    category: "creative",
    price: 35,
    visual: "vis-creative",
    icon: "fa-paintbrush",
    tag: "Artistic",
    lastMinute: false,
    desc: "Professional-grade watercolors with brushes and paper. Perfect for creative date nights at home.",
  },
  {
    name: "Dance Class Package",
    category: "creative",
    price: 90,
    visual: "vis-creative",
    icon: "fa-music",
    tag: "Experience",
    lastMinute: false,
    desc: "Four sessions of salsa, tango, or swing dancing. Learn together and fall in love on the dance floor.",
  },
  {
    name: "Custom Photo Book",
    category: "creative",
    price: 40,
    visual: "vis-creative",
    icon: "fa-book-open",
    tag: "Personal",
    lastMinute: false,
    desc: "Compile your favorite memories into a beautifully bound photo book. A keepsake to treasure.",
  },
  {
    name: "Couples Spa Day",
    category: "wellness",
    price: 150,
    visual: "vis-wellness",
    icon: "fa-hot-tub-person",
    tag: "Relaxing",
    lastMinute: false,
    desc: "Full day of massages, facials, and relaxation for two. The ultimate de-stress gift.",
  },
  {
    name: "Aromatherapy Candle Set",
    category: "wellness",
    price: 32,
    visual: "vis-wellness",
    icon: "fa-fire",
    tag: "Cozy",
    lastMinute: false,
    desc: "Hand-poured soy candles in romantic scents — rose, jasmine, and vanilla. Sets the perfect mood.",
  },
  {
    name: "Self-Care Gift Basket",
    category: "wellness",
    price: 55,
    visual: "vis-wellness",
    icon: "fa-basket-shopping",
    tag: "Thoughtful",
    lastMinute: false,
    desc: "Bath bombs, face masks, body oils, and teas curated for a night of pampering.",
  },
  {
    name: "Yoga Mat & Accessories",
    category: "wellness",
    price: 48,
    visual: "vis-wellness",
    icon: "fa-person-praying",
    tag: "Active",
    lastMinute: false,
    desc: "Premium eco-friendly yoga mat with blocks and strap. For the mindful partner.",
  },
  {
    name: "Wellness App Subscription",
    category: "wellness",
    price: 20,
    visual: "vis-wellness",
    icon: "fa-mobile-screen",
    tag: "Last Minute",
    lastMinute: true,
    desc: "A year of guided meditations, sleep stories, and wellness routines — digital delivery.",
  },
  {
    name: "Long-Distance Lamp Set",
    category: "distance",
    price: 85,
    visual: "vis-distance",
    icon: "fa-lightbulb",
    tag: "Unique",
    lastMinute: false,
    desc: "Touch your lamp and theirs lights up across the miles. A glowing reminder of your bond.",
  },
  {
    name: "Virtual Movie Night Kit",
    category: "distance",
    price: 30,
    visual: "vis-distance",
    icon: "fa-film",
    tag: "Fun",
    lastMinute: true,
    desc: "Streaming gift cards, gourmet popcorn, and a watch-party setup for a synchronized movie date.",
  },
  {
    name: "Digital Love Letter Book",
    category: "distance",
    price: 15,
    visual: "vis-distance",
    icon: "fa-envelope-open-text",
    tag: "Last Minute",
    lastMinute: true,
    desc: "Write heartfelt letters scheduled to arrive daily. Beautiful digital stationery included.",
  },
  {
    name: "Star Map Print",
    category: "distance",
    price: 40,
    visual: "vis-distance",
    icon: "fa-star",
    tag: "Romantic",
    lastMinute: false,
    desc: "A custom print of the night sky on the day you met, your first date, or another meaningful moment.",
  },
  {
    name: "Online Experience Voucher",
    category: "distance",
    price: 35,
    visual: "vis-distance",
    icon: "fa-laptop",
    tag: "Flexible",
    lastMinute: true,
    desc: "Choose from virtual cooking classes, wine tastings, escape rooms, and more — all from home.",
  },
];

var EXPERIENCES = [
  {
    name: "Romantic Dinner Cruise",
    type: "Local · Dining",
    icon: "fa-ship",
    price: "$120–$250/couple",
    desc: "Set sail with a multi-course dinner, live music, and city skyline views. An unforgettable evening on the water.",
  },
  {
    name: "Couples Wellness Retreat",
    type: "Local · Wellness",
    icon: "fa-spa",
    price: "$95–$200/couple",
    desc: "A half-day retreat with hot stone massages, aromatherapy, and champagne in a serene spa setting.",
  },
  {
    name: "Private Wine Tasting",
    type: "Local · Food & Drink",
    icon: "fa-wine-bottle",
    price: "$60–$120/couple",
    desc: "Exclusive vineyard or urban winery tour with guided tastings and charcuterie pairing.",
  },
  {
    name: "Sunset Hot Air Balloon Ride",
    type: "Adventure · Outdoor",
    icon: "fa-cloud",
    price: "$175–$350/couple",
    desc: "Float above rolling hills as the sun dips below the horizon. Includes a champagne toast on landing.",
  },
  {
    name: "Virtual Escape Room",
    type: "Online · Fun",
    icon: "fa-puzzle-piece",
    price: "$25–$45/couple",
    desc: "Solve puzzles and crack codes together from the comfort of your couch. Great for long-distance couples.",
  },
  {
    name: "Theatre & Show Tickets",
    type: "Local · Entertainment",
    icon: "fa-masks-theater",
    price: "$50–$200/ticket",
    desc: "Broadway, West End, or your local theatre — an evening of drama, comedy, or musical magic.",
  },
];

var LAST_MINUTE = [
  {
    name: "Digital Gift Cards",
    icon: "fa-credit-card",
    desc: "Streaming services, delivery apps, or their favorite store. Instant email delivery — the easiest save.",
  },
  {
    name: "Subscription Box Gift",
    icon: "fa-box-open",
    desc: "Coffee, books, snacks, or beauty — pick a monthly box that matches their personality.",
  },
  {
    name: "Same-Day Flower Delivery",
    icon: "fa-seedling",
    desc: "Beautiful bouquets delivered to their door today. Classic roses or a unique seasonal arrangement.",
  },
  {
    name: "Printable Love Coupons",
    icon: "fa-ticket",
    desc: "DIY coupon book for dates, massages, breakfast in bed, and more. Downloadable and printable in minutes.",
  },
  {
    name: "Custom Spotify Playlist",
    icon: "fa-headphones",
    desc: "Curate a playlist of songs that tell your love story. Share it with a heartfelt message.",
  },
  {
    name: "Video Message Compilation",
    icon: "fa-video",
    desc: "Gather surprise video messages from friends and family into one heartwarming montage.",
  },
  {
    name: "Online Class Together",
    icon: "fa-laptop-code",
    desc: "Sign up for a virtual cooking, painting, or dance class. Learn something new on your date night.",
  },
  {
    name: "Handwritten Letter",
    icon: "fa-pen-to-square",
    desc: "Nothing beats a heartfelt letter. Pour your feelings onto paper — the most timeless gesture.",
  },
];

var LOCAL_IDEAS = [
  {
    name: "Valentine's Dinner Menu",
    type: "Restaurant · Special Menu",
    badge: "Book Now",
    desc: "Many restaurants offer special prix fixe menus for Valentine's. Reserve early for the best tables.",
  },
  {
    name: "Couples Massage",
    type: "Spa · Wellness",
    badge: "Popular",
    desc: "Side-by-side relaxation with aromatic oils and soothing music. The perfect shared indulgence.",
  },
  {
    name: "Scenic City Walk",
    type: "Outdoor · Free",
    badge: "Free",
    desc: "Explore your city's most romantic spots — gardens, waterfronts, and hidden laneway cafés.",
  },
  {
    name: "Sunset Picnic",
    type: "Outdoor · DIY",
    badge: "Budget",
    desc: "Pack a blanket, cheese, wine, and chocolate. Find a hilltop or park with a view and enjoy the golden hour.",
  },
  {
    name: "Art Gallery or Museum",
    type: "Culture · Indoor",
    badge: "Unique",
    desc: "Wander through exhibitions together. Many galleries have special Valentine's evening events.",
  },
  {
    name: "Live Music Night",
    type: "Entertainment · Nightlife",
    badge: "Vibrant",
    desc: "Jazz clubs, acoustic sets, or rooftop DJs — find live music for a memorable night out.",
  },
  {
    name: "Stargazing Date",
    type: "Outdoor · Romantic",
    badge: "Free",
    desc: "Drive to a dark sky spot with blankets and hot cocoa. Use a stargazing app to find constellations together.",
  },
  {
    name: "Cooking at Home",
    type: "Home · DIY",
    badge: "Intimate",
    desc: "Pick a recipe neither of you has tried. Cook together, light candles, and enjoy your creation.",
  },
];

var QUIZ_QUESTIONS = [
  {
    question: "What does your valentine enjoy most?",
    sub: "Pick the activity closest to their heart.",
    options: [
      {
        text: "Trying new foods & restaurants",
        icon: "fa-utensils",
        tags: ["foodie"],
      },
      {
        text: "Outdoor adventures & travel",
        icon: "fa-mountain-sun",
        tags: ["adventure"],
      },
      { text: "Gadgets & technology", icon: "fa-microchip", tags: ["tech"] },
      {
        text: "Art, music & creativity",
        icon: "fa-palette",
        tags: ["creative"],
      },
    ],
  },
  {
    question: "How do they prefer to unwind?",
    sub: "Their ideal relaxation style.",
    options: [
      { text: "A spa day or meditation", icon: "fa-spa", tags: ["wellness"] },
      {
        text: "Binge-watching or gaming",
        icon: "fa-tv",
        tags: ["tech", "distance"],
      },
      { text: "Cooking a nice meal", icon: "fa-fire-burner", tags: ["foodie"] },
      {
        text: "Going for a hike or workout",
        icon: "fa-person-hiking",
        tags: ["adventure", "wellness"],
      },
    ],
  },
  {
    question: "What's your ideal budget?",
    sub: "Every budget has amazing options.",
    options: [
      {
        text: "Under $30 — sweet & simple",
        icon: "fa-coins",
        tags: ["budget_low"],
      },
      {
        text: "$30–$75 — thoughtful picks",
        icon: "fa-wallet",
        tags: ["budget_mid"],
      },
      {
        text: "$75–$150 — going all out",
        icon: "fa-gem",
        tags: ["budget_high"],
      },
      {
        text: "$150+ — premium splurge",
        icon: "fa-crown",
        tags: ["budget_premium"],
      },
    ],
  },
  {
    question: "Physical gift or experience?",
    sub: "Some prefer things, others prefer memories.",
    options: [
      {
        text: "A physical gift to unwrap",
        icon: "fa-gift",
        tags: ["physical"],
      },
      {
        text: "An experience to share",
        icon: "fa-champagne-glasses",
        tags: ["experience"],
      },
      {
        text: "Something digital or virtual",
        icon: "fa-laptop",
        tags: ["digital", "distance"],
      },
      {
        text: "A mix of everything!",
        icon: "fa-shuffle",
        tags: ["physical", "experience", "digital"],
      },
    ],
  },
];

/* ===== STATE ===== */
var activeCategory = "all";
var activePrice = "all";
var quizStep = 0;
var quizAnswers = [];
var quizResultTags = [];

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", function () {
  renderCategories();
  
  // Favorites Logic
  loadFavorites();

  renderGifts();
  renderExperiences();
  renderLastMinute();
  renderLocalIdeas();
  renderQuiz();
  initCountdown();
  initFloatingHearts();
  initScrollReveal();
  initBackToTop();
  initMobileNav();
  initPriceFilters();
  
  updateFavoritesUI();
});

/* ===== FAVORITES SYSTEM ===== */
var favorites = [];

function loadFavorites() {
  var saved = localStorage.getItem('cupidFavorites');
  if (saved) {
    try {
      favorites = JSON.parse(saved);
    } catch(e) {
      console.error('Error loading favorites', e);
      favorites = [];
    }
  }
}

function toggleFavorite(giftName) {
  var index = favorites.indexOf(giftName);
  if (index === -1) {
    favorites.push(giftName);
    showToast('Added to Favorites ❤️');
  } else {
    favorites.splice(index, 1);
    showToast('Removed from Favorites');
  }
  localStorage.setItem('cupidFavorites', JSON.stringify(favorites));
  renderGifts(); // Re-render to update hearts
  updateFavoritesUI();
}

function updateFavoritesUI() {
  var favLink = document.getElementById('favLink');
  var mobFavLink = document.getElementById('mobFavLink');
  
  if(favorites.length > 0) {
    if(favLink) {
        favLink.style.display = 'inline-flex';
        favLink.innerHTML = '<i class="fas fa-heart" style="color:var(--rose)"></i> Favorites (' + favorites.length + ')';
    }
    if(mobFavLink) {
        mobFavLink.style.display = 'block';
        mobFavLink.innerText = 'Favorites (' + favorites.length + ')';
    }
  } else {
    if(favLink) favLink.style.display = 'none';
    if(mobFavLink) mobFavLink.style.display = 'none';
  }
}

// Low-dependency Toast
function showToast(msg) {
  var toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerText = msg;
  document.body.appendChild(toast);
  
  // Trigger reflow
  toast.offsetHeight;
  
  toast.classList.add('show');
  
  setTimeout(function() {
    toast.classList.remove('show');
    setTimeout(function() { document.body.removeChild(toast); }, 300);
  }, 2500);
}

/* ===== RENDER CATEGORIES ===== */
function renderCategories() {
  var grid = document.getElementById("categoriesGrid");
  if (!grid) return;
  var html =
    '<div class="category-card ' +
    (activeCategory === "all" ? "active" : "") +
    '" onclick="filterCategory(\'all\')">' +
    '<div class="category-icon" style="background:var(--blush);color:var(--rose);"><i class="fas fa-border-all"></i></div>' +
    "<h3>All Gifts</h3><p>Browse everything</p></div>";

  CATEGORIES.forEach(function (cat) {
    html +=
      '<div class="category-card ' +
      cat.cls +
      " " +
      (activeCategory === cat.id ? "active" : "") +
      '" onclick="filterCategory(\'' +
      cat.id +
      "')\">" +
      '<div class="category-icon"><i class="fas ' +
      cat.icon +
      '"></i></div>' +
      "<h3>" +
      cat.name +
      "</h3><p>" +
      cat.desc +
      "</p></div>";
  });
  grid.innerHTML = html;
}

function filterCategory(id) {
  activeCategory = id;
  renderCategories();
  renderGifts();

  var giftsSection = document.getElementById("gifts");
  if (giftsSection) {
    giftsSection.scrollIntoView({ behavior: "smooth" });
  }
}

function initPriceFilters() {
  var buttons = document.querySelectorAll(".price-btn");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) {
        b.classList.remove("active");
      });
      this.classList.add("active");
      activePrice = this.getAttribute("data-price");
      renderGifts();
    });
  });
}

/* ===== RENDER GIFTS ===== */
function renderGifts() {
  var grid = document.getElementById("giftsGrid");
  var noRes = document.getElementById("noResults");
  if (!grid) return;

  var filtered = GIFTS.filter(function (gift) {
    var catMatch = activeCategory === "all" || gift.category === activeCategory;
    var priceMatch = true;

    if (activePrice === "30") priceMatch = gift.price < 30;
    else if (activePrice === "50") priceMatch = gift.price < 50;
    else if (activePrice === "100") priceMatch = gift.price < 100;
    else if (activePrice === "premium") priceMatch = gift.price >= 100;

    return catMatch && priceMatch;
  });

  if (filtered.length === 0) {
    grid.style.display = "none";
    if (noRes) noRes.style.display = "block";
  } else {
    grid.style.display = "grid";
    if (noRes) noRes.style.display = "none";

    var html = filtered
      .map(function (gift) {
        var isFav = favorites.includes(gift.name);
        // Using replace(/'/g, "\\'") to escape quotes for the onclick handler
        var safeName = gift.name.replace(/'/g, "\\'");
        
        return (
          '<div class="gift-card">' +
          '<div class="gift-visual ' +
          gift.visual +
          '">' +
          '<i class="fas ' +
          gift.icon +
          '"></i>' +
          '<div class="gift-tag ' +
          (gift.lastMinute ? "last-minute" : "") +
          '">' +
          gift.tag +
          "</div>" +
          '<button class="fav-btn ' + 
          (isFav ? 'active' : '') + 
          '" onclick="toggleFavorite(\'' + 
          safeName + 
          '\')" aria-label="Toggle favorite">' +
          '<i class="' + (isFav ? 'fas' : 'far') + ' fa-heart"></i>' +
          '</button>' +
          "</div>" +
          '<div class="gift-info">' +
          '<div class="gift-category-label">' +
          getCategoryName(gift.category) +
          "</div>" +
          "<h3>" +
          gift.name +
          "</h3>" +
          "<p>" +
          gift.desc +
          "</p>" +
          "</div>" +
          '<div class="gift-footer">' +
          '<div class="gift-price">$' +
          gift.price +
          "</div>" +
          '<a href="javascript:void(0)" class="gift-cta" onclick="openDetailModal(\'' + safeName + '\', \'' + gift.desc.replace(/'/g, "\\'") + '\', ' + gift.price + ', \'gift\')">View Deal</a>' +
          "</div>" +
          "</div>"
        );
      })
      .join("");
    grid.innerHTML = html;
  }
}

function getCategoryName(id) {
  var cat = CATEGORIES.find(function (c) {
    return c.id === id;
  });
  return cat ? cat.name : "Gift Idea";
}

/* ===== RENDER EXPERIENCES ===== */
function renderExperiences() {
  var grid = document.getElementById("experiencesGrid");
  if (!grid) return;

  var html = EXPERIENCES.map(function (exp) {
    return (
      '<div class="experience-card">' +
      '<div class="exp-header">' +
      '<div class="exp-icon"><i class="fas ' +
      exp.icon +
      '"></i></div>' +
      '<div class="exp-meta">' +
      "<h3>" +
      exp.name +
      "</h3>" +
      '<div class="exp-type">' +
      exp.type +
      "</div>" +
      "</div>" +
      "</div>" +
      '<div class="exp-body"><p>' +
      exp.desc +
      "</p></div>" +
      '<div class="exp-footer">' +
      '<div class="exp-price">' +
      exp.price +
      "</div>" +
      '<a href="javascript:void(0)" class="exp-cta" onclick="openDetailModal(\'' + exp.name.replace(/'/g, "\\'") + '\', \'' + exp.desc.replace(/'/g, "\\'") + '\', \'' + exp.price + '\', \'experience\')">Details</a>' +
      "</div>" +
      "</div>"
    );
  }).join("");
  grid.innerHTML = html;
}

/* ===== RENDER LAST MINUTE ===== */
function renderLastMinute() {
  var grid = document.getElementById("lastMinuteGrid");
  if (!grid) return;

  var html = LAST_MINUTE.map(function (item) {
    return (
      '<div class="lm-card">' +
      '<div class="lm-icon"><i class="fas ' +
      item.icon +
      '"></i></div>' +
      "<h3>" +
      item.name +
      "</h3>" +
      "<p>" +
      item.desc +
      "</p>" +
      '<a href="javascript:void(0)" class="lm-link" onclick="openDetailModal(\'' + item.name.replace(/'/g, "\\'") + '\', \'' + item.desc.replace(/'/g, "\\'") + '\', \'Varies\', \'lastminute\')">Find Options <i class="fas fa-arrow-right"></i></a>' +
      "</div>"
    );
  }).join("");
  grid.innerHTML = html;
}

/* ===== RENDER LOCAL IDEAS ===== */
function renderLocalIdeas() {
  var grid = document.getElementById("localGrid");
  if (!grid) return;

  var html = LOCAL_IDEAS.map(function (item) {
    return (
      '<div class="local-card">' +
      '<div class="local-badge">' +
      item.badge +
      "</div>" +
      "<h3>" +
      item.name +
      "</h3>" +
      '<div class="local-type"><i class="fas fa-location-dot"></i> ' +
      item.type +
      "</div>" +
      "<p>" +
      item.desc +
      "</p>" +
      "</div>"
    );
  }).join("");
  grid.innerHTML = html;
}

/* ===== RENDER QUIZ ===== */
function renderQuiz() {
  var container = document.getElementById("quizContainer");
  if (!container) return;

  if (quizStep < QUIZ_QUESTIONS.length) {
    var q = QUIZ_QUESTIONS[quizStep];
    var progress = "";
    for (var i = 0; i < QUIZ_QUESTIONS.length; i++) {
      var cls =
        "step" +
        (i === quizStep ? " active" : "") +
        (i < quizStep ? " done" : "");
      progress += '<div class="' + cls + '"></div>';
    }

    var optionsHtml = q.options
      .map(function (opt, idx) {
        return (
          '<div class="quiz-option" onclick="handleQuizAnswer(' +
          idx +
          ')">' +
          '<i class="fas ' +
          opt.icon +
          '"></i>' +
          opt.text +
          "</div>"
        );
      })
      .join("");

    var html =
      '<div class="quiz-progress">' +
      progress +
      "</div>" +
      '<div class="quiz-question">' +
      "<h3>" +
      q.question +
      "</h3>" +
      "<p>" +
      q.sub +
      "</p>" +
      "</div>" +
      '<div class="quiz-options">' +
      optionsHtml +
      "</div>";

    container.innerHTML = html;
  } else {
    // Results - Generate AI Prompt
    var tags = quizResultTags.join(", ");
    var prompt = "Help me find a Valentine's Day gift. My partner is into: " + tags + ". Please suggest 5 creative, specific gift ideas that match these interests.";
    var aiLink = "https://chatgpt.com/?q=" + encodeURIComponent(prompt);

    var html =
      '<div class="quiz-results">' +
      '<div style="font-size:3rem; margin-bottom:16px; color:var(--rose);"><i class="fas fa-gift"></i></div>' +
      "<h3>We've Found Some Ideas!</h3>" +
      "<p>Based on your answers (<b>" + tags.replace(/_/g, " ") + "</b>), we have two options for you:</p>" +
      
      '<div style="display:flex; flex-direction:column; gap:12px; max-width:300px; margin:0 auto;">' +
      
      // Button 1: AI Custom Recommendation
      '<a href="' + aiLink + '" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="justify-content:center; background: linear-gradient(135deg, #74AA9C, #10a37f);">' +
      '<i class="fas fa-robot"></i> Get AI Custom Plan' +
      '</a>' +
      
      // Button 2: Internal Scroll
      '<button class="btn btn-secondary" onclick="scrollToGifts()" style="justify-content:center;">' +
      'Browse Curated Picks' +
      '</button>' +
      
      '</div>' +

      '<br><button class="btn" onclick="resetQuiz()" style="font-size:0.8rem; color:var(--text-muted); text-decoration:underline;">Retake Quiz</button>' +
      "</div>";
    container.innerHTML = html;
  }
}

function handleQuizAnswer(optIndex) {
  var q = QUIZ_QUESTIONS[quizStep];
  var selected = q.options[optIndex];

  // Add tags
  selected.tags.forEach(function (tag) {
    if (!quizResultTags.includes(tag)) quizResultTags.push(tag);
  });

  quizAnswers.push(selected);
  quizStep++;

  // Tiny delay for visual feedback if we were handling selection state,
  // but here we just move to next step immediately for snappiness.
  renderQuiz();
}

function resetQuiz() {
  quizStep = 0;
  quizAnswers = [];
  quizResultTags = [];
  renderQuiz();
}

function scrollToGifts() {
  // Determine most common category from tags?
  // For simplicity, just scroll to gifts.
  // In a real app, we might filter based on the tags.
  var gifts = document.getElementById("gifts");
  if (gifts) gifts.scrollIntoView({ behavior: "smooth" });
}

/* ===== COUNTDOWN ===== */
function initCountdown() {
  var dest = new Date("Feb 14, 2026 00:00:00").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var diff = dest - now;

    if (diff < 0) {
      clearInterval(x);
      document.getElementById("countdownDays").innerHTML = "0";
      return;
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    var elDays = document.getElementById("countdownDays");
    if (elDays) elDays.innerHTML = days;

    var elD = document.getElementById("cdDays");
    var elH = document.getElementById("cdHours");
    var elM = document.getElementById("cdMins");
    var elS = document.getElementById("cdSecs");

    if (elD) elD.innerHTML = days;
    if (elH) elH.innerHTML = hours;
    if (elM) elM.innerHTML = minutes;
    if (elS) elS.innerHTML = seconds;
  }, 1000);
}

/* ===== UTILS ===== */
function initFloatingHearts() {
  var container = document.getElementById("heartsContainer");
  if (!container) return;

  // Create 15 hearts
  for (var i = 0; i < 15; i++) {
    createHeart(container);
  }
}

function createHeart(container) {
  var heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerHTML = '<i class="fas fa-heart"></i>';

  // Random position and animation details
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = Math.random() * 10 + 10 + "s";
  heart.style.animationDelay = Math.random() * 5 + "s";
  heart.style.fontSize = Math.random() * 1 + 0.5 + "rem";

  container.appendChild(heart);
}

function initScrollReveal() {
  var reveals = document.querySelectorAll(".reveal");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  reveals.forEach(function (r) {
    observer.observe(r);
  });
}

function initBackToTop() {
  var btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initMobileNav() {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mobileNav");
  var links = document.querySelectorAll(".mobile-link");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.contains("open");
      if (isOpen) {
        nav.classList.remove("open");
        toggle.innerHTML = '<i class="fas fa-bars"></i>';
      } else {
        nav.classList.add("open");
        toggle.innerHTML = '<i class="fas fa-times"></i>';
      }
    });

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }
}

/* ===== GLOBAL HELPERS ===== */
function smoothScrollTo(selector) {
  var el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function showModal(title, body) {
  var overlay = document.getElementById("modalOverlay");
  var t = document.getElementById("modalTitle");
  var b = document.getElementById("modalBody");
  // Clean up previous actions if any
  var actions = document.querySelector(".modal-actions");
  if(actions) actions.innerHTML = '<button class="btn btn-secondary" onclick="closeModal()">Close</button>';

  if (t) t.textContent = title;
  if (b) b.textContent = body;
  if (overlay) overlay.classList.add("open");
}

function openDetailModal(name, desc, price, type) {
    var overlay = document.getElementById("modalOverlay");
    var t = document.getElementById("modalTitle");
    var b = document.getElementById("modalBody");
    var actions = document.querySelector(".modal-actions");
    
    if (t) t.textContent = name;
    
    var content = desc + '<br><br><strong>Price Estimate: ' + (typeof price === 'number' ? '$'+price : price) + '</strong>';
    if(type === 'experience') content += '<br><em>Experience vouchers available online or locally.</em>';
    
    if (b) b.innerHTML = content;
    
    // Smart Link Logic
    var linkData = getSmartLink(name, type);
    
    if(actions) {
        actions.innerHTML = 
            '<a href="' + linkData.url + '" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-right:10px; text-decoration:none;">' +
            '<i class="fas fa-' + linkData.icon + '"></i> ' + linkData.text + '</a>' +
            '<button class="btn btn-secondary" onclick="closeModal()">Close</button>';
    }
        
    if (overlay) overlay.classList.add("open");
}

function getSmartLink(name, type) {
    var lower = name.toLowerCase();
    var query = encodeURIComponent(name);
    
    // Default fallback
    var result = {
        url: '#',
        text: 'Find Options',
        icon: 'search'
    };

    // 1. MUSIC & SPOTIFY
    if (lower.includes("spotify") || lower.includes("playlist")) {
        return {
            url: "https://open.spotify.com/",
            text: "Open Spotify",
            icon: "music"
        };
    }

    // 2. VIDEO MESSAGES (Cameo)
    if (lower.includes("cameo") || lower.includes("video message")) {
        return {
            url: "https://www.cameo.com/",
            text: "Explore Cameo",
            icon: "video"
        };
    }

    // 3. ONLINE CLASSES (MasterClass/Udemy)
    if (lower.includes("class") || lower.includes("course") || lower.includes("workshop")) {
        return {
            url: "https://www.masterclass.com/",
            text: "Browse MasterClass",
            icon: "laptop"
        };
    }

    // 4. FLOWERS (1-800-Flowers)
    if (lower.includes("flower") || lower.includes("bouquet")) {
        return {
            url: "https://www.1800flowers.com/",
            text: "Order Flowers",
            icon: "seedling"
        };
    }

    // 5. BOOKS (Bookshop.org - Sustainable)
    if (lower.includes("book") && !lower.includes("coupon") && !lower.includes("scrapbook")) {
        return {
            url: "https://bookshop.org/",
            text: "Find Books",
            icon: "book"
        };
    }
    
    // 6. DIY / PRINTABLES (Etsy/Pinterest)
    if (lower.includes("coupon") || lower.includes("printable") || lower.includes("scrapbook") || lower.includes("letter")) {
        return {
            url: "https://www.etsy.com/search?q=" + query,
            text: "Find Guides/Templates",
            icon: "pencil"
        };
    }
    
    // 7. SUBSCRIPTIONS (Cratejoy)
    if (lower.includes("subscription box")) {
        return {
            url: "https://www.cratejoy.com/search?q=" + query,
            text: "Browse Boxes",
            icon: "box-open"
        };
    }

    // FALLBACKS BASED ON TYPE
    if(type === 'gift' || type === 'lastminute') {
        result.url = 'https://www.amazon.com/s?k=' + query + '&tag=cupidspicks-20';
        result.text = 'Check Amazon';
        result.icon = 'shopping-cart';
    } else if(type === 'experience') {
         result.url = 'https://www.google.com/search?q=' + query + '+near+me';
         result.text = 'Find Near Me';
         result.icon = 'map-marker-alt';
    }
    
    return result;
}

function closeModal() {
  var overlay = document.getElementById("modalOverlay");
  if (overlay) overlay.classList.remove("open");
}

// Global scope exposure for inline onclicks
window.smoothScrollTo = smoothScrollTo;
window.showModal = showModal;
window.openDetailModal = openDetailModal;
window.closeModal = closeModal;
window.filterCategory = filterCategory;
window.handleQuizAnswer = handleQuizAnswer;
window.scrollToGifts = scrollToGifts;
window.resetQuiz = resetQuiz;
