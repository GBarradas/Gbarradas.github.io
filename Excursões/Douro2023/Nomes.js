const rooms = {
    Individual: 1,
    Duplo: 2,
    Casal: 4,
    Triplo:3,
}


let  n1  =  { class:"", nome: "Manuela Viegas"}
let  n2  =  { class:"", nome: "Rita Viegas"}
let  n3  =  { class:"", nome: "Carlos Candeias"}
let  n4  =  { class:"", nome: "Fatima Candeias"}
let  n5  =  { class:"", nome: "Luis Bonança"}
let  n6  =  { class:"", nome: "Celia Bonança"}
let  n7  =  { class:"", nome: "Rosario Pulido"}
let  n8  =  { class:"", nome: "Maria José Guerreiro"}
let  n9  =  { class:"", nome: "Maria Valente"}
let  n10 =  { class:"", nome: "Leonor Jesus"}
let  n11 =  { class:"", nome: "Maria José"}
let  n12 =  { class:"", nome: "Daniel Humberto"}
let  n13 =  { class:"", nome: "Paula Girão"}
let  n14 =  { class:"", nome: "Angela Martins"}
let  n15 =  { class:"", nome: "Cesaltina Rosa"}
let  n16 =  { class:"", nome: "Isabel Gonçalves"}
let  n17 =  { class:"", nome: "João Neto"}
let  n18 =  { class:"", nome: "Elvira Neto"}
let  n19 =  { class:"", nome: "Orlando Viegas"}
let  n20 =  { class:"", nome: "Maria José Viegas"}
let  n21 =  { class:"", nome: "Rui Vaz"}
let  n22 =  { class:"", nome: "Ana Rosa"}
let  n23 =  { class:"", nome: "Manuel Palma"}
let  n24 =  { class:"", nome: "Angelina Palma"}
let  n25 =  { class:"", nome: ""}
let  n26 =  { class:"", nome: ""}
let  n27 =  { class:"", nome: "Isabel Gonçalves"}
let  n28 =  { class:"", nome: "Antonio Gonçalves"}
let  n29 =  { class:"", nome: "Madalena Domingos"}
let  n30 =  { class:"", nome: "Mario Domingos"}
let  n31 =  { class:"", nome: "Maria Isaura"}
let  n32 =  { class:"", nome: "Martine Elisabeth"}
let  n33 =  { class:"", nome: "Maria Viegas Alves"}
let  n34 =  { class:"", nome: "Maria Palmira Teixeira"}
let  n35 =  { class:"", nome: "Tostan"}
let  n36 =  { class:"", nome: "Constantino Gedelha"}
let  n37 =  { class:"", nome: "Bernardino João"}
let  n38 =  { class:"", nome: "Manuel Custódio"}
let  n39 =  { class:"", nome: "Maria Rosa"}
let  n40 =  { class:"", nome: "Manuel Martins"}
let  n41 =  { class:"", nome: "Antonia Ximenes"}
let  n42 =  { class:"", nome: ""}
let  n43 =  { class:"", nome: ""}
let  n44 =  { class:"", nome: ""}
let  n45 =  { class:"", nome: ""}
let  n46 =  { class:"", nome: ""}
let  n47 =  { class:"", nome: ""}
let  n48 =  { class:"", nome: ""}
let  n49 =  { class:"", nome: ""}
let  n50 =  { class:"", nome: "Ricardo Barradas"}
let  n51 =  { class:"", nome: "Silvia Barradas"}
let  n52 =  { class:"", nome: "Catarina Barradas"}
let  n53 =  { class:"", nome: "Gonçalo Barradas"}
let  m1  =  { class:"moto", nome: "Motorista 1" } 
let  m2  =  { class:"moto", nome: "Motorista 2" }

let Names = [n1, n2 ,n3 ,n4 ,n5 ,n6 ,n7 ,n8 ,n9 ,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20,n21,n22,n23,n24,n25,n26,n27,n28,n29,n30,n31,n32,n33,n34,n35,n36,n37,n38,n39,n40,n41,n42,n43,n44,n45,n46,n47,n48,n49,n50,n51,n52,n53,m1,m2]
const q1 ={elemnts: [n1, n2], type: rooms.Duplo}
const q2 ={elemnts: [n3,n4], type: rooms.Casal}
const q3 ={elemnts: [n5,n6], type: rooms.Casal}
const q4 ={elemnts: [n7,n8], type: rooms.Duplo}
const q5 ={elemnts: [n9, n10], type: rooms.Duplo}
const q6 ={elemnts: [n11,n12], type: rooms.Casal}
const q7 ={elemnts: [n13,n14], type: rooms.Duplo}
const q8 ={elemnts: [n15,n16], type: rooms.Duplo}
const q9 ={elemnts: [n17,n18], type: rooms.Casal}
const q10={elemnts: [n19,n20], type: rooms.Casal}
const q11={elemnts: [n21,n22], type: rooms.Casal}
const q12={elemnts: [n23,n24], type: rooms.Casal}
const q13={elemnts: [], type: rooms.Casal}
const q14={elemnts: [n27,n28], type: rooms.Casal}
const q15={elemnts: [n29,n30], type: rooms.Casal}
const q16={elemnts: [n31,n32], type: rooms.Duplo}
const q17={elemnts: [n33,n34], type: rooms.Duplo}
const q18={elemnts: [n35], type: rooms.Individual}
const q19={elemnts: [n36,n37], type: rooms.Duplo}
const q20={elemnts: [n38,n39], type: rooms.Casal}
const q21={elemnts: [n40,n41], type: rooms.Casal}
const q22={elemnts: [n50,n51], type: rooms.Casal}
const q23={elemnts: [n52,n53], type: rooms.Duplo}
const q24={elemnts: [], type: rooms.Individual}
const q25={elemnts: [], type: rooms.Individual}
const q26={elemnts: [], type: rooms.Individual}
const q27={elemnts: [], type: rooms.Individual}
const q28={elemnts: [], type: rooms.Individual}
const q29={elemnts: [], type: rooms.Individual}
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

        if(!n.nome){
            continue
        }
        let li = document.createElement("li");
        li.textContent=n.nome;
        li.classList=n.class
        or.appendChild(li)
    }
    let ol = document.getElementById("quartos")
    //console.log(Quartos)
    index= 0;
    for(q of Quartos){
        if(q.elemnts.length === 0){
            continue
        }
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
