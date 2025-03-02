document.getElementById('color-change-btn').addEventListener('click',
    function () {
        let r = Math.round(Math.random()*255);
        let g = Math.round(Math.random()*255);
        let b = Math.round(Math.random()*255);
        console.log(r)
        document.body.style.backgroundColor= "rgb("+r+","+g+","+b+")";
    }
)