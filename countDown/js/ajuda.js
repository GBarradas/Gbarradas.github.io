const defaultImage ="../img/default.png"
const headerLogo = "../img/sHOThub.png"
const t1 = "A defenir ..."
const t2 = "A defenir ..."
const t3 = "A defenir ..."
const t4 = "A defenir ..."
const t5 = "A defenir ..."
const anuncio = "../img/Solipa.JPEG"

const navBar = {
    
    Home: "A defenir ...",
    PornVideos: "A defenir ...",
    Categories: "A defenir ...",
    LiveCams: "A defenir ...",
    PornStars: "A defenir ...",
    TranseAgora: "A defenir ...",
    Community: "A defenir ...",
    Photos: "A defenir ...",
    Upload : "A defenir ...",
    Upgrade: "A defenir ...",
    videos: "A defenir ...",
    searchBar: "Search Shot",
}


function mainAjuda(){
    console.log("ola")
    var an = document.getElementById("anuncio")
    an.src = anuncio
    an.height= 250
    var l = document.getElementById("headerLogo").src = headerLogo
    console.log(l)
    document.getElementById("navHome").textContent= navBar.Home
    document.getElementById("navPorn").textContent = navBar.PornVideos
    document.getElementById("navCategories").textContent = navBar.Categories
    document.getElementById("navCams").textContent = navBar.LiveCams
    document.getElementById("navPStars").textContent = navBar.PornStars
    document.getElementById("navSnow").textContent = navBar.TranseAgora
    document.getElementById("navComunity").textContent = navBar.Community
    document.getElementById("navPhotos").textContent = navBar.Photos
    document.getElementById("UploadBtn").textContent = navBar.Upload
    document.getElementById("UpgradeBtn").textContent = navBar.Upgrade
    document.getElementById("VideosTitle").textContent = navBar.videos
    document.getElementById("searchInput").placeholder = navBar.searchBar
    document.getElementById("t1").textContent = t1
    document.getElementById("t2").textContent = t2
    document.getElementById("t3").textContent = t3
    document.getElementById("t4").textContent = t4
    document.getElementById("t5").textContent = t5
    Videos.forEach(function(v){
        var li = document.getElementById(v.Tag)
        var img = li.querySelector("img")
        img.src = v.img
        var time = li.querySelector('div[class="marker-overlays js-noFade')
        var vt = time.querySelector('var')
        if(v.premium){
            var s = document.createElement('span')
            s.classList = 'phpFreeBlock tooltipTrig'
            var i = document.createElement('i')
            i.classList = 'bg-premium-sprite premiumIcon'
            s.appendChild(i)
            time.appendChild(s)
        }
        vt.textContent = v.duration
        var div= li.querySelector('div[class="thumbnail-info-wrapper clearfix"')
        var span = div.querySelector('span[class="title"')
        var a = span.querySelector('a')
        a.textContent = v.title
        var dif1 = div.querySelector('div[class="videoUploaderBlock clearfix"')
        var dif2 = dif1.querySelector('div[class="usernameWrap"')
        var a2 = dif2.querySelector('a')
        a2.textContent = v.author
    })
    

}