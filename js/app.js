/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';


let times=['6am','7am','8am','9am', '10am','11am','12pm','1pm','2pm','3pm','4pm', '5pm', '6pm', '7pm', '8pm'];

function getRandomNumber(minNumber, maxNumber)
{
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

const container = document.getElementById('A');
const divEl = document.createElement('div');
container.appendChild(divEl);
const tableEl = document.createElement('table');
divEl.appendChild(tableEl);


let f= [];
for(let i=0; i<times.length; i++)
{
f.push(0);

}
console.log(f);

let totaloftotal=0;


function table_footer(){
  const headerRowEl2 = document.createElement('tr');
  tableEl.appendChild(headerRowEl2);
  const td3 =document.createElement('td');
  headerRowEl2.appendChild(td3);
  td3.textContent='Totals';


  for (let i = 0; i < f.length; i++) {
    const td3 =document.createElement('td');
    headerRowEl2.appendChild(td3);
    td3.textContent= f[i];
  }




}






function toprender(){

  const firstrowEl = document.createElement('tr');
  tableEl.appendChild(firstrowEl);

  const th1El = document.createElement('th');
  firstrowEl.appendChild(th1El);

  for(let i=0; i< times.length; i++)
  {
    const th1El = document.createElement('th');
    firstrowEl.appendChild(th1El);
    th1El.textContent = `${times[i]}`;
  }
  const th2El = document.createElement('th');
  firstrowEl.appendChild(th2El);
  th2El.textContent = 'Daily Location Total';
}




function Cookie (location, minCust, maxCust, avgCookieSale, cookiesPerHour, total, totalstore)
{
  this.location=location;
  this.minCust=minCust;
  this.maxCust=maxCust;
  this.avgCookieSale= avgCookieSale;
  this.cookiesPerHour=[];
  this.total=0;
  this.totalstore=[];
}


const seattle= new Cookie('seattle', 23, 65, 6.3);
const Tokyo=   new Cookie('Tokyo', 3, 24, 1.2);
const Dubai=   new Cookie('Dubai', 11, 38, 3.7);
const Paris=   new Cookie('Paris', 20, 38, 2.3);
const Lima=    new Cookie('Lima', 2, 16, 4.6);

//_________________________________________________________

Cookie.prototype.getCookiesPerHour= function()
{
  for (let i=0; i < times.length; i++) {



    this.cookiesPerHour.push(Math.floor(getRandomNumber(this.minCust,this.maxCust)*this.avgCookieSale));

   this.total=this.total+this.cookiesPerHour[i];
  }


  for (let i = 0; i < f.length; i++) {
    f.push(this.total);

  }

 // this.totalstore.push(this.total);
},




Cookie.prototype.render= function(){
  //this.getCust();
  //this.getCookies();
  this.getCookiesPerHour();
  this.cookiesPerHour;
  this.total;
  const headerRowE2 = document.createElement('tr');
  tableEl.appendChild(headerRowE2);
  const th1El = document.createElement('th');
  headerRowE2.appendChild(th1El);
  th1El.textContent=`${this.location}`;
  for(let i=0; i<times.length; i++)
  {
    const td1El = document.createElement('td');
    headerRowE2.appendChild(td1El);
    td1El.textContent = `${this.cookiesPerHour[i]}`;
  }
  const td2El = document.createElement('td');
  headerRowE2.appendChild(td2El);
  td2El.textContent=`${this.total}`;

};








for(let i=0; i<times.length; i++){
  seattle.getCookiesPerHour();
  Tokyo.getCookiesPerHour();
  Dubai.getCookiesPerHour();
  Paris.getCookiesPerHour();
  Lima.getCookiesPerHour();
}
toprender();
seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
table_footer();


