const oprations=document.querySelectorAll("[b-operation]");
const previous=document.querySelector("[previus_data]");
const current=document.querySelector("[current_data]");
const equal=document.querySelector("[b-equals]");
const clear=document.querySelector("[b-clear]");
const del=document.querySelector("[b-delete]");
const numbers=document.querySelectorAll("[b-number]");




class Calculator{
    
   constructor(previous,current){
         this.previous=previous;
         this.current=current;
         this.clear();
    }

    clear(){
        this.current_data="";
        this.previous_data="";
        this.operation="";
        this.result="";
    }

    appendNumber(number){
        if(number === '.' && this.current_data.includes(".")) return;

        this.current_data+=number.toString();
    }


    Display(){
  this.current.innerText=this.current_data;
  this.previous.innerText=this.previous_data;
    }

   del(){
    this.current_data=this.current_data.slice(0,-1);


   }
    

   Operation(op){
    if(this.previous_data===''){
        this.previous_data=this.current_data+op;

        this.current_data='';
        this.operation=op;
        this.Display();
        
       
    }
    else{
        this.compute();

        this.Display();
    }
    

    
      
   }

// compute

   compute(){
    let result;
    const prev=parseFloat(this.previous_data);
    const curr=parseFloat(this.current_data);
    if(isNaN(prev) || isNaN(curr)) return;
    switch(this.operation){
        case '+':
            result=prev+curr;
            break;
        case '-':
            result=prev-curr;
            break;
        case '*':
            result=prev*curr;
            break;
        case '%':
            result=prev/curr;
            break;
        default:
            return;

    }
   this.result=result;
   
    this.current_data=result;
    this.previous_data='';

   }
// equal
   equals(){
        if(this.current_data==='' || this.previous_data==='') return;

        this.compute();
        this.Display();
    }


};







const calculator=new Calculator(previous,current);



numbers.forEach(button=>{
    button.addEventListener("click",()=>{
        calculator.appendNumber(button.innerText);
        calculator.Display();
    })
});

clear.addEventListener("click",()=>{
    calculator.clear();
    calculator.Display();

}
)

del.addEventListener("click",()=>{
calculator.del();

calculator.Display();
});





oprations.forEach(button=>{
    button.addEventListener("click",()=>{
        calculator.Operation(button.innerText);
        calculator.Display();
    })
});


equal.addEventListener("click",()=>{
    calculator.equals();
    calculator.Display();
}
);


