msgg=document.querySelector("#msg");
let boxes = document.querySelectorAll(".box");
let resetgame = document.querySelector("#resetgame");
let turno = true;

const winner =
[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

boxes.forEach((box)=>
{
box.addEventListener("click" , ()=>
{
console.log("was clicked");
if(turno)
{

    turno=false;
    box.innerHTML="x";


}
else
{
  turno=true;
  box.innerHTML="o";
}
box.disabled=true;
checkwiner();
});
});


const checkwiner=()=>
{
for(let patern of winner)
  {
    let pos1= boxes[patern[0]].innerHTML;
    let pos2= boxes[patern[1]].innerHTML;
    let pos3= boxes[patern[2]].innerHTML;
  
  if(pos1 !="" && pos2 !="" && pos3 !="")
    {
      if(pos1 === pos2 && pos2 === pos3)
        {
          console.log("was cliked" , pos1);
          msgg.innerHTML=`winner is ${pos1}`;
         dis();
        }
    }
  }
}

const dis =()=>
{
  for(let box of boxes)
    {
      box.disabled=true;
    }

};
const anable = ()=>
  {
    for(let box of boxes)
      {
        box.disabled=false;
        box.innerHTML="";
      }
  }
  const res = () =>
                {
                  turno=true;
                  anable();
                  msgg.innerHTML="";
    
                };
     resetgame.addEventListener("click" , res);
    
