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

	        // logo.src = "./assets/images/solomax.png"

	        // change text color while scrolling up
	        li.forEach(el => {
				el.style.color = 'black'
	        })

	    }

	    prevScrollPos = currentScrollPos;
	};


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});


var item3 = document.getElementById("projects");
var contextMenu = document.getElementById("contextMenu");

item3.addEventListener("mouseenter", function () {
    showContextMenu();
});

item3.addEventListener("mouseleave", function () {
    hideContextMenu();
});

contextMenu.addEventListener("mouseenter", function () {
    showContextMenu();
});

contextMenu.addEventListener("mouseleave", function () {
    hideContextMenu();
});

function showContextMenu() {
    var rect = item3.getBoundingClientRect();
    contextMenu.style.display = "block";
    contextMenu.style.left = rect.left + "px";
    contextMenu.style.top = rect.bottom + "px";
}

function hideContextMenu() {
    contextMenu.style.display = "none";
}