const subtitles = [
  "Sannah Helwah Lyn",
  "Semoga Allah permudahkan urusan Lyn di dunia dan di akhirat.",
  "Lol dah tua dah :p",
  "Anyway, it's almost the end of the year...",
  "and we had our ups and downs throughout the year.",
  "there were smiles",
  "some laughs",
  "some sadness",
  "and perhaps some tears",
  "but there's an old saying...",
  "There's Always a Rainbow After the Rain",
];

const wishSong = document.getElementById('wishSong');
const subtitleElement = document.getElementById("subtitle");
let index = 0; // Start with the first subtitle
let subtitleInterval;

// Function to display subtitle with fade-in effect
function showSubtitle(element, text) {
  element.innerHTML = ""; // Clear previous content
  const words = text.split(" ");
  words.forEach((word, idx) => {
    const span = document.createElement("span");
    span.textContent = word; // Add the word
    span.style.animationDelay = `${idx * 0.5}s`; // Delay for animation
    element.appendChild(span);

    // Add a space after each word, except the last one
    if (idx < words.length - 1) {
      const space = document.createTextNode(" ");
      element.appendChild(space);
    }
  });
}

// Function to cycle through the subtitles
function cycleSubtitles() {
  const currentSubtitle = subtitles[index];
  showSubtitle(subtitleElement, currentSubtitle);
  index = (index + 1) % subtitles.length;

  // Calculate the interval based on word count (500ms per word + 2 seconds delay)
  const wordCount = currentSubtitle.split(" ").length;
  const interval = wordCount * 500 + 2000;

  // Clear the previous interval and set a new one based on word count
  clearInterval(subtitleInterval);
  subtitleInterval = setInterval(cycleSubtitles, interval);

  // Show a button if we complete one cycle
  if (index === 0) {
    showButton(">>> Click Here <<<", "flower.html");
  }
}

// Function to start the subtitles and play the song
function startExperience() {
  // Play the song
  wishSong.play();

  // Start cycling subtitles
  cycleSubtitles();

  // Hide the button
  const buttonContainer = document.getElementById("button-container");
  if (buttonContainer) {
    buttonContainer.style.display = "none";
  }
}

// Function to show a button
function showButton(textContent, link) {
  // Remove any existing button container
  let existingButton = document.getElementById("button-container");
  if (existingButton) {
    existingButton.remove();
  }

  const container = document.createElement("div");
  container.id = "button-container";
  container.style.textAlign = "center"; // Center the button horizontally
  container.style.marginTop = "20px"; // Margin below the subtitles

  const button = document.createElement("button");
  button.textContent = textContent;
  button.style.padding = "10px 20px";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";

  button.onclick = () => {
    if (link) {
      window.location.href = link; // Redirect if a link is provided
    } else {
      startExperience(); // Start experience if no link is provided
    }
  };

  container.appendChild(button);
  document.body.appendChild(container); // Add the button container to the body
}

// Show the initial button after the page loads
window.onload = () => showButton("My Wish For You");
