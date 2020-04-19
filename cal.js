var cur='0';
var entered=document.getElementsByTagName('button');
var result=document.getElementById('display');
var sym=document.getElementById('symbol');
var operand1=0;
var operand2=null;
var operator=null;


for(var i=0;i<entered.length;i++){
entered[i].addEventListener('click',function(){

    var value=this.getAttribute("data-value");
    if(value=='+' || value=='-'|| value=='/' || value=='*' || value=='%')
    {
        operator=value;
        operand1=parseFloat(result.textContent);
        sym.innerText=operand1 + " " + operator;
        
    }

    else if(value=='C'){
         operand1=0;
          operand2=null;
        operator=null;
        result.innerText="0";
        sym.innerText='';


    }

    else if(value=='R')
    {
        var str=result.innerText;
       
        var newStr = str.slice(0, -1);
        if(newStr.length==0)
        newStr='0';
        result.innerText=newStr;
        sym.innerText='';
    }

    else if(value=='frac')
    {
        operand2=parseFloat(result.textContent);
        var ans=eval(1 + "" + '/' + " " + operand2);
        if(operand2=="0"){
            result.textContent="Error";
        }
        else
        result.textContent=ans;
    }

    else if(value=='square')
    {
        var x=parseFloat(result.textContent);
        var ans=eval(x + "" + '*' + " " + x);
        result.textContent=ans;


    }

    else if(value=='root')
    {
        var x=parseFloat(result.textContent);
       var y=Math.sqrt(x);
       result.textContent=y;


    }

    else if(value=='sign')
    {
        var x=parseFloat(result.textContent);
        
        result.textContent=-x;


    }


    else if(value=='=')
    {
        operand2=parseFloat(result.textContent);
        var ans=eval(operand1 + "" + operator + " " + operand2);
        if(operand2=="0" && operator=='/'){
            result.textContent="Error";
        }
        else
        result.textContent=ans;
        
        sym.innerText=operand1 + " " + operator + " " + operand2 + "=" + " " + ans ;
        // sym.innerText='=';
        operator=null;
        operand1=null;
        operand2=null;
    }

    else{

        if(operator!=null && parseFloat(result.innerText)==operand1)
        result.innerText="0";

        if(result.innerText!='0')
        {
            result.innerText+=value;
        }

        else{
            result.innerText=value;
        }

    }


});

}