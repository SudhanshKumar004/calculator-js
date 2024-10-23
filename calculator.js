let store = ' ';
function cal(arg){
    store = store + arg;
    let selecttd = document.querySelector('#show');
    selecttd.innerHTML = store;
}

function calculate(){
    let selecttd = document.querySelector('#show');
    selecttd.innerHTML = eval(store); //eval will calculate if there are numbers and operators; 
    store = eval(store);
    store.toString(); 
}