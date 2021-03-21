

'use strict';


let times=['6am','7am','8am','9am', '10am','11am','12pm','1pm','2pm','3pm','4pm', '5pm', '6pm', '7pm', '8pm'];



function getRandomNumber(minNumber, maxNumber)
{
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}



const seattle= {
  location: 'seattle',
  minCust:0,
  maxCust:0,
  avgCookieSale:[] ,
  total:0,
  
  getMinCust: function(min,max){
    this.minCust = getRandomNumber(min,max);     
    },
  getMaxCust: function(min,max){
     this.maxCust = getRandomNumber(min,max);
     },

  

    getAvgCookieSale: function (){ 
      this.avgCookieSale.push(Math.floor(getRandomNumber(this.minCust,this.maxCust)*6.3));

    },
     


    render: function(){ const container = document.getElementById('A');

    const divEl = document.createElement('div');
    container.appendChild(divEl);

    const h1El = document.createElement('h1');
    divEl.appendChild(h1El);
    h1El.textContent = "Pat's Salmon Cookies: Sales Data";

    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for(let i=0; i< times.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${times[i]}: ${this.avgCookieSale[i]} cookies`;
      this.total+= this.avgCookieSale[i];

    

    }
    
    const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = ` Total: ${this.total}:cookies`;
  }

};
    


for(let i=0; i<times.length; i++){
seattle.getMinCust(23,44);
seattle.getMaxCust(45,65);
seattle.getAvgCookieSale();
}
console.log(seattle);
console.log(seattle.render());

 
//_________________________________________________________________

const Tokyo= {
    location: 'Tokyo',
    minCust:0,
    maxCust:0,
    avgCookieSale:[] ,
    total:0,
    
    getMinCust: function(min,max){
      this.minCust = getRandomNumber(min,max);     
      },
    getMaxCust: function(min,max){
       this.maxCust = getRandomNumber(min,max);
       },
  
    
  
      getAvgCookieSale: function (){ 
        this.avgCookieSale.push(Math.floor(getRandomNumber(this.minCust,this.maxCust)*1.2));
  
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
        liEl.textContent = `${times[i]}: ${this.avgCookieSale[i]} cookies`;
        this.total+= this.avgCookieSale[i];
  
      
  
      }
      
      const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = ` Total: ${this.total}:cookies`;
    }
  
  };
      
  
  
  for(let i=0; i<times.length; i++){
    Tokyo.getMinCust(3,10);
    Tokyo.getMaxCust(11,24);
    Tokyo.getAvgCookieSale();
  }
  console.log(Tokyo);
  console.log(Tokyo.render());
  

//____________________________________________________________

const Dubai= {
    location: 'Dubai',
    minCust:0,
    maxCust:0,
    avgCookieSale:[] ,
    total:0,
    
    getMinCust: function(min,max){
      this.minCust = getRandomNumber(min,max);     
      },
    getMaxCust: function(min,max){
       this.maxCust = getRandomNumber(min,max);
       },
  
    
  
      getAvgCookieSale: function (){ 
        this.avgCookieSale.push(Math.floor(getRandomNumber(this.minCust,this.maxCust)*3.7));
  
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
        liEl.textContent = `${times[i]}: ${this.avgCookieSale[i]} cookies`;
        this.total+= this.avgCookieSale[i];
  
      
  
      }
      
      const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = ` Total: ${this.total}:cookies`;
    }
  
  };
      
  
  
  for(let i=0; i<times.length; i++){
    Dubai.getMinCust(11,15);
    Dubai.getMaxCust(16,38);
    Dubai.getAvgCookieSale();
  }
  console.log(Dubai);
  console.log(Dubai.render());
//_______________________________________________________________

const Paris= {
    location: 'Paris',
    minCust:0,
    maxCust:0,
    avgCookieSale:[] ,
    total:0,
    
    getMinCust: function(min,max){
      this.minCust = getRandomNumber(min,max);     
      },
    getMaxCust: function(min,max){
       this.maxCust = getRandomNumber(min,max);
       },
  
    
  
      getAvgCookieSale: function (){ 
        this.avgCookieSale.push(Math.floor(getRandomNumber(this.minCust,this.maxCust)*2.3));
  
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
        liEl.textContent = `${times[i]}: ${this.avgCookieSale[i]} cookies`;
        this.total+= this.avgCookieSale[i];
  
      
  
      }
      
      const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = ` Total: ${this.total}:cookies`;
    }
  
  };
      
  
  
  for(let i=0; i<times.length; i++){
    Paris.getMinCust(20,28);
    Paris.getMaxCust(29,38);
    Paris.getAvgCookieSale();
  }
  console.log(Paris);
  console.log(Paris.render());
  //_______________________________________________________

  const Lima= {
    location: 'Lima',
    minCust:0,
    maxCust:0,
    avgCookieSale:[] ,
    total:0,
    
    getMinCust: function(min,max){
      this.minCust = getRandomNumber(min,max);     
      },
    getMaxCust: function(min,max){
       this.maxCust = getRandomNumber(min,max);
       },
  
    
  
      getAvgCookieSale: function (){ 
        this.avgCookieSale.push(Math.floor(getRandomNumber(this.minCust,this.maxCust)*4.6));
  
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
        liEl.textContent = `${times[i]}: ${this.avgCookieSale[i]} cookies`;
        this.total+= this.avgCookieSale[i];
  
      
  
      }
      
      const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = ` Total: ${this.total}:cookies`;
    }
  
  };
      
  
  
  for(let i=0; i<times.length; i++){
    Lima.getMinCust(2,10);
    Lima.getMaxCust(11,16);
    Lima.getAvgCookieSale();
  }
  console.log(Lima);
  console.log(Lima.render());