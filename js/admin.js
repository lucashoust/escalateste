function carregar(){
document.querySelectorAll("select").forEach(sel=>{
funcionarios.forEach(f=>{
let o=document.createElement("option");
o.value=f.nome;o.textContent=f.nome;sel.appendChild(o);
});
});
}
function cadastrarFerias(){alert("Férias registradas");}
carregar();