

function first(){
  let resultDiv = document.getElementById("result");
let str = ' ' + '\n';
for(let i = 1; i <= 6; i++)
{
  for(let j = 1; j <= i; j++)
  {
      str +='*' ;       
  }
  str +='\n';
}
resultDiv.innerHTML = str;
}
first();

// *********************************************************************



function ReverseFirst(){
let resultDivv = document.getElementById("resultt");
let str = ' ' + '\n';
for(let i = 1; i <= 6; i++)
{
  for(let j = 6; j > i; j--)
  {
      str += ' ';
  
  }
  for(let k = 1; k <= i; k++){
      str +='*' ; 
  }
  str +='\n';
}
resultDivv.innerHTML = str;
}
ReverseFirst();

// *********************************************************************



function Third(){
  let resultDivvv = document.getElementById("resulttt");
let str = ' ' + '\n';
for(let i = 1; i <= 6; i++)
{
  for(let j = 6; j >= i; j--)
  {
      str +='*' ;       
  }
  str +='\n';
}
resultDivvv.innerHTML = str;
}
Third();
// *********************************************************************

function ReverseThird() {
  let resultDivvvv = document.getElementById("resultttt");
  let str = ' ' + '\n';
  for(let i = 1; i <= 6; i++)
  {
      for(let j = 6; j >= i; j--)
      {
          str += ' ';
      
      }
      for(let k = 1; k <= i; k++){
          str += '*'; 
      }
      str +='\n';
   }



   resultDivvvv.innerHTML = str;
}
ReverseThird();



