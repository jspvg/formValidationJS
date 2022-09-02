const imeError = document.getElementById('imeError');

const prezimeError = document.getElementById('prezimeError');

const godineError = document.getElementById('godineError');
const godineInvalidError = document.getElementById('godineInvalidError');

const mjestoError = document.getElementById('mjestoError');

const novostiCheckbox = document.getElementById('novostiCheckbox');

const emailDiv = document.getElementById('emailDiv');
const emailError = document.getElementById('emailError');

const saveBtn = document.getElementById('saveBtn');

function removeErrors(){
    imeError.classList.add('hide');
    prezimeError.classList.add('hide');
    godineError.classList.add('hide');
    godineInvalidError.classList.add('hide');
    mjestoError.classList.add('hide');
    emailError.classList.add('hide');
}

function validateForm(){
    const imeInput = document.getElementById('ime').value;
    const prezimeInput = document.getElementById('prezime').value;
    const godineInput = document.getElementById('godine').value;
    const gradSelect = document.getElementById('gradSelect').value;
    const novostiChecked = novostiCheckbox.checked;
    const emailInput = document.getElementById('email').value;

    let flag = true;

    removeErrors();

    if(!imeInput.length){
        flag = false;
        imeError.classList.remove('hide');
    }
    if(!prezimeInput.length){
        flag = false;
        prezimeError.classList.remove('hide');
    }
    if(!godineInput.length){
        flag = false;
        godineError.classList.remove('hide');
    }else if(isNaN(godineInput)){
        flag = false;
        godineInvalidError.classList.remove('hide');
    }
    if(!gradSelect.length || gradSelect == 0){
        flag = false;
        mjestoError.classList.remove('hide');
    }
    if(novostiChecked && !emailInput.length){
        flag = false;
        emailError.classList.remove('hide');
    }

    return flag;
    
}

saveBtn.addEventListener('click', ()=>{
    if(validateForm()){
        alert('Podaci uspjesno spremljeni.');
    }
});

novostiCheckbox.addEventListener('change', ()=>{
    if(novostiCheckbox.checked){
            emailDiv.classList.remove('hide');
    }else{
            emailDiv.classList.add('hide');
    }
});