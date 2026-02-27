'use strict';

const frm = document.querySelector("form");
const mainIncio = document.querySelector("#main");
const divInicio = document.querySelector("#home");
const divAbout = document.querySelector("#about");
const divHard = document.querySelector("#hard");
const switchMode = () => {
    if(frm.mode.checked) {
        mainIncio.className = `back-main-light`;
        divInicio.className = `inicio-light`;
        divAbout.className = `about-me-light`;
        divHard.className = `hard-skills-light`;
    } else {
        mainIncio.className = `back-main-dark`;
        divInicio.className = `inicio`;
        divAbout.className = `about-me-dark`;
        divHard.className = `hard-skills`;
    }
}

frm.mode.addEventListener("change", switchMode);
