// Select elements
const openModalBtn = document.getElementById('openModalBtn');
const videoModal = document.getElementById('videoModal');
const closeBtn = document.querySelector('.close-btn');
const videoIframe = document.getElementById('videoIframe');
const wrapper = document.getElementById('wrapper');

// YouTube video URL
const videoURL = 'https://www.youtube.com/embed/LpY01emp4l0';  


// Open the modal and set the video URL
openModalBtn.addEventListener('click', function() {
    videoIframe.src = videoURL;  // Set the src of the iframe to the video URL
    videoModal.classList.add('show');  // Show the modal  
});

// Close the modal and stop the video when the close button is clicked
closeBtn.addEventListener('click', function() {
    // modal.style.display = "none";

    videoModal.classList.remove('show');  // Hide the modal
    videoIframe.src = '';  // Stop the video by clearing the iframe's src
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === videoModal) {
        videoModal.classList.remove('show');
        videoIframe.src = '';  // Stop the video
    }
});


// const container = document.querySelector(".custom-container");
// const videoModal = document.querySelector("#videoModal");

// function toggleClass(){
//     // var container = document.querySelector(".custom-container");
//     container.classList.toggle("active");

//     // var videoModal = document.querySelector("#videoModal");
//     videoModal.classList.toggle("active");   
// }