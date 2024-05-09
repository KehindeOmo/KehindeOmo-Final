const chAvatar=document.getElementById('ofcourse');
let chAvatar1=true;
chAvatar.addEventListener('click', function(){
    if(chAvatar1){
        ofcourse.src= "kehindeEmoji.png"
    }else{
        ofcourse.src="newEmoji.png"
    }
    chAvatar1= !chAvatar1;
});
//function changeAvatar(){
   // document.getElementById("ofcourse").src= "newEmoji.png"
//}
function newNav(){
    var navMenus=document.getElementById("navMenus");
    if(navMenus.style.display=== "none"){
        navMenus.style.display= "block";
    }else{
        navMenus.style.display="none";
    }
}

function darkMode(){

    var body = document.body;
    body.classList.toggle("dark-mode");
}

function incrementVisitorCount() {
    if (localStorage.getItem('visitorCount')) {
        let count = parseInt(localStorage.getItem('visitorCount'));
        count++;
        localStorage.setItem('visitorCount', count);
    } else {
        localStorage.setItem('visitorCount', 1);
    }
    document.getElementById('visitorCount').textContent = localStorage.getItem('visitorCount');
}
window.onload = incrementVisitorCount;