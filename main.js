// Remove the container class when the page loads
onload = () => {
        document.body.classList.remove("container");
};
    
let isClicked = false;

// JavaScript to show the flowers when the button is clicked
document.getElementById('showFlowersBtn').addEventListener('click', function() {
    if (!isClicked) {
        isClicked = true; // Set the flag to true immediately on the first click

        document.getElementById('clickButton').style.opacity = '0';

        const waterDrops = [
            document.getElementById('waterDrop1'),
            document.getElementById('waterDrop2'),
            document.getElementById('waterDrop3'),
            document.getElementById('waterDrop4'),
            document.getElementById('waterDrop5'),
            document.getElementById('waterDrop6')
        ];

        const flowerAudio = document.getElementById('flowerSong');
        const waterSound = document.getElementById('waterSound');
        
        // Loop through the waterDrops and set the timeouts for each drop
        waterDrops.forEach((waterDrop, index) => {
            if (index === 0) {
                waterDrop.classList.add('drop-animation'); // Add drop-animation class to the first drop
            }
            setTimeout(function() {
                if (index > 0) {
                    waterDrops[index - 1].style.opacity = 0; // Hide the previous image
                }
                waterDrop.style.opacity = 1; // Show the current image
                if (index === 0) {
                    flowerAudio.play(); // Play flower audio on the first drop
                    waterSound.play(); // Play water sound on the first drop
                }
            }, 1100 + index * 50); // Stagger each drop by 50ms
        });

        // Display the flowers after the last drop animation
        setTimeout(function() {
            waterDrops[waterDrops.length - 1].style.opacity = 0; // Hide the last drop
            document.querySelector('.flowers').style.display = 'block'; // Show flowers
        }, 1400 + (waterDrops.length - 1) * 50);
    }
});

    