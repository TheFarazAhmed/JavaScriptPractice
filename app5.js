// document.writeln("<br> Head / Tail");

// var ht = Math.random() * 2;

// ht = Math.floor(ht);

// var choice = prompt("Enter your choice");
// choice=choice.toUpperCase();

// var t;

// if(ht === 1)
//     t = "HEAD";
// else
//     t = "TAIL";

// if( t === choice)
// document.writeln("<br> You Won The TOSS");
// else
// document.writeln("<br> You Loss The TOSS");

c=+prompt("enter your Tukka between 1 and 5");
var valueToCheck = Math.random() * 5;
valueToCheck = Math.ceil(valueToCheck);
var chances=1;

while(c>0 && chances<3)
{
    if(valueToCheck === c)
        {
            document.writeln("<br> Tukka Lag Gaya Musalmaano");
            break;
        }
    else
    {
        chances = chances + 1;
    c=+prompt("enter your Tukka");
    }
}

if(chances>=3)
    document.writeln("<br> You Availed Your Maximum Chances");
