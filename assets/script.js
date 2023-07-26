function calcular(){
    let peso = parseFloat(document.querySelector('#peso').value);
    let altura = parseFloat(document.querySelector('#metros').value);
    let inserir = document.querySelector('span');
    
    if(!isNaN(peso) && !isNaN(altura)){
        altura = altura*2;
        let imc = (peso/altura);

        inserir.innerHTML = `Seu IMC é ${imc.toFixed(2)}`
    } else{
        inserir.innerHTML = `Preencha os dados corretamente`
    }
}