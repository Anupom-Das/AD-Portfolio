const roles = [
    "Web Developer",
    "Software Engineer",
    "Freelancer",
    "Problem Solver",
    "UI/UX Designer",
    "App Developer"
  ];
  
  let typingDiv = document.getElementById("typing");
  let i = 0;
  let j = 0;
  let currentRole = "";
  let isDeleting = false;
  
  function typeEffect() {
    if (i < roles.length) {
      if (!isDeleting && j <= roles[i].length) {
        currentRole = roles[i].substring(0, j++);
      } else if (isDeleting && j >= 0) {
        currentRole = roles[i].substring(0, j--);
      }
  
      typingDiv.innerHTML = currentRole;
  
      if (j === roles[i].length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
      }
  
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  }
  
  typeEffect();
  


//responsive e humbergger asbe



function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const burger = document.getElementById("hamburger");
  nav.classList.toggle("active");
  burger.classList.toggle("active");
}







//page screen e asle aktu animation hoye asbe
  
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".scroll-reveal-section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    });

    sections.forEach((section) => {
      observer.observe(section);
    });
  });





  //education pic slide show

  
  const images = [
    "Image/Education/prosasonik.jpg",
    "Image/Education/library.jpg",
    "Image/Education/city clg.jpg",
    "Image/Education/scl name.jpg",
    "Image/Education/full scl.jpg"
    
  ];

  let index = 0;
  const slide = document.getElementById("eduSlide");

  setInterval(() => {
    index = (index + 1) % images.length;
    slide.style.opacity = 0;
    setTimeout(() => {
      slide.src = images[index];
      slide.style.opacity = 1;
    }, 500);
  }, 3000); // প্রতিটি ছবি ৩ সেকেন্ড পর পরিবর্তিত হবে



//about section bam theke dan e asbe
  
  window.addEventListener("scroll", function () {
    const aboutSection = document.querySelector(".about-section");
    const windowHeight = window.innerHeight;
    const sectionTop = aboutSection.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 100) {
      aboutSection.classList.add("reveal");
    }
  });




  
  // For scroll reveal
  const section = document.querySelector('.scroll-reveal-section');

  window.addEventListener('scroll', () => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add('revealed');
    }
  });




  // number bananor jonne
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const updateCounter = () => {
      const increment = target / 100;  // smoother increment
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCounter, 10); // speed
      } else {
        counter.innerText = target + (target === 100 ? '%' : '+');
      }
    };

    updateCounter();
  });



  
  

  document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
      const percent = parseInt(circle.getAttribute("data-percent"));
      const borderColor = getColorByPercent(percent);

      circle.style.borderColor = borderColor;
    });

    function getColorByPercent(percent) {
      if (percent >= 80) return "#00e676";    // Green
      if (percent >= 60) return "#29b6f6";    // Blue
      if (percent >= 40) return "#ffb300";    // Orange
      if (percent >= 20) return "#ef5350";    // Red
      return "#9e9e9e";                       // Gray
    }
  });





  // Store all testimonial data in an array
const testimonials = [
  {
    text: "Amazing service! Highly recommend.",
    name: "MD. Mahbub Hasan",
    role: "Developer, NSTU",
    image: "Image/Testimonial/Mahbub pic.jpg"
  },
  {
    text: "Great experience, really professional!",
    name: "Fayaz Ali Muktadir",
    role: "Problem Solver",
    image: "Image/Testimonial/Fayaz.jpg"
  },
  {
    text: "Absolutely satisfied with the service!",
    name: "Arman ",
    role: "Data Scientist",
    image: "Image/Testimonial/Arman.jpg"
  },

  {
    text: "Talented Developer!",
    name: "Aminul Nirob",
    role: "Web Deginer",
    image: "Image/Testimonial/nirob.jpg"
  }
];



//award slideshow


  const testimonialImages = [
    "Image/Award/city clg award.jpg",
    "Image/Award/Chess_Champ.jpg",
    "Image/Award/Blood_B.jpg",
    "Image/Award/USC.jpg"
    
  ];

  let testimonialIndex = 0;
  const testimonialImgElement = document.getElementById("testimonialImage");

  setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonialImages.length;
    testimonialImgElement.src = testimonialImages[testimonialIndex];
  }, 3000); // 3 seconds



// Function to update the testimonial content based on button click
function updateTestimonial(index) {
  const testimonial = testimonials[index];
  const contentDiv = document.getElementById('testimonial-content');
  contentDiv.querySelector('.say').textContent = testimonial.text;
  contentDiv.querySelector('h2').textContent = testimonial.name;
  contentDiv.querySelector('.role').textContent = testimonial.role;
  contentDiv.querySelector('.people-pic').src = testimonial.image;

  // Toggle the active class to show the selected testimonial
  contentDiv.classList.add('active');
}

// Event listener for all testimonial buttons
const buttons = document.querySelectorAll('.testimonial-btn');
buttons.forEach((button, index) => {
  button.addEventListener('click', () => updateTestimonial(index));
});










const form = document.querySelector('.contact-form');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Stop page reload

  // Optionally, you can validate or send data using fetch/ajax here

  // Show success message
  successMessage.style.display = 'block';

  // Optionally reset the form
  form.reset();

  // Hide the message after 5 seconds
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 5000);
});





  
// Initialize Google Map with NSTU location
function initMap() {
  const nstu = { lat: 22.799683, lng: 91.096965 }; // Exact NSTU location
  
  const map = new google.maps.Map(document.getElementById("map"), {
    center: nstu,
    zoom: 40,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
  });

  const marker = new google.maps.Marker({
    position: nstu,
    map: map,
    title: "NSTU - Noakhali Science and Technology University",
    icon: {
      url: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // 🎯 Nice Location Icon (replace if needed)
      scaledSize: new google.maps.Size(50, 50), // Size of the icon
    },
    animation: google.maps.Animation.BOUNCE, // 🎯 Bounce Animation
  });

  // Smooth Zoom Effect
  let zoomLevel = 10;
  const interval = setInterval(() => {
    if (zoomLevel < 17) {
      map.setZoom(zoomLevel++);
    } else {
      clearInterval(interval);
    }
  }, 200);
}





// Dark/Light Mode Toggle
function toggleDarkLight() {
  const footer = document.querySelector('.footer');
  footer.classList.toggle('dark');
}

// Email Validation
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const emailInput = document.getElementById('emailInput').value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (regex.test(emailInput)) {
    alert("✅ Subscription Successful!");
    document.getElementById('subscribeForm').reset();
  } else {
    alert("❌ Please enter a valid email address.");
  }
});





document.getElementById('subscribeForm').addEventListener('submit', function (event) {
  event.preventDefault(); // To prevent the default form submission

  const email = document.getElementById('emailInput').value; // Get the entered email

  // Show the "Thank you for subscribing!" message
  document.getElementById('thankYouMessage').style.display = 'block';

  // Optionally, you can hide the form after submission
  document.getElementById('subscribeForm').style.display = 'none';

  // Scroll to the "Thank you" message section to avoid page jumping
  document.getElementById('thankYouMessage').scrollIntoView({ behavior: 'smooth' });

  // Reset the form after a short delay (if you want)
  setTimeout(function() {
      document.getElementById('subscribeForm').reset();
  }, 3000); // After 3 seconds reset the form
});




//form fill korle geogle sheet e  jabe


// const scriptURL = 'https://script.google.com/macros/s/AKfycbzZaaU1QXfP4hYf-hVKtcw5zfxCjkZAHWJsUpFJ8ulXPIPiYZxa4_3uUDRVXdJCt0XfVg/exec'
// 			const form = document.forms['contact-form']
		  
// 			form.addEventListener('submit', e => {
// 			  e.preventDefault()
// 			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
// 				.then(response => alert("Thank you! your form is submitted successfully." ))
// 				.then(() => {  window.location.reload(); })
// 				.catch(error => console.error('Error!', error.message))
// 			})







      
