const rooms = {
    Individual: 1,
    Duplo: 2,
    Casal: 4,
    Triplo:3,
}


let  n1  =  { class:"", nome: "Firmino Inácio"}
let  n2  =  { class:"", nome: "Maria Afonso"}
let  n3  =  { class:"", nome: "Rita Inácio"}
let  n4  =  { class:"", nome: "Daniela Reis"}
let  n5  =  { class:"", nome: "Fábio Pereira"}
let  n6  =  { class:"", nome: "Isaura Coelho"}
let  n7  =  { class:"", nome: "Cesaltina Rosa"}
let  n8  =  { class:"", nome: "Manuela Santos"}
let  n9  =  { class:"", nome: "José Rosa"}
let  n10 =  { class:"", nome: "Manuel José"}
let  n11 =  { class:"", nome: "Assunção Sol"}
let  n12 =  { class:"", nome: "Natalia Fernandes"}
let  n13 =  { class:"", nome: "José Guerreiro"}
let  n14 =  { class:"", nome: "Filomena Batista"}
let  n15 =  { class:"", nome: "Vitória Guerreiro"}
let  n16 =  { class:"", nome: "Manuela Viegas"}
let  n17 =  { class:"", nome: "Rosario Pulido"}
let  n18 =  { class:"", nome: "Rita Viegas"}
let  n19 =  { class:"", nome: "Dora Viegas"}
let  n20 =  { class:"", nome: "Fatima Candeias"}
let  n21 =  { class:"", nome: "Carlos Candeias"}
let  n22 =  { class:"", nome: "Aprigio Aguiar"}
let  n23 =  { class:"", nome: "Maria José Viegas"}
let  n24 =  { class:"", nome: "Graça Martins"}
let  n25 =  { class:"", nome: "Ana Brito"}
let  n26 =  { class:"", nome: "Jose Brito"}
let  n27 =  { class:"", nome: "Elia Gonçalves"}
let  n28 =  { class:"", nome: "Patricia Rodrigues"}
let  n29 =  { class:"", nome: "Claudia Aguiar"}
let  n30 =  { class:"", nome: "Romano Justo"}
let  n31 =  { class:"", nome: "Candinhas Justo"}
let  n32 =  { class:"", nome: "Nascimento Gil "}
let  n33 =  { class:"", nome: "José Gil"}
let  n34 =  { class:"", nome: "Lucia Custodio"}
let  n35 =  { class:"", nome: "Antônio Jesus"}
let  n36 =  { class:"", nome: "Maria João Jesus"}
let  n37 =  { class:"", nome: "Alda Galhardo"}
let  n38 =  { class:"", nome: "Rogerio Galhardo"}
let  n39 =  { class:"", nome: "Carina Aguiar"}
let  n40 =  { class:"", nome: "Eduarda Aguiar"}
let  n41 =  { class:"", nome: "Maria Valente"}
let  n42 =  { class:"", nome: "Hélder Mangas"}
let  n43 =  { class:"", nome: "Anabela Rodrigues"}
let  n44 =  { class:"", nome: "João Neto"}
let  n45 =  { class:"", nome: "Elvira Neto"}
let  n46 =  { class:"", nome: "Manuel Palma"}
let  n47 =  { class:"", nome: "Angelina Palma"}
let  n48 =  { class:"", nome: "Maria João"}
let  n49 =  { class:"", nome: "Paula Cristo"}
let  n50 =  { class:"", nome: "Maria José Silva"}
let  n51 =  { class:"", nome: "Paula Girão"}
let  n52 =  { class:"", nome: "Guia "}
let  n53 =  { class:"", nome: "Ricardo Barradas"}
let  m1  =  { class:"moto", nome: "Motorista 1"}
let  m2  =  { class:"moto", nome: "Motorista 2"}

let Names = [n1, n2 ,n3 ,n4 ,n5 ,n6 ,n7 ,n8 ,n9 ,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20,n21,n22,n23,n24,n25,n26,n27,n28,n29,n30,n31,n32,n33,n34,n35,n36,n37,n38,n39,n40,n41,n42,n43,n44,n45,n46,n47,n48,n49,n50,n51,n52,n53,m1,m2]
const q1 ={elemnts: [n1,n2], type: rooms.Casal }
const q2 ={elemnts: [n4,n5], type: rooms.Casal }
const q3 ={elemnts: [n6,n41], type: rooms.Duplo }
const q4 ={elemnts: [n8,n9], type: rooms.Casal }
const q5 ={elemnts: [n10,n11], type: rooms.Casal }
const q6 ={elemnts: [n12,n13], type: rooms.Casal }
const q7 ={elemnts: [n14,n15], type: rooms.Duplo }
const q8 ={elemnts: [n23,n24], type: rooms.Duplo }
const q9 ={elemnts: [n25,n26], type: rooms.Casal }
const q10={elemnts: [n30,n31], type: rooms.Casal }
const q11={elemnts: [n32,n33], type: rooms.Casal }
const q12={elemnts: [n35,n36], type: rooms.Casal }
const q13={elemnts: [n37,n38], type: rooms.Casal }
const q14={elemnts: [n22,n40], type: rooms.Casal }
const q15={elemnts: [n42,n43], type: rooms.Casal }
const q16={elemnts: [n44,n45], type: rooms.Casal }
const q17={elemnts: [n46,n47], type: rooms.Casal }
const q18={elemnts: [n49,n34], type: rooms.Duplo }
const q19={elemnts: [n20,n21], type: rooms.Casal }
const q20={elemnts: [n29,n39], type: rooms.Duplo }
const q21={elemnts: [n50,n51], type: rooms.Duplo }
const q22={elemnts: [n16,n17], type: rooms.Duplo }
const q23={elemnts: [n18,n19], type: rooms.Duplo }
const q24={elemnts: [n27,n28], type: rooms.Duplo }
const q25= {elemnts: [n7], type: rooms.Individual }
const q26={elemnts: [n52], type: rooms.Individual }
const q27={elemnts: [n53], type: rooms.Individual }
const q28={elemnts: [m1], type: rooms.Individual }
const q29={elemnts: [m2], type: rooms.Individual }
const q30 ={elemnts: [n3,n48], type: rooms.Duplo}
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
    q21,q22,q23,q24,q30,q25,q26,q27,q28,q29
]
function main(){
    //console.log(Names)
    let or = document.getElementById("names")
    var psq  = Names

    //console.log(Quartos)


    for(q of Quartos){
        for(p of q.elemnts){
            if(p.nome != "")
                psq = psq.filter(ap => ap != p)
        }
    }
    psq = psq.filter(p => p.nome!="")
    //console.log(psq)
    let divPsq = $("#p100q")
    if(psq.length == 0){
        divPsq.hide()
    }else{
        let Npsq = ""
        for(n of psq) {
            Npsq += n.nome+", "
        }
        let divP = document.querySelector("#p100q p")
        divP.textContent = Npsq
        document.querySelector("#p100q small").textContent = psq.length +" Pessoas com Quarto por Atribuir"
        //console.log(divP)
    }

    for ( n of Names){
        //psq.push(n)
        //console.log(n.nome)
        let li = document.createElement("li");
        li.textContent=n.nome;
        li.classList=n.class
        or.appendChild(li)
    }
    let ol = document.getElementById("quartos")
    index= 0;
    for(q of Quartos){
        index++
        let text= ""
        let li = document.createElement("tr"); 
        let Num = document.createElement("td")
        Num.textContent = index
        Num.style.textAlign = "center"
        li.appendChild(Num)
        let TypeTable = document.createElement("td")
        TypeTable.style.textAlign = "center"
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
        NamesTable.style.paddingLeft = "5%"
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
