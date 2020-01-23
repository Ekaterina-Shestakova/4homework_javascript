"use strict";

function getNumber(number){
    if(!parseInt(number) || number < 0 || number > 999){
        console.log();
        return{};
    }
    return {
        units: number % 10,
        hundreds: Math.floor(number / 100), 
        tens: Math.floor((number /10)%10),
        
       
          
    }
}
console.log(getNumber(452));