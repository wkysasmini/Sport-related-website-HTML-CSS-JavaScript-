const CommentsForm = document.getElementById('Comments-Form');
const Name = document.getElementById('Name');
const Email = document.getElementById('Email');
const Contact = document.getElementById('Contact');
const Reason = document.getElementById('Reason');

function buttonClick() {
    // user input validation
    const Ratings = document.querySelector('input[name="rating"]:checked');
    if (Name.value == "") {
        alert("Please enter your Name!!");
        return false;
    } else if (Email.value == "") {
        alert("Please enter your Email Address!!");
        return false;
    } else if (Contact.value == "") {
        alert("Please enter your Contact Number!!");
        return false;
    } else if (!Ratings) {
        alert('Please choose a number for the Rating');
        return false;
    } else if (Reason.value == "") {
        alert("Please provide the Reason for your rating!!");
        return false;
    } else {
        window.location.href = "Comments-Form-Respond.html";
        return false;
    }
}
