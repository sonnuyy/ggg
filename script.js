const ddiinnoo = document.getElementById("ddiinnoo");
const ccaaccttuuss = document.getElementById("ccaaccttuuss");

document.addEventListener("keydown", function (event) {
    jump();
});

function jump () {
    if (ddiinnoo.classList != "jump")
        ddiinnoo.classList.add("jump")
    }
    setTimeout(function () {
        ddiinnoo.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval(function () => {
    let ddiinnooTop = parseInt(window.getComputedStyle(ddiinnoo).getPropertyValue("top"));
    let ccaaccttuussLeft = parseInt(window.getComputedStyle(ccaaccttuuss).getPropertyValue("left"));

    if (ccaaccttuussLeft < 50 && ccaaccttuussLeft > 0 && ddiinnooTop <= 140) {
        alert("!!!GAME OVER!!!")
    }
}, 10)