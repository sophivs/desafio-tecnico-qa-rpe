# Plano de Teste - Front

**Prova QA**

*versão 1.0*

## Histórico das alterações

   Data    | Versão |    Descrição   | Autor(a)
-----------|--------|----------------|-----------------
17/12/2024 |  1.0   | Criação do projeto | Sophia Victória


## 1 - Introdução

Na RPE, nosso objetivo é transformar a experiência de compra dos nossos clientes, e uma aplicação confiável é crucial para isso. Para alcançar essa meta precisamos agilizar nossas entregas e garantir a qualidade das aplicações por meio de soluções inovadoras e testes rigorosos. O desafio está dividido em duas etapas: Frontend e Backend.

Este projeto de testes tem como objetivo garantir a qualidade e confiabilidade da aplicação de teste da RPE por meio da elaboração de um plano de testes abrangente, especificação de casos de teste, automação de fluxos críticos e identificação de problemas ou sugestões de melhorias.

## 2 - Requisitos a Testar

A aplicação possui as seguintes funcionalidades a serem validadas:
- Login no sistema.
- Cadastro de clientes.
- Realização de transações financeiras.

### Regras de negócio:

ID   | Regra
-----|---------------------
1    |      Campos obrigatórios são indicados com um asterisco (*)
2    |      A venda só é permitida se o saldo do cliente for igual ou superior ao valor da compra.
3    |      Autenticação do sistema realizada com credenciais: admin/admin.

### Requisitos:

ID   | Requisitos
-----|---------------------
1    |      Elaboração de um plano de testes.
2    |      Levantamento de cenários e especificação dos casos de teste.
3    |      Automação dos principais fluxos: login, cadastro de cliente e transação.
4    |      Identificação de possíveis bugs, detalhando os passos para reproduzi-los.

## 3 - Tipos de teste

Para esta aplicação será considerado a construção de teste de interface de usuário

### 3.1 - Login

Deve-se garantir que o login esteja funcionando corretamente e retornando avisos coerentes de sucesso e erro. 

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Testar o fluxo de login
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração (x)
        </th>
        <th>
            Sistema ()
        </th>
        <th>
            Unidade ()
        </th>
        <th>
            Aceitação ()
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ()
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Sophia Victória
        </th>
    </tr>
</table>
<br/>

### 3.2 - Cadastro de cliente

O cadastro de cliente é fundamental para que seja possível realizar transações.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Validar o cadastro e listagem de clientes
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração (x)
        </th>
        <th>
            Sistema ()
        </th>
        <th>
            Unidade ()
        </th>
        <th>
            Aceitação ()
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ()
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Sophia Victória
        </th>
    </tr>
</table>
<br/>

### 3.3 - Transação

A transação é um elemento crucial do sistema, sendo um ponto chave e necessário para a satisfação do cliente.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Validar a criação e listagem de transações
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração (x)
        </th>
        <th>
            Sistema ()
        </th>
        <th>
            Unidade ()
        </th>
        <th>
            Aceitação ()
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ()
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Sophia Victória
        </th>
    </tr>
</table>
<br/>

## 4 - Recursos

### 4.1 - Ambiente de teste - Software e Hardware

Os testes serão realizados utilizando uma maquina windows, com um processador i7, 16GB de memória RAM, acessando a plataforma através do navegador Google Chrome.

### 4.2 - Ferramenta de teste

Para a execução dos testes será utilizado o framework PlayWright e Typescript.
Para rodar o projeto certifique-se que você possui o npm e o node instalados em sua maquina.
Rode npm install --save-dev @playwright/test para instalar o playwright.
Rode npx playwright test para executar os testes.
Rode npx playwright test {test_name} para executar um teste específico.

## 5 - Levantamento dos cenários e casos de teste

### 5.1 - Cenários de teste

ID        | Descrição
----------|--------------
FRONT-1   | Login com credenciais válidas.
FRONT-2   | Login com usuário inválido.
FRONT-3   | Login com senha inválida.
FRONT-4   | Login sem credenciais.
FRONT-5   | Cadastro de cliente com todos os campos obrigatórios preenchidos corretamente.
FRONT-6   | Cadastro de cliente e clicando no botão de limpar.
FRONT-7   | Cadastro de cliente com campo obrigatório ausente.
FRONT-8   | Cadastro de cliente preenchendo nenhum campo e clicando no botão Cancelar.
FRONT-9   | Cadastro de transação com saldo superior.
FRONT-10  | Cadastro de transação com saldo igual.
FRONT-11  | Cadastro de transação com saldo insuficiente.
FRONT-12  | Cadastro de transação com valor acima de 1000.
FRONT-13  | Cadastro de transação com valor vazio.
FRONT-14  | Listar cliente que existe.
FRONT-15  | Listar cliente que nome não existe.
FRONT-16  | Listar cliente que data de validade não existe.
FRONT-17  | Listar cliente sem preencher dados.
FRONT-18  | Editar cliente.
FRONT-19  | Excluir cliente.
FRONT-20  | Listar transações de todos os clientes.
FRONT-21  | Listar transações de um cliente especifíco.
FRONT-22  | Cancelar transação.
FRONT-23  | Editar cliente deixando campo obrigatório vazio.
FRONT-24  | Validar informações de cliente em tela de detalhes.
FRONT-25  | Esqueci minha senha.

### 5.2 - Casos de teste

Teste    | Condições          | Variáveis | Resultado 
---------|--------------------|-----------|----------------
FRONT-1  | Dado um usuário que preenche o login com {login} e o password com {senha} quando clica em Sign in     |  login = admin; senha = admin; mensagem = Bem vindo ao Desafio         | então o login deverá ser feito com sucesso e deve aparecer em tela {mensagem}     
FRONT-2  | Dado um usuário que preenche o login com {login} e o password com {senha} quando clica em Sign in     |  login = admin_wrong; senha = admin; mensagem = Credenciais inválidas         | então o login deverá ser feito com sucesso e deve aparecer em tela {mensagem}     
FRONT-3  | Dado um usuário que preenche o login com {login} e o password com {senha} quando clica em Sign in     |  login = admin; senha = admin_wrong; mensagem = Credenciais inválidas         | então o login deverá ser feito com sucesso e deve aparecer em tela {mensagem}     
FRONT-4  | Dado um usuário que preenche o login com {login} e o password com {senha} quando clica em Sign in     |  login = admin_wrong; senha = admin_wrong; mensagem = Credenciais inválidas         | então o login deverá ser feito com sucesso e deve aparecer em tela {mensagem}     
FRONT-5  | Dado um usuário autenticado e acessa a tela de incluir cliente e preenche os campos com valores aleatórios {Nome}, {CPF}, {Ativo}, {Saldo Disponível}, quando clica em Salvar   |   | então o cadastro deve ser realizado e o texto {mensagem} deve aparecer na tela    
FRONT-6  | Dado um usuário autenticado e acessa a tela de incluir cliente e preenche os campos com valores aleatórios {Nome}, {CPF}, {Ativo}, {Saldo Disponível}, quando clica em Limpar    |      | então todos os campos preenchidos devem ser limpados
FRONT-7  | Dado um usuário autenticado e acessa a tela de incluir cliente e preenche os campos {Nome} aleatóriamente, quando clica em Salvar |    | então o cadastro deve aparecer uma mensagem indicando que os campos devem ser preenchidos     
FRONT-8  | Dado um usuário autenticado e acessa a tela de incluir cliente, quando clica em Salvar |    | então deve aparecer uma mensagem indicando que os campos devem ser preenchidos       
FRONT-9  | Dado um usuário autenticado e acessa a tela de incluir transação e seleciona um {cliente}, e seleciona um {valor transacao}, quando clica em Salvar |  {cliente} = cliente aleatório, {valor transacao} = valor acima do saldo do cliente  | então o cadastro deve ser realizado com sucesso e deve aparecer uma mensagem indicando que a transação foi criada com sucesso  
FRONT-10  | Dado um usuário autenticado e acessa a tela de incluir transação e seleciona um {cliente}, e seleciona um {valor transacao}, quando clica em Salvar |  {cliente} = cliente aleatório, {valor transacao} = valor igual do saldo do cliente  | então o cadastro deve ser realizado com sucesso e deve aparecer uma mensagem indicando que a transação foi criada com sucesso  
FRONT-11  | Dado um usuário autenticado e acessa a tela de incluir transação e seleciona um {cliente}, e seleciona um {valor transacao}, quando clica em Salvar |  {cliente} = cliente aleatório, {valor transacao} = valor abaixo do saldo do cliente  | então o cadastro não deve ser realizado e deve aparecer uma mensagem indicando que a transação falhou devido ao saldo inferior  
FRONT-12  | Dado um usuário autenticado e acessa a tela de incluir transação e seleciona um {cliente}, e seleciona um {valor transacao}, quando clica em Salvar |  {cliente} = cliente aleatório, {valor transacao} = valor acima de 1000  | então o cadastro não deve ser realizado e deve aparecer uma mensagem indicando que a transação falhou devido ao saldo inferior 
FRONT-13  | Dado um usuário autenticado e acessa a tela de incluir transação e seleciona um {cliente}, e sem preencher {valor transacao}, quando clica em Salvar |  {cliente} = cliente aleatório  | então o cadastro não deve ser realizado com sucesso e deve aparecer uma mensagem indicando que o campo é obrigatório  
FRONT-14  | Dado um usuário autenticado e acessa a tela de Listar clientes e preenche um {nome}, e uma {Data Validade}, quando clicar em Pesquisar |  {nome} = nome de cliente existente, {Data Validade} = data validade de cliente existente  | então o cliente deve aparecer informando nome e cpf e saldo disponível e validade cartão e as ações disponíveis
FRONT-15  | Dado um usuário autenticado e acessa a tela de Listar clientes e preenche um {nome}, e uma {Data Validade}, quando clicar em Pesquisar |  {nome} = nome de cliente não existente, {Data Validade} = data validade de cliente existente  | então não deve aparecer nenhum cliente
FRONT-16  | Dado um usuário autenticado e acessa a tela de Listar clientes e preenche um {nome}, e uma {Data Validade}, quando clicar em Pesquisar |  {nome} = nome de cliente existente, {Data Validade} = data validade invalida  | então não deve aparecer nenhum cliente
FRONT-17  | Dado um usuário autenticado e acessa a tela de Listar clientes sem preencher os campos, quando clicar em Pesquisar |   | então não deve aparecer nenhum cliente e deve aparecer uma mensagem informando para selecionar os campos obrigatórios
FRONT-18  | Dado um usuário autenticado e acessa a tela de Listar clientes e preenche um {nome}, e uma {Data Validade} e clicou em Pesquisar e clicou no botão de lupa e clicar no botão alterar e alterar algum campo, quando clicar em salvar |  {nome} = nome de cliente existente, {Data Validade} = data validade de cliente existente, {mensagem} = Cliente salvo com sucesso  | então deve aparecer a {mensagem} 
FRONT-19  | Dado um usuário autenticado e acessa a tela de Listar clientes e preenche um {nome}, e uma {Data Validade} e clicou em Pesquisar quando clicar no botão de lixeira |  {nome} = nome de cliente existente, {Data Validade} = data validade de cliente existente, {mensagem} = Cliente excluido com sucesso  | então deve aparecer um modal de confimação da excluisão e ao excluir aparecer a {mensagem} 
FRONT-20  | Dado um usuário autenticado e acessa a tela de Listar transações e preenche o campo {cliente}, quando clicar em Pesquisar |  {cliente} = TODOS  | então o cliente deve aparecer informando nome e cpf e data transação e valor e as ações disponíveis
FRONT-21  | Dado um usuário autenticado e acessa a tela de Listar transações e preenche o campo {cliente}, quando clicar em Pesquisar |  {cliente} = cliente valido  | então o cliente deve aparecer informando nome e cpf e data transação e valor e as ações disponíveis
FRONT-22  | Dado um usuário autenticado e acessa a tela de Listar transações e preenche o campo {cliente} e clicou em Pesquisar, quando clicar no botão de lupa |  {cliente} = cliente valido  | então o deve aparecer as informações da transação corretamente

## 5 - Cronograma

Tipo de teste                 | Duração | data de início | data de término
------------------------------|---------|----------------|-----------------
Escrever plano de teste       |   1d    | 17/12/2024     | 17/12/2024
Escrever testes automatizados |   1d    | 18/12/2024     | 18/12/2024
