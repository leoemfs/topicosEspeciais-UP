let myModule = {};
myModule.minhaVariavel = 132;
myModule.myFunction = function(){
    console.log('Acessou minha função');
}
myModule.soma = (v1,v2) => v1+v2;
module.exports = myModule;