class Validator {

    constructor() {
      this.validations = [
        'data-min-length',
        'data-max-length',
        'data-only-letters',
        'data-email-validate',
        'data-required',
        'data-equal',
        'data-password-validate',
        'data-only-numbers',
      ]
    }
  
    //Inicio da validação de tds os campos
    validate(form) {
  
      // resgata todas as validações
      let currentValidations = document.querySelectorAll('form .error-validation');
  
      if(currentValidations.length) {
        this.cleanValidations(currentValidations);
      }
  
      //pegar todos os inputs do formulario
      let inputs = form.getElementsByTagName('input');
      // Passar o HTMLColletion pra um Array, assim dá pra saber oq precisa validar ou não
      let inputsArray = [...inputs];
  
      // loop nos inputs e validação mediante ao que for e
      inputsArray.forEach(function(input, obj) {
  
        // Loop em todas as validações existentes
        for(let i = 0; this.validations.length > i; i++) {
            // Testa se a validação atual existe dentro do input
          if(input.getAttribute(this.validations[i]) != null) {
  
            //aqui eu troco o data-min-length do html por minlength no js, faço isso com tds as strings transformando-as em um metódo
            let method = this.validations[i].replace("data-", "").replace("-", "");
  
            // valor do input
            let value = input.getAttribute(this.validations[i])
  
            // Chamar o metodo 
            this[method](input,value);
  
          }
        }
  
      }, this);
  
    }
  
    // verifica se um input tem um numero minimo de caracteres
    minlength(input, minValue) {
  
      let inputLength = input.value.length;
  
      let errorMessage = `O campo precisa ter no minimo ${minValue} caracteres`;
  
      if(inputLength < minValue) {
        this.printMessage(input, errorMessage);
      }
  
    }
  
    // Verifica se uma entrada passou do tamanho maximo do limite de caracteres
    maxlength(input, maxValue) {
  
      let inputLength = input.value.length;
  
      let errorMessage = `O campo sobrenome precisa ter menos que ${maxValue} caracteres`;
  
      if(inputLength > maxValue) {
        this.printMessage(input, errorMessage);
      }
  
    }
  
    // Permite apenas entradas de letras no campo
    onlyletters(input) {
  
      let re = /^[A-Za-z]+$/;;
  
      let inputValue = input.value;
  
      let errorMessage = `Este campo não aceita números nem caracteres especiais`;
  
      if(!re.test(inputValue)) {
        this.printMessage(input, errorMessage);
      }
  
    }

    // Permite apenas entradas de numeros no campo
    onlynumbers(input) {
  
        let re = /^[0-9.]+$/;
    
        let numero = input.value;
    
        let errorMessage = `Este campo não aceita letras nem caracteres especiais`;
    
        if(!re.test(numero)) {
          this.printMessage(input, errorMessage);
        }
    
    }
  
    //Metodo para validar um email
    emailvalidate(input) {
      let re = /\S+@\S+\.\S+/; //Expressão regular para comparar/receber um email de qqr dominio. EX: teste@email.com.br
  
      let email = input.value;
  
      let errorMessage = `Insira um email no padrão teste@email.com`;
  
      if(!re.test(email)) {
        this.printMessage(input, errorMessage);
      }
  
    }
  
    //verifica se as senhas são iguais
    equal(input, inputName) {
  
      let inputToCompare = document.getElementsByName(inputName)[0];
  
      let errorMessage = `Este campo precisa ser preenchido igual ao campo Senha`;
  
      if(input.value != inputToCompare.value) {
        this.printMessage(input, errorMessage);
      }
    }
    
    // verifica se uma entrada é requerida
    required(input) {
  
      let inputValue = input.value;
  
      if(inputValue === '') {
        let errorMessage = `Este campo é obrigatório`;
  
        this.printMessage(input, errorMessage);
      }
  
    }
  
    // Validação do campo de senha 
    passwordvalidate(input) {
  
      // Transformar a string em um array de char
      let charArr = input.value.split("");
        
      let numbers = 0; //contador de numeros
      let uppercases = 0; //contador de letras maiusculas
  
      // a ideia é percorrer td o array e encontrar pelo menos um char number e um char uppercase
      for(let i = 0; charArr.length > i; i++) {
        if(charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))) {
          uppercases++;
        } else if(!isNaN(parseInt(charArr[i]))) {
          numbers++;
        }
      }
  
      if(uppercases === 0 || numbers === 0) {
        let errorMessage = `A senha precisa de um numero e uma letra maiúscula`;
  
        this.printMessage(input, errorMessage);
      }
  
    }
  
    // Imprime o metodo(msg de erro) na tela
    printMessage(input, msg) {
    
      // checa os erros presentes no input
      let errorsQty = input.parentNode.querySelector('.error-validation');
  
      // quantidade de erros que o campo possui, vamos imprimir um por vez pra não sobre escrever as msg
      if(errorsQty === null) {
        let template = document.querySelector('.error-validation').cloneNode(true);
  
        template.textContent = msg;
    
        let inputParent = input.parentNode; // passa a msg dentro da half-box, não do html
    
        template.classList.remove('template');
    
        inputParent.appendChild(template);
      }
  
    }
  
    // remove todas as validações para fazer a checagem novamente
    cleanValidations(validations) {
      validations.forEach(el => el.remove());
    }
  
  }
  
  let form = document.getElementById('register-form');
  let submit = document.getElementById('btn-submit');
  
  let validator = new Validator();
  
  // evento de envio do form, que valida os inputs
  submit.addEventListener('click', function(e) {
    e.preventDefault();
  
    validator.validate(form);
  });
  