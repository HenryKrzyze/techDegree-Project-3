
//This focuses on the name field first and also listens for change in the job selector and changes the display values depending on the selector value.

const name = document.querySelector('#name');
name.focus();

const jobSelector = document.querySelector('#title');
const otherJob = document.querySelector('#other-job-role');
otherJob.style.display = 'none';

jobSelector.addEventListener('change', () => {
    if(jobSelector.value == 'other') {
        otherJob.style.display = 'block';
    } else {
        otherJob.style.display = 'none';
    }
})

//This checks the text content of the selector and parses through the options checking if they line up with the selector value. If they do they are displayed.

const shirtColors = document.querySelector('#color');
const shirtDesigns = document.querySelector('#design');
shirtColors.style.display = 'none';
shirtColors.previousElementSibling.style.display = 'none'

shirtDesigns.addEventListener('change', () => {
    if(shirtDesigns.value == 'heart js') {
        console.log('working1');
        shirtColors.style.display = 'block';
        shirtColors.previousElementSibling.style.display = 'block'
        for(let i = 1; i < shirtColors.length; i++) {
            if(shirtColors[i].className != 'heart js') {
                shirtColors[i].style.display = 'none';
            } else {
                shirtColors[i].style.display = 'block';
            }
        }
    } else {
        console.log('working2');
        shirtColors.style.display = 'block';
        shirtColors.previousElementSibling.style.display = 'block'
        for(let i = 1; i < shirtColors.length; i++) {
            if(shirtColors[i].className != 'js puns') {
                shirtColors[i].style.display = 'none';
            } else {
                shirtColors[i].style.display = 'block';
            }
        }
    }

});

//This adds accessibility to the check forms and adds the focus class by listening for a focus or blur event in the activities.

const activities = document.querySelector('#activities-box');
const activitiesCost = document.querySelector('#activities-cost');
let totalCost = 0;

for(activity of activities.children) {
    const input = activity.children[0];
    input.addEventListener('focus', (event) => {
        event.target.parentNode.className = 'focus';
        console.log(event.target.parentNode.classList);
    })

    input.addEventListener('blur', (event) => {
        event.target.parentNode.classList.remove('focus');
    })
}

//This checks for changes in the activities form and if the change is a checkbox being checked then it turns the number text content into
//an integer and adds it to the total cost.

activities.addEventListener('change', (event) => {
    if(event.target.type == 'checkbox') {
        if(event.target.checked) {
            if(event.target.nextElementSibling.nextElementSibling.textContent[0] == '$') {
                totalCost += parseInt(event.target.nextElementSibling.nextElementSibling.textContent.substring(1));
            } else {
                totalCost += parseInt(event.target.nextElementSibling.nextElementSibling.nextElementSibling.textContent.substring(1));
            }
        } else {
            if(event.target.nextElementSibling.nextElementSibling.textContent[0] == '$') {
                totalCost -= parseInt(event.target.nextElementSibling.nextElementSibling.textContent.substring(1));
            } else {
                totalCost -= parseInt(event.target.nextElementSibling.nextElementSibling.nextElementSibling.textContent.substring(1));
            }
        }
        activitiesCost.textContent =  `Total: $${totalCost}`;
    }
})

//This listens for changes in the payment selector and alters the display status depending on what the value of the selector is.

const selector = document.querySelector('#payment');

const creditCard = document.querySelector('#credit-card');
const bitcoin = document.querySelector('#bitcoin');
const paypal = document.querySelector('#paypal');

bitcoin.style.display = 'none';
paypal.style.display = 'none';

selector.addEventListener('change', (event) => {
    console.log(selector.value);
    if(selector.value == 'credit-card') {
        creditCard.style.display = 'block';
        bitcoin.style.display = 'none';
        paypal.style.display = 'none';

    } else if(selector.value == 'bitcoin') {
        creditCard.style.display = 'none';
        bitcoin.style.display = 'block';
        paypal.style.display = 'none';

    } else if(selector.value == 'paypal') {
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
        paypal.style.display = 'block';
    }
})

const form = document.querySelector('form');

console.log(form);

//this event listener listens for the submit event and prevents the default reloading of the page. It then checks the values of the form
//fields with regex statements and changes the valid and error status depending on if they are valid inputs. If everything is valid, the 
//page is reloaded.

form.addEventListener('submit', (event) => {

    event.preventDefault();
    console.log('working');

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const cardNum = document.querySelector('#cc-num');
    const zip = document.querySelector('#zip');
    const cvv = document.querySelector('#cvv');
    
    let runStatus = true;

    const nameStatus = /^[a-z0-9]+\s*[a-z0-9]*$/i.test(name.value);
    const emailStatus = /^[^@.]+@*[^@.]+\.com$/i.test(email.value);
    const cardNumStatus = /^[0-9]{13}\d?\d?\d?$/.test(cardNum.value);
    const zipStatus = /^\d{5}$/.test(zip.value);
    const cvvStatus = /^\d{3}$/.test(cvv.value);


    if(nameStatus == false) {
        name.value = '';
        name.className = 'error';
        name.parentNode.className = 'not-valid'
        name.parentNode.classList.remove('valid');
        document.querySelector('#name-hint').style.display = 'block';
        runStatus = false;
    } else {
        name.parentNode.classList.remove('not-valid');
        name.parentNode.className = 'valid'
        name.className = 'error-border';
        document.querySelector('#name-hint').style.display = 'none';
        runStatus = true;
    }

    if(emailStatus == false) {
        email.value = '';
        email.className = 'error';
        email.parentNode.className = 'not-valid'
        email.parentNode.classList.remove('valid');
        document.querySelector('#email-hint').style.display = 'block';
        runStatus = false;
    } else {
        email.parentNode.classList.remove('not-valid');
        email.parentNode.className = 'valid'
        email.className = 'error-border';
        document.querySelector('#email-hint').style.display = 'none';
        runStatus = true;
    }

    if(selector.value == 'credit-card') {

        if(cardNumStatus == false) {
            cardNum.value = '';
            cardNum.className = 'error';
            cardNum.parentNode.className = 'not-valid'
            cardNum.parentNode.classList.remove('valid');
            document.querySelector('#cc-hint').style.display = 'block';
            runStatus = false;
        } else {
            cardNum.parentNode.classList.remove('not-valid');
            cardNum.parentNode.className = 'valid'
            cardNum.className = 'error-border';
            document.querySelector('#cc-hint').style.display = 'none';
            runStatus = true;
        }

        if(zipStatus == false) {
            zip.value = '';
            zip.className = 'error';
            zip.parentNode.className = 'not-valid'
            zip.parentNode.classList.remove('valid');
            document.querySelector('#zip-hint').style.display = 'block';
            runStatus = false;
        } else {
            zip.parentNode.classList.remove('not-valid');
            zip.parentNode.className = 'valid'
            zip.className = 'error-border';
            document.querySelector('#zip-hint').style.display = 'none';
            runStatus = true;
        }

        if(cvvStatus == false) {
            cvv.value = '';
            cvv.className = 'error';
            cvv.parentNode.className = 'not-valid'
            cvv.parentNode.classList.remove('valid');
            document.querySelector('#cvv-hint').style.display = 'block';
            runStatus = false;
        } else {
            cvv.parentNode.classList.remove('not-valid');
            cvv.parentNode.className = 'valid'
            cvv.className = 'error-border';
            document.querySelector('#cvv-hint').style.display = 'none';
            runStatus = true;
        }
    }

    //checks if any activities are checked

    let count = 0;

    for(let i = 0; i < activities.children.length; i++) {
        if(activities.children[i].children[0].checked) {
            count++; 
        }
    }

    if(count > 0) {
        runStatus = true;
    } else {
        runStatus = false;
    }

    if(runStatus == true) {
        location.reload();
    }
})
