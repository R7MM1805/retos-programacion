(() =>{
    const btnEvaluate = document.querySelector('#btnEvaluate');
    const txtWord1 = document.querySelector('#txtWord1');
    const txtWord2 = document.querySelector('#txtWord2');
    const divContent = document.querySelector('#divContent');

    btnEvaluate.addEventListener('click', () => {
        const validate = validateWords();
        validate === '' ? evaluateAnagram() : responseError(validate);
    });

    const validateWords = () => {
        let response = txtWord1.value.trim() === '' ? 'Se requiere la primera palabra' : '';
        return response === '' ? txtWord2.value.trim() === '' ? 'Se requiere la segunda palabra' : '' : response;
    }

    const evaluateAnagram = () => {
        const word1 = txtWord1.value.trim();
        const word2 = txtWord2.value.trim();
        let areEqual = false;
        const word1SplitSort = word1.replace(' ', '').split('').sort();
        const word2SplitSort = word2.replace(' ', '').split('').sort();
        if(word1SplitSort.length === word2SplitSort.length){
            areEqual = true;
            for (let index = 0; index < word2SplitSort.length; index++) {
                if(word1SplitSort[index] !== word2SplitSort[index]){
                    areEqual = false;
                    break;
                }
            }
        }
        divContent.innerText = `Las palabras '${word1.toUpperCase()}' y '${word2.toUpperCase()}' ${areEqual ? 'son' : 'no son'} anagramas`;
        console.log(areEqual);
        return areEqual;
    }
    const responseError = (validate) => {
        console.error(`Error - ${validate}`);
        divContent.innerText = validate;
    }
})();