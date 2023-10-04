// Immediately invoked funtion expression (IFEE)
 
(function home(){
    console.log("Hi welcome to my home");
})();

( (name) =>{
    console.log(`Hi Welcome to my home , Who gave you this address? ${name}`);
} )("Ansh")
