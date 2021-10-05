// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputGeog = e.target.querySelector('#geog');
    const inputMat = e.target.querySelector('#mat');
    const inputPort = e.target.querySelector('#port');
    const inputHist = e.target.querySelector('#hist');

    const geog = String(inputGeog.value);
    const mat = String(inputMat.value); 
    const port = String(inputPort.value);
    const hist = String(inputHist.value);

   /*  const geog = Number(inputGeog.value);
    const mat = Number(inputMat.value); 
    const port = Number(inputPort.value);
    const hist = Number(inputHist.value); */
})


    


        

   /* Function mediaCadastro (media) {
    
        const nivel = ['Aluno Aprovado', 'Aluno em Recuperação', 'Aluno Reprovado'];

            if (media >= 6.0) return nivel[3];
            if (media >= 5.0 || media <= 5,9) return nivel[2];
            if (media < 5.0) return nivel[1];
            



    }

*/