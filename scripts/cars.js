const cars = [
    {
        brand: 'Toyota',
        imageURL: './images/toyota2.png',
        model: 'Starlet',
        year: 2020,
        price: 780000,
    },
    {
        brand: 'Toyota',
        imageURL: './images/toyotaaqua.jpg',
        model: 'Aqua',
        year: 2022,
        price: 1000000,
    },
    {
        brand: 'Toyota',
        imageURL: './images/toyotaaxio.webp',
        model: 'Axio',
        year: 2018,
        price: 1200000,
    },
    {
        brand: 'Toyota',
        imageURL: './images/toyotacorolla.png',
        model: 'Corolla',
        year: 2014,
        price: 950000,
    },
    {
        brand: 'Toyota',
        imageURL: './images/toyotafielder.jpg',
        model: 'Fielder',
        year: 2020,
        price: 990000,
    },
    {
        brand:'Toyota',
        imageURL:'./images/Toyotacorollahybridwebp.webp',
        model:'CorollaHybrid',
        year:2020,
        price:990000,
    },{
        brand:'Toyota',
        imageURL:'./images/toyotafortunerjpg.jpg',
        model:'Fortuner',
        year:2020,
        price:990000,
    },{
        brand:'Toyota',
        imageURL:'./images/toyotahilux.webp',
        model:'Hilux',
        year:2020,
        price:990000,
    },{
        brand:'Toyota',
        imageURL:'./images/TOYOTA1.webp',
        model:'CH-R',
        year:2020,
        price:990000,
    },{
        brand:'Toyota',
        imageURL:'./images/toyotarumion.png',
        model:'Rumion',
        year:2020,
        price:990000,
    },{
        brand:'Toyota',
        imageURL:'./images/toyotarange.png',
        model:'Range',
        year:2020,
        price:990000,
    },{
        brand:'Toyota',
        imageURL:'./images/toyotaurbanpng.png',
        model:'Urban Cruiser',
        year:2020,
        price:990000,
    },{
        brand:'Toyota',
        imageURL:'./images/toyota-yaris-sedan.jpg',
        model:'Yaris Sedan',
        year:2020,
        price:990000,
    },{
        brand:'Toyota',
        imageURL:'./images/toyotaalphard.jpg',
        model:'Alphard',
        year:2020,
        price:990000,
    },{
        brand:'Toyota',
        imageURL:'./images/toyotacorollaaltis.jpg',
        model:'Corolla Altis',
        year:2020,
        price:990000,
    },{
        brand:'Toyota',
        imageURL:'./images/toyotainnovacrysta.jpg',
        model:'Innova Crysta',
        year:2020,
        price:990000,
    },{
        brand:'Toyota',
        imageURL:'./images/toyotainnovahycross.jpeg',
        model:'INNOVAH Cross',
        year:2020,
        price:990000,
    },{
        brand:'Toyota',
        imageURL:'./images/toyotalandcruiser.webp',
        model:'LandCruiser',
        year:2020,
        price:990000,
    },{
        brand:'Toyota',
        imageURL:'./images/toyotalandcruiserprado.jpeg',
        model:'PRADO',
        year:2020,
        price:990000,
    },{
        brand:'Toyota',
        imageURL:'./images/toyotaverso.jpg',
        model:'Verso',
        year:2020,
        price:990000,
    },{
        brand:'Tesla',
        imageURL:'./images/TESLACYBERTRUCK.jpg',
        model:'CyberTruck',
        year:2023,
        price:6995000,
    },{
        brand:'Tesla',
        imageURL:'./images/TESLAMODEL-S.png',
        model:'MODEL-S',
        year:2022,
        price:3990500,
    },{
        brand:'SUBARU',
        imageURL:'./images/subaru-wrx-sti.jpg',
        model:'WRX-STI',
        year:2021,
        price:1970000,
    },{
        brand:'SUBARU',
        imageURL:'./images/SUBARUFORESTER-SUV.png',
        model:'FORESTER-SUV',
        year:2022,
        price:3590000,
    },{
        brand:'SUBARU',
        imageURL:'./images/SUBARUOUTBACK.png',
        model:'Outback',
        year:2020,
        price:2490000,
    },{
        brand:'SUBARU',
        imageURL:'./images/SUBARUWRX2022.png',
        model:'WRX',
        year:2022,
        price:1590000,
    },{
        brand:'MAZDA',
        imageURL:'./images/Mazda-RX8-Supercar.avif',
        model:'RX8-Supercar',
        year:2024,
        price:8690000,
    },{
        brand:'MAZDA',
        imageURL:'./images/MAZDACX5.webp',
        model:'CX5',
        year:2022,
        price:3690700,
    },{
        brand:'MAZDA',
        imageURL:'./images/MAZDAHATCHBACK.webp',
        model:'HATCHBACK',
        year:2020,
        price:2900000,
    },{
        brand:'MAZDA',
        imageURL:'./images/MAZDAMX-5.jpg',
        model:'MX-5',
        year:2023,
        price:4290000,
    },{
        brand:'MAZDA',
        imageURL:'./images/MAZDARX-7.jpg',
        model:'RX-7',
        year:2021,
        price:7490000,
    },{
        brand:'MAZDA',
        imageURL:'./images/MAZDASUVcx50.jpg',
        model:'SUV-CX50',
        year:2022,
        price:5490000,
    },{
        brand:'LEXUS',
        imageURL:'./images/LEXUSES350.webp',
        model:'ES-350',
        year:2022,
        price:9490000,
    },{
        brand:'LEXUS',
        imageURL:'./images/LEXUSLX570.jpeg',
        model:'LX-570',
        year:2023,
        price:8320000,
    },{
        brand:'JEEP',
        imageURL:'./images/JEEPMERIDIAN.webp',
        model:'MERIDIAN',
        year:2020,
        price:11990000,
    },{
        brand:'JEEP',
        imageURL:'./images/JEEPWRANGLER.png',
        model:'WRANGLER',
        year:2023,
        price:10590000,
    },{
        brand:'JEEP',
        imageURL:'./images/JEEPGRANDCHEROKEE.webp',
        model:'GRAND CHEROKEE',
        year:2024,
        price:10790000,
    },{
        brand:'JAGUAR',
        imageURL:'./images/jaguar-c-x75.jpg',
        model:'C-X75',
        year:2023,
        price:14690000,
    },{
        brand:'JAGUAR',
        imageURL:'./images/jaguarXF.webp',
        model:'XF',
        year:2022,
        price:13950000,
    },{
        brand:'ISUZU',
        imageURL:'./images/ISUZUMU.webp',
        model:'MU',
        year:2020,
        price:7290000,
    },{
        brand:'ISUZU',
        imageURL:'./images/ISUZUSUV.jpg',
        model:'SUV',
        year:2021,
        price:4690000,
    },{
        brand:'CHEVROLET',
        imageURL:'./images/ImpalaCHEVROLET.jpg',
        model:'IMPALA',
        year:2022,
        price:10790000,
    },{
        brand:'CHEVROLET',
        imageURL:'./images/Chevrolet_Camaro.jpg',
        model:'Camaro',
        year:2023,
        price:15950000,
    },{
        brand:'CHEVROLET',
        imageURL:'./images/Chevrolet-Beat.webp',
        model:'-Beat',
        year:2022,
        price:13990000,
    },{
        brand:'CHEVROLET',
        imageURL:'./images/CHEVROLETSPORTSCAR.avif',
        model:'SportsCar',
        year:2024,
        price:13970000,
    },{
        brand:'CHEVROLET',
        imageURL:'./images/Chevrolet_Blazer_Premier.png',
        model:'Blazer_Premier',
        year:2023,
        price:14590000,
    },{
        brand:'DODGE',
        imageURL:'./images/dodgechargerhellcat.jpg',
        model:'Charger-Hellcat',
        year:2023,
        price:16980000,
    },{
        brand:'DODGE',
        imageURL:'./images/dodgechrysler.avif',
        model:'Chrysler',
        year:2022,
        price:15913000,
    },{
        brand:'FERRARI',
        imageURL:'./images/ferrari-f80.jpg',
        model:'F80',
        year:2022,
        price:25290000,
    },{
        brand:'FERRARI',
        imageURL:'./images/ferrari488gtb.jpg',
        model:'488-GTB',
        year:2024,
        price:34920000,
    },{
        brand:'FERRARI',
        imageURL:'./images/FerrariSF90XXSTRADALE.avif',
        model:'SF90-XX STRADALE',
        year:2020,
        price:990000,
    },{
        brand:'AUDI',
        imageURL:'./images/AUDIA4.avif',
        model:'A4',
        year:2022,
        price:10690000,
    },{
        brand:'AUDI',
        imageURL:'./images/AUDIA5.avif',
        model:'A5',
        year:2023,
        price:11590000,
    },{
        brand:'AUDI',
        imageURL:'./images/AUDIRS5.avif',
        model:'RS5',
        year:2023,
        price:9720000,
    },{
        brand:'AUDI',
        imageURL:'./images/AUDIRS6.jpg',
        model:'RS6',
        year:2022,
        price:10450000,
    },{
        brand:'AUDI',
        imageURL:'./images/AUDIRS7.avif',
        model:'RS7',
        year:2024,
        price:12390000,
    },{
        brand:'AUDI',
        imageURL:'./images/AUDIRSE-TRON.jpg',
        model:'RSE-TRON',
        year:2022,
        price:13860000,
    },{
        brand:'ALFA-ROMEO',
        imageURL:'./images/AlfaromeoaR-Trim-Tonale-TI.avif',
        model:'AR-Trim-Tonale-TI',
        year:2021,
        price:10190000,
    },{
        brand:'ALFA-ROMEO',
        imageURL:'./images/alfaromeogiulia.jpeg',
        model:'Giulia',
        year:2021,
        price:9340000,
    },{
        brand:'BMW',
        imageURL:'./images/bmw-SUVx2.jpg',
        model:'SUV-X2',
        year:2021,
        price:7290000,
    },{
        brand:'BMW',
        imageURL:'./images/bmw2.jpg',
        model:'-22S',
        year:2022,
        price:5990000,
    },{
        brand:'BMW',
        imageURL:'./images/BMWM8Coupe.webp',
        model:'M8-Coupe',
        year:2024,
        price:13990000,
    },{
        brand:'DODGE',
        imageURL:'./images/1970-dodgechallenger.jpeg',
        model:'Challenger',
        year:1970,
        price:12670000,
    },{
        brand:'MAZDA',
        imageURL:'./images/2020-mazda-cx-9.avif',
        model:'CX-9',
        year:2020,
        price:9390000,
    },{
        brand:'MAZDA',
        imageURL:'./images/2021-mazda-cx-3-mmp-1597151652.avif',
        model:'CX-3',
        year:2021,
        price:8490000,
    },{
        brand:'DODGE',
        imageURL:'./images/2019_dodge_durango_angularfront.jpg',
        model:'durango-AngularFront',
        year:2019,
        price:17990000,
    },{
        brand:'SUBARU',
        imageURL:'./images/2022-SUBARUIMPREZZAWRX-STI.jpg',
        model:'ImprezzaWRX-STI',
        year:2022,
        price:10340000,
    },{
        brand:'AUDI',
        imageURL:'./images/2023AUDIR8.avif',
        model:'R8',
        year:2023,
        price:12990000,
    },{
        brand:'LEXUS',
        imageURL:'./images/2023LEXUSNX.png',
        model:'NX',
        year:2023,
        price:8590000,
    },{
        brand:'LEXUS',
        imageURL:'./images/2024_Lexus_LC_500.avif',
        model:'LC-500',
        year:2024,
        price:8690000,
    },{
        brand:'SUBARU',
        imageURL:'./images/2025_subaru_legaCY.avif',
        model:'Legacy',
        year:2025,
        price:8530000,
    },{
        brand:'BMW',
        imageURL:'./images/2025BMWXM.avif',
        model:'XM',
        year:2025,
        price:8540000,
    }
    // Add remaining cars here...
];

// Render cars dynamically
let carHTML = '';
cars.forEach((car, index) => {
    carHTML += `<div class="car-container">
        <img class="car-image"src="${car.imageURL}" alt="${car.brand} ${car.model}">
        <p>Brand: ${car.brand} ${car.model}</p>
        <p>Model Year: ${car.year}</p>
        <p>Price: KES ${car.price}</p>
        <button class="buy add-to-cart" data-id="${index}">Buy Car</button>
    </div>`;
});
document.querySelector('.js-car').innerHTML = carHTML;

// Function to add a car to the cart
function addToCart(carId) {
    const selectedCar = cars[carId];
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(selectedCar);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${selectedCar.brand} ${selectedCar.model} has been added to your cart!`);
    updateCartCount();
}

// Attach event listeners to "Add to Cart" buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (e) => {
        const carId = e.target.getAttribute("data-id");
        addToCart(carId);
    });
});

// Function to update the cart count
const cartCountElement = document.querySelector(".cart-count");
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCountElement.textContent = cart.length;
}

// Call this function on page load to show the current count
updateCartCount();

// Function to render cart items on cart.html
function renderCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.js-cart');

    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let cartHTML = '';
    cart.forEach((car, index) => {
        cartHTML += `<div class="cart-item">
            <img src="${car.imageURL}" alt="${car.brand} ${car.model}">
            <p>Brand: ${car.brand} ${car.model}</p>
            <p>Model Year: ${car.year}</p>
            <p>Price: KES ${car.price}</p>
            <button class="remove-from-cart" data-id="${index}">Remove</button>
        </div>`;
    });
    cartContainer.innerHTML = cartHTML;

    // Attach event listeners to "Remove" buttons
    document.querySelectorAll(".remove-from-cart").forEach((button) => {
        button.addEventListener("click", (e) => {
            const carId = e.target.getAttribute("data-id");
            removeFromCart(carId);
        });
    });
}

// Function to remove a car from the cart
function removeFromCart(carId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(carId, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item removed from cart!');
    renderCartItems();
    updateCartCount();
}

// Call renderCartItems on cart.html
renderCartItems();
