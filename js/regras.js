function estaDeFerias(func,data){
return func.ferias.some(f=>data>=new Date(f.inicio)&&data<=new Date(f.fim));
}