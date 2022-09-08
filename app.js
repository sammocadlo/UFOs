// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// function to build a table using the UFO sightings data
function buildTable(data) {
    // clear any existing data for a clean start
    tbody.html("");

    // next, loop through each object in data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
    // append a row of data to the table
    let row = tbody.append("tr");
    // loop thru data rows
    Object.values(dataRow).forEach((val) => {
    //append data to table
    let cell = row.append("td");
    cell.text(val);
    }
    ); 
    });
}