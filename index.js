let newValue ='';
let operationValue=0;
let operators='';
var parsedval;

function valueEntered(val){
//console.log(document.querySelectorAll(".values")[val].innerHTML);

let enteredValue=document.querySelectorAll(".values")[val].innerHTML;
document.querySelector("input").value+=enteredValue;
enteredValue = enteredValue.toString();
newValue += enteredValue;
//console.log(typeof(newValue));
}



document.querySelector("input").addEventListener('keypress', logkey);

function logkey(e){
    if(e.charCode<97){
    //console.log(e.key);
    newValue += e.key;
    //console.log(newValue);
}
};


function operations(val){
//console.log(document.querySelectorAll(".values")[val].innerHTML);
    let aritnmatics=document.querySelectorAll(".values")[val].innerHTML;
   // console.log(aritnmatics);
  // newValue=parseInt(newValue);
   //console.log(typeof(newValue));
   
   
   switch(aritnmatics){
        case('+'):
         secondswitch(operators);
         document.getElementById("result").innerHTML=(operationValue.toFixed(2));
         operators=aritnmatics;
            break;

        case('-'):
        secondswitch(operators);
        document.getElementById("result").innerHTML=(operationValue.toFixed(2));
        operators=aritnmatics;
            break;

        case('*'):
        secondswitch(operators);
        document.getElementById("result").innerHTML=(operationValue.toFixed(2));
         operators=aritnmatics;
            break; 

        case('/'):
        secondswitch(operators);
        document.getElementById("result").innerHTML=(operationValue.toFixed(2));
        operators=aritnmatics;
            break;

        case('^'):
        secondswitch(operators);
        document.getElementById("result").innerHTML=(operationValue.toFixed(2));
        operators=aritnmatics;
            break;

               
        case('='):
            //console.log(aritnmatics);
            secondswitch(operators);
            document.getElementById("result").innerHTML=(operationValue.toFixed(2));
            operationValue=0;
            setTimeout(() => {
                document.getElementById("result").innerHTML='';
        }, 3000);
       
             operationValue=0;
            operators='';
            newValue ='';
            
          break;  
               
        
  
        default:
            alert("wrong operations");    

    }
}

function secondswitch(operators){
    switch(operators){
        case (''):
            parsedval= parseInt(newValue);
            operationValue =  parsedval;
            newValue ='';
            document.querySelector("input").value='';
            break;
        case('+'):
            //console.log(aritnmatics);
             parsedval= parseInt(newValue);
            operationValue += parsedval;
            newValue ='';
            document.querySelector("input").value='';
            //console.log(newValue);
            console.log(operationValue);
            operators="";
           //console.log(operators);
            break;
    
        case('-'):
         parsedval= parseInt(newValue);
             operationValue==0?operationValue =  parsedval:operationValue -=  parsedval;
            newValue ='';
            document.querySelector("input").value='';
            console.log(operationValue);
            operators="";
            break;
    
        case('*'):
         parsedval= parseInt(newValue);
         operationValue==0?operationValue =  parsedval:operationValue *=  parsedval;
            newValue ='';
            document.querySelector("input").value='';
            console.log(operationValue);
            operators="";
            break; 
    
        case('/'):
          parsedval= parseInt(newValue);
          operationValue==0?operationValue =  parsedval:operationValue /=  parsedval;
            newValue ='';
            document.querySelector("input").value='';
            console.log(operationValue);
            operators="";
                break;
    
        case('^'):
            parsedval= parseInt(newValue);
            operationValue==0?operationValue =  parsedval:operationValue **=  parsedval;
            newValue ='';
            document.querySelector("input").value='';
            console.log(operationValue);
            operators="";
            break;
     
            
        default:
            alert("wrong operations");  
            break; 
    }  
}