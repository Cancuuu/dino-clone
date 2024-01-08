import { incrementCustomProperty } from "./updateCustomProperty.js";

const groundElems = document.querySelectorAll("[data-ground]");
const SPEED = 0.01;


export const updateGround = (delta) => {
    groundElems.forEach(ground => {
        console.log("The ground", ground);
        incrementCustomProperty(ground, "--left", delta * SPEED * -1)
    })
}
