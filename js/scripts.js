function trocarCorFundoPainel(){
    const escolherCor = document.getElementById("escolher_cor").value;
    const alterarCor = document.getElementById("trocar_borda");
    alterarCor.style.background = escolherCor;
}