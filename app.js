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

// create function for D3 filtering on date
function handleClick() {
    // get the datetime value from the filter
    let date = d3.select('#datetime').property('value');
    let filteredData = tableData;
    // if statement to check if date was entered and filter data using that date
    if (date) {
        //apply filter to the table data to keep only matching data
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    //rebuild the table using the filtered data, if no data entered then this will display orig table
    buildTable(filteredData);
}
// 'listen' for button click to start function
d3.selectAll('#filter-btn').on("click", handleClick);

// build the table when the page loads
buildTable(tableData);