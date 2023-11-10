const nav_icon = document.querySelector('.navmenu-icon') 
	const mobile_nav1 = document.querySelector('.navlinks_box')
	const mobile_nav = document.querySelector('.nvb')

	nav_icon.addEventListener('click',() => {	
		mobile_nav.classList.toggle('active')
	} )

	let prevScrollPos = window.pageYOffset;
	const windowWidth = window.innerWidth


	window.onscroll = function() {
	    const currentScrollPos = window.pageYOffset;
	    const navbar = document.querySelector(".navbar");
	    const li = document.querySelectorAll(".li");
	    const logo = document.querySelector(".logo")

	    

	    if (prevScrollPos > currentScrollPos) {
	        // Scrolling up
	    } else {
	        // Scrolling down

	        if (!mobile_nav.classList.contains('active')){
	        	 // nav_icon.style.display = 'none'
	        	 // alert("does not")
	        }

	           navbar.style.top = "0";
	        navbar.classList.add('bg-white')

	        logo.src = "./assets/images/solomax.png"

	        // change text color while scrolling up
	        li.forEach(el => {
				el.style.color = 'black'
	        })

	        if (currentScrollPos  < 10){
	        	navbar.classList.remove('bg-white')
	        	logo.src = "./assets/images/solo-pix.png"

	        	  li.forEach(el => {
					el.style.color = 'white'
		        })
			}



		        
	        // navbar.style.top = "-100px"; // Slide up the navbar
	    }

	    prevScrollPos = currentScrollPos;
	};


	const testimoniesContainer = document.querySelector('.testimonies-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
const testimonies = document.querySelectorAll('.testimony');

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        scrollTestimonies();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < testimonies.length - 1) {
        currentIndex++;
        scrollTestimonies();
    }
});

function scrollTestimonies() {
    testimoniesContainer.scrollLeft = currentIndex * testimonies[0].offsetWidth;
}

// Optionally, you can add touch event support for mobile devices.

testimoniesContainer.addEventListener('touchstart', handleTouchStart, false);
testimoniesContainer.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(event) {
    if (!xDown || !yDown) {
        return;
    }

    const xUp = event.touches[0].clientX;
    const yUp = event.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            if (currentIndex < testimonies.length - 1) {
                currentIndex++;
                scrollTestimonies();
            }
        } else {
            if (currentIndex > 0) {
                currentIndex--;
                scrollTestimonies();
            }
        }
    }

    xDown = null;
    yDown = null;
}