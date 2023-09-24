let firstOperand = document.querySelector(".first-operand");
let operator = document.querySelector(".operator")
let secondOperand = document.querySelector(".second-operand");



//Taking Input from Keyboard
addEventListener("keydown", (event) => {
if(/[\d.%+*/-]/.test(event.key)){
        input(event.key)
    }else if(event.key==='Enter' && firstOperand.textContent !== '' && operator.textContent !=='' && secondOperand.textContent!==''){
        equalTo();
    }

});


//Taking input from all digits and operators
function input(n){
    
    if(/[\d.]/.test(n) && operator.textContent == '' ){


        
        //If statement below make sure user can't enter . twice in same operand
        if(n=='.' && !firstOperand.textContent.includes('.')){
            firstOperand.textContent +=n;
        }else if(/[\d]/.test(n)){
            firstOperand.textContent +=n;
        secondOperand.textContent='';
        secondOperand.style.fontSize = '40px';
        }
    }

    //if statement below checks if input is operator, only enter 1 operator at a time
    else if(/[+*/%-]/.test(n) && firstOperand.textContent !==''){
    operator.textContent = n;
    }

    //If statement below limiting 1 . for second operand
    else if (firstOperand.textContent !== '' && operator.textContent !=='') {
            if(n=='.' && !secondOperand.textContent.includes('.')){
                secondOperand.textContent +=n;
            }
            
            //Taking digits for second operand
            else if(/[\d]/.test(n)){
                secondOperand.textContent += n;  
            }
    }
    
    //Nested If statement below helps applying new calculation on existing result
    else if(firstOperand.textContent=='' && operator.textContent =='' && secondOperand.textContent !==''){
        if(/[+*/%-]/.test(n)
        ){
            firstOperand.textContent = secondOperand.textContent;
            operator.textContent = n;
            secondOperand.textContent = '';
            secondOperand.style.fontSize = '40px';
        }
    }

};

// AC Button Functionality
function clearInput()  {
    firstOperand.textContent = '';
    operator.textContent = '';
    secondOperand.textContent = '';
};


// +/- Button Functionality
function abs(){
    let re=/\-?\d+.+/;
    if(firstOperand.textContent !=='' && operator.textContent == '' && secondOperand.textContent == ''){
        let result = parseFloat(firstOperand.textContent) * -1;
        firstOperand.textContent = result;
    }else if(firstOperand.textContent !=='' && operator.textContent !== '' && secondOperand.textContent !== ''){
        let result = parseFloat(secondOperand.textContent) * -1;
        secondOperand.textContent = result;
    }else if(firstOperand.textContent =='' && operator.textContent == '' && secondOperand.textContent !== ''){
        let result = parseFloat(secondOperand.textContent) * -1;
        secondOperand.textContent = result;
    }
};




//Equal To Button Functionality
function equalTo(){
    if(firstOperand.textContent !=='' && operator.textContent !== '' && secondOperand.textContent !== ''){
        secondOperand.textContent = eval(firstOperand.textContent+operator.textContent+secondOperand.textContent);
        firstOperand.textContent = '';
        operator.textContent = ''; 
        if(secondOperand.textContent.length<10){
            secondOperand.style.fontSize = '80px';
        }else{
            secondOperand.style.fontSize = '40px';
        }
    }else{

    }
};



