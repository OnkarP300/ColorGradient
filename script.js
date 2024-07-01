const btn = document.getElementById("color");

btn.addEventListener("click", () => {
    let randomColor = randColor();
    document.body.style.background = `linear-gradient(45deg, ${randomColor.val1}, ${randomColor.val2})`;
});

function randColor() {
    const color = "0123456789ABCDEF";

    let newColor1 = "#";
    let newColor2 = "#";

    for (i = 0; i < 6; i++) {
        newColor1 = newColor1 + color[Math.floor(Math.random() * color.length)];
        newColor2 = newColor2 + color[Math.floor(Math.random() * color.length)];
    }
    document.getElementById("colorName").textContent = newColor1 + " - " + newColor2;

    return {
        val1: newColor1,
        val2: newColor2
    };
}