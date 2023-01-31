//analise como inteiro(matematica.aleatorio() de 0 até 1000)
var numeroSecreto = parseInt(Math.random() * 1001)

//enquanto(while) o chute for diferente do numeroSecreto faça tudo isso abaixo!
while(chute != numeroSecreto) {
var chute = prompt('Digite um número entre 0 e 1000')

//se o chute for igual ao número secreto fazer alert de acertou

if (chute == numeroSecreto) {
    alert('ACERTOU! PARABÉNS!')
} else if(chute > numeroSecreto) {
    alert(`Errou...o número secreto é MENOR do que ${chute}!`)
} else if (chute < numeroSecreto) {
    alert(`Errou...o número secreto é MAIOR do que ${chute}!`)
}
}