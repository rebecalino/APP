##  O que é linguagem de programação? 

É uma maneira de dar instruções ao computador. 

É ter as peças necessárias para criar algorítmos e, então, resolver os problemas dados. 

Lembrando que: **Algoritmo** é uma sequência lógica de passos para que um problema seja resolvido. 

##  Peças de uma linguagem: 

[x]  Comentários
  usa o // para comentar algo que não será visto no programa, apenas por quem vê o código. 
[x] Declaração de variáveis (const, let)
[x] Operadores (atribuição, concatenação, matemáticos, lógicos)
[x] Tipos de dados (strings, number, boolean)
[x] Estrutura de dados (functions, object, array)
- Controle de fluxo ( if/else)
- Estrutura de repetição (for, while)

## Fases de uma resolução de um problema: 

- Coletar dados 
  --> Ter as informações ao redor do problema.
- Processar os dados (manipular, alterar...)
  --> Pegar as informações e trabalhar com elas.
- Apresentar os dados.
  --> Mostrar para o público. 

## Escopo e Variáveis: 
 
 # Variáveis: 
   Caixinhas que são designadas à um dado para facilitar o processo de execução para que não fique escrevendo o tempo    todo algum dado. A caixinha já se resolve por ela. (LET É UMA VARIÁVEL)
   
   # Variável declarada
     Variáveis que podem mudar sua designação. 
     Elas podem ser:
       Globais: quando estão fora das chaves 
       Locais: quando estão dentro das chaves. 

       Talvez um resumo ok: Assim como expressões numéricas, existe uma ordem de importância e números que estão dentro de (), [] e {}, sempre têm a prioridade do que números de fora desses simbolos. É a mesma coisa na programação quando estamos falando de importância. Nesse caso, sempre aparecerá a instrução de maior importância (PELO MENOS ATÉ O MOMENTO DO DIA 1!!!)
  
  # Variáveis constantes: 
   Não faz muito sentido, mas são variáveis que não mudam sua designação.  

## Tipos de dados 
 [x] String = texto --> "  ''  ``
 [x] Number = números 
 [x] Functions 

## Operadores: 
 [x] Atribuem um valor : = 
 [x] Atribuem valor de concatenação (para strings): + 
 [x] Operadores de comparação: ==, !=, <=, >=, <,>
 [x] Operador spread operator ...   : Dentro de um array, ele retira a informação para fazer um novo à base do antigo 

## Estrutura de dados: 

### Arrays 
 [x] É basicamente uma lista de componetes que você pode colocar em uma variável usando [] 
 [x] Métodos de array: push, [find, forEach, filter, map]: HOF: Higher Order Functions. 

### Objetos: 
 [x] Atributos e métodos
 [x] Criação e manipulação de objetos 
 [x] Acesso a propriedade de objetos. 
   > para acessar um valor que está dentro de um objeto, é só chegar com o pontinho ( . ) 

### FUNCTIONS 

  [x] criar, passar argumento
  [x] executar 
  [x] arrow function / name function 

### ESTRUTURA DE REPETIÇÃO: 
- [x] while -> literalmente repete constantemente a informação. Só para com o return (Caso haja uma repetição infinita, ctrl + c para as respostas)

### CONDICIONAIS 
[x] switch

### MÓDULOS EM NODE.JS : 
[x] Importação de módulos (requirer, CommonJS)
[x] Biblioteca inquirer para criar prompts interativos

## PROGRAMAÇÃO ASSÍNCRONAS 
[x] Uso de funções assíncronas (async e await, dando a oportunidade de escolha do usuário) e promessas