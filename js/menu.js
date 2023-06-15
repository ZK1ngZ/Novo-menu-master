

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};
setInterval( function atualizarPreco(){
    var preco = document.getElementById('preco');
    var qtd = document.getElementById('qtdn').value;
    preco.innerHTML = 'por R$'+ qtd*330.00 + ',00 Ou 6x de R$' + (qtd*330)/6 + ' sem juros'
}, 1000)
