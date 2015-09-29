/**
 * Created by session2 on 9/28/15.
 */
//I added a confirm feature to the repo along with a prompt asking if they wanted to slay the dragon or not.\\
confirm("Are you ready to play?");
var question = prompt("You are a knight ready for battle. Do you want to slay the dragon?");
if(question = "yes") {console.log("That's great!");}
else {console.log("Well bye then.");}
// I also changed the numbers in the code from the 2 to 12 and the 2 + 2 to 8 + 12 along with any other numbers in the code\\
var slaying = true;
var youHit = Math.floor(Math.random() * 12);
var damageThisRound = Math.floor(Math.random() * 8 + 12);
var totalDamage = 8;

while (slaying) {
    if (youHit) {
        console.log("You hit the dragon and did " + damageThisRound + " damage!");
        totalDamage += damageThisRound;

        if (totalDamage >= 30) {
            console.log("You did it! You slew the dragon!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 12);
        }
    } else {
        console.log("Well i guess you suck at this one too? x)");
        slaying = false;
    }
}
// i added a final if else statement to determine if the player won or lost the game\\
if(totalDamage >= 30)
{prompt("You won the game! yeah");}
else{prompt("You lost this round try again.")}