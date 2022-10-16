//{despesa: "",data: "",valor: 0,Obs: "-",loja:"", link: "files/", logo:""},
const pingodoce = "https://707.pt/wp-content/uploads/2019/07/pingo-doce.png"
let Desp = [
    {class: "w1",despesa: "Cd's e canetas",data: "15/09/2022",valor: 13.25,Obs: "-",loja:"Amazon",link: "files/cd_marcador.pdf", logo: "https://cdn2.downdetector.com/static/uploads/logo/amazon.png"},
    {class: "w1",despesa: "Compras para os jantares",data: "17/09/2022",valor: 96.69,Obs: "-",loja:"Recheio Cash & Carry",link: "files/recheio_17092022.pdf", logo: "https://www.jeronimomartins.com/wp-content/uploads/2021/09/Logo_Recheio_Verde-300x144.png"},
    {class: "w1",despesa: "Compras para os jantares",data: "17/09/2022",valor: 97.35,Obs: "-",loja:"Auchan",link: "files/Auchan_17092022.pdf", logo: "https://www.marshopping.com/matosinhos/-/media/images/b2c/portugal/matosinhos/images-stores/auchan/auchan_logo_2019.ashx?h=282&iar=0&mw=650&w=410&hash=6080628DA88F979CC8A18AFD71469B76"},
    {class: "w1",despesa: "Copos e Pratos",data: "19/09/2022",valor: 10.00,Obs: "-",loja:"A Revendedora", link: "files/revendedora_19092022.pdf", logo:"img/revendedora.png"},
    {class: "w1",despesa: "Compra para Jantar rossio",data: "20/09/2022",valor: 30.61 ,Obs: "-",loja:"Lidl", link: "files/Lidl_20092022.png", logo:"https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/5d/d5/03/5dd503b7-a709-c851-45bc-ee0a7dd42b75/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png"},
    {class: "w1",despesa: "Copos e Salchichas",data: "22/09/2022",valor: 40.86,Obs: "-",loja:"A Revendedora", link: "files/revendedora_22092022.pdf", logo:"img/revendedora.png"},
    {class: "w1",despesa: "Bagaço ",data: "22/09/2022",valor: 26.97,Obs: "-",loja:"Continente", link: "files/continente_22092022.pdf", logo:"img/continente.jpg"},
    {class: "w1",despesa: "Gasosas ",data: "22/09/2022",valor: 8.90,Obs: "-",loja:"Pingo Doce", link: "files/pingodoce_22092022.pdf", logo:"https://707.pt/wp-content/uploads/2019/07/pingo-doce.png"},
    {class: "w1",week: "1º Semana",inicio:"17/09/2022", final: "23/09/2022"},
    {class:"w2", despesa: "Salchichas",data: "28/09/2022",valor: 31.94,Obs: "-",loja:"A Revendedora", link: "files/revendedora_28092022.pdf", logo:"img/revendedora.png"},
    {class:"w2", despesa: "Vinho Tinto",data: "28/09/2022",valor: 20.41,Obs: "-",loja:"JB Santana", link: "files/jbsantana_28092022.pdf", logo:"img/jbsantana.jpg"},
    {class:"w2", despesa: "Vinho e Gasosas",data: "28/09/2022",valor: 69.77,Obs: "-",loja:"Pingo Doce", link: "files/pingodoce_28092022.pdf", logo:"https://707.pt/wp-content/uploads/2019/07/pingo-doce.png"},
    {class:"w2", despesa: "Vodka",data: "28/09/2022",valor:34.74 ,Obs: "-",loja:"Continente", link: "files/continente_28092022.pdf", logo:"img/continente.jpg"},
    {class:"w2", despesa: "Molhos e Batatas",data: "29/09/2022",valor: 26.23 ,Obs: "-",loja:"Pingo Doce", link: "files/pingodoce_29092022.pdf", logo:"https://707.pt/wp-content/uploads/2019/07/pingo-doce.png"},
    {class:"w2",week: "2º Semana",inicio:"23/09/2022", final: "30/09/2022"},
    {class:"w3", despesa: "Atum",data: "04/10/2022",valor: 83.62,Obs: "-",loja:"A Revendedora", link: "files/revendedora_04102022.pdf", logo:"img/revendedora.png"},
    {class:"w3", despesa: "Vodka, Esparguete e sacos do lixo",data: "04/10/2022",valor: 41.7,Obs: "-",loja:"Continente", link: "files/continente_04102022.pdf", logo:"img/continente.jpg"},
    {class:"w3", despesa: "Vinho Gasosas etxc...",data: "04/10/2022",valor: 73.95,Obs: "-",loja:"Pingo Doce", link: "files/pingodoce_04102022.pdf", logo:"https://707.pt/wp-content/uploads/2019/07/pingo-doce.png"},
    {class:"w3", despesa: "Chapu e pasta de dentes ",data: "04/10/2022",valor: 18.81,Obs: "-",loja:"A Revendedora", link: "files/revendedora_04102022%20(1).pdf", logo:"img/revendedora.png"},
    {class:"w3", despesa: "Artigos praxe suja",data: "04/10/2022",valor: 29.1,Obs: "-",loja:"Evora Home", link: "files/evorahome_04102022.pdf", logo: "img/evohome.svg"},
    {class:"w3", despesa: "Espuma de barbear",data: "04/10/2022",valor: 3.87,Obs: "-",loja:"Lidl", link: "files/lidl_04102022.pdf", logo:"https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/5d/d5/03/5dd503b7-a709-c851-45bc-ee0a7dd42b75/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png"},
    {class:"w3", despesa: "Vinho",data: "04/10/2022",valor: 11.98,Obs: "-",loja:"Pingo Doce", link: "files/pingodoce_04102022%20(1).pdf", logo: pingodoce},
    {class:"w3",week: "3º Semana",inicio:"30/09/2022", final: "07/10/2022"},
    {class:"w4",despesa: "Jantares",data: "13/10/2023",valor: 29.14,Obs: "-",loja:"Pingo Doce", link: "files/pingodoce_13102022.html", logo:pingodoce},
    {class:"w4",despesa: "Vodka",data: "13/10/2022",valor: 27.96,Obs: "-",loja:"Continente", link: "files/continente_13102022.pdf", logo:"img/continente.jpg"},
    {class:"w4",despesa: "Vinho",data: "13/10/2022",valor: 23.29,Obs: "-",loja:"Pingo Doce", link: "files/pingodoce_13102022_1.pdf", logo:pingodoce},
    {class:"w4",despesa: "Vinho",data: "13/10/2022",valor: 40.23,Obs: "-",loja:"Pingo Doce", link: "files/pingodoce_13102022_2.pdf", logo:pingodoce},
    {class:"w4",despesa: "Jantares",data: "13/10/2022",valor: 49,Obs: "-",loja:"-", link: "#", logo:""},
    {class:"w4",week: "4º Semana",inicio:"08/10/2022", final: "14/10/2022"},
    {class:"" ,despesa: "",data: "",valor: 0,Obs: "-",loja:"", link: "files/", logo:""},
    {class:"w5",week: "4º Semana",inicio:"08/10/2022", final: "14/10/2022"},
    {class:"ap",despesa: "Bolachas Aula de praxe",data: "03/10/2022",valor: 100,Obs: "-",loja:"Tiagos Academica", link: "files/tiagos_03102022.html", logo:"img/tiagos.png"},
    {class:"ap",despesa: "Disfarces aula de praxe",data: "07/102022",valor: 103,Obs: "-",loja:"Évora Home", link: "files/evorahome_07102022.pdf", logo:"img/evohome.svg"},
    {class:"ap",despesa: "Tecidos e linhas",data: "07/10/2022",valor: 29.61,Obs: "-",loja:"Pack dos tecidos", link: "files/packdostecidos_07102022.pdf", logo:"https://parkdostecidos.com/galeria/config/6239f64c40ecd_header-logo.webp"},
    {class:"ap",despesa: "Avental e pilinha",data: "07/10/2022",valor: 23.5,Obs: "-",loja:"Sex shop", link: "#", logo:""},
    {class:"ap",despesa: "Disfarces aula de praxe",data: "08/10/2022",valor: 45,Obs: "-",loja:"Évora Home", link: "files/evorahome_08102022.pdf", logo:"img/evohome.svg"},
    {class:"ap",despesa: "Ripas de madeira",data: "08/10/2022",valor: 8.58,Obs: "-",loja:"Leroy Merlin", link: "files/leroymerlin_08102022.pdf", logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Leroy_Merlin.svg/1200px-Leroy_Merlin.svg.png"},
    {class:"ap",despesa: "Disfarces aula de praxe",data: "08/10/2022",valor: 7.35,Obs: "-",loja:"Hiper China", link: "iles/hiperchina_08102022.pdf", logo:""},
    {class:"ap",despesa: "Artigos de Custura",data: "08/10/2022",valor: 4.4,Obs: "-",loja:"Pack dos Tecidos", link: "files/packdostecidos_08102022.pdf", logo:"https://parkdostecidos.com/galeria/config/6239f64c40ecd_header-logo.webp"},
    {class:"ap",despesa: "Outros",data: "08/10/2022",valor: 20,Obs: "",loja:"Diversas", link: "files/", logo:""},
    {class:"ap",despesa: "Blusas Aula de praxe",data: "08/10/2022",valor: 261.00,Obs: "-",loja:"Sul Merchandising", link: "files/", logo:"https://aquisevende.pt/wp-content/uploads/2020/04/aqui-se-vende-textil-criativo.png"},
    {class:"ap",despesa: "Adresso Piça",data: "15/102022",valor: 2.95,Obs: "-",loja:"Évora Home", link: "files/evorahome_15102022.pdf", logo:"img/evohome.svg"},
    {class:"ap",despesa: "Cola",data: "16/102022",valor: 5.55,Obs: "-",loja:"Évora Home", link: "files/evorahome_16102022.pdf", logo:"img/evohome.svg"},
    {class:"ap",week: "Aula de Praxe",inicio:".", final: "."},
]


function main(){
    let tbody = document.getElementById("table");
    let Total = 0.0
    for(d of Desp){
        if(Object.keys(d).length ===8 ){

            let tr = document.createElement("tr")
            tr.classList=d.class;
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
        else{
            let img = document.createElement("img")
            img.src="img/default.png"
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
            tr.classList=d.class;
            tr.classList.add("Week")
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
            
        tr.setAttribute("onclick", `hide(this)`)
            tbody.appendChild(tr)
            Total = 0.0;
        }
    }
    
    getTotal()
    initialHide("w1")
    initialHide("w2")
    initialHide("w3")
    //initialHide("w4")
    initialHide("ap")
}
function initialHide(a){
    let all = document.querySelectorAll('.'+a)
    for(l of all){

        l.style.display = 'none'
    }
    let w = all[all.length-1]
    w.style.display=""
}

function getTotal(){
    let total = document.getElementById("total");
    //console.log(total)
    let t = 0.0;
    for(d of Desp){
        if(Object.keys(d).length === 8)
        //console.log(t)
            t = t+ d.valor;
    }
    //console.log(t)
    total.textContent = t.toFixed(2) +" €"
    total.style.backgroundColor = "#e4e4e4"
    total.style.fontSize="xx-large"

}
function hide(a){
    let all = document.querySelectorAll('.'+a.classList[0])
    for(l of all){

        l.style.display = 'none'
    }
    let w = all[all.length-1]
    w.style.display=""
    w.setAttribute("onclick", `show(this)`)
    
}
function show(a){
    let all = document.querySelectorAll('.'+a.classList[0])
    for(l of all){

        l.style.display = ''
    }
    let w = all[all.length-1]
    w.setAttribute("onclick", `hide(this)`)
    
}
