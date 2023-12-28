const nav_icon = document.querySelector('.navmenu-icon') 
	const mobile_nav1 = document.querySelector('.navlinks_box')
	const mobile_nav = document.querySelector('.nvb')
	const navbar =  document.querySelector('.navbar')

	nav_icon.addEventListener('click',() => {	
		mobile_nav.classList.toggle('active')

		if (mobile_nav.classList.contains('active')){
			// navbar.style.height = '100vh';
		    nav_icon.src = './assets/images/close-svgrepo-com.svg' 
		    // navbar.style.backgroundColor = 'red';
		}
		else{
			// navbar.style.height = '70px';
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




// Callback function called when reCAPTCHA is successful
function onCaptchaSuccess(response) {
    // console.log('reCAPTCHA response:', response);
    alert(response)
    swal({
          icon: 'warning',
          title: 'Opps',
          text: response,
          timer: 50000,
          // showConfirmButton: false,
        });
    // You can use the 'response' value in your form submission or any other logic
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
    const email_endpoint = 'https://beanie-fawn.cyclic.app/send-email'
    const subject = 'Project Request '
    const recipient = 'solomaxstudios@gmail.com'
    const emojiList = ['😀', '😍', '🚀', '🎉', '🌟','🔩','🔨','⛏','⚒','🔧','🚧','👷','💻', '🍕', '🌈', '🎸'];


    const phrases = [
      "New Project Alert ",
      "Embark on a thrilling initiative.",
      "Launch a brand-new endeavor.",
      "Initiate an innovative project.",
      "Begin an exciting venture.",
      "Kickstart a fresh undertaking.",
      "Commence a novel project.",
      "Start a compelling new initiative.",
      "Embark on a creative project journey.",
      "Pioneer a cutting-edge endeavor.",
      "Commence an inspiring new project."
    ];

    // get random phrases
    function pickRandomPhrase(phrasesArray) {
      const randomIndex = Math.floor(Math.random() * phrasesArray.length);
      return phrasesArray[randomIndex];
    }
    
    // get random emoji's
    function getRandomEmoji() {
      const randomIndex = Math.floor(Math.random() * emojiList.length);
      return emojiList[randomIndex];
    }

    //  clear inputs function
    function clearInputs() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        document.getElementById('recaptcha').value = '';

        // Clear radio buttons (assuming there are only two)
        const radioButtons = document.getElementsByName('cadFiles');
        radioButtons.forEach(button => (button.checked = false));

        // Clear error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(errorMessage => (errorMessage.textContent = ''));
    }



    const randomEmoji = getRandomEmoji();
    const randomSubject = pickRandomPhrase(phrases);

    // Constructed message to send
    const text = `
        Name: ${name} \n\n
        Message: ${message} \n\n
        Email: ${email}\n\n
        CAD Files Availability : ${cadFiles.value} \n\n\n
        With ❤ Solomaxstudios.com
    `


    const data = {
        to: recipient,
        subject: `${subject}  ${randomEmoji} .`,
        text
    };

    const recaptchaResponse = grecaptcha.getResponse();

    // Check if the reCAPTCHA response is empty
    if (!recaptchaResponse) {
        // alert('Please complete the  challenge.');
        swal({
          icon: 'warning',
          title: 'Opps, reCAPTCHA ',
          text: 'Please complete the reCAPTCHA to confirm you are not a Bot',
          timer: 10000,
          showConfirmButton: false,
        });
        return  
    }



    // make request to server
    fetch(email_endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })

     .then(data => {
        swal({
          icon: 'success',
          title: 'Request Sent 😊',
          text: 'Your project request has been sent successfully',
          // timer: 5000,
          showConfirmButton: false,
        });;
        clearInputs()
        console.log('Email sent successfully:', data);
      })
// 😥
// 😔
      .catch(error => {
        swal({
          icon: 'warning',
          title: 'Oh, Snap 😔',
          text: 'Your request was not sent, Try again .',
          // timer: 5000,
          showConfirmButton: false,
        });;

        console.error('Error sending email:', error.message);
        // Handle error, if needed
      });
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

