const getS = (selector) => document.querySelector(selector);
// Event listener for the "Edit" button to show the editing block 
getS(".btn-edit").onclick = function () {
  getS(".edit-block").classList.add("show");
  getS(".style-block").classList.remove("show");
  getS(".edit-area").value = getS(".top-block").innerHTML;
};
// Event listener for the "Save" button 
getS(".btn-save").onclick = function () {
  getS(".edit-block").classList.remove("show");
  getS(".top-block").innerHTML = getS(".edit-area").value;
};
// Event listener for the "Style"
getS(".btn-style").addEventListener("click", () => {
  getS(".style-block").classList.add("show");
  getS(".edit-block").classList.remove("show");
});

function fontSize() {
  getS(".top-block").style.fontSize = event.target.value;
}

// function change fondFamily select element 

let fF = document.getElementById("fontFamily");
fF.onchange = function (e) {
  getS(".top-block").style.fontFamily = this.value;
  fF.options[0].disabled = true;
};
// Array of colors for text and background color options
let colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "gray",
  "black",
  "white",
  "deeppink",
];
 // Event listener for the "Color of text" button to show the color options for text
getS(".btn-text-color").onclick = function () {
  getS(".colors").classList.remove("hide");
  for (let i = 0; i < getS(".colors").children.length; i++) {
    getS(".colors").children[i].style.backgroundColor = colors[i];
    getS(".colors").children[i].onclick = function () {
      getS(".top-block").style.color = this.style.backgroundColor;
      getS(".colors").classList.add("hide");
    };
  }
};
// Event listener for the "Background color" button to show the color options for background
getS(".btn-bg-color").onclick = function () {
  getS(".colors").classList.remove("hide");
  for (let i = 0; i < getS(".colors").children.length; i++) {
    getS(".colors").children[i].style.backgroundColor = colors[i];
    getS(".colors").children[i].onclick = function () {
      getS(".top-block").style.backgroundColor = this.style.backgroundColor;
      getS(".colors").classList.add("hide");
    };
  }
};

/* start function bold style */

function fontWeight() {
  getS(".top-block").classList.toggle("bold");
}
/* end function bold style */

/* start function cursive style */
function fontCursive() {
  getS(".top-block").classList.toggle("cursive");
}
/* end function cursive style */

// Event listener for the "Add" button
getS(".btn-add").onclick = function () {
  getS(".first").classList.remove("show");
  getS(".second").classList.add("show");
};

// create list
// Event listener for the "table" radio button to show the create table
getS("#listRadio").onclick = function () {
  getS(".create-list").style.display = "block";
  getS(".create-table").style.display = "none";
};
// Event listener for the "Create List" button to create an list
const list = document.forms["form-list"];
getS(".btn-create-list").onclick = function () {
  const countLi = list.countList.value;
  const typeLi = list.typeList.value;
  getS(".edit-area").value += `<ul style="list-style-type: ${typeLi}">`;
  for (let i = 0; i < countLi; i++) {
    getS(".edit-area").value += `<li>item ${i + 1}</li>`;
  }
  getS(".edit-area").value += "</ul>";

  getS(".first").classList.add("show");
  getS(".second").classList.remove("show");
};

// create table
getS("#tableRadio").onclick = function () {
  getS(".create-table").style.display = "block";
  getS(".create-list").style.display = "none";
};
// Event listener for the "Create Table" button to create a table
const table = document.forms["form-table"];
getS(".btn-create-table").onclick = function () {
  const countRow = table.countRow.value;
  const countCol = table.countCol.value;
  const widthCol = table.widthCol.value;
  const heightCol = table.heightCol.value;
  const widthBorder = table.widthBorder.value;
  const typeBorder = table.typeBorder.value;
  const colorBorder = table.colorBorder.value;

  let tableHTML = "<table style='border-collapse: collapse;'>";

  for (let i = 0; i < countRow; i++) {
    tableHTML += "<tr>";
    for (let j = 0; j < countCol; j++) {
      tableHTML += `<td style='width: ${widthCol}px; height: ${heightCol}px; border: ${widthBorder}px ${typeBorder} ${colorBorder}; text-align: center;'>${i + 1}-${j + 1}</td>`;
    }
    tableHTML += "</tr>";
  }

  tableHTML += "</table>";
  getS(".edit-area").value += tableHTML;

  getS(".first").classList.add("show");
  getS(".second").classList.remove("show");
};
