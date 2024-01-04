(() => {
    const dvContent = document.querySelector('#dvContent');
    let n1 = 0;
    let n2 = 1;
    let fibonacci;
    for (let index = 0; index < 50; index++) {
        dvContent.innerHTML += `<p>${n1}</p>`;
        console.log(`Position: ${index} : ${n1}`);
        fibonacci = n1 + n2;
        n1 = n2;
        n2 = fibonacci;
    }
})();