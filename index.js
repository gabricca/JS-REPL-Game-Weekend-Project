let  readlineSync  =  require('readline-sync');
console.log("It's the 90th minute of the 2026 World Cup Final.\
\nThe score is tied and you've got the ball in the last third of the pitch.");
console.log("\nDo you have what it takes to be the hero?\n");
let invalidInput = true;
while (invalidInput){
    let option = readlineSync.question("A\) Dribble past my defender.\
    \nB\) Pass to a better positioned teammate.\nC\) Attempt a shot on goal.\n\n");
    switch(option){
        case "a":
        case "A":
            invalidInput = false;
            console.log("\nGreat move! You have your defender beat, what next?\n");
            let invalidInputA = true;
            while (invalidInputA){    
                let optionA = readlineSync.question("A\) Attempt to beat the next defender with speed.\
                \nB\) Assist your striker waiting for the ball inside the box.\
                \nC\) Try a long-range effort.\n\n");
                switch(optionA){
                    case "a":
                    case "A":
                        invalidInputA = false;
                        console.log("\nThe defender is quicker than you.\
                        \nYou lose the ball and get hit on the counter.\
                        \nOne-nothing them. The final is lost and it's your fault.\n");
                        break;
                    case "b":
                    case "B":
                        invalidInputA = false;
                        console.log("\nYour teammate hits the crossbar.\
                        \nOn the next play, they score a header off a free kick.\
                        \nYou lose the final and the press criticize your decision making.\n");
                        break;
                    case "c":
                    case "C":
                        invalidInputA = false;
                        console.log("\nYou're too far away from the goal.\
                        \nYour shot is easily saved by the goalkeeper.\
                        \nThe manager questions your judgment and subs you off.\
                        \nYou watch from the bench as your team lose the game on PKs.\n");
                        break;
                    default:
                        console.log("\nInvalid selection: Try again.\n");
                        break;
                }
            }
            break;
        case "b":
        case "B":
            invalidInput = false;
            console.log("\nNice pass! Your teammate is in acres of space, what next?\n");
            let invalidInputB = true;
            while (invalidInputB){    
                let optionB = readlineSync.question("A\) Shout at him to try a shot on goal.\
                \nB\) Ask for a pass back to your position.\
                \nC\) Ask for a through ball into space.\n\n");
                switch(optionB){
                    case "a":
                    case "A":
                        invalidInputB = false;
                        console.log("\nYour teammate doesn't have the best shot.\
                        \nThe opposition recover and break back quickly.\
                        \nYou try to get back in defense but it's too late.\
                        \nThey score and you lose the final.\n");
                        break;
                    case "b":
                    case "B":
                        invalidInputB = false;
                        console.log("\nThe pass is intercepted by your marker.\
                        \nHe plays a great long ball into their striker.\
                        \nThe striker makes no mistake as he slots it past your keeper. Game Over.\n");
                        break;
                    case "c":
                    case "C":
                        invalidInputB = false;
                        console.log("\nIt's a brilliant pass and you're through on goal.\
                        \nWith only the keeper to beat, you try a low shot to the keeper's right.\
                        \nIt's in the back of the net as the ref blows his whistle for full-time.\
                        \n\nYou are a world champion and a national hero. Great job!\n");
                        break;
                    default:
                        console.log("\nInvalid selection: Try again.\n");
                        break;
                }
            
            }
            break;
        case "c":
        case "C":
            invalidInput = false;
            console.log("\nYou create a bit of space for the shot, what next?\n");
            let invalidInputC = true;
            while (invalidInputC){    
                let optionC = readlineSync.question("A\) Attempt a low, driven shot.\
                \nB\) Go for a soft, placed shot.\
                \nC\) Try to lob the keeper over his head.\n\n");
                switch(optionC){
                    case "a":
                    case "A":
                        invalidInputC = false;
                        console.log("\nYour shot hits the nearest defender's leg.\
                        \nIt bounces back to their striker who is unmarked.\
                        \nHe finishes nicely past your keeper.\
                        \nYour mistake cost your team the final.\n");
                        break;
                    case "b":
                    case "B":
                        invalidInputC = false;
                        console.log("\nYou're too far away. The shot is easily saved.\
                        \nYour wasted opportunity leads to a counterattack.\
                        \nThey score on the last play of the match.\
                        \nYou've brought great shame to your family.\n");
                        break;
                    case "c":
                    case "C":
                        invalidInputC = false;
                        console.log("\nThe shot is too high and it sails over the crossbar.\
                        \nFull-time ends in a draw and it's on to PKs.\
                        \nAfter that horrendous effort, your coach doesn't trust you to shoot one.\
                        \nYou watch as your team lose the final.\n");
                        break;
                    default:
                        console.log("\nInvalid selection: Try again.\n");
                        break;
                }        

            }
            break;
        default:
            console.log("\nInvalid selection: Try again.\n");
            break;            
        }
    }