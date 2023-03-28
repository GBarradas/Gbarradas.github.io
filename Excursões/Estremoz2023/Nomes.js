const rooms = {
    Individual: 1,
    Duplo: 2,
    Casal: 4,
    Triplo:3,
}


let  n1  =  { class:"", nome: "Maria Conceição"}
let  n2  =  { class:"", nome: "Maria Graça"}
let  n3  =  { class:"", nome: "Luis Nunes"}
let  n4  =  { class:"needname", nome: "Jose Laurindo"}
let  n5  =  { class:"", nome: "Cesaltina Rosa"}
let  n6  =  { class:"needname", nome: "Fatinha"}
let  n7  =  { class:"needname", nome: "Isabelinha"}
let  n8  =  { class:"", nome: "Maria Marta"}
let  n9  =  { class:"", nome: "Rui Neves"}
let  n10 =  { class:"", nome: "Ana Rosa"}
let  n11 =  { class:"needname", nome: "Madalena"}
let  n12 =  { class:"needname", nome: "Mario"}
let  n13 =  { class:"needname", nome: "Madalena?"}
let  n14 =  { class:"needname", nome: "Zezinha"}
let  n15 =  { class:"", nome: "José Lariano"}
let  n16 =  { class:"", nome: "Manuela Viegas"}
let  n17 =  { class:"", nome: "Rosario Pulido"}
let  n18 =  { class:"", nome: "Natalia Martins"}
let  n19 =  { class:"", nome: "Rita Viegas"}
let  n20 =  { class:"", nome: "Isabel Sequeira"}
let  n21 =  { class:"", nome: "Nelia Sequeira"}
let  n22 =  { class:"", nome: "Valentim Manchado"}
let  n23 =  { class:"", nome: "Maria Custódia Machado"}
let  n24 =  { class:"needname", nome: "115"}
let  n25 =  { class:"needname", nome: "115"}
let  n26 =  { class:"needname", nome: "?"}
let  n27 =  { class:"", nome: "Carlos Vitorino"}
let  n28 =  { class:"needname", nome: "Mulher"}
let  n29 =  { class:"", nome: "Aidinha Barradas"}
let  n30 =  { class:"", nome: "Leonardo Barradas"}
let  n31 =  { class:"needname", nome: "Morais pocinnho"}
let  n32 =  { class:"needname", nome: "Mulher"}
let  n33 =  { class:"", nome: "Filomena Batista"}
let  n34 =  { class:"", nome: "Vitoria Maria"}
let  n35 =  { class:"", nome: "Silvia Barradas"}
let  n36 =  { class:"", nome: "Catarina Barradas"}
let  n37 =  { class:"", nome: "Jorge Mestre"}
let  n38 =  { class:"", nome: "Gabriela Mestre"}
let  n39 =  { class:"", nome: "Guilherme Mestre"}
let  n40 =  { class:"", nome: "José Gomes"}
let  n41 =  { class:"", nome: "Firmino Inácio"}
let  n42 =  { class:"", nome: "Maria Afonso"}
let  n43 =  { class:"", nome: "Vitalina Afonso"}
let  n44 =  { class:"", nome: "Nelson Afonso"}
let  n45 =  { class:"", nome: "José AntonioAfonso"}
let  n46 =  { class:"", nome: "Maria Afonso"}
let  n47 =  { class:"", nome: "Conceição"}
let  n48 =  { class:"", nome: "Antônio Evaristo"}
let  n49 =  { class:"", nome: "Antônio Brito"}
let  n50 =  { class:"", nome: "Alice Brito"}
let  n51 =  { class:"", nome: "Sergio Quinas"}
let  n52 =  { class:"", nome: "Maria dos Anjos"}
let  n53 =  { class:"", nome: ""}
let  m1  =  { class:"moto", nome: "Motorista 1" } 
let  m2  =  { class:"moto", nome: "Motorista 2" }

let Names = [n1, n2 ,n3 ,n4 ,n5 ,n6 ,n7 ,n8 ,n9 ,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20,n21,n22,n23,n24,n25,n26,n27,n28,n29,n30,n31,n32,n33,n34,n35,n36,n37,n38,n39,n40,n41,n42,n43,n44,n45,n46,n47,n48,n49,n50,n51,n52,n53,m1,m2]

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
    /*/console.log(Quartos)
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
    t.textContent = total*/
}
