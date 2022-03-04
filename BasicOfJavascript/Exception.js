class CustomException extends Error {
    constructor(message){
        super(message);
        this.name = "CustomException";
    }
}
suhas = (a,b) =>{
    if (a === b) {
        let c = a + b;
        console.log(c);
    } else {
        throw new CustomException ("Invalid input");
    }
}
try {
    console.log("Inside try Block");
    suhas(5,"5");
} catch (error) {
    console.log("Error" ,error);
    console.log(error.name);
    console.log(error.message);
    //console.log(error);
    console.log("Inside catch block");
}finally {
    console.log("Finally Block");
}