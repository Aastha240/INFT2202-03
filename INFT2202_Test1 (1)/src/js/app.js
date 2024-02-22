(function() {

    // Question 1
    // Update the page title to say "YOUR NAME - Test 1"
    // Update the navbar title to say "YOUR NAME"
    document.title = "Aastha Minhas - Test 1";
    document.querySelector('.navbar-brand').textContent = "Aastha Minhas";

    // Question 2
    // get a reference to the test table
    // get a reference to the second row in the table
    // update the student number to be 100100100
    var testTable = document.getElementById('test-table');
    var secondRow = testTable.rows[1];
    secondRow.cells[2].textContent = '100859631';

    // Question 3
    // create a table row with your own information
    // create a table cell and set your first name
    // add it to your table row
    // create a table cell and set your last name
    // add it to your table row
    // create a table cell and set your banner id
    // add it to your table row
    // add your row to the test table body
    var newRow = testTable.insertRow();
    var firstNameCell = newRow.insertCell(0);
    firstNameCell.textContent = 'Aastha';
    var lastNameCell = newRow.insertCell(1);
    lastNameCell.textContent = 'Minhas';
    var bannerIdCell = newRow.insertCell(2);
    bannerIdCell.textContent = '100859631';

    // Question 4
    // remove Alice Bobberts from the table
    var aliceRow = testTable.querySelector('tr:nth-child(3)');
    aliceRow.parentNode.removeChild(aliceRow);

    // Question 5
    // add the .table-info class to your personal row
    newRow.classList.add('table-info');

    // Question 6
    // remove the .table-warning class from Adam Kunz's row
    var adamKunzRow = testTable.querySelector('tr:contains("Adam Kunz")');
    adamKunzRow.classList.remove('table-warning');

    // Question 7
    // change .table-dark to .table-success for John Doe's row
    var johnDoeRow = testTable.querySelector('tr:contains("John Doe")');
    johnDoeRow.classList.replace('table-dark', 'table-success');

    // Question 8
    // Note: Node.js and npm are required for this task
    // use the node package manager to install a new package, holderjs
    // include the holder script at the bottom of index.html
    // under the container div holding the test-table, create another container div, and create an image placeholder
    // (Make sure to include holder.js in your project or use a CDN)
    // Example: <script src="path/to/holder.js"></script>
    
    

})();
