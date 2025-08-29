const prompt = require("prompt-sync")();

let valorTotal = 0;
let quantidade;

console.log("Bem-vindo(a) à lanchonete Tachlanches!");
const nomeCliente = prompt("Por favor, digite seu nome: ");

// Laço principal do pedido: continua até o cliente digitar '0' para sair
while (true) {
  console.log(
    `\n----------------------------------------\nOlá, ${nomeCliente}!`
  );

  // Mostra o menu e pede para o usuário escolher um item
  const codigoProduto = prompt(
    "Escolha uma opção do menu:\n\n" +
      "1 - Hambúrguer (R$ 15,00)\n" +
      "2 - Batata Frita (R$ 10,00)\n" +
      "3 - Refrigerante (R$ 7,00)\n\n" +
      "0 - Finalizar e ver o total do pedido\n" +
      "Sua opção: "
  );

  if (codigoProduto === "0") {
    break; // Interrompe o laço para finalizar o pedido
  }

  // O 'switch' verifica qual produto foi escolhido
  switch (codigoProduto) {
    case "1":
      // Pede a quantidade e repete se o valor for inválido
      while (true) {
        const input = prompt("Quantos hambúrgueres você deseja? ");
        quantidade = parseInt(input);
        if (!isNaN(quantidade) && quantidade > 0) {
          break; // Sai do laço de quantidade se o valor for válido
        }
        console.log(
          "\n[ERRO] Quantidade inválida. Por favor, insira um número inteiro maior que zero."
        );
      }
      valorTotal += quantidade * 15.0;
      console.log(`\n>> ${quantidade} hambúrguer(es) adicionado(s) ao pedido!`);
      break;

    case "2":
      while (true) {
        const input = prompt("Quantas porções de batata frita você deseja? ");
        quantidade = parseInt(input);
        if (!isNaN(quantidade) && quantidade > 0) {
          break;
        }
        console.log(
          "\n[ERRO] Quantidade inválida. Por favor, insira um número inteiro maior que zero."
        );
      }
      valorTotal += quantidade * 10.0;
      console.log(
        `\n>> ${quantidade} porção(ões) de batata frita adicionada(s) ao pedido!`
      );
      break;

    case "3":
      while (true) {
        const input = prompt("Quantos refrigerantes você deseja? ");
        quantidade = parseInt(input);
        if (!isNaN(quantidade) && quantidade > 0) {
          break;
        }
        console.log(
          "\n[ERRO] Quantidade inválida. Por favor, insira um número inteiro maior que zero."
        );
      }
      valorTotal += quantidade * 7.0;
      console.log(
        `\n>> ${quantidade} refrigerante(s) adicionado(s) ao pedido!`
      );
      break;

    // Caso o usuário digite uma opção que não existe no menu
    default:
      console.log(
        "\n[ERRO] Opção inválida. Por favor, escolha um dos códigos do menu."
      );
      break;
  }
}

// Exibe o resumo final do pedido
console.log("\n========================================");
console.log("Pedido finalizado!");
console.log(`\nObrigado pela preferência, ${nomeCliente}!`);
const totalFormatado = valorTotal.toFixed(2).replace(".", ",");
console.log(`O valor total do seu pedido é: R$ ${totalFormatado}`);
console.log("========================================");
