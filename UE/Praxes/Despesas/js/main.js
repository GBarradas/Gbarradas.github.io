//{despesa: "",data: "",valor: 0,Obs: "",loja:"", link: "/files/", logo:""},
let Desp = [
    {despesa: "Cd's e canetas",data: "15/09/2022",valor: 13.25,Obs: "-",loja:"Amazon",link: "files/cd_marcador.pdf", logo: "data:image/png;base64,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"},
    {despesa: "Compras para os jantares",data: "17/09/2022",valor: 96.69,Obs: "-",loja:"Recheio Cash & Carry",link: "files/recheio_17092022.pdf", logo: "http://www.pichelariaveiga.pt/images/pichelaria-veiga/recheio.png"},
    {despesa: "Compras para os jantares",data: "17/09/2022",valor: 97.35,Obs: "-",loja:"Auchan",link: "files/Auchan_17092022.pdf", logo: "https://www.marshopping.com/matosinhos/-/media/images/b2c/portugal/matosinhos/images-stores/auchan/auchan_logo_2019.ashx?h=282&iar=0&mw=650&w=410&hash=6080628DA88F979CC8A18AFD71469B76"},
    
]


function main(){
    let tbody = document.getElementById("table");
    
    for(d of Desp){
        let tr = document.createElement("tr")
        let td_desp = document.createElement("td") 
        td_desp.textContent = d.despesa
        tr.appendChild(td_desp)
        //----------------------------------
        let td_logo = document.createElement("td")
        let img = document.createElement("img")
        img.src=d.logo
        img.alt = d.loja +" logo"
        img.width= 80
        td_logo.appendChild(img)  
        td_logo.classList= "td_img"   
        tr.appendChild(td_logo)
        //----------------------------------
        let td_loja = document.createElement("td") 
        td_loja.textContent= d.loja
        tr.appendChild(td_loja)
        //----------------------------------
        let td_data = document.createElement("td") 
        td_data.classList = "center"
        td_data.textContent = d.data
        tr.appendChild(td_data)
        //----------------------------------
        let td_valo = document.createElement("td") 
        td_valo.classList = "center"
        td_valo.textContent = d.valor+" €"
        tr.appendChild(td_valo)
        //----------------------------------
        let td_obse = document.createElement("td") 
        td_obse.classList = "center"
        td_obse.textContent = d.Obs
        tr.appendChild(td_obse)
        //----------------------------------
        let td_link = document.createElement("td") 
        td_link.classList = "center"
        let a = document.createElement("a")
        a.href = d.link
        a.textContent = "Fatura"
        td_link.appendChild(a)
        tr.appendChild(td_link)
        //----------------------------------
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
