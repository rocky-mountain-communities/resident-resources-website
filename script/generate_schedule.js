const fs = require('fs');

// Get the current date
const currentDate = new Date();

// Get the last day of the current year
const lastDayOfYear = new Date(currentDate.getFullYear(), 11, 31);

// Initialize the result object
const result = {};

// Loop through each day from the current date to the end of the year
for (
  let date = currentDate;
  date <= lastDayOfYear;
  date.setDate(date.getDate() + 1)
) {
  const formattedDate = date.toISOString().split('T')[0];
  result[formattedDate] = [];
}

// Convert the result object to JSON
const jsonContent = JSON.stringify(result, null, 2);

// Write the JSON content to a file
fs.writeFile('dates.json', jsonContent, 'utf8', (err) => {
  if (err) {
    console.error('An error occurred while writing the JSON file:', err);
  } else {
    console.log('JSON file has been created successfully.');
  }
});
