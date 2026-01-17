// ===== LANGUAGE SWITCH =====
const translations={en:{"company-name":"PinkSoft Company","company-desc":"Creative Digital & Web Solution","nav-home":"Home","nav-products":"Products","nav-download":"Download","nav-buy":"Buy Now","nav-support":"Support","nav-about":"About Us","search-placeholder":"Search product...","hero-text":"We Build Modern & Elegant Digital Products","story-title":"Top Story Headline","story-1":"PinkSoft Company is a creative tech company focused on developing modern websites, apps, and digital solutions for small to large businesses.","story-2":"We prioritize elegant design, high performance, and ease of use for our clients.","btn-download":"Download","btn-purchase":"Purchase","newsletter-title":"Monthly Newsletter","newsletter-desc":"Get monthly updates about technology, design, and the latest products from PinkSoft Company.","news-ui":"UI Design","news-web":"Web App","news-mobile":"Mobile App","news-tips":"IT Tips","reviews-title":"User Reviews","sidebar-title":"Company Profile","btn-watch":"Watch Video","footer-home":"Home","footer-products":"Products","footer-privacy":"Privacy","footer-terms":"Terms","footer-sitemap":"Site Map"},id:{"company-name":"PinkSoft Company","company-desc":"Solusi Digital & Website Kreatif","nav-home":"Beranda","nav-products":"Produk","nav-download":"Unduh","nav-buy":"Beli Sekarang","nav-support":"Dukungan","nav-about":"Tentang Kami","search-placeholder":"Cari produk...","hero-text":"Kami Membangun Produk Digital Modern & Elegan","story-title":"Berita Utama","story-1":"PinkSoft Company adalah perusahaan teknologi kreatif yang berfokus pada pengembangan website, aplikasi, dan solusi digital modern untuk kebutuhan bisnis skala kecil hingga besar.","story-2":"Kami mengutamakan desain yang elegan, performa tinggi, serta kemudahan penggunaan bagi klien kami.","btn-download":"Unduh","btn-purchase":"Beli","newsletter-title":"Newsletter Bulanan","newsletter-desc":"Dapatkan update bulanan seputar teknologi, desain, dan produk terbaru dari PinkSoft Company.","news-ui":"Desain UI","news-web":"Web App","news-mobile":"Mobile App","news-tips":"Tips IT","reviews-title":"Ulasan Pengguna","sidebar-title":"Profil Perusahaan","btn-watch":"Tonton Video","footer-home":"Beranda","footer-products":"Produk","footer-privacy":"Privasi","footer-terms":"Ketentuan","footer-sitemap":"Peta Situs"}};

function changeLang(lang){document.querySelectorAll("[data-lang]").forEach(el=>{const key=el.getAttribute("data-lang");if(translations[lang][key])el.textContent=translations[lang][key];});document.querySelectorAll("[data-lang-placeholder]").forEach(el=>{const key=el.getAttribute("data-lang-placeholder");if(translations[lang][key])el.setAttribute("placeholder",translations[lang][key]);});}

// ===== SMOOTH SCROLL =====
function scrollToSection(id){document.getElementById(id).scrollIntoView({behavior:'smooth'});}

// ===== BACK TO TOP =====
const backTop=document.getElementById("backTop");
window.onscroll=function(){if(document.body.scrollTop>200||document.documentElement.scrollTop>200)backTop.style.display="block";else backTop.style.display="none";highlightNavbar();};
function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'});}

// ===== NAVBAR HIGHLIGHT =====
function highlightNavbar(){
    const sections=['hero','story','newsletter'];
    sections.forEach((id,idx)=>{
        const sec=document.getElementById(id);
        const nav=document.querySelectorAll('.navbar li')[idx];
        const rect=sec.getBoundingClientRect();
        if(rect.top<=100 && rect.bottom>=100) nav.classList.add('active'); else nav.classList.remove('active');
    });
}

// ===== STAR INTERACTIVE =====
let selectedRating=3;
const stars=document.querySelectorAll('#starRating .star');

stars.forEach(star=>{
    star.addEventListener('mouseover',()=>{const val=parseInt(star.getAttribute('data-value'));highlightStars(val);});
    star.addEventListener('mouseout',()=>{highlightStars(selectedRating);});
    star.addEventListener('click',()=>{selectedRating=parseInt(star.getAttribute('data-value'));highlightStars(selectedRating);});
});

function highlightStars(rating){stars.forEach(star=>{const val=parseInt(star.getAttribute('data-value'));if(val<=rating)star.classList.add('filled');else star.classList.remove('filled');});}

// ===== ADD COMMENT DENGAN STAR =====
function addComment(){
    const name=document.getElementById("username").value.trim();
    const text=document.getElementById("comment").value.trim();
    if(name==""||text==""){alert("Please enter both name and comment!");return;}
    const reviewsList=document.getElementById("reviews-list");
    const newReview=document.createElement("div");
    newReview.classList.add("review-card");
    let starsHTML='';
    for(let i=1;i<=5;i++){starsHTML+=`<span class="star ${i<=selectedRating?'filled':''}">★</span>`;}
    newReview.innerHTML=`<div class="review-stars">${starsHTML}</div><p>${text}<br>— ${name}</p>`;
    reviewsList.insertBefore(newReview,reviewsList.firstChild);
    document.getElementById("username").value="";
    document.getElementById("comment").value="";
    selectedRating=3;
    highlightStars(selectedRating);
}
