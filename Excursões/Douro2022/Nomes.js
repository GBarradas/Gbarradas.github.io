
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
let  n36 =  { class:"needname", nome: "Alvaro Colaço" }
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

let Names = [n1, n2 ,n3 ,n4 ,n5 ,n6 ,n7 ,n8 ,n9 ,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20,n21,n22,n23,n24,n25,n26,n27,n28,n29,n30,n31,n32,n33,n34,n35,n36,n37,n38,n39,n40,n41,n42,n43,n44,n45,n46,n47,n48,n49,n50,n51,n52,n53]
const q1 =[n5, n6]
const q2 =[n34]
const q3 =[n10, n11]
const q4 =[n14,n15]
const q5 =[n12,n13]
const q6 =[n22, n23]
const q7 =[n20, n21]
const q8 =[n18, n19]
const q9 =[n16, n17]
const q10=[n24, n44]
const q11=[n37, n38]
const q12=[n7,n8,n9]
const q13=[n25, n26]
const q14=[n27, n52,n51]
const q15=[n28,n29]
const q16=[n30,n33]
const q17=[n31, n32]
const q18=[n35, n36]
const q19=[n39, n40]
const q20=[n41, n50]
const q21=[n42, n43]
const q22=[n45,n46]
const q23=[n47, n48]
const q24=[n49]
const q25=[n1,n3]
const q26=[n2,n4]
var individual = 0;
var duplo = 0;
var triplo = 0;
var total = 0;
var Quartos = [q1 ,q2 ,q3 ,q4 ,q5 ,q6 ,q7 ,q8 ,q9 ,q10,q11,q12,q13,q14,q15,q16
    ,q17,
    q18,
    q19,
    q20,
    q21,q22,q23,q24,q25,q26
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
    for(q of Quartos){
        switch(q.length){
            case 1:
                individual++;
                break;
            case 2:
                duplo++;
                break;
            case 3:
                triplo++;
                break;
                default:
                    break;
                }
        //console.log(q)
        let li = document.createElement("li"); 
        let text= ""
        for(let i in q){
            total++;
            text = text+" "+q[i].nome+",";
        }
        text = text.substring(0,text.length-1)+";"
        li.textContent=text;
        ol.appendChild(li)
    }
    let q1 = document.getElementById("q1")
    q1.textContent = individual;
    let q2 = document.getElementById("q2")
    q2.textContent = duplo;
    let q3 = document.getElementById("q3")
    q3.textContent = triplo
    let t = document.getElementById("t")
    t.textContent = total
}
