onload = () =>{
        document.body.classList.remove("container");
};

// JavaScript to show the flowers when the button is clicked
document.getElementById('showFlowersBtn').addEventListener('click', function() {
        var waterDrop = document.getElementById('waterDrop');
        waterDrop.classList.add('drop-animation');
        var audio = document.getElementById('flowerSong');
        setTimeout(function() {
                audio.play();
                document.querySelector('.flowers').style.display = 'block';
            }, 1000); // Duration of the drop animation in milliseconds
});