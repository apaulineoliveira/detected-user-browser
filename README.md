<h1>Detected User Browser </h1>
  <p>🧶 Objetivo: O objetivo deste projeto foi criar um detector de sistema operacional e browser utilizados pelo usuário no momento da consulta ao sistema. Neste projeto foi utilizado html, css e javascript.</p>

<h3> Escopo </h3>
  <p>A ideia é que o sistema web possua uma interface simples e intuitiva (html e css) para ser objetivo com o que se propõe: exibir o sistema operacional (macos, windows, linux) e o browser que o usuário está utilizando naquele momento (safari, firefox, chrome). Para coletar essas inforamções foi utilizada a linguagem javascript. Dentro do universo do js, o projeto foi pautado, principalmente, operando com o DOM (document object model) o qual é o responsável em permitir que navegadores e scripts possam manipular o conteúdo de uma página web, neste caso, onde o nosso sistema estará estruturado.  </p>

<h3> Entendendo o código </h3>
  <p>Optei por um html simples e intuitvo apenas com uma <code>div</code> onde irá aparecer as inforamções do browser e sistema operacional juntamente com uma tag <code>span</code> a qual vai ser posteriormente utilizada pelo css e js. O css segue a mesma linha de raciocínio dos códigos em html ao ser minimalista. Atenção para as medidas em porcentagens e boas práticas de responsividade, e na estilização da tag span que irá mostrar (com o js) as informações do sistema. No arquivo externo do JS é possível perceber a utilização do DOM (document object model) saiba mais acessando a <a href= "https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction#:~:text=O%20DOM%20(Document%20Object%20Model)%20representa%20o%20mesmo%20documento%20para,linguagem%20de%20script%20como%20JavaScript.">documentação</a>.<br></br>Foi criado um <code>let</code> que recebe a propriedade <code>userAgent</code> a qual é usada para retornar uma string que apresenta valores como nome, versão e plataforma do navegador do usuário.</p>
  
<h3>Entendendo o valor de retorno neste contexto</h3>
  <b>Valor de retorno<b>: uma string representando a string do agente do usuário para o navegador atual. <br></br>Além de um laço <code>for</code> para cirar condições <b>se</b> for identificado o sistema operacional e browser setados nos arrays. Caso não, o sistema retornará "Unknown". Juntamente a isso, no mesmo bloco de código, encontra-se o método <code>includes</code> o qual determina se um array contém um determinado elemento, retornando <code>true</code> ou <code>false</code>. Neste projeto esse método é extremamanete necessário uma vez que após o array ser percorrido com o loop for através do <b>includes</b> é possível de fato realizar essa filtragem de dados.

<br></br>
<br></br>

<h1>Detected User Browser </h1>
<p>🧶 Objective: The objective of this project was to create an operating system and browser detector used by the user when querying the system. In this project were used html, css and javascript.</p>

<h3> Scope </h3>
  <p>The idea is that the web system has a simple and intuitive interface (html and css) to be objective with what it proposes: display the operating system (macos, windows, linux) and the browser that the user is using in that moment (safari, firefox, chrome). To collect this information, the javascript language was used. Within the universe of js, the project was guided mainly by operating with the DOM (document object model) which is responsible for allowing browsers and scripts to manipulate the content of a web page, in this case, where our system will be structured. </p>
  
<h3> Understanding the code </h3>
  <p>I opted for a simple and intuitive html with just a <code>div</code> where the browser and operating system information will appear along with a <code>span</code> tag which will later be used by the css and js . The css follows the same line of reasoning as the codes in html by being minimalist. Pay attention to the measures in percentages and good practices of responsiveness, and in the styling of the span tag that will show (with the js) the system information. In the external JS file, you can see the use of the DOM (document object model) learn more by accessing <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction# :~:text=The%20DOM%20(Document%20Object%20Model)%20represents the%20the%20same%20document%20for,language%20of%20script%20as%20JavaScript.">documentation</a>.<br></br> A <code>let</code> was created that receives the <code>userAgent</code> property which is used to return a string that presents values such as name, version and platform of the user's browser.</p> 
  
<h3>Understanding the return value in this context</h3>
<b>Return Value<b>: A string representing the user agent string for the current browser. <br></br>In addition to a <code>for</code> loop to create conditions <b>if</b> the operating system and browser set in the arrays are identified. If not, the system will return "Unknown". Along with this, in the same code block, there is the <code>includes</code> method which determines whether an array contains a certain element, returning <code>true</code> or <code>false</ code>. In this project this method is extremely necessary since after the array is traversed with the for loop through the <b>includes</b> it is possible to actually perform this data filtering.



