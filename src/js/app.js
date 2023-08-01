
import "../scss/style.scss";

import * as core from "./files/functions.js";


core.isWebp();

core.menuToggleInit();
core.spollers();

import "./files/script.js";



//practics js

const listItems = document.querySelectorAll(".item-special__price-off")

listItems.forEach(item => { console.log(item) })

