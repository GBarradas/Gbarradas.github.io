const table=[];
function getInfo(){
    for(let i of geral){
        for(let k of i.cadeiras){
            table.push(k)
        }
    }

}
function teste(){
    initTable();
    let terminal=document.getElementById("terminal")
    terminal.innerHTML=ipm.pc
}
function hide(a){
    let div=document.getElementById(a.id)
    let nome;
    for(let i of table){
        if(i[1]==a.id){
            nome=i[2];
        }
    }
    let origem =document.getElementById(nome)
    origem.setAttribute("onclick",`showInfo(${a.id})`)
    div.style.display='none'
}
function showInfo(a){
    let div=document.getElementById(a.id);
    let nome;
    for(let i of table){
        if(i[1]==a.id){
            nome=i[2];
        }
    }
    let origem =document.getElementById(nome)
    origem.setAttribute("onclick",`hide(${a.id})`)
    div.style.display='inline'
    
}
let tects=0
let ectsf=0
function calcTECTS(a,i){
    let result=0
    for(let y of a){
        result+=y.etcs;
    }
    let b=document.getElementById(i)
    b.innerHTML=result
}
function calcECTSf(a,i){
    let result=0
    for(let y of a){
        if(y.feita){

            result+=y.etcs;
        }
    }
    let b=document.getElementById(i)
    b.innerHTML=result
}
function getTECTS(a){
    let result=0
    for(let y of a){
        result+=y.etcs;
    }
    return result
}
function getECTSf(a){
    let result=0
    for(let y of a){
        if(y.feita){

            result+=y.etcs;
        }
    }
   return result
}
function calcECTSef(a,i){
    
    let e=document.getElementById(i)
    e.innerHTML=getTECTS(a)-getECTSf(a);
}
function calcMed(a,i){
    let med=0;
    let etcsd=0
    let fet=[]
    for(k of a){
        if(k.feita){
            etcsd+=k.etcs
            fet.push(k);
        }
    }
    for(k of fet ){
        med+=(k.etcs*k.nota);
    }
    med=med/etcsd
    let medi=document.getElementById(i)
    medi.innerHTML=med.toFixed(3)
    if(isNaN(med)){
        med=0;
        medi.innerHTML=med.toFixed(0);
    }
}
function initTable(x){
    tects=0;
    ectsf=0;
    for(k of table){
        tects+=k.etcs
    }
    let ec = document.getElementById("tects");
    ec.innerHTML=tects;
    for(k of apro ){
        ectsf+=k.etcs
    }
    console.log(apro)
    let ecf = document.getElementById("ectsf");
    ecf.innerHTML=ectsf;
    let ecef = document.getElementById("ecef");
    ecef.innerHTML=tects-ectsf;
    let info=document.getElementById("inf")
    info.replaceChildren();
    for(k of x){
        let tr=document.createElement('tr');
        //let div=document.createElement('tr')
        tr.setAttribute('class',"row")
        tr.setAttribute('id',k[2])
        tr.setAttribute("onclick",`showInfo(${k[1]})`)
        //div.setAttribute("id",k[1])
        //div.setAttribute("class","rowinfo")
        //div.setAttribute("colspan","6")
        let tdSem=document.createElement('td');
        tdSem.textContent=k.semestre;
        tdSem.setAttribute("class","tableShowSem");
        tdSem.setAttribute("onclick",`initTable(cc${k.semestre})`);
        tr.appendChild(tdSem)

        let tdCodUc=document.createElement('td');
        tdCodUc.textContent=k.codUC;
        tr.appendChild(tdCodUc)

        let tdNome=document.createElement('td');
        tdNome.textContent=k.nome;
        tr.appendChild(tdNome)

        let tdAc=document.createElement('td');
        tdAc.textContent=k.aC;
        tr.appendChild(tdAc)

        let tdetc=document.createElement('td');
        tdetc.textContent=k.etcs;
        tr.appendChild(tdetc)

        let tdrel=document.createElement('td');
        tdrel.textContent=k.feita;
        tr.appendChild(tdrel)

        let tdfei=document.createElement('td');
        tdfei.textContent=k.nota;
        tr.appendChild(tdfei)

        info.appendChild(tr)

        
    }
    //nav
   
    let inp1 = document.getElementById("left").querySelector("button");
    let inp2 = document.getElementById("right").querySelector("button");
    let center = document.getElementById("center").querySelector("button");
    console.log(center);
    switch(x){
        case table:
            inp1.style.display = 'none';
            inp2.style.display = 'none';
            center.style.display = "inline";
            center.textContent = "1º Semestre"
            center.onclick = function(){
                initTable(cc1);
            }
            
            break;
        case cc1:
            inp1.style.display = "inline"
            inp1.textContent = "Pagina Principal"
            center.style.display = "none"
            inp1.onclick = function(){
                initTable(table);
            }
            inp2.style.display = "inline"
            inp2.textContent = "2ºSemestre"
            center.style.display = "none"
            inp2.onclick = function(){
                initTable(cc2);
            }
            break;
        case cc2:
            inp1.style.display = "inline"
            inp1.textContent = "1ºsemestre"
            inp1.onclick = function(){
                initTable(cc1);
            }
            center.textContent = "Pagina Principal"
            center.style.display = "inline"
            center.onclick = function(){
                initTable(table);
            }
            inp2.style.display = "inline"
            inp2.textContent = "3ºSemestre"
            inp2.onclick = function(){
                initTable(cc3);
            }
            break;
        case cc3:
            inp1.style.display = "inline"
            inp1.textContent = "2ºsemestre"
            inp1.onclick = function(){
                initTable(cc2);
            }
            center.textContent = "Pagina Principal"
            center.style.display = "inline"
            center.onclick = function(){
                initTable(table);
            }
            inp2.style.display = "inline"
            inp2.textContent = "4ºSemestre"
            inp2.onclick = function(){
                initTable(cc4);
            }
            break;
        case cc4:
            inp1.style.display = "inline"
            inp1.textContent = "3ºsemestre"
            inp1.onclick = function(){
                initTable(cc3);
            }
            center.textContent = "Pagina Principal"
            center.style.display = "inline"
            center.onclick = function(){
                initTable(table);
            }
            inp2.style.display = "inline"
            inp2.textContent = "5ºSemestre"
            inp2.onclick = function(){
                initTable(cc5);
            }
            break;
        case cc5:
            inp1.style.display = "inline"
            inp1.textContent = "4ºsemestre"
            inp1.onclick = function(){
                initTable(cc4);
            }
            center.textContent = "Pagina Principal"
            center.style.display = "inline"
            center.onclick = function(){
                initTable(table);
            }
            inp2.style.display = "inline"
            inp2.textContent = "6ºSemestre"
            inp2.onclick = function(){
                initTable(cc6);
            }
            break;
        case cc6:
            inp1.style.display = "inline"
            inp1.textContent = "5ºsemestre"
            inp1.onclick = function(){
                initTable(cc5);
            }
            center.style.display = "none"
            inp2.style.display = "inline"
            inp2.textContent = "Pagina Principal"
            inp2.onclick = function(){
                initTable(table);
            }
            break;
    }
    
}
