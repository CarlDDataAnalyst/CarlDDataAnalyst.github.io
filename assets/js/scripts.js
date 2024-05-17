// Get all the descriptions
var descriptions = document.querySelectorAll('.description');

// Loop through each description
descriptions.forEach(function(description) {
  // Get the text content
  var text = description.textContent;
  // Check if the text exceeds 30 characters
  if (text.length > 30) {
    // Trim the text to 30 characters and add an ellipsis
    var trimmedText = text.substring(0, 30) + '...';
    // Update the description text content
    description.textContent = trimmedText;
  }
});
