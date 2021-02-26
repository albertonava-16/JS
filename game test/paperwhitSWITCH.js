var rock = "op1";
var paper = "op2";
var scissors = "op3";

function game (user1, user2) {
    
    switch (true) {
        case (user1 == rock && user2 == scissors):
            console.log('Win to user1')
            break;
        case (user1 == paper && user2 == rock):
            console.log('Win to user1')
            break;
        case (user1 == scissors && user2 == paper):
            console.log('Win to user1')
            break;
        case (user1 === user2):
            console.log('Draw')
            break;
        default:
            console.log('Win to user2')
    }
}

game(scissors ,paper);








