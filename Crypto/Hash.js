const { createHash } = require("crypto");


lethash=(inp)=>{
    return createHash('sha256').update(inp).digest('hex')
}


let input = "Hellofkfkjhgdhkljdh;lfj;dlkjf;ldhkjhkljhfidxgkiugyoriuy      iuekjfbvmnbkhjcgbdjblkvulkgldh;lg        ";
let input2 = "Hellofkfkjhgdhkljdh;lfj;dlkjf;ldhkjhkljhfidxgkiugyoriuyiuekjfbvmnbkhjcgbdjblkvulkgldh;lg";
const hashed = lethash(input)
console.log("Input==>",input)
console.log("hashed==>",hashed)
console.log("input-Length==>",input.length)
console.log("hashed-Length==>",hashed.length)
console.log("hashed-match ==>",(lethash(input2) === hashed))