/*************************************
    FUNCTION
*************************************/

function goooXbox() {
    let section = document.querySelectorAll("header, section, footer");
        section.forEach(section => {
        console.log(section);
        section.style.animationPlayState = "running";})
    var btn = document.getElementById("_special");
        btn.style.animationPlayState = "running";
    let xbox = document.querySelectorAll("._xbox");
        xbox.forEach(xbox => {
        console.log(xbox);
        xbox.style.animationPlayState = "running";})
}