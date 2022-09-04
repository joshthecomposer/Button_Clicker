//Used a switch statement for the login button just to practice switches rather than if statements.
function logInOut(element) {
    switch (element.innerText) {
        case 'Logout':
            element.innerText = 'Login';
            break;
        case 'Login':
            element.innerText = 'Logout';
            break;
        default:
            element.innerText = 'Login';
    }
};

function remove(element) {
    element.remove();
};

function runAlert(element) {
    element.innerText = parseInt(element.innerText, 10) + 1 + ' likes';
    
    //Added a 10ms delay so that the number iterates before alerting the user
    setTimeout(function () {
        alert('Ninja was liked')
    }, 10);
};