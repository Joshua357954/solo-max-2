const nav_icon = document.querySelector('.navmenu-icon') 
	const mobile_nav1 = document.querySelector('.navlinks_box')
	const mobile_nav = document.querySelector('.nvb')
	const navbar =  document.querySelector('.navbar')

	nav_icon.addEventListener('click',() => {	
		mobile_nav.classList.toggle('active')

		if (mobile_nav.classList.contains('active')){
			navbar.style.height = '100vh';
		    nav_icon.src = './assets/images/close-svgrepo-com.svg' 
		    navbar.classList.add('bg-ol')
		}
		else{
			navbar.style.height = '70px';
			
			navbar.classList.remove('bg-oo')
			navbar.classList.add('bg-ol')
		    nav_icon.src = './assets/images/menu (3).svg';
		}
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

//  Smooth Scrolling .

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


// submit project mechanism

function validateForm() {
    // Reset previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('cadFilesError').innerText = '';
    document.getElementById('recaptchaError').innerText = '';

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var cadFiles = document.querySelector('input[name="cadFiles"]:checked');
    var recaptcha = document.getElementById('recaptcha').value;

    // Validate name
    if (name.trim() === '') {
        document.getElementById('nameError').innerText = 'Name is required';
        return;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email address';
        return;
    }

    // Validate message
    if (message.trim() === '') {
        document.getElementById('messageError').innerText = 'Please provide information about your project';
        return;
    }

    // Validate CAD files selection
    if (!cadFiles) {
        document.getElementById('cadFilesError').innerText = 'Please select whether you have CAD files or not';
        return;
    }

    // Validate recaptcha
    if (recaptcha.trim() !== '7') {
        document.getElementById('recaptchaError').innerText = 'Incorrect answer to the math question';
        return;
    }

    // Form is valid, continue with submission (you can replace this with actual form submission code)
    alert('Form submitted successfully!');
}

function updateCB(clickedCheckbox) {
    var checkboxes = document.querySelectorAll('input[name="cadFiles"]');
    
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== clickedCheckbox) {
            checkboxes[i].checked = false;
        }
    }
}


// checkbox
// function updateCB(clickedCB) {
// 	var checkboxes = document.getElementsByClassName('cbGroup')
// 	for (let i=0; i < checkboxes.length;i++){
// 		if (checkboxes[i] !== clickedCB){
// 			checkboxes[i].checked = false
// 		}
// 	}
// }

