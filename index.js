document.addEventListener("load", function(event) {
  for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.className = "row";
    document.querySelector("#gridArea").appendChild(row);
    document.getElementById("row").style.height = "60px";
  }

  //button new grid
  document.querySelector("#newgrid").addEventListener("click", function(event) {
    let input = prompt("How many squares per side?");
    if (input <= 0 || input > 64) {
      alert("Please enter a number between 1 and 16");
    } else if (input > 0 && input < 64) {
      document.querySelector("#grid").innerHTML = "";
      for (let i = 0; i < input; i++) {
        document.querySelector("#grid").appendChild(row);
      }
      for (let x = 0; x < input; x++) {
        let column = document.createElement("div");
        column.className = "column";
        document.querySelector(".row").appendChild(column);
      }
      let maxSize = 960 / input;
      document.getElementById("row").style.height = maxSize + "px";
      document.getElementById("column").style.width = maxSize + "px";
      document.getElementById("column").style.height = maxSize + "px";
    } else {
      alert("Please follow the instructions!");
    }
  });
  document
    .getElementById("column")
    .addEventListener("mouseover", function(event) {
      document.getElementById("column").style.backgroundColor = "black";
    });
});
