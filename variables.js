const accountId = 144553
let accountEmail = "umarameer@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

/*Prefer not to use var 
because of issue in block scope and functional scope*/

accountEmail = "hc@hc.com"
accountPassword = "212121212"
accountCity = "delhi"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])