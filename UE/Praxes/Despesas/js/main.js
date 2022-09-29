//{despesa: "",data: "",valor: 0,Obs: "-",loja:"", link: "files/", logo:""},
let Desp = [
    {despesa: "Cd's e canetas",data: "15/09/2022",valor: 13.25,Obs: "-",loja:"Amazon",link: "files/cd_marcador.pdf", logo: "https://blog.betrybe.com/wp-content/uploads/2020/12/Amazon_PNG13.png"},
    {despesa: "Compras para os jantares",data: "17/09/2022",valor: 96.69,Obs: "-",loja:"Recheio Cash & Carry",link: "files/recheio_17092022.pdf", logo: "https://www.jeronimomartins.com/wp-content/uploads/2021/09/Logo_Recheio_Verde-300x144.png"},
    {despesa: "Compras para os jantares",data: "17/09/2022",valor: 97.35,Obs: "-",loja:"Auchan",link: "files/Auchan_17092022.pdf", logo: "https://www.marshopping.com/matosinhos/-/media/images/b2c/portugal/matosinhos/images-stores/auchan/auchan_logo_2019.ashx?h=282&iar=0&mw=650&w=410&hash=6080628DA88F979CC8A18AFD71469B76"},
    {despesa: "Copos e Pratos",data: "19/09/2022",valor: 10.00,Obs: "-",loja:"A Revendedora", link: "files/revendedora_19092022.pdf", logo:"img/revendedora.png"},
    {despesa: "Compra para Jantar rossio",data: "20/09/2022",valor: 30.61 ,Obs: "-",loja:"Lidl", link: "files/Lidl_20092022.png", logo:"https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/5d/d5/03/5dd503b7-a709-c851-45bc-ee0a7dd42b75/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png"},
    {despesa: "Copos e Salchichas",data: "22/09/2022",valor: 40.86,Obs: "-",loja:"A Revendedora", link: "files/revendedora_22092022.pdf", logo:"img/revendedora.png"},
    {despesa: "Bagaço ",data: "22/09/2022",valor: 26.97,Obs: "-",loja:"Continente", link: "files/continente_22092022.pdf", logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Logo_Continente.svg/1920px-Logo_Continente.svg.png"},
    {despesa: "Gasosas ",data: "22/09/2022",valor: 8.90,Obs: "-",loja:"Pingo Doce", link: "files/pingodoce_22092022.pdf", logo:"https://707.pt/wp-content/uploads/2019/07/pingo-doce.png"},
    {week: "1º Semana",inicio:"17/09/2022", final: "23/09/2022"},
    {despesa: "Salchichas",data: "28/09/2022",valor: 31.94,Obs: "-",loja:"A Revendedora", link: "files/revendedora_28092022.pdf", logo:"img/revendedora.png"},
    {despesa: "Vinho Tinto",data: "28/09/2022",valor: 20.41,Obs: "-",loja:"JB Santana", link: "files/jbsantana_28092022.pdf", logo:"img/jbsantana.jpg"},
    {despesa: "Vinho e Gasosas",data: "28/09/2022",valor: 69.77,Obs: "-",loja:"Pingo Doce", link: "files/pingodoce_28092022.pdf", logo:"https://707.pt/wp-content/uploads/2019/07/pingo-doce.png"},
    {despesa: "Vodka",data: "28/09/2022",valor:34.74 ,Obs: "-",loja:"Continente", link: "files/continente_28092022.pdf", logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Logo_Continente.svg/1920px-Logo_Continente.svg.png"},
    {despesa: "olhoes e Batatas",data: "29/09/2022",valor: 26.23 ,Obs: "-",loja:"Pingo Doce", link: "files/pingodoce_29092022", logo:"https://707.pt/wp-content/uploads/2019/07/pingo-doce.png"},
    {week: "2º Semana",inicio:"23/09/2022", final: "30/09/2022"},
]


function main(){
    let tbody = document.getElementById("table");
    let Total = 0.0
    for(d of Desp){
        if(Object.keys(d).length ===7 ){

            let tr = document.createElement("tr")
            let td_desp = document.createElement("td") 
            td_desp.textContent = d.despesa
        tr.appendChild(td_desp)
        //----------------------------------
        let td_logo = document.createElement("td")
        if(d.logo!==""){
            let img = document.createElement("img")
            img.src=d.logo
            img.width= 80
            img.alt = d.loja +" logo"
            td_logo.appendChild(img)  
            td_logo.classList= "td_img"   
        }
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
        Total = Total + d.valor;
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
        else{
            let tr = document.createElement("tr")
            tr.classList="Week"
            let td_week = document.createElement("td")
            td_week.textContent = d.week;
            tr.appendChild(td_week)
            let td_start = document.createElement("td")
            td_start.textContent = d.inicio
            td_start.colSpan=2
            tr.appendChild(td_start)
            let td_end = document.createElement("td")
            td_end.textContent= d.final
            td_end.colSpan=2
            tr.appendChild(td_end)
            let td_val = document.createElement("td")
            td_val.textContent = Total.toFixed(2)+" €"
            td_val.colSpan=2
            td_val.style.fontSize= "xx-large"
            tr.appendChild(td_val)

            tbody.appendChild(tr)
            Total = 0.0;
        }
    }

    getTotal()

}

function getTotal(){
    let total = document.getElementById("total");
    //console.log(total)
    let t = 0.0;
    for(d of Desp){
        if(Object.keys(d).length === 7)
        //console.log(t)
            t = t+ d.valor;
    }
    //console.log(t)
    total.textContent = t.toFixed(2) +" €"
    total.style.backgroundColor = "#e4e4e4"
    total.style.fontSize="xx-large"

}
