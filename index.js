import { excelToJSON } from "./js/scripts/getDocument.js";
import { makeKeys } from "./js/scripts/utilities.js";

// async function initialize() {
//   const rowObject = getDocument();
// }
// initialize();

async function pageStyle() {
  let selectedFile;
  console.log(window.XLSX);
  document.getElementById("input").addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
  });

  document.getElementById("button").addEventListener("click", async (event) => {
    const database = await excelToJSON(selectedFile);
    //console.log(database);
    const keys = makeKeys(database);
    //console.log(keys);
    keys.forEach((element) => {
      makeCard(element);
    });
  });
}

function makeCard(array) {
  if (array.length !== 0) {
    array.forEach((element) => {
      console.log(element);
      const li = document.createElement("li");
      li.innerHTML = `
    <p>${element.challenger1.Nome}</p>
    <p>X</p>
     <p>${element.challenger2.Nome}</p>
  `;
      element.challenger1.Sexo == "MASCULINO"
        ? document
            .getElementById(`keys-list-masc-${element.challenger1.cat}`)
            .appendChild(li)
        : document
            .getElementById(`keys-list-fem-${element.challenger1.cat}`)
            .appendChild(li);
    });
  }
}

pageStyle();
