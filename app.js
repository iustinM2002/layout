const emailInput = document.getElementById('email_address');
const validationIcon = document.getElementsByClassName('valid-img')[0];
const emailContainer = document.getElementsByClassName('email-input-container')[0];

// functions declarations
const validateEmail = (e) =>{
    const inputValue = e.target.value;
    const inputMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(inputValue.length === 0){
        console.log('empty');
        emailContainer.classList.remove('valid');
        emailContainer.classList.remove('invalid');
        validationIcon.style.display = 'none'
    }else if(inputMatch.test(inputValue)){
        emailContainer.classList.add('valid');
        emailContainer.classList.remove('invalid');
        validationIcon.src ='./images/valid.png';
        validationIcon.style.display = 'block';
    }else{
        emailContainer.classList.remove('valid');
        emailContainer.classList.add('invalid');
        validationIcon.src ='./images/invalid.png';
        validationIcon.style.display = 'block';
    }
};

// events listeners
emailInput.addEventListener('input',validateEmail);