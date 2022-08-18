
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

form.addEventListener('change', (event) => {

    if(event.target.id == 'name') {
        const nameStatus = /^[a-z0-9]+\s*[a-z0-9]*$/i.test(event.target.value);
        console.log(nameStatus);
        console.log(event.target.parentNode.classList); 
        if(nameStatus == false) {
            event.target.value = '';
            event.target.className = 'error';
            event.target.parentNode.className = 'not-valid'
            event.target.parentNode.classList.remove('valid');
            document.querySelector('#name-hint').style.display = 'block';
        } else {
            event.target.parentNode.classList.remove('not-valid');
            event.target.parentNode.className = 'valid'
            event.target.className = 'error-border';
            document.querySelector('#name-hint').style.display = 'none';
        }
    } else if(event.target.id == 'email') {
        const nameStatus = /^[^@.]+@*[^@.]+\.com$/i.test(event.target.value);
        if(nameStatus == false) {
            event.target.value = '';
            event.target.className = 'error';
            event.target.parentNode.className = 'not-valid'
            event.target.parentNode.classList.remove('valid');
            document.querySelector('#email-hint').style.display = 'block';
        } else {
            event.target.parentNode.classList.remove('not-valid');
            event.target.parentNode.className = 'valid'
            event.target.className = 'error-border';
            document.querySelector('#email-hint').style.display = 'none';
        }
    }
})
