export const quizzes = {
  javascript: {
    1: [
      {
        enunciado:
          "Qual palavra-chave é mais recomendada para criar variáveis que podem mudar de valor em JavaScript moderno?",
        alternativas: ["var", "let", "const", "mutable"],
        correta: 1,
      },
      {
        enunciado:
          "Qual das opções é a melhor descrição para 'const' em JavaScript?",
        alternativas: [
          "Cria uma constante que nunca pode mudar de valor",
          "Cria uma variável que nunca pode ser lida",
          "Cria uma variável cujo identificador não pode ser reatribuído",
          "Cria uma variável global automaticamente",
        ],
        correta: 2,
      },
      {
        enunciado:
          "Qual dessas opções é uma declaração de variável VÁLIDA em JavaScript?",
        alternativas: [
          "let 1nome = 'Ana';",
          "var nome-do-usuario = 'Ana';",
          "const nome = 'Ana';",
          "variavel nome = 'Ana';",
        ],
        correta: 2,
      },
    ],
    2: [
      {
        enunciado: "Qual é o resultado de typeof 10?",
        alternativas: ['"int"', '"number"', '"numeric"', '"float"'],
        correta: 1,
      },
      {
        enunciado:
          "Qual dessas opções NÃO é um tipo primitivo em JavaScript?",
        alternativas: ["string", "number", "boolean", "array"],
        correta: 3,
      },
      {
        enunciado: 'Qual é o resultado de typeof "Olá mundo"?',
        alternativas: ['"text"', '"string"', '"char"', '"object"'],
        correta: 1,
      },
    ],
    3: [
      {
        enunciado: "Qual é o resultado da expressão: 10 % 3 ?",
        alternativas: ["1", "3", "0", "2"],
        correta: 3,
      },
      {
        enunciado: "Qual operador é usado para comparação estrita de valor e tipo?",
        alternativas: ["==", "===", "!=", ">="],
        correta: 1,
      },
      {
        enunciado: "Qual expressão retorna true?",
        alternativas: [
          "5 == '5' && 5 === '5'",
          "5 === '5'",
          "5 == '5'",
          "5 !== 5",
        ],
        correta: 2,
      },
    ],
    4: [
      {
        enunciado:
          "Qual estrutura é usada para executar um bloco de código apenas se uma condição for verdadeira?",
        alternativas: ["for", "if", "while", "switch"],
        correta: 1,
      },
      {
        enunciado:
          "Qual palavra-chave é usada para definir um bloco alternativo quando a condição do if é falsa?",
        alternativas: ["elseif", "else", "otherwise", "default"],
        correta: 1,
      },
      {
        enunciado:
          "Em um switch, qual palavra-chave é usada para sair de um caso após executá-lo?",
        alternativas: ["stop", "end", "break", "exit"],
        correta: 2,
      },
    ],
    5: [
      {
        enunciado:
          "Qual laço é mais indicado quando sabemos exatamente quantas vezes queremos repetir?",
        alternativas: ["if", "for", "while", "switch"],
        correta: 1,
      },
      {
        enunciado:
          "Qual laço é mais indicado para repetir enquanto uma condição for verdadeira, sem saber quantas vezes ao certo?",
        alternativas: ["for", "switch", "while", "case"],
        correta: 2,
      },
      {
        enunciado:
          "Qual laço é útil para percorrer cada elemento de um array diretamente?",
        alternativas: ["for", "for...of", "if", "switch"],
        correta: 1,
      },
    ],
    6: [
      {
        enunciado:
          "Qual é a forma correta de declarar uma função tradicional em JavaScript?",
        alternativas: [
          "function minhaFuncao() {}",
          "fun minhaFuncao() {}",
          "fn minhaFuncao() {}",
          "def minhaFuncao() {}",
        ],
        correta: 0,
      },
      {
        enunciado:
          "Qual é a sintaxe básica de uma arrow function sem parâmetros?",
        alternativas: [
          "=> {}",
          "() => {}",
          "function => {}",
          "(=>) {}",
        ],
        correta: 1,
      },
      {
        enunciado:
          "O que uma função faz quando encontra a palavra-chave 'return'?",
        alternativas: [
          "Encerra a função e devolve um valor",
          "Pausa a função temporariamente",
          "Reinicia a função",
          "Ignora o restante do código",
        ],
        correta: 0,
      },
    ],
    7: [
      {
        enunciado:
          "Qual método de array cria um novo array com apenas os elementos que passaram em uma condição?",
        alternativas: ["map()", "filter()", "forEach()", "reduce()"],
        correta: 1,
      },
      {
        enunciado:
          "Qual método de array aplica uma função em cada elemento e retorna um novo array com os resultados?",
        alternativas: ["map()", "filter()", "forEach()", "find()"],
        correta: 0,
      },
      {
        enunciado:
          "Qual método é usado para acumular valores de um array em um único resultado (ex: somar todos)?",
        alternativas: ["reduce()", "some()", "every()", "includes()"],
        correta: 0,
      },
    ],
    8: [
      {
        enunciado:
          "Como acessamos a propriedade 'nome' de um objeto usuário em JavaScript?",
        alternativas: [
          "usuario->nome",
          "usuario['nome']",
          "usuario(nome)",
          "usuario:nome",
        ],
        correta: 1,
      },
      {
        enunciado:
          "Qual sintaxe cria um objeto válido em JavaScript?",
        alternativas: [
          "const user = (nome: 'Ana', idade: 20);",
          "const user = ['Ana', 20];",
          "const user = { nome: 'Ana', idade: 20 };",
          "const user = object(nome='Ana', idade=20);",
        ],
        correta: 2,
      },
      {
        enunciado:
          "Como adicionamos uma nova propriedade 'email' em um objeto já existente chamado user?",
        alternativas: [
          "user.email = 'ana@email.com';",
          "user['email'] = 'ana@email.com';",
          "ambas as alternativas anteriores",
          "não é possível adicionar propriedades depois",
        ],
        correta: 2,
      },
    ],
  },

  python: {
    1: [
      {
        enunciado: "Qual função é usada para exibir algo na tela em Python?",
        alternativas: ["echo()", "print()", "write()", "show()"],
        correta: 1,
      },
      {
        enunciado:
          "Qual função lê um texto digitado pelo usuário no terminal?",
        alternativas: ["scan()", "input()", "read()", "gets()"],
        correta: 1,
      },
      {
        enunciado: "Qual dessas linhas imprime 'Olá' corretamente?",
        alternativas: [
          "print(Olá)",
          "print('Olá')",
          "echo('Olá')",
          "mostrar('Olá')",
        ],
        correta: 1,
      },
    ],
    2: [
      {
        enunciado:
          "Qual opção mostra corretamente uma atribuição de variável em Python?",
        alternativas: [
          "let idade = 20",
          "var idade = 20",
          "idade = 20",
          "int idade = 20",
        ],
        correta: 2,
      },
      {
        enunciado:
          "Qual função converte uma string '10' para número inteiro em Python?",
        alternativas: ["int('10')", "parseInt('10')", "Number('10')", "toInt('10')"],
        correta: 0,
      },
      {
        enunciado:
          "Qual é o tipo retornado por input() por padrão?",
        alternativas: ["int", "float", "string", "bool"],
        correta: 2,
      },
    ],
    3: [
      {
        enunciado:
          "Qual é a sintaxe correta de um if em Python?",
        alternativas: [
          "if (condicao) {}",
          "if condicao:",
          "if condicao then:",
          "if condicao {}",
        ],
        correta: 1,
      },
      {
        enunciado:
          "Qual palavra-chave é usada para criar um 'senão se' em Python?",
        alternativas: ["elseif", "elif", "else if", "senão se"],
        correta: 1,
      },
      {
        enunciado:
          "Qual bloco será executado se todas as condições anteriores forem falsas?",
        alternativas: ["if", "elif", "else", "end"],
        correta: 2,
      },
    ],
    4: [
      {
        enunciado:
          "Qual laço é comumente usado para repetir um bloco um número conhecido de vezes em Python?",
        alternativas: ["for", "while", "loop", "repeat"],
        correta: 0,
      },
      {
        enunciado:
          "Qual função é frequentemente usada junto com o for para gerar sequências de números?",
        alternativas: ["range()", "list()", "seq()", "generate()"],
        correta: 0,
      },
      {
        enunciado:
          "Qual laço é mais adequado quando não sabemos quantas repetições serão necessárias e dependemos de uma condição?",
        alternativas: ["for", "while", "loop", "foreach"],
        correta: 1,
      },
    ],
    5: [
      {
        enunciado:
          "Como criamos uma lista vazia em Python?",
        alternativas: ["lista = {}", "lista = []", "lista = ()", "lista = null"],
        correta: 1,
      },
      {
        enunciado:
          "Qual método adiciona um item ao final de uma lista?",
        alternativas: ["add()", "append()", "push()", "insertEnd()"],
        correta: 1,
      },
      {
        enunciado:
          "Qual sintaxe acessa o primeiro elemento da lista itens?",
        alternativas: ["itens[0]", "itens(0)", "itens[1]", "itens.first()"],
        correta: 0,
      },
    ],
    6: [
      {
        enunciado:
          "Qual estrutura representa um dicionário em Python?",
        alternativas: ["[]", "{}", "()", "<>"],
        correta: 1,
      },
      {
        enunciado:
          "Como acessamos o valor da chave 'nome' em um dicionário pessoa?",
        alternativas: [
          "pessoa.nome",
          "pessoa('nome')",
          "pessoa['nome']",
          "pessoa->nome",
        ],
        correta: 2,
      },
      {
        enunciado:
          "Qual método retorna todas as chaves de um dicionário?",
        alternativas: ["keys()", "values()", "items()", "getKeys()"],
        correta: 0,
      },
    ],
    7: [
      {
        enunciado:
          "Qual palavra-chave é usada para definir uma função em Python?",
        alternativas: ["func", "def", "function", "fn"],
        correta: 1,
      },
      {
        enunciado:
          "Como retornamos um valor em uma função Python?",
        alternativas: ["exit valor", "return valor", "send valor", "output valor"],
        correta: 1,
      },
      {
        enunciado:
          "Onde os parâmetros da função são declarados?",
        alternativas: [
          "Depois dos dois-pontos (:)",
          "Entre parênteses após o nome da função",
          "Após a palavra-chave return",
          "Não é possível ter parâmetros em Python",
        ],
        correta: 1,
      },
    ],
  },

  java: {
    1: [
      {
        enunciado:
          "Qual método é o ponto de entrada padrão de um programa Java?",
        alternativas: [
          "public static void start(String[] args)",
          "public void main(String args)",
          "public static void main(String[] args)",
          "static void main()",
        ],
        correta: 2,
      },
      {
        enunciado:
          "Em qual arquivo geralmente fica o método main?",
        alternativas: [
          "Em qualquer arquivo .txt",
          "Em uma classe Java",
          "Em um arquivo .config",
          "Não existe método main em Java",
        ],
        correta: 1,
      },
      {
        enunciado:
          "Qual palavra-chave indica que uma classe pode ser utilizada por outras classes?",
        alternativas: ["public", "open", "extern", "global"],
        correta: 0,
      },
    ],
    2: [
      {
        enunciado:
          "Qual tipo primitivo é usado para números inteiros em Java?",
        alternativas: ["int", "float", "String", "char"],
        correta: 0,
      },
      {
        enunciado:
          "Qual tipo é usado para representar texto em Java?",
        alternativas: ["string", "String", "text", "char[]"],
        correta: 1,
      },
      {
        enunciado:
          "Qual é uma declaração válida de variável?",
        alternativas: [
          "int idade = '20';",
          "String nome = 'Ana';",
          "float pi = 3,14;",
          "boolean ativo = 'true';",
        ],
        correta: 1,
      },
    ],
    3: [
      {
        enunciado:
          "Qual é a sintaxe correta de um if em Java?",
        alternativas: [
          "if (condicao) {}",
          "if condicao:",
          "if condicao then",
          "if condicao {}",
        ],
        correta: 0,
      },
      {
        enunciado:
          "Qual palavra-chave é usada para definir um bloco alternativo caso o if seja falso?",
        alternativas: ["elseif", "else", "otherwise", "default"],
        correta: 1,
      },
      {
        enunciado:
          "Qual estrutura permite comparar uma variável com vários valores possíveis?",
        alternativas: ["if", "switch", "while", "for"],
        correta: 1,
      },
    ],
    4: [
      {
        enunciado:
          "Qual laço repete um bloco enquanto uma condição for verdadeira, verificando a condição ANTES de entrar?",
        alternativas: ["for", "while", "do-while", "switch"],
        correta: 1,
      },
      {
        enunciado:
          "Qual laço garante que o bloco será executado pelo menos uma vez, verificando a condição no final?",
        alternativas: ["for", "while", "do-while", "if"],
        correta: 2,
      },
      {
        enunciado:
          "Qual laço é mais indicado quando sabemos exatamente quantas repetições queremos?",
        alternativas: ["for", "while", "do-while", "loop"],
        correta: 0,
      },
    ],
    5: [
      {
        enunciado:
          "Qual sintaxe cria um array de 5 inteiros em Java?",
        alternativas: [
          "int[] numeros = new int(5);",
          "int numeros[] = new int[5];",
          "int numeros = [5];",
          "array<int> numeros = 5;",
        ],
        correta: 1,
      },
      {
        enunciado:
          "Como acessamos o primeiro elemento de um array chamado 'itens'?",
        alternativas: ["itens[0]", "itens(0)", "itens{0}", "itens.first()"],
        correta: 0,
      },
      {
        enunciado:
          "Qual propriedade retorna o tamanho de um array?",
        alternativas: ["itens.size()", "itens.length", "itens.count()", "itens.len"],
        correta: 1,
      },
    ],
    6: [
      {
        enunciado:
          "Qual palavra-chave define um método que não retorna valor?",
        alternativas: ["null", "void", "empty", "none"],
        correta: 1,
      },
      {
        enunciado:
          "Onde os parâmetros de um método são declarados?",
        alternativas: [
          "Dentro do corpo do método",
          "Entre parênteses após o nome do método",
          "Após a palavra-chave return",
          "Em um arquivo separado",
        ],
        correta: 1,
      },
      {
        enunciado:
          "Qual palavra-chave usamos para devolver um valor de um método?",
        alternativas: ["return", "send", "exit", "out"],
        correta: 0,
      },
    ],
  },

  csharp: {
    1: [
      {
        enunciado:
          "Em C#, qual palavra-chave é usada para definir um método que pode ser chamado sem instanciar a classe?",
        alternativas: ["public", "virtual", "static", "const"],
        correta: 2,
      },
      {
        enunciado:
          "Qual é o tipo usado para representar texto em C#?",
        alternativas: ["string", "String", "text", "char[]"],
        correta: 0,
      },
      {
        enunciado:
          "Qual é o nome correto do método de entrada padrão de um programa C#?",
        alternativas: [
          "start()",
          "Program()",
          "Main()",
          "Run()",
        ],
        correta: 2,
      },
    ],
    2: [
      {
        enunciado:
          "Qual tipo primitivo representa números inteiros em C#?",
        alternativas: ["int", "float", "double", "decimal"],
        correta: 0,
      },
      {
        enunciado:
          "Qual palavra-chave permite declarar uma variável sem especificar o tipo explicitamente?",
        alternativas: ["dynamic", "var", "let", "auto"],
        correta: 1,
      },
      {
        enunciado:
          "Qual tipo é usado para valores verdadeiro/falso?",
        alternativas: ["boolean", "bool", "Bit", "TrueFalse"],
        correta: 1,
      },
    ],
    3: [
      {
        enunciado:
          "Qual é a estrutura correta de um if em C#?",
        alternativas: [
          "if condicao:",
          "if (condicao) { }",
          "if condicao {}",
          "if (condicao):",
        ],
        correta: 1,
      },
      {
        enunciado:
          "Qual palavra-chave define o bloco que será executado se o if for falso?",
        alternativas: ["otherwise", "else", "elseif", "default"],
        correta: 1,
      },
      {
        enunciado:
          "Qual estrutura permite comparar uma variável com vários casos em C#?",
        alternativas: ["if", "while", "switch", "foreach"],
        correta: 2,
      },
    ],
    4: [
      {
        enunciado:
          "Qual laço é usado para percorrer cada elemento de uma coleção em C# de forma simples?",
        alternativas: ["for", "while", "do-while", "foreach"],
        correta: 3,
      },
      {
        enunciado:
          "Qual laço é mais adequado quando sabemos a quantidade de repetições?",
        alternativas: ["for", "while", "do-while", "foreach"],
        correta: 0,
      },
      {
        enunciado:
          "Qual laço é baseado em condição e verifica ANTES de executar?",
        alternativas: ["for", "while", "do-while", "switch"],
        correta: 1,
      },
    ],
    5: [
      {
        enunciado:
          "Qual é a palavra-chave para declarar um método que retorna um inteiro?",
        alternativas: ["int metodo()", "void metodo()", "number metodo()", "integer metodo()"],
        correta: 0,
      },
      {
        enunciado:
          "Como devolvemos um valor a partir de um método em C#?",
        alternativas: ["exit valor;", "return valor;", "back valor;", "out valor;"],
        correta: 1,
      },
      {
        enunciado:
          "Onde os parâmetros de um método são declarados?",
        alternativas: [
          "Dentro do corpo",
          "Entre parênteses após o nome",
          "Em outro arquivo",
          "No final da classe",
        ],
        correta: 1,
      },
    ],
    6: [
      {
        enunciado:
          "Qual tipo de coleção genérica representa uma lista dinâmica em C#?",
        alternativas: ["Array", "List<T>", "Map", "Set"],
        correta: 1,
      },
      {
        enunciado:
          "Qual método adiciona um item a uma List<T>?",
        alternativas: ["insert()", "add()", "append()", "push()"],
        correta: 1,
      },
      {
        enunciado:
          "Qual laço é frequentemente usado para percorrer itens de uma List<T>?",
        alternativas: ["switch", "foreach", "do-while", "if"],
        correta: 1,
      },
    ],
  },

  php: {
    1: [
      {
        enunciado:
          "Como se inicia corretamente um bloco de código PHP?",
        alternativas: ["<php", "<?php", "<?", "<script php>"],
        correta: 1,
      },
      {
        enunciado:
          "Qual comando exibe texto na tela em PHP?",
        alternativas: ["echo", "print", "console.log", "escrever"],
        correta: 0,
      },
      {
        enunciado:
          "Qual extensão de arquivo é mais comum para arquivos PHP?",
        alternativas: [".html", ".php", ".js", ".txt"],
        correta: 1,
      },
    ],
    2: [
      {
        enunciado:
          "Como declaramos uma variável em PHP?",
        alternativas: ["var nome = 'Ana';", "$nome = 'Ana';", "let nome = 'Ana';", "nome := 'Ana';"],
        correta: 1,
      },
      {
        enunciado:
          "Qual é o tipo de dado para valores verdadeiros/falsos em PHP?",
        alternativas: ["boolean", "bool", "truefalse", "bit"],
        correta: 1,
      },
      {
        enunciado:
          "Qual valor representa 'nenhum valor' em PHP?",
        alternativas: ["null", "none", "undefined", "vazio"],
        correta: 0,
      },
    ],
    3: [
      {
        enunciado:
          "Qual sintaxe cria um array indexado em PHP?",
        alternativas: [
          "array = [1, 2, 3];",
          "$lista = array(1, 2, 3);",
          "$lista = {1, 2, 3};",
          "lista(1, 2, 3);",
        ],
        correta: 1,
      },
      {
        enunciado:
          "Qual sintaxe cria um array associativo em PHP?",
        alternativas: [
          "$pessoa = array('nome' => 'Ana', 'idade' => 20);",
          "$pessoa = ['nome' : 'Ana', 'idade' : 20];",
          "$pessoa = (nome='Ana', idade=20);",
          "$pessoa = {'nome' => 'Ana', 'idade' => 20};",
        ],
        correta: 0,
      },
      {
        enunciado:
          "Como acessamos o valor da chave 'nome' em um array associativo $pessoa?",
        alternativas: [
          "$pessoa.nome",
          "$pessoa['nome']",
          "$pessoa->nome",
          "$pessoa['nome']; echo",
        ],
        correta: 1,
      },
    ],
    4: [
      {
        enunciado:
          "Qual palavra-chave inicia uma estrutura condicional em PHP?",
        alternativas: ["if", "quando", "se", "else"],
        correta: 0,
      },
      {
        enunciado:
          "Qual bloco é executado se a condição do if for falsa?",
        alternativas: ["elseif", "else", "otherwise", "default"],
        correta: 1,
      },
      {
        enunciado:
          "Qual estrutura permite testar uma variável contra vários valores em PHP?",
        alternativas: ["if", "switch", "for", "foreach"],
        correta: 1,
      },
    ],
    5: [
      {
        enunciado:
          "Qual laço é usado para repetir um bloco um número conhecido de vezes em PHP?",
        alternativas: ["if", "for", "while", "switch"],
        correta: 1,
      },
      {
        enunciado:
          "Qual laço é mais indicado quando não se sabe quantas vezes a repetição vai acontecer?",
        alternativas: ["for", "switch", "while", "foreach"],
        correta: 2,
      },
      {
        enunciado:
          "Qual laço percorre diretamente os elementos de um array?",
        alternativas: ["for", "while", "foreach", "loop"],
        correta: 2,
      },
    ],
    6: [
      {
        enunciado:
          "Qual palavra-chave é usada para declarar uma função em PHP?",
        alternativas: ["function", "func", "def", "fn"],
        correta: 0,
      },
      {
        enunciado:
          "Como retornamos um valor de uma função em PHP?",
        alternativas: ["saida", "return", "back", "output"],
        correta: 1,
      },
      {
        enunciado:
          "Onde os parâmetros de uma função são definidos?",
        alternativas: [
          "Depois do return",
          "Entre parênteses após o nome da função",
          "No final do arquivo",
          "Dentro de um array",
        ],
        correta: 1,
      },
    ],
  },

  typescript: {
    1: [
      {
        enunciado:
          "Qual é o principal diferencial do TypeScript em relação ao JavaScript?",
        alternativas: [
          "É mais rápido que JavaScript",
          "É uma linguagem apenas para backend",
          "Adiciona tipagem estática ao JavaScript",
          "Só funciona com Angular",
        ],
        correta: 2,
      },
      {
        enunciado:
          "Qual sintaxe tipa corretamente uma variável 'idade' como número?",
        alternativas: [
          "let idade: number = 20;",
          "let idade = number 20;",
          "number idade = 20;",
          "let number idade = 20;",
        ],
        correta: 0,
      },
      {
        enunciado:
          "Qual tipo representa um valor que pode ser string ou number?",
        alternativas: [
          "string | number",
          "string || number",
          "string && number",
          "string or number",
        ],
        correta: 0,
      },
    ],
    2: [
      {
        enunciado:
          "Para que servem as interfaces em TypeScript?",
        alternativas: [
          "Para executar código assíncrono",
          "Para definir contratos de forma de objetos",
          "Para estilizar componentes",
          "Para substituir classes",
        ],
        correta: 1,
      },
      {
        enunciado:
          "Qual é a sintaxe correta de uma interface simples?",
        alternativas: [
          "interface Pessoa { nome: string; idade: number; }",
          "Pessoa interface { nome: string, idade: number }",
          "interface Pessoa ( nome: string, idade: number )",
          "interface Pessoa: { nome string; idade number; }",
        ],
        correta: 0,
      },
      {
        enunciado:
          "Como aplicamos uma interface a um objeto?",
        alternativas: [
          "const p: Pessoa = { ... }",
          "const p interface Pessoa = { ... }",
          "Pessoa p = { ... }",
          "new interface Pessoa(...)",
        ],
        correta: 0,
      },
    ],
    3: [
      {
        enunciado:
          "Qual sintaxe tipa corretamente os parâmetros e o retorno de uma função?",
        alternativas: [
          "function soma(a, b): number {}",
          "function soma(a: number, b: number): number {}",
          "function soma(number a, number b) {}",
          "fn soma(a: number, b: number) -> number {}",
        ],
        correta: 1,
      },
      {
        enunciado:
          "Como definimos uma função que não retorna nada?",
        alternativas: [
          "function log(msg: string): void {}",
          "function log(msg: string): empty {}",
          "function log(msg: string): null {}",
          "function log(msg: string): none {}",
        ],
        correta: 0,
      },
      {
        enunciado:
          "O que significa o tipo 'void' em TypeScript?",
        alternativas: [
          "A função sempre retorna null",
          "A função não retorna nenhum valor útil",
          "A função retorna qualquer coisa",
          "A função sempre lança erro",
        ],
        correta: 1,
      },
    ],
    4: [
      {
        enunciado:
          "Como declaramos um array de números em TypeScript?",
        alternativas: [
          "let numeros: number[] = [1, 2, 3];",
          "let numeros: [number] = [1, 2, 3];",
          "let numeros = number[1, 2, 3];",
          "let numeros = [number]1,2,3;",
        ],
        correta: 0,
      },
      {
        enunciado:
          "O que é uma tupla em TypeScript?",
        alternativas: [
          "Um array de qualquer tipo",
          "Um array com tamanho e tipos fixos em cada posição",
          "Um objeto com chaves dinâmicas",
          "Uma string tipada",
        ],
        correta: 1,
      },
      {
        enunciado:
          "Qual declaração representa uma tupla com [string, number]?",
        alternativas: [
          "let usuario: [string, number];",
          "let usuario: (string, number);",
          "let usuario: string | number[];",
          "let usuario: [string | number];",
        ],
        correta: 0,
      },
    ],
    5: [
      {
        enunciado:
          "Para que servem Generics em TypeScript?",
        alternativas: [
          "Para gerar código automaticamente",
          "Para permitir criar componentes reutilizáveis e tipados de forma flexível",
          "Para remover tipos do código",
          "Para converter código JS em TS",
        ],
        correta: 1,
      },
      {
        enunciado:
          "Qual é a sintaxe básica de uma função genérica?",
        alternativas: [
          "function ident<T>(valor: T): T { ... }",
          "function<T> ident(valor): T { ... }",
          "generic function ident(T valor) { ... }",
          "function ident(generic T valor) { ... }",
        ],
        correta: 0,
      },
      {
        enunciado:
          "Qual é a vantagem de usar Generics?",
        alternativas: [
          "Evitar qualquer tipo de erro",
          "Permitir reutilizar código com diferentes tipos mantendo segurança de tipos",
          "Tornar o código mais rápido",
          "Remover a necessidade de tipagem",
        ],
        correta: 1,
      },
    ],
  },
};
