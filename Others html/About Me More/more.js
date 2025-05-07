const typingElement = document.getElementById('typing');
const textArray = ["Anupom Das", "Web Developer", "Software Engineer", "Freelancer"];
let textIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
  if (textIndex >= textArray.length) {
    textIndex = 0;
  }

  currentText = textArray[textIndex];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex++;
    }
  }

  setTimeout(type, isDeleting ? 80 : 120);
}

type();




document.getElementById("toggleButton").addEventListener("click", function () {
  const certDiv = document.getElementById("certificateButtons");
  certDiv.classList.toggle("hidden");
});





let images = [];
let currentIndex = 0;

function showImage(type) {
  const image = document.getElementById("certificateImage");
  const downloadLink = document.getElementById("downloadBtn");
  const navButtons = document.getElementById("navButtons");

  // Define images based on type
  if (type === 'academic') {
    images = [
      "more pic/SSC certificate_.jpg",
      "more pic/HSC certificate_.jpg"
    ];
  } else if (type === 'competition') {
    images = [
      "more pic/Gonitbid Certificate_page-0001.jpg",
      "more pic/MFH CA certificate.jpeg",
      "more pic/USC GK Olympiad2023.jpg",
      "more pic/Victory Dau Quiz.jpeg",
      "more pic/Gonit Utsob Certificate_page-0001.jpg"
    ];
  } else if (type === 'completion') {
    images = [
      "more pic/ICT Olympaid certificate.png",
      "more pic/ICT Olympaid certificate 2.png",
      "more pic/ICT Quiz EEE DAY JPG.jpg",
      "more pic/MS Excel certificate Brigthskills.png",
      "more pic/Robotics.jpg",
      "more pic/Youth Aliance.jpg"
    ];
  } else if (type === 'work_e') {
    images = [
      "more pic/Ekushey Quiz Co ordinator.jpeg",
      "more pic/CA Certificate USC.jpeg",
      "more pic/MFH CA certificate.jpeg",
      "more pic/Mujib Quiz Co Ordinator.jpeg"
    ];
  } else {
    images = [];
  }

  currentIndex = 0;

  if (images.length > 0) {
    image.src = images[currentIndex];
    image.style.display = "block";
    downloadLink.href = images[currentIndex];
    downloadLink.style.display = "inline-block";
    navButtons.style.display = images.length > 1 ? "flex" : "none";
  } else {
    image.style.display = "none";
    downloadLink.style.display = "none";
    navButtons.style.display = "none";
  }
}

function nextImage() {
  if (images.length === 0) return;
  currentIndex = (currentIndex + 1) % images.length;
  updateImageDisplay();
}

function prevImage() {
  if (images.length === 0) return;
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImageDisplay();
}

function updateImageDisplay() {
  const image = document.getElementById("certificateImage");
  const downloadLink = document.getElementById("downloadBtn");
  
  image.src = images[currentIndex];
  downloadLink.href = images[currentIndex];
}

