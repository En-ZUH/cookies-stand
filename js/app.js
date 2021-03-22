

'use strict';


let times=['6am','7am','8am','9am', '10am','11am','12pm','1pm','2pm','3pm','4pm', '5pm', '6pm', '7pm', '8pm'];



function getRandomNumber(minNumber, maxNumber)
{
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}



const seattle= {
  location: 'seattle',
  minCust:23,
  maxCust:65,
  avgCookieSale:6.3 ,
  cookiesPerHour:[],
  total:0,


  getCookiesPerHour: function (){
    this.cookiesPerHour.push(Math.floor(getRandomNumber(this.minCust,this.maxCust)*this.avgCookieSale));

  },



  render: function(){ const container = document.getElementById('A');

    const divEl = document.createElement('div');
    container.appendChild(divEl);

    const h1El = document.createElement('h1');
    divEl.appendChild(h1El);
    h1El.textContent = 'Pat-s Salmon Cookies: Sales Data';

    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for(let i=0; i< times.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${times[i]}: ${this.cookiesPerHour[i]} cookies`;
      this.total+= this.cookiesPerHour[i];



    }

    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);

    liEl.textContent = `Total: ${this.total}:cookies`;
  }

};



for(let i=0; i<times.length; i++){
  seattle.getCookiesPerHour();
}
console.log(seattle);
console.log(seattle.render());


//_________________________________________________________________
const Tokyo= {
  location: 'Tokyo',
  minCust:3,
  maxCust:24,
  avgCookieSale:1.2 ,
  cookiesPerHour:[],
  total:0,


  getCookiesPerHour: function (){
    this.cookiesPerHour.push(Math.floor(getRandomNumber(this.minCust,this.maxCust)*this.avgCookieSale));

  },



  render: function(){ const container = document.getElementById('A');

    const divEl = document.createElement('div');
    container.appendChild(divEl);


    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for(let i=0; i< times.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${times[i]}: ${this.cookiesPerHour[i]} cookies`;
      this.total+= this.cookiesPerHour[i];



    }

    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);

    liEl.textContent = `Total: ${this.total}:cookies`;
  }

};



for(let i=0; i<times.length; i++){
  Tokyo.getCookiesPerHour();
}
console.log(Tokyo);
console.log(Tokyo.render());

//______________________________________________________
const Dubai	= {
  location: 'Dubai	',
  minCust:11,
  maxCust:38,
  avgCookieSale:3.7 ,
  cookiesPerHour:[],
  total:0,


  getCookiesPerHour: function (){
    this.cookiesPerHour.push(Math.floor(getRandomNumber(this.minCust,this.maxCust)*this.avgCookieSale));

  },



  render: function(){ const container = document.getElementById('A');

    const divEl = document.createElement('div');
    container.appendChild(divEl);


    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for(let i=0; i< times.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${times[i]}: ${this.cookiesPerHour[i]} cookies`;
      this.total+= this.cookiesPerHour[i];



    }

    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);

    liEl.textContent = `Total: ${this.total}:cookies`;
  }

};



for(let i=0; i<times.length; i++){
  Dubai	.getCookiesPerHour();
}
console.log(Dubai	);
console.log(Dubai	.render());
//_________________________________________________________
const Paris	= {
  location: 'Paris	',
  minCust:20,
  maxCust:38,
  avgCookieSale:2.3 ,
  cookiesPerHour:[],
  total:0,


  getCookiesPerHour: function (){
    this.cookiesPerHour.push(Math.floor(getRandomNumber(this.minCust,this.maxCust)*this.avgCookieSale));

  },



  render: function(){ const container = document.getElementById('A');

    const divEl = document.createElement('div');
    container.appendChild(divEl);


    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for(let i=0; i< times.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${times[i]}: ${this.cookiesPerHour[i]} cookies`;
      this.total+= this.cookiesPerHour[i];



    }

    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);

    liEl.textContent = `Total: ${this.total}:cookies`;
  }

};



for(let i=0; i<times.length; i++){
  Paris	.getCookiesPerHour();
}
console.log(Paris	);
console.log(Paris	.render());
//______________________________________________________

const Lima	= {
  location: 'Lima	',
  minCust:2,
  maxCust:16,
  avgCookieSale:4.6 ,
  cookiesPerHour:[],
  total:0,


  getCookiesPerHour: function (){
    this.cookiesPerHour.push(Math.floor(getRandomNumber(this.minCust,this.maxCust)*this.avgCookieSale));

  },



  render: function(){ const container = document.getElementById('A');

    const divEl = document.createElement('div');
    container.appendChild(divEl);


    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for(let i=0; i< times.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${times[i]}: ${this.cookiesPerHour[i]} cookies`;
      this.total+= this.cookiesPerHour[i];



    }

    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);

    liEl.textContent = `Total: ${this.total}:cookies`;
  }

};



for(let i=0; i<times.length; i++){
  Lima	.getCookiesPerHour();
}
console.log(Lima	);
console.log(Lima	.render());
