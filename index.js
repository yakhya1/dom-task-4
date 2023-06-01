const list = document.getElementById("list");
const input = document.getElementById("text");
const button = document.querySelector(".x")
button.addEventListener("click", (e)=> {
    e.preventDefault();

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.style.width ="33px";
    checkBox.style.border = "white"
    const li= document.createElement("li");

    const p = document.createElement("p");

    p.textContent = input.value;

    const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";

  deleteButton.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
  li.append(p);
  li.prepend(checkBox);
  list.append(li);
  li.append(deleteButton);
  li.style.listStyle = "none"
    input.value = ""
})