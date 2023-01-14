let changeBtn = document.querySelector('.changeBtn');
let div = document.querySelector('.textBox');

let text1 = "Маск родился и вырос в Претории, ЮАР. Некоторое время учился в Преторийском университете, а в 17 лет переехал в Канаду. Поступил в Университет Куинс в Кингстоне и через два года перевелся в Пенсильванский университет, где получил степень бакалавра по экономике и физике. В 1995 году переехал в Калифорнию, чтобы учиться в Стэнфордском университете, но вместо этого решил заняться бизнесом и вместе со своим братом Кимбалом стал соучредителем компании Zip2, занимавшейся разработкой программного обеспечения для интернета. В 1999 году компания была приобретена Compaq за 307 миллионов долларов. В том же году Маск стал соучредителем онлайн-банка X.com, который в 2000 году конгломеративным путем консолидировался с Confinity и образовал PayPal. В 2002 году компания была куплена eBay за 1,5 миллиарда долларов.";

let text2 = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem laborum ipsam similique repellendus pariatur dignissimos totam recusandae repudiandae praesentium at quasi culpa est necessitatibus tempore nihil, neque vel, reiciendis cum tempora qui? Excepturi, laborum quae. Maiores numquam harum in fuga. Id eligendi tenetur sequi voluptate iusto possimus ullam nobis debitis! Earum a est, ullam, aliquid natus voluptates blanditiis, molestiae officiis amet quibusdam ducimus sapiente. Esse vitae delectus magni corrupti cum, odit aspernatur nobis pariatur obcaecati.';

let text = text1;
div.innerHTML = text;

changeBtn.addEventListener('click', ()=>{
  div.classList.toggle('otherColors');
  div.className.includes('otherColors') ? text = text2 : text = text1;
  div.innerHTML = text;
})