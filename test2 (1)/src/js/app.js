(function() {
    
    // Question 0
    // Use npm to install jquery and holder.js
    // Add a reference to jquery and holder.js in your index.html in the appropriate spot
    
    // Complete all steps using jquery.
    // Changes to index.html should not be necessary unless specifically mentioned

    // Question 1
    // Update the page title to say "YOUR NAME - Test 2"
    // Update the navbar title to say "YOUR NAME"
    // Replace the footer text with a copyright symbol and the year, using the Date object.
    
    $('title').text('Aastha minhas - Test 2');
    $('.navbar-brand').text('Aastha minhas');
    $('footer').html(`&copy; ${new Date().getFullYear()}`);

    // Question 2
    // Question 2
    // get a reference to the test table
    // get a reference to the second row in the table
    // update the student number to be 100100100
   
    var $testTable = $('#testTable'); 
    var $secondRow = $testTable.find('tr').eq(1); 
    $secondRow.find('td').eq(0).text('100859631'); 

    // Question 3
    // create a table row with your own information
    // create a table delimeter and set your first name
    // add it to your table row
    // create a table delimeter and set your last name
    // add it to your table row
    // create a table delimeter and set your banner id
    // add it to your table row
    // add your row to the test table body
   
    var $row = $('<tr></tr>');
    var $firstName = $('<td></td>').text('Aastha');
    var $lastName = $('<td></td>').text('Minhas');
    var $bannerId = $('<td></td>').text('100859631');
    $row.append($firstName, $lastName, $bannerId);
    $testTable.find('tbody').append($row);

    // Question 4
    // remove Alice Bobberts from the table
    
    $testTable.find('tr').filter(function() {
        return $(this).find('td').eq(1).text() === 'Alice Bobberts';
    }).remove();

    // Question 5
    // add the .table-info class to your personal row
   
    $row.addClass('table-info');

    // Question 6
    // remove the .table-warning class from Adam Kunz's row
   
    $testTable.find('tr').filter(function() {
        return $(this).find('td').eq(1).text() === 'Adam Kunz';
    }).removeClass('table-warning');


    // Question 7
    // change .table-dark to .table-success for John Doe's row
   
    $testTable.find('tr').filter(function() {
        return $(this).find('td').eq(1).text() === 'John Doe';
    }).removeClass('table-dark').addClass('table-success');

    // Question 8
    // Go to https://getbootstrap.com/docs/5.3/components/card/
    // Using jquery, add a new container div to the <main> section
    // In that container, add a new bootstrap card. This should take several steps.
    // // make a card, make an image, append the image to the card
    // // make a card body, append it to the card
    // // make a heading, a paragraph, a link, append them to the card-body
    // // append the card to the new container
    // use holder.js to render the image in the card
    // add a heading with your name in the card body, and a sentence or two about yourself.
   
    var $container = $('<div></div>').addClass('container');
    var $card = $('<div></div>').addClass('card');
    var $image = $('<img>').addClass('card-img-top').attr('data-src', 'holder.js/100px180').attr('alt', 'Card image cap');
    var $cardBody = $('<div></div>').addClass('card-body');
    var $heading = $('<h5></h5>').addClass('card-title').text('YOUR NAME');
    var $paragraph = $('<p></p>').addClass('card-text').text('A sentence or two about yourself.');
    var $link = $('<a></a>').addClass('btn btn-primary').attr('href', '#').text('Read More');

    $cardBody.append($heading, $paragraph, $link);
    $card.append($image, $cardBody);
    $container.append($card);
    $('main').append($container); 

    Holder.run();


})();
