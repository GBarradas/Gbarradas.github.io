let events=[]
let head=['Nome','Data','Hora','Faltam','Duração','Descrição']
dayName = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
now = new Date
function addEvent(name,data, hora, dur, des ) {
    let event={
        nome: name,
        data: new Date(data),
        hora: hora,
        dura: dur,
        descricao: des,
        id:data+"|"+hora
        
    }
    events.push(event);
}
function relogio(){
    var data=new Date();
    var dia     = data.getDate();           // 1-31
    if(dia<10) dia= "0"+dia;
    var dia_sem = dayName[data.getDay()];            // 0-6 (zero=domingo)
    var mes     = monName[data.getMonth()];          // 0-11 (zero=janeiro)
    var ano2    = data.getYear();           // 2 dígitos
    var ano4    = data.getFullYear();       // 4 dígitos
    var hor=data.getHours();
    var min=data.getMinutes();
    var seg=data.getSeconds();
    
    if(hor < 10){
        hor="0"+hor;
    }
    if(min < 10){
        min="0"+min;
    }
    if(seg < 10){
        seg="0"+seg;
    }
    
    var horas=hor + ":" + min + ":" + seg;
    
    document.getElementById("nowHours").value = dia_sem+ " | "+`${dia} / ${mes} / ${ano4}` +" | "+hor + ":" + min + ":" + seg;
}

var timer=setInterval(relogio,1000);
function ordenar(){

}
console.log(events);
function printTable(){
    events.sort(compare);
    console.log(events);
    let div =document.getElementById("table")
    let table=document.createElement("table")
    // thead
    let thead=document.createElement("thead")
    let tr=document.createElement("tr")
    for(a of head){
        let th =document.createElement("th")
        th.textContent=a
        tr.appendChild(th)
        
    }
    thead.appendChild(tr)
    //tbody
    let tbody = document.createElement("tbody")
    for(i of events){
        let tr=document.createElement("tr")
        
        let nome=document.createElement("td")
        nome.textContent=i.nome
        tr.appendChild(nome)
        let data=document.createElement("td")
        data.textContent=i.data
        tr.appendChild(data)
        let hora=document.createElement("td")
        hora.textContent=i.hora
        tr.appendChild(hora)
        let falta=document.createElement("td")
        falta.id=i.id
        tr.appendChild(falta)
        let dura=document.createElement("td")
        dura.textContent=i.dura
        tr.appendChild(dura)
        let desc=document.createElement("td")
        desc.textContent=i.descricao
        tr.appendChild(desc)

        console.log(i.id)
        tbody.appendChild(tr)
    }
    //finalize table
    table.appendChild(thead)
    table.appendChild(tbody)
    div.appendChild(table)
}
relogio();

addEvent("Exame de Condução","08-04-2022","00:00","01h","Rodoviaria do Alentejo")
addEvent("Frequencia SO","07-03-2022","16:00","1h","CLAV-130")
printTable();
for(a of events){
    calcfaltam(a)
}
function compare(a,b){
    
        return a.id>b.id;
   
}
function calcfaltam(x){

    
}