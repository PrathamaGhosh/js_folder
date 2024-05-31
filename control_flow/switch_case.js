console.log("2nd part of Control flow in js(SwitchCase)")


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
 //if break is not there then once it's matched case it will print all cases right after the matched cased except default case
    default:
        console.log("default case match");
        break;
}