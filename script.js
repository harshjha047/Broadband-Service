// const { default: gsap } = require("gsap");

const Left = document.querySelector('.left');
const Right = document.querySelector('.right');

Left.addEventListener('click', () => {
    gsap.to(".service-case",{
        x: "-80vw",
        duration: 1
    })
})
Right.addEventListener('click', () => {
    gsap.to(".service-case",{
        x: "0vw",
        duration: 1
    })
})