onload = () =>{
        document.body.classList.remove("container");
};

// JavaScript to show the flowers when the button is clicked
document.getElementById('showFlowersBtn').addEventListener('click', function() {
        var waterDrop1 = document.getElementById('waterDrop1');
        var waterDrop2 = document.getElementById('waterDrop2');
        var waterDrop3 = document.getElementById('waterDrop3');
        var waterDrop4 = document.getElementById('waterDrop4');
        var waterDrop5 = document.getElementById('waterDrop5');
        var audio = document.getElementById('flowerSong');
        
        // Start the drop animation for the first image
        waterDrop1.classList.add('drop-animation');
    
        setTimeout(function() {
            waterDrop1.style.opacity = 0; // Hide the first image
            waterDrop2.style.opacity = 1; // Show the second image
            audio.play(); // Play audio
        }, 1100); // Duration of the drop animation in milliseconds
        
        // Show the third image after 0.5 seconds of the second image appearing
        setTimeout(function() {
            waterDrop2.style.opacity = 0; // Hide the second image
            waterDrop3.style.opacity = 1; // Show the third image
        }, 1150); 
        // Show the fourth image after 0.5 seconds of the third image appearing
        setTimeout(function() {
            waterDrop3.style.opacity = 0; // Hide the third image
            waterDrop4.style.opacity = 1; // Show the fourth image
        }, 1200); 

        setTimeout(function() {
                waterDrop4.style.opacity = 0; // Hide the third image
                waterDrop5.style.opacity = 1; // Show the fourth image
        }, 1250); 
        
        setTimeout(function() {
                waterDrop5.style.opacity = 0; // Hide the third image
                waterDrop6.style.opacity = 1; // Show the fourth image
                document.querySelector('.flowers').style.display = 'block';
        }, 1300);

        setTimeout(function() {
                waterDrop6.style.opacity = 0; // Hide the third image
                document.querySelector('.flowers').style.display = 'block';
        }, 1400); 
    });