
function calcular (operacao) {
     let n1 = Number(document.getElementById('numero1').value);
     let n2 = Number(document.getElementById('numero2').value);

     let resultado =0;

     switch (operacao){
        case 'somar':
            resultado = n1 + n2;
             break;
             case 'subtrair':
                resultado = n1 - n2;
                break;
                case 'multiplicar':
                    resultado = n1 * n2;
                    break;
                    case 'dividir':
                        if (n2 === 0) {
                             alert("nenhum numero e divisivel por 0");
                           return;
                        }
                        resultado = n1/n2;
                        break;

     }
     document.getElementById('resultado').innerHTML ="o resultado é = " + resultado;
}

