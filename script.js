document.addEventListener("DOMContentLoaded", function () {
    // Initialize the carousel
    let items = document.querySelectorAll('.carousel .carousel-item');

    items.forEach((el) => {
        const minPerSlide = 3;
        let next = el.nextElementSibling;
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0];
            }
            let cloneChild = next.cloneNode(true);
            el.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const productCards = document.getElementById('product-cards');
            data.forEach((product, index) => {
                const card = `
                    <div class="col-md-4 mb-4 ${index === 3 ? 'center-card' : ''}">
                        <div class="card">
                            <img src="${product.image}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.description}</p>
                            </div>
                        </div>
                    </div>
                `;
                productCards.innerHTML += card;
            });
        })
        .catch(error => console.error('Error fetching the product data:', error));
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('shampoo.json')
        .then(response => response.json())
        .then(data => {
            const productCards = document.getElementById('product-shampoo');
            data.forEach((product, index) => {
                const card = `
                    <div class="col-md-4 mb-4 ${index === 3 ? 'center-card' : ''}">
                        <div class="card">
                            <img src="${product.image}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.description}</p>
                            </div>
                        </div>
                    </div>
                `;
                productCards.innerHTML += card;
            });
        })
        .catch(error => console.error('Error fetching the product data:', error));
});

