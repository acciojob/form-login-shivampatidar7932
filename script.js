function getFormvalue() {
    // Get the form element
    var form = document.getElementById('form1');

    // Access the input fields by name
    var firstName = form.elements['fname'].value;
    var lastName = form.elements['lname'].value;

    // Display the first and last name using alert
    alert(firstName +" "+ lastName);

    // Prevent the default form submission
    return false;
}
