<h1>Detected User Browser </h1>
<p>🧶 Objetivo: O objetivo deste projeto foi criar um detector de sistema operacional e browser utilizados pelo usuário no momento da consulta ao sistema. Neste projeto foi utilizado html, css e javascript.</p>
<h3> Escopo </h3>
<p>A ideia é que o sistema web possua uma interface simples e intuitiva (html e css) para ser objetivo com o que se propõe: exibir o sistema operacional (macos, windows, linux) e o browser que o usuário está utilizando naquele momento (safari, firefox, chrome). Para coletar essas inforamções foi utilizada a linguagem javascript. Dentro do universo do js, o projeto foi pautado, principalmente, operando com o DOM (document object model) o qual é o responsável em permitir que navegadores e scripts possam manipular o conteúdo de uma página web, neste caso, onde o nosso sistema estará estruturado.  </p>

<h3> Entendendo o código </h3>
Optei por um html simples e intuitvo apenas com uma <code>div</code> onde irá aparecer as inforamções do browser e sistema operacional juntamente com uma tag <code>span</code> a qual vai ser posteriormente utilizada pelo css e js. O css segue a mesma linha de raciocínio dos códigos em html ao ser minimalista. Atenção para as medidas em porcentagens e boas práticas de responsividade, e na estilização da tag span que irá mostrar (com o js) as informações do sistema. No arquivo externo do JS é possível perceber a utilização do DOM (document object model) saiba mais acessando a <a href= "https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction#:~:text=O%20DOM%20(Document%20Object%20Model)%20representa%20o%20mesmo%20documento%20para,linguagem%20de%20script%20como%20JavaScript.">documentação</a>.<br></br>Foi criado um <code>let</code> que recebe a propriedade <code>userAgent</code> a qual é usada para retornar uma string que apresenta valores como nome, versão e plataforma do navegador do usuário. <br></br>
<h3>Entendendo o valor de retorno neste contexto</h3>
<b>Valor de retorno<b>: uma string representando a string do agente do usuário para o navegador atual. <br></br>Além de um laço <code>for</code> para cirar condições <b>se</b> for identificado o sistema operacional e browser setados nos arrays. Caso não, o sistema retornará "Unknown". Juntamente a isso, no mesmo bloco de código, encontra-se o método <code>includes</code> o qual determina se um array contém um determinado elemento, retornando <code>true</code> ou <code>false</code>. Neste projeto esse método é extremamanete necessário uma vez que após o array ser percorrido com o loop for através do <b>includes</b> é possível de fato realizar essa filgragem de dados.

<br></br>
<br></br>

<h1>Detected User Browser </h1>
<p>🧶 Objective: The objective of this project was to create an operating system and browser detector used by the user when querying the system. In this project were used html, css and javascript.</p>
