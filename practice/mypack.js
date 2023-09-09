exports.time = ()=>{
    return Date();
}
exports.name= (a,b)=>{
    a=a,b=b;
    c=a+b;
    return c;
}
exports.login = (username,password)=>{
    if((username=="admin")&& (password=="admin")){
        return "Success!"
    }
    else{
        return "Invalid! Try again.."
    }
}