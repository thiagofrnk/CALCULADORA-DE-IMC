function calcular(){
    let peso = parseFloat(document.querySelector('#peso').value);
    let altura = parseFloat(document.querySelector('#metros').value);
    let inserir = document.querySelector('span');
    let alerta = document.querySelector('.alerta');
    
    
    if(!isNaN(peso) && !isNaN(altura)){
        altura = altura*2;
        let imc = (peso/altura);

        inserir.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
            if(imc<18.5){
               let texto = "Abaixo do peso normal";
               alerta.textContent = texto;
            } else if(imc>=18.5 && imc<24.9){
                texto = "Peso normal";
               alerta.textContent = texto;
            } else if(imc>=25.0 && imc<29.9){
                texto = "Excesso de peso";
               alerta.textContent = texto;
            } else if(imc>=30.0 && imc<34.9){
                texto = "Obesidade I";
               alerta.textContent = texto;
            } else if(imc>=35.0 && imc<39.9){
                texto = "Obesidade II";
               alerta.textContent = texto;
            } else if (imc>=40.0){
                texto = "Obesidade III"
                alerta.textContent = texto;
            }
            
    } else{
        inserir.innerHTML = `Preencha os dados corretamente`
    }
}