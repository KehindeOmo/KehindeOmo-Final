function changeAvatar(){
    document.getElementById("ofcourse").src= "newEmoji.png"
}
function newNav(){
    var navMenus=document.getElementById("navMenus");
    if(navMenus.style.display=== "none"){
        navMenus.style.display= "block";
    }else{
        navMenus.style.display="none";
    }
}