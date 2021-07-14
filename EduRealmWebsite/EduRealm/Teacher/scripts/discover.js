function follow() { 
    if(document.querySelector(".follow-btn").innerText == "Follow") {
        document.querySelector(".follow-btn").innerText = "Following";  
    }
    else {
        document.querySelector(".follow-btn").innerText = "Follow";
    }
}

