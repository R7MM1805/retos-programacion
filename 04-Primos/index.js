(() =>{
    
    const evaluatePrimo = (number) =>{
        if(number === 1){
            return false;
        }
        for (let index = 2; index < number; index++) {
            if(number % index === 0){
                return false;
            }
        }
        return true;
    }

    const dvContent = document.querySelector('#dvContent');

    for (let index = 1; index < 100; index++) {
        if(evaluatePrimo(index)){
            dvContent.innerHTML += `<p>${index} es primo</p>`;
            console.log(`${index} es primo`);
        }
    }
})();