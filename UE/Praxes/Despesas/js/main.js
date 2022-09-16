//{despesa: "",data: "",valor: "",Obs: "",link: ""},
let Desp = [
    {despesa: "Cd's e canetas",data: "15/09/2022",valor: "13,25",Obs: "-",link: "/"},
]


function main(){
    let tbody = document.getElementById("table");
    
    for(d of Desp){
        console.log(d)
        let tr = document.createElement("tr")
        let td_desp = document.createElement("td") 
        td_desp.textContent = d.despesa
        tr.appendChild(td_desp)
        let td_data = document.createElement("td") 
        td_data.textContent = d.data
        tr.appendChild(td_data)
        let td_valo = document.createElement("td") 
        td_valo.textContent = d.valor
        tr.appendChild(td_valo)
        let td_obse = document.createElement("td") 
        td_obse.textContent = d.Obs
        tr.appendChild(td_obse)
        let td_link = document.createElement("td") 
        let a = document.createElement("a")
        a.href = d.link
        a.textContent = "Fatura"
        td_link.appendChild(a)
        tr.appendChild(td_link)
        console.log(tr)
        tbody.appendChild(tr)
    }

}