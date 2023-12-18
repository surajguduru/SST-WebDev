// Get form and table container elements
const tableForm = document.getElementById('tableForm');
const tableContainer = document.getElementById('tableContainer');

// Function to generate and display the table
function generateTable(rows, columns) {
  // Clear previous table content
  tableContainer.innerHTML = '';

  // Create a table element
  const table = document.createElement('table');
  table.classList.add('grid-table');

  // Initialize count for cell values
  let count = 1;

  // Loop through rows
  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');

    // Loop through columns
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement('td');
      cell.classList.add('grid-cell');

      // Set cell value based on zigzag pattern
      if (j % 2 === 0) {
        cell.textContent = count;
      } else {
        cell.textContent = (i + 1) * columns - j;
      }

      // Increment count
      count++;

      // Append cell to the row
      row.appendChild(cell);
    }

    // Append row to the table
    table.appendChild(row);
  }

  // Append the table to the table container
  tableContainer.appendChild(table);
}

// Event listener for form submission
tableForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get values from input fields
  const rowsInput = parseInt(document.getElementById('rows').value);
  const columnsInput = parseInt(document.getElementById('columns').value);

  // Validate inputs
  if (isNaN(rowsInput) || isNaN(columnsInput) || rowsInput <= 0 || columnsInput <= 0) {
    alert('Please enter valid positive integers for rows and columns.');
    return;
  }

  // Generate table based on input values
  generateTable(rowsInput, columnsInput);
});

// Event listener for reset button
tableForm.addEventListener('reset', function () {
  // Clear table container
  tableContainer.innerHTML = '';
});
