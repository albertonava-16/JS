var op1 = "Piedra";
 var op2 = "Papel";
 var op3 = "Tijera";

 var resultado = function(player1, player2)
 {
     if(player1 === player2)
      console.log ("Esto es un empate")

      else if(player1 != player2)
     {
         if(player1 === op1 && player2 === op3){
             console.log(`Ganó el player1 ${player1} rompe ${player2}`)
         }else if(player1 === op2 && player2 === op1){
             console.log(`Ganó el player1 con ${player1}`)
         }else if(player1 === op3 && player2 === op2){
             console.log(`Ganó el player1 con ${player1}`)
         }     
         else{console.log(`Gano el player2 con ${player2}`)
        }    
     }   
     
 };

 resultado (op1,op3)


