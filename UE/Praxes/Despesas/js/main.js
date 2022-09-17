//{despesa: "",data: "",valor: 0,Obs: "",loja:"", link: "/files/", logo:""},
let Desp = [
    {despesa: "Cd's e canetas",data: "15/09/2022",valor: 13.25,Obs: "-",loja:"Amazon",link: "files/cd_marcador.pdf", logo: "https://blog.betrybe.com/wp-content/uploads/2020/12/Amazon_PNG13.png"},
    {despesa: "Compras para os jantares",data: "17/09/2022",valor: 96.69,Obs: "-",loja:"Recheio Cash & Carry",link: "files/recheio_17092022.pdf", logo: "https://www.jeronimomartins.com/wp-content/uploads/2021/09/Logo_Recheio_Verde-300x144.png"},
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
