//{despesa: "",data: "",valor: 0,Obs: "",link: "/files/"},
let Desp = [
    {despesa: "Cd's e canetas",data: "15/09/2022",valor: 13.25,Obs: "Amazon",link: "files/"},
    {despesa: "Compras para os jantares",data: "17/09/2022",valor: 0,Obs: "Recheio Cash & Carry",link: "files/"},
]


function main(){
    let tbody = document.getElementById("table");
    
    for(d of Desp){
        let tr = document.createElement("tr")
        let td_desp = document.createElement("td") 
        td_desp.textContent = d.despesa
        tr.appendChild(td_desp)
        let td_data = document.createElement("td") 
        td_data.classList = "center"
        td_data.textContent = d.data
        tr.appendChild(td_data)
        let td_valo = document.createElement("td") 
        td_valo.classList = "center"
        td_valo.textContent = d.valor+" €"
        tr.appendChild(td_valo)
        let td_obse = document.createElement("td") 
        td_obse.classList = "center"
        td_obse.textContent = d.Obs
        tr.appendChild(td_obse)
        let td_link = document.createElement("td") 
        td_link.classList = "center"
        let a = document.createElement("a")
        a.href = d.link
        a.textContent = "Fatura"
        td_link.appendChild(a)
        tr.appendChild(td_link)
        tbody.appendChild(tr)
    }

    getTotal()

}

function getTotal(){
    let total = document.getElementById("total");
    console.log(total)
    let t = 0;
    for(d of Desp){
        t = t+ d.valor;
    }
    total.textContent = t +" €"
    total.style.backgroundColor = "#e4e4e4"

}