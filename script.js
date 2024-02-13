const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const audio = document.getElementById("happy-audio"); 

yesBtn.addEventListener("click", () => {
  question.innerHTML = "OMG WAIT REALLY?! HEHEHEHEHE OKAY SEE YOU ON THE 14TH <3";
  gif.src = "2.gif";
  // gif.style.display = 'block'; // Show the main GIF

  // Set a timeout to show the GIF after a delay
  setTimeout(() => {
    audio.play();

    const mainGifRect = gif.getBoundingClientRect();
    const buffer = 20; // Extra space around the main GIF to prevent overlap

    // Define the exclusion zone around the main GIF
    const exclusionZone = {
      minX: mainGifRect.left - buffer,
      maxX: mainGifRect.right + buffer,
      minY: mainGifRect.top - buffer,
      maxY: mainGifRect.bottom + buffer
    };

    // Create and append 10 more GIFs with a delay
    for (let i = 0; i < 10; i++) {
      setTimeout(() => { // Set a timeout for each additional GIF
        let newGif = document.createElement('img');
        newGif.src = 'other-gif-' + (i + 1) + '.gif'; // Replace with your actual gif filenames
        newGif.classList.add('additional-gif'); // A new class for the additional gifs

        let x, y;
        do {
          x = Math.random() * (window.innerWidth - newGif.width);
          y = Math.random() * (window.innerHeight - newGif.height);
        } while (x > exclusionZone.minX && x < exclusionZone.maxX && y > exclusionZone.minY && y < exclusionZone.maxY);

        newGif.style.position = 'absolute';
        newGif.style.left = x + 'px';
        newGif.style.top = y + 'px';
        document.body.appendChild(newGif);
      }, 1000); // Delay before showing each additional GIF
    }
  }, 2000); // Delay before showing the main GIF

  noBtn.style.display = 'none';
  yesBtn.style.display = 'none';
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});