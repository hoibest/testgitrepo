function goToPage(url){
    window.location = url;
}

function keepData(el){
    let id = el.id;
    let val = document.getElementById(id).value;
    sessionStorage.setItem(id,val);
    if(val==''){
        document.getElementById(id).style.background =  '#e2e2e2';
    }
    else{
        document.getElementById(id).style.background = '#b4cffa';
    }
    console.log(sessionStorage)
}

function loadData(arr){
    for(let i = 0; i < arr.length; i++){
        const sel = document.getElementById(arr[i]);
        sel.value = getSavedData(arr[i]);
        if(sel.value!=''){
            document.getElementById(arr[i]).style.background =  '#b4cffa';
        }
        else{
            document.getElementById(arr[i]).style.background =  '#e2e2e2';
        }
    }
}

function getSavedData(id){
    if(!sessionStorage.getItem(id)){
        return "";
    }
    return sessionStorage.getItem(id)
}

function design(num,tot){
    const per = 100/tot;
    document.getElementById('nav-greenbar').style.width = num*per + "%"; 
    if(num==tot){
        document.getElementById('nav-greenbar').style.borderRadius = 5+'px';
    }
}

function goToHome(warn){
    if(warn==1){
        let text = 
        `
Leave page?
Changes that you made will not be saved`;
        if (confirm(text) == true) {
            sessionStorage.clear();
            goToPage('/')
        }     
    }
    else{
        goToPage('/')
    }
}
