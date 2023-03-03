function shareEvent(){
   alert('my alert message') 
}
document.getElementById("share-button").addEventListener("click", shareEvent);

const table= document.querySelector('table');

  // Hide the table initially
  table.style.display = 'none';

  // Get the button element
  const showTableBtn = document.getElementById('showTableBtn');

  // Add a click event listener to the button
  showTableBtn.addEventListener('click', function() {
    // Toggle the display property of the table
    if (table.style.display === 'none') {
      table.style.display = 'table';
      showTableBtn.textContent = 'Hide Recipes';
    } else {
      table.style.display = 'none';
      showTableBtn.textContent = 'Show Recipes';
    }
  });
