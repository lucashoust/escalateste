const inicio=new Date("2026-01-20");
const fim=new Date("2026-02-19");
const tabela=document.getElementById("tabela");
let html="<tr><th>Nome</th>";
for(let d=new Date(inicio);d<=fim;d.setDate(d.getDate()+1)){
html+=`<th>${d.getDate()}/${d.getMonth()+1}</th>`;
}
html+="</tr>";
funcionarios.forEach(f=>{
html+=`<tr><td>${f.nome}</td>`;
for(let d=new Date(inicio);d<=fim;d.setDate(d.getDate()+1)){
let data=new Date(d);
html+=estaDeFerias(f,data)?'<td class="ferias">X</td>':'<td></td>';
}
html+="</tr>";
});
tabela.innerHTML=html;