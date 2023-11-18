const buttons = document.querySelectorAll('.buttonComun');
const display = document.querySelector('.visor');
const buttonClear = document.querySelector('.buttonClear');
const btnOper = document.querySelectorAll('.buttonOper');
const btnIgual = document.querySelector('.buttonIgual')

let arrayOperaciones = [{
                            id : "+",
                            oper : false
                        },
                        {
                            id : "-",
                            oper : false
                        },
                        {
                            id : "/",
                            oper : false
                        },
                        {
                            id : "x",
                            oper : false
                        }
                        ]
let varOperacional = false;
let numerosAdd = [];
let numeroFinal = 0;
let numerosAdd2 = [];
let numeroFinal2 = 0;


btnIgual.addEventListener("click", operacionIgual)


for(let boton of buttons){
    boton.addEventListener("click", function(event){
        if(!varOperacional){
            let contenidoButton = event.target.textContent;
            numerosAdd.push(contenidoButton)
            numeroFinal = parseInt(numerosAdd.join(''))
            display.textContent = numeroFinal
            console.log(contenidoButton)
            console.log(varOperacional)
        }
        else{
            let contenidoButton2 = event.target.textContent;
            numerosAdd2.push(contenidoButton2);
            numeroFinal2 = parseInt(numerosAdd2.join(''))
            display.textContent = numeroFinal2
        }
    })
}

for(let boton of btnOper){
    boton.addEventListener("click", function(event){
        let contenidoButton = event.target.textContent;
        if (contenidoButton == '+') {
            for(let op of arrayOperaciones){
                if(op.id == "+"){
                    op.oper = true
                }
                else{
                    op.oper = false
                }
            }
            varOperacional = true;
            display.textContent = `${numeroFinal} + `
        }
        else if(contenidoButton == '-'){
            for(let op of arrayOperaciones){
                if(op.id == "-"){
                    op.oper = true
                }
                else{
                    op.oper = false
                }
            }
            varOperacional = true;
            display.textContent = `${numeroFinal} - `

        }
        else if(contenidoButton == '/'){
            for(let op of arrayOperaciones){
                if(op.id == "/"){
                    op.oper = true
                }
                else{
                    op.oper = false
                }
            }
            varOperacional = true;
            display.textContent = `${numeroFinal} / `
        }
        else if(contenidoButton == 'x'){
            for(let op of arrayOperaciones){
                if(op.id == "x"){
                    op.oper = true
                }
                else{
                    op.oper = false
                }
            }
            varOperacional = true;
            display.textContent = `${numeroFinal} x `
        }
})}


function operacionIgual(){
    let valor1 = numeroFinal
    let valor2 = numeroFinal2
    let operacionElegida = ""
    for(op of arrayOperaciones){
        if(op.oper == true){
            operacionElegida = op.id
            if(operacionElegida == "+"){
                display.textContent = (valor1 + valor2)
            }
            else if(operacionElegida == "-"){
                display.textContent = (valor1 - valor2)
            }
            else if(operacionElegida == "/"){
                display.textContent = (valor1/valor2).toFixed(2)
            }
            else if(operacionElegida == "x"){
                display.textContent = (valor1 * valor2).toFixed(2)
            }
        }
    }
}

buttonClear.addEventListener("click", function(){
    display.textContent = 0
    numeroFinal = 0
    numerosAdd = []
    numeroFinal2 = 0
    numerosAdd2 = []
    for(op of arrayOperaciones){
        op.oper = false
    }
    varOperacional = false;
})

