//    let enter_password = prompt("digite a senha: ")
//    if (enter_password === PASSWORD) {
//     alert("Conectado, bom café")
//     break
//    } else [
// //     alert("Senha Incorreta! ;@")
// //    ]
// alert("Captive Portal da Padaria")

// // const COUNT = "10"

// // let count = 0
// // while (count < 10) {
// //     console.log(count)


// //     count-- 
// // }console.log("Feliz Ano Novo")

// //Retrospectiva
// //10caté Feliz Ano Novo!

// let contador = 10;

// while (contador > 0) {
//     console.log(contador);
//     contador--;
// }

// console.log("✨ 🍾 FELIZ ANO NOVO! 🎆 🥂");


// let goal = 300
// let totalsaved = 0
// let weeks = 0

// while (totalsaved < goal) {
//     let text = prompt("Pedro Ganhou quanto essa semana" + weeks ) + "? R$";
//     let amountearned = parseFloat(text);
//     if (isNaN(amountearned) || amountearned <= 0) {
//     alert("Valor inválido! Digite um valor maior que zero.");
// } else {
//     totalsaved = totalsaved + amountearned;
//     weeks = weeks + 1; if (totalsaved < goal) {
//         let lack = goal - totalsaved;
//         alert("Total atual: R$ " + totalsaved.toFixed(2) + ". Ainda faltam R$ " + lack.toFixed(2) + "!");
//     }
// }
// }

// Gera um número aleatório entre 1 e 50
var secretNumber = Math.floor(Math.random() * 50) + 1;
var attempts = 0;
var guess = 0;

alert("=== JOGO DA ADIVINHAÇÃO DA DONA CIDA ===\nTente adivinhar quantas balas estão no pote (entre 1 e 50)!");

// O ciclo continua enquanto o palpite for diferente do número secreto
while (guess !== secretNumber) {
  guess = parseInt(prompt("Digite o seu palpite (entre 1 e 50):"), 10);

  // Validação do intervalo de 1 a 50
  if (isNaN(guess) || guess < 1 || guess > 50) {
    alert("⚠️ Palpite inválido! Chute um número entre 1 e 50.");
  } else {
    // Incrementa a tentativa apenas se o número for válido
    attempts = attempts + 1;

    if (guess < secretNumber) {
      alert("📈 É MAIS!");
    } else if (guess > secretNumber) {
      alert("📉 É MENOS!");
    } else {
      alert("🎉 PARABÉNS! Você acertou! O pote tem " + secretNumber + " balas.\n☕ Você ganhou um café com bolo e precisou de " + attempts + " tentativa(s)!");
    }
  }
}