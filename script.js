// تحديد الرابط النشط في الشريط العلوي
const navLinks = document.querySelectorAll('nav a');
const currentUrl = window.location.href;

navLinks.forEach(link => {
    if (link.href === currentUrl) {
        link.classList.add('active'); // إضافة الفئة النشطة
    } else {
        link.classList.remove('active'); // إزالة الفئة من الروابط الأخرى
    }
});

// عرض قائمة الطعام ديناميكيًا
const menuItems = [
    // المشروبات الساخنة
    { category: "المشروبات الساخنة", name: "لاتيه", price: "20 جنيه", description: "قهوة بالحليب الرغوي" },
    { category: "المشروبات الساخنة", name: "كابتشينو", price: "25 جنيه", description: "مشروب غني بالكريمة" },
    { category: "المشروبات الساخنة", name: "اسبريسو", price: "15 جنيه", description: "قهوة مركزة" },
    { category: "المشروبات الساخنة", name: "موكا", price: "20 جنيه", description: "مشروب بالشوكولاتة" },
    { category: "المشروبات الساخنة", name: "شاي بالنعناع", price: "10 جنيه", description: "شاي بالنعناع الطازج" },
    { category: "المشروبات الساخنة", name: "شاي بالليمون", price: "10 جنيه", description: "شاي بالليمون الطازج" },
    { category: "المشروبات الساخنة", name: "قهوة بالحليب", price: "15 جنيه", description: "قهوة بالحليب الرغوي" },
    { category: "المشروبات الساخنة", name: "شاي بالزنجبيل", price: "10 جنيه", description: "شاي بالزنجبيل الطازج" },
    { category: "المشروبات الساخنة", name: "شاي بالنعناع والليمون", price: "10 جنيه", description: "شاي بالنعناع والليمون الطازج" },
    { category: "المشروبات الساخنة", name: "شاي بالنعناع والزنجبيل", price: "10 جنيه", description: "شاي بالنعناع والزنجبيل الطازج" },
    { category: "المشروبات الساخنة", name: "شاي بالنعناع والليمون والزنجبيل", price: "10 جنيه", description: "شاي بالنعناع والليمون والزنجبيل الطازج" },
    { category: "المشروبات الساخنة", name: "شاي بالنعناع والليمون والزنجبيل والفلفل", price: "10 جنيه", description: "شاي بالنعناع والليمون والزنجبيل والفلفل الطازج" },
    { category: "المشروبات الساخنة", name: "شاي بالنعناع والليمون والزنجبيل والفلفل الحار", price: "10 جنيه", description: "شاي بالنعناع والليمون والزنجبيل والفلفل الحار الطازج" },
    { category: "المشروبات الساخنة", name: "شاي بالنعناع والليمون والزنجبيل والفلفل الأسود", price: "10 جنيه", description: "شاي بالنعناع والليمون والزنجبيل والفلفل الأسود الطازج" },
    { category: "المشروبات الساخنة", name: "شاي بالنعناع والليمون والزنجبيل والفلفل الأبيض", price: "10 جنيه", description: "شاي بالنعناع والليمون والزنجبيل والفلفل الأبيض الطازج" },

    // المشروبات الباردة
    { category: "المشروبات الباردة", name: "عصير البرتقال", price: "20 جنيه", description: "عصير البرتقال الطازج" },
    { category: "المشروبات الباردة", name: "عصير التفاح", price: "20 جنيه", description: "عصير التفاح الطازج" },
    { category: "المشروبات الباردة", name: "عصير العنب", price: "25 جنيه", description: "عصير العنب الطازج" },
    { category: "المشروبات الباردة", name: "عصير الموز", price: "20 جنيه", description: "عصير الموز الطازج" },
    { category: "المشروبات الباردة", name: "عصير البطيخ", price ```javascript
: "30 جنيه", description: "عصير البطيخ الطازج" },
    { category: "المشروبات الباردة", name: "عصير الليمون", price: "15 جنيه", description: "عصير الليمون الطازج" },
    { category: "المشروبات الباردة", name: "عصير الجوافة", price: "25 جنيه", description: "عصير الجوافة الطازج" },
    { category: "المشروبات الباردة", name: "عصير الفراولة", price: "30 جنيه", description: "عصير الفراولة الطازج" },

    // الحلويات
    { category: "الحلويات", name: "تشيز كيك", price: "35 جنيه", description: "تشيز كيك بالنكهات المختلفة" },
    { category: "الحلويات", name: "براوني", price: "30 جنيه", description: "كيك الشوكولاتة الطرية" },
    { category: "الحلويات", name: "كعكة الفانيليا", price: "25 جنيه", description: "كعكة فانيليا مع كريمة" },
    { category: "الحلويات", name: "كعكة الشوكولاتة", price: "30 جنيه", description: "كعكة شوكولاتة غنية" },
];

// دالة لإضافة عنصر إلى عربة التسوق
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// دالة لعرض العناصر في صفحة العربة
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>عربة التسوق فارغة</p>';
        return;
    }

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - ${item.price}`;
        cartContainer.appendChild(itemElement);
    });
}

// استدعاء دالة عرض العناصر عند تحميل صفحة العربة
if (window.location.pathname.includes('cart.html')) {
    displayCart();
}
``` ```javascript
// إضافة حدث عند الضغط على زر "اطلب الآن" لكل عنصر في قائمة الطعام
menuItems.forEach(item => {
    const button = document.createElement('button');
    button.textContent = 'اطلب الآن';
    button.onclick = () => addToCart(item);
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>${item.price}</p>`;
    itemElement.appendChild(button);
    menuContainer.appendChild(itemElement);
});
``` ```javascript
// إضافة حدث عند الضغط على زر "اطلب الآن" لكل عنصر في قائمة الطعام
menuItems.forEach(item => {
    const button = document.createElement('button');
    button.textContent = 'اطلب الآن';
    button.onclick = () => addToCart(item);
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>${item.price}</p>`;
    itemElement.appendChild(button);
    menuContainer.appendChild(itemElement);
});
``` ```javascript
// إضافة حدث عند الضغط على زر "اطلب الآن" لكل عنصر في قائمة الطعام
menuItems.forEach(item => {
    const button = document.createElement('button');
    button.textContent = 'اطلب الآن';
    button.onclick = () => addToCart(item);
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>${item.price}</p>`;
    itemElement.appendChild(button);
    menuContainer.appendChild(itemElement);
});
``` ```javascript
// إضافة حدث عند الضغط على زر "اطلب الآن" لكل عنصر في قائمة الطعام
menuItems.forEach(item => {
    const button = document.createElement('button');
    button.textContent = 'اطلب الآن';
    button.onclick = () => addToCart(item);
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>${item.price}</p>`;
    itemElement.appendChild(button);
    menuContainer.appendChild(itemElement);
});
``` ```javascript
// إضافة حدث عند الضغط على زر "اطلب الآن" لكل عنصر في قائمة الطعام
menuItems.forEach(item => {
    const button = document.createElement('button');
    button.textContent = 'اطلب الآن';
    button.onclick = () => addToCart(item);
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>${item.price}</p>`;
    itemElement.appendChild(button);
    menuContainer.appendChild(itemElement);
});
``` ```javascript
// إضافة حدث عند الضغط على زر "اطلب الآن" لكل عنصر في قائمة الطعام
menuItems.forEach(item => {
    const button = document.createElement('button');
    button.textContent = 'اطلب الآن';
    button.onclick = () => addToCart(item);
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>${item.price}</p>`;
    itemElement.appendChild(button);
    menuContainer.appendChild(itemElement);
});
``` ```javascript
// إضافة حدث عند الضغط على زر "اطلب الآن" لكل عنصر في قائمة الطعام
menuItems.forEach(item => {
    const button = document.createElement('button');
    button.textContent = 'اطلب الآن';
    button.onclick = () => addToCart(item);
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>${item.price}</p>`;
    itemElement.appendChild(button);
    menuContainer.appendChild(itemElement);
});
``` ```javascript
// إضافة حدث عند الضغط على زر "اطلب الآن" لكل عنصر في قائمة الطعام
menuItems.forEach(item => {
    const button = document.createElement('button');
    button.textContent = 'اطلب الآن';
    button.onclick = () => addToCart(item);
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>${item.price}</p>`;
    itemElement.appendChild(button);
    menuContainer.appendChild(itemElement);
});