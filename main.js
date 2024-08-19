onload = () =>{
        document.body.classList.remove("container");
};

// JavaScript to show the flowers when the button is clicked
document.getElementById('showFlowersBtn').addEventListener('click', function() {
        document.querySelector('.flowers').style.display = 'block';
        document.querySelector('.button').style.display = 'none';
        var audio = document.getElementById('flowerSong');
        audio.play();
});