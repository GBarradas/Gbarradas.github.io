const rooms = {
    Individual: 1,
    Duplo: 2,
    Casal: 4,
    Triplo:3,
}


let  n1  =  { class:"", nome: 'Maria Amélia Rosa' }
let  n2  =  { class:"", nome: "Maria Margarida Rosa" }
let  n3  =  { class:"", nome: "Antônio Miguel Rosa" }
let  n4  =  { class:"", nome: "Bento Antônio Gonçalves" }
let  n5  =  { class:"", nome: "Firminio Inácio" }
let  n6  =  { class:"", nome: "Maria Afonso " }
let  n7  =  { class:"", nome: "Lucia Miguel" }
let  n8  =  { class:"", nome: "Maria Aldina Neves" }
let  n9  =  { class:"", nome: "Simão Gonçalves" }
let  n10 =  { class:"", nome: "Jose Guerreiro" }
let  n11 =  { class:"", nome: "Natalia Fernandes" }
let  n12 =  { class:"", nome: "Nelia Pedro" }
let  n13 =  { class:"", nome: "Manuel Pedro" }
let  n14 =  { class:"", nome: "Maria Jose Rosa" }
let  n15 =  { class:"", nome: "Manuel Custódio" }
let  n16 =  { class:"", nome: "Casimiro Correia" }
let  n17 =  { class:"", nome: "Margarida Rodrigues" }
let  n18 =  { class:"", nome: "Beatriz Rodrigues" }
let  n19 =  { class:"", nome: "Pedro Rodrigues" }
let  n20 =  { class:"", nome: "Vitalino Fernandes" }
let  n21 =  { class:"", nome: "Martinha Fernandes" }
let  n22 =  { class:"", nome: "Manuel Pereira" }
let  n23 =  { class:"", nome: "Maria Manuela Pereira" }
let  n24 =  { class:"", nome: "Carina Aguiar" }
let  n25 =  { class:"", nome: "Eduarda Aguiar" }
let  n26 =  { class:"", nome: "Aprgio Aguiar" }
let  n27 =  { class:"", nome: "Cesaltina Rosa" }
let  n28 =  { class:"", nome: "Antônio Jesus" }
let  n29 =  { class:"", nome: "Maria João Jesus" }
let  n30 =  { class:"", nome: "Jose Antônio" }
let  n31 =  { class:"", nome: "Jose Gil" }
let  n32 =  { class:"", nome: "Nascimento Gil" }
let  n33 =  { class:"", nome: "Antônio Pereira" }
let  n34 =  { class:"", nome: "Bernardino João" }
let  n35 =  { class:"", nome: "Cristina Colaço" }
let  n36 =  { class:"", nome: "Alvaro Mestre" }
let  n37 =  { class:"", nome: "Manuel Jose" }
let  n38 =  { class:"", nome: "Assunção Sol" }
let  n39 =  { class:"", nome: "Jose Salgueiro" }
let  n40 =  { class:"", nome: "Zezinha Salgueiro" }
let  n41 =  { class:"", nome: "Maria Valente" }
let  n42 =  { class:"", nome: "Sargio Quinas" }
let  n43 =  { class:"", nome: "Maria Anjos" }
let  n44 =  { class:"", nome: "Conceição Barbara" }
let  n45 =  { class:"", nome: "Daniela Reis" }
let  n46 =  { class:"", nome: "Fabio Pereira" }
let  n47 =  { class:"", nome: "Ana Rosa" }
let  n48 =  { class:"", nome: "Rui Neves" }
let  n49 =  { class:"moto", nome: "Ricardo Barradas" }
let  n50 =  { class:"", nome: "Leonor Jesus" }
let  n51 =  { class:"", nome: "Maria Gonçalves" }
let  n52 =  { class:"", nome: "Maria Fatima" }
let  n53 =  { class:"", nome: "Guia" }
let  m1  =  { class:"moto", nome: "Motorista 1" } 
let  m2  =  { class:"moto", nome: "Motorista 2" }

let Names = [n1, n2 ,n3 ,n4 ,n5 ,n6 ,n7 ,n8 ,n9 ,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20,n21,n22,n23,n24,n25,n26,n27,n28,n29,n30,n31,n32,n33,n34,n35,n36,n37,n38,n39,n40,n41,n42,n43,n44,n45,n46,n47,n48,n49,n50,n51,n52,n53,m1,m2]
const q1 ={elemnts: [n5, n6], type: rooms.Casal }
const q2 ={elemnts: [n34], type: rooms.Individual }
const q3 ={elemnts: [n10, n11], type: rooms.Casal }
const q4 ={elemnts: [n14, n15], type: rooms.Casal }
const q5 ={elemnts: [n12, n13], type: rooms.Casal }
const q6 ={elemnts: [n22, n23], type: rooms.Casal }
const q7 ={elemnts: [n20, n21], type: rooms.Casal }
const q8 ={elemnts: [n18, n19], type: rooms.Casal}
const q9 ={elemnts: [n16, n17], type: rooms.Casal }
const q10={elemnts: [n24, n44], type: rooms.Duplo }
const q11={elemnts: [n37, n38], type: rooms.Casal }
const q12={elemnts: [n7,n8,n9], type: rooms.Triplo }
const q13={elemnts: [n25, n26], type: rooms.Casal }
const q14={elemnts: [n27, n52,n51], type: rooms.Triplo }
const q15={elemnts: [n28,n29], type: rooms.Casal }
const q16={elemnts: [n30,n33], type: rooms.Duplo }
const q17={elemnts: [n31, n32], type: rooms.Casal }
const q18={elemnts: [n35, n36], type: rooms.Casal }
const q19={elemnts: [n39, n40], type: rooms.Casal }
const q20={elemnts: [n41, n50], type: rooms.Duplo }
const q21={elemnts: [n42, n43], type: rooms.Casal }
const q22={elemnts: [n45,n46], type: rooms.Casal }
const q23={elemnts: [n47, n48], type: rooms.Casal }
const q24={elemnts: [n49], type: rooms.Individual }
const q25={elemnts: [n1,n3], type: rooms.Casal }
const q26={elemnts: [n2,n4], type: rooms.Duplo }
const q27={elemnts: [n53], type: rooms.Individual }
const q28={elemnts: [m1], type: rooms.Individual }
const q29={elemnts: [m2], type: rooms.Individual }
var individual = 0;
var duplo = 0;
var casal = 0;
var triplo = 0;
var total = 0;
var Quartos = [q1 ,q2 ,q3 ,q4 ,q5 ,q6 ,q7 ,q8 ,q9 ,q10,q11,q12,q13,q14,q15,q16
    ,q17,
    q18,
    q19,
    q20,
    q21,q22,q23,q24,q25,q26,q27,q28,q29
]
function main(){
    //console.log(Names)
    let or = document.getElementById("names")
    for ( n of Names){
        //console.log(n.nome)
        let li = document.createElement("li");
        li.textContent=n.nome;
        li.classList=n.class
        or.appendChild(li)
    }
    let ol = document.getElementById("quartos")
    //console.log(Quartos)
    index= 0;
    for(q of Quartos){
        index++
        let text= ""
        let li = document.createElement("tr"); 
        let Num = document.createElement("td")
        Num.textContent = index
        li.appendChild(Num)
        let TypeTable = document.createElement("td")
        switch(q.type){
            case 1:
                individual++;
                TypeTable.textContent= "Individual"
                break;
            case 2:
                duplo++;
                TypeTable.textContent= "Duplo"
                break;
            case 3:
                triplo++;
                TypeTable.textContent= "Triplo"
                break;
            case 4:
                casal++;
                TypeTable.textContent= "Casal"
                break;
            default:
                break;
                }
        //console.log(q)
        let NamesTable =document.createElement("td");
        for(let i in q.elemnts){
            total++;
            text = text+" "+q.elemnts[i].nome+",";
        }
        text = text.substring(0,text.length-1)+";"
        NamesTable.textContent = text;
        li.appendChild(NamesTable)
        li.appendChild(TypeTable)
        //li.textContent=text;
        ol.appendChild(li)
    }
    let q1 = document.getElementById("q1")
    q1.textContent = individual;
    let q2 = document.getElementById("q2")
    q2.textContent = duplo;
    let q4 = document.getElementById("q4")
    q4.textContent = casal;
    let q3 = document.getElementById("q3")
    q3.textContent = triplo
    let t = document.getElementById("t")
    t.textContent = total
}
