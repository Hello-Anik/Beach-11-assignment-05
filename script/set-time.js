function setDate() {
    let now = new Date();
    let options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    let formattedDate = now.toLocaleDateString('en-US', options);
    
    document.getElementById("set-time").textContent = formattedDate;
}

setDate();
