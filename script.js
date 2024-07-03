// .................menu-bar............................
const toggleBtn = document.querySelector('.toggle-menu button');
const navMenu = document.querySelector('.nav-menu ul');

toggleBtn.addEventListener('click', function () {
    navMenu.classList.toggle('show');
});

// ..................toggle-light and dark................
const darkmodetoggle = document.querySelector('.dark-mode-toggle');
const body = document.querySelector('body');

darkmodetoggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateDarkmodeicon();
});

function updateDarkmodeicon() {
    const darkmodeicon = darkmodetoggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        darkmodeicon.classList.remove('fa-moon');
        darkmodeicon.classList.add('fa-sun');
    } else {
        darkmodeicon.classList.remove('fa-sun');
        darkmodeicon.classList.add('fa-moon');
    }
}

// ..................add to cart................
document.addEventListener('DOMContentLoaded', () => {
    const carticons = document.querySelectorAll('.section-3 .slide .images a');
    const cartcount = document.querySelector('.nav-icons .sp');
    const totalamount = document.querySelector('.nav-icons .total .total-amount');
    const orderbutton = document.querySelector('.nav-icons .Order-btn');

    carticons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.preventDefault(); // prevent Default action of the anchor tab
            let count = parseInt(cartcount.textContent);
            count++;
            cartcount.textContent = count;

            // update total amount
            const price = parseFloat(icon.closest('.images').dataset.price);
            let total = parseFloat(totalamount.textContent);
            total += price;
            totalamount.textContent = total.toFixed(2);
        });
    });

    orderbutton.addEventListener('click', () => {
        // reset the cart count and total amount
        cartcount.textContent = '0';
        totalamount.textContent = '0.00';
        // dislpay thankyou msg
        alert('Thankyou for your order ! Have a good day.');
    });

    // Scroll to section 3 when "Buy Now" button is clicked
    const buyNowButton = document.querySelector('.best button');
    const productsSection = document.getElementById('products');

    buyNowButton.addEventListener('click', () => {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Scroll to About section in the footer when "About" link is clicked
    const aboutLink = document.querySelector('.nav-menu ul li a[href="#about"]');
    const aboutSection = document.querySelector('.footer-section:nth-of-type(1)');

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});

    // Scroll to section-2 when "Menu" link is clicked
    const menuLink = document.querySelector('.nav-menu ul li a[href="#menu"]');
    const menuSection = document.querySelector('.section-2');

    menuLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        menuSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Scroll to reviews when "Appraisal" link is clicked
    const reviewLink = document.querySelector('.nav-menu ul li a[href="#review"]');
    const reviewSection = document.querySelector('.reviews');

    reviewLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        reviewSection.scrollIntoView({ behavior: 'smooth' });
    });




// ......................star-rating system.......................
document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.rating i');
    const modal = document.getElementById('thankyoumodal');
    const messageElement = document.getElementById('thankyoumessage');
    const closeModal = document.querySelector('.close');

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const rating = this.getAttribute('data-rating');
            const parent = this.parentNode;

            parent.setAttribute('data-rating', rating);

            updateStars(parent, rating);
            displayThankYou(rating);
        });
    });

    function updateStars(parent, rating) {
        const stars = parent.querySelectorAll('i');

        stars.forEach(star => {
            if (star.getAttribute('data-rating') <= rating) {
                star.classList.remove('fa-regular');
                star.classList.add('fa-solid');
            } else {
                star.classList.add('fa-regular');
                star.classList.remove('fa-solid');
            }
        });
    }

    function displayThankYou(rating) {
        let message = '';

        switch (rating) {
            case '5':
                message = 'Thanks for giving us a 5-star rating';
                break;
            case '4':
                message = 'Thanks for giving us a 4-star rating';
                break;
            case '3':
                message = 'Thanks for giving us a 3-star rating';
                break;
            case '2':
                message = 'Thanks for giving us a 2-star rating';
                break;
            case '1':
                message = 'Thanks for giving us a 1-star rating';
                break;
            default:
                message = '';
        }
        messageElement.textContent = message;
        modal.style.display = 'block';
    }

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Hide modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
