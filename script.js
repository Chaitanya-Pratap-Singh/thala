document.addEventListener("DOMContentLoaded", function() {
    var sevenLetterVideo = document.getElementById('sevenLetterVideo');
    var otherVideo = document.getElementById('otherVideo');
    var messageDiv = document.getElementById('message');
  
    sevenLetterVideo.style.display = 'none';
    otherVideo.style.display = 'none';
    messageDiv.style.display = 'none';
  
    // Add event listener for input changes
    document.getElementById('wordInput').addEventListener('input', function() {
      var input = this.value;
      if (input.length === 0) {
        sevenLetterVideo.pause();
        otherVideo.pause();
        sevenLetterVideo.style.display = 'none';
        otherVideo.style.display = 'none';
        messageDiv.style.display = 'none';
      }
    });
  });
  
  function checkWord() {
    var input = document.getElementById('wordInput').value.toLowerCase(); // Convert input to lowercase for case-insensitive comparison
    var sevenLetterVideo = document.getElementById('sevenLetterVideo');
    var otherVideo = document.getElementById('otherVideo');
    var messageDiv = document.getElementById('message');
  
    var specialWords = ['captain cool', 'thala', 'ms', 'msd', 'mahi', 'mahendra singh dhoni', 'dhoni'];
  
    // Check if input is a special word or a 7-letter word
    if (input.length === 7 || specialWords.includes(input)) {
      playSevenLetterVideo(messageDiv);
    } else if (!isNaN(input) && input.length > 0) { // Check if input is a number
      var digits = input.split('').map(Number);
      var sum = digits.reduce((a, b) => a + b, 0);
      if (sum === 7) {
        playSevenLetterVideo(messageDiv);
      } else {
        playOtherVideo();
      }
    } else if (input.length > 0) { // For non-empty inputs other than special words or numbers
      playOtherVideo();
    } else { // For empty input
      sevenLetterVideo.style.display = 'none';
      otherVideo.style.display = 'none';
      messageDiv.style.display = 'none';
    }
  
    // Function to play the 7-letter word video
    function playSevenLetterVideo(messageDiv) {
      sevenLetterVideo.style.display = 'block';
      otherVideo.style.display = 'none';
      messageDiv.style.display = 'block';
      messageDiv.textContent = 'Thala for reason'; // Change the message here if needed
      sevenLetterVideo.autoplay = true;
      sevenLetterVideo.load();
    }
  
    // Function to play the other video
    function playOtherVideo() {
      sevenLetterVideo.style.display = 'none';
      otherVideo.style.display = 'block';
      messageDiv.style.display = 'none';
      otherVideo.autoplay = true;
      otherVideo.load();
    }
  }
  