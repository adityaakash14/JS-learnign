const accountId = 144553
let accountEmail = "adityaakash1499@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword ="21212121"
accountCity = "delhi"

console.log(accountId);

/*

Prefer not to use var
beause of issue in bloack scope and functional scope

*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
