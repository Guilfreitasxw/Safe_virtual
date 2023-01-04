function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;

    ConvidadosCristian = ['amanda', 'rafael']

    if (ConvidadosCristian.includes(NomeConvidado)) {
        alert("Voce pode entrar")
        
    } else {
       alert("Voce nao pode entrar")

    }
}