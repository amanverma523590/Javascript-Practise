var categories = [
  "All",
  "Electronics",
  "Footwear",
  "Fashion",
  "Men's Clothing",
];
function LoadCategories() {
  document.querySelector("ol").innerHTML = "";
  document.querySelector("select").innerHTML = "";
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("ul").innerHTML = "";
  document.querySelector("nav").innerHTML = "";
  for (var item of categories) {
    var li = document.createElement("li");
    li.innerHTML = item;
    document.querySelector("ol").appendChild(li);

    var option = document.createElement("option");
    option.text = item;
    option.value = item;

    document.querySelector("select").appendChild(option);

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = item;
    tr.appendChild(td);

    document.querySelector("tbody").appendChild(tr);

    var checkLi = document.createElement("li");
    checkLi.innerHTML = `<input type="checkbox"> ${item}`;

    document.querySelector("ul").appendChild(checkLi);

    var div = document.createElement("div");
    div.innerHTML = `<button style="width:200px; margin-top:20px">${item}</button>  `;

    document.querySelector("nav").appendChild(div);
  }
}
function bodyload() {
  LoadCategories();
}

function AddClick() {
  var categoryname = document.getElementById("txtCategory").value;
  if (categories.indexOf(categoryname) == -1) {
    categories.push(categoryname);
    alert(`${categoryname} Add to List`);
    LoadCategories();
    document.getElementById("txtCategory").value = "";
  } else {
    alert(`${categoryname} Exists`);
  }
}

function RemoveClick() {
  var categoryname = document.querySelector("select").value;
  var index = categories.indexOf(categoryname);
  var flag = confirm(`Are you sure, whant to delete : ${categoryname}`);
  if (flag == true) {
    categories.splice(index, 1);
    LoadCategories();
  }
}
