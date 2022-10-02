const form = document.querySelector('form');
const name = document.getElementById('Name');
const email = document.getElementById('Last_Name');
const password = document.getElementById('Email');


function showError(input, message) {
    const formControl = input.parentElement;
    //Replace the Class with the class formControl and add error
    formControl.className = 'formControl error';
    // Add The Class error on error
    //formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'formControl success';
}


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (Name.value == "") {
        showError(Name, "Enter User Name");
    }
    else {
        showSuccess(Name);
    }
    if (Last_Name.value == "") {
        showError(Last_Name, "Enter Last Name");
    }
    else {
        showSuccess(Last_Name);
    }
    if (Email.value == "") {
        showError(Email, "Enter Email");

    } else {
        showSuccess(Email);
    }


});