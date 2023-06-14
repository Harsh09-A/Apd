document.getElementById("crawlerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered keyword
    var keyword = document.getElementById("keyword").value;
  
    // Send the keyword to the backend for processing (You need to implement the backend functionality separately)
    sendKeywordToBackend(keyword);
  });
  
  function sendKeywordToBackend(keyword) {
    // You can make an AJAX request or use Fetch API to send the keyword to the backend
    // For example:
    fetch('/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ keyword: keyword })
    })
    .then(response => {
      // Handle the response from the backend if needed
      console.log(response);
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error(error);
    });
  }
  