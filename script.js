import { updateGround } from "./ground.js";

// constanst
const WORLD_HEIGHT = 30;
const WORLD_WIDTH = 100;

const worldElem = document.querySelector('[data-world]');


setPixelToWorldScale();
window.addEventListener("resize", setPixelToWorldScale);

let lastTime; 
function update(time) {
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime;

    updateGround(delta);

    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)


function setPixelToWorldScale() {
   let worldToPixelScale;
   
   if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH    
   } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT   
   }

   worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
   worldElem.style.heigth = `${WORLD_HEIGHT * worldToPixelScale}px`
}


