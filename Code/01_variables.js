//Let, const and var ki kahani

const accId = 34723
let accEmail = "ansari@gmail.com"
var accPassword = "ansari#@"        //out of use now
accCity = "Bareilly"        //js offers flexibility to declare a variable without giving it's type. But not 
                            //a healthy practice. 

                    
//changing the values:
// accId = 34853 //This will through an error becuase accId is defined as constant.
accEmail = "sohail@gmail.com"
accPassword = "sohail@#"
accCity = "Delhi"

console.table([accId, accEmail, accPassword, accCity])

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/