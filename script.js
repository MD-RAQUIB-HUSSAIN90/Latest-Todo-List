let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let dltBtn = document.querySelector("#deleteAll");

let count = 1;
// ADD FUNCTIONALITY
btn.addEventListener("click", function () {
  if (input.value.trim() === "") {
    alert("Please enter a task before adding !!");
    return;
  }

  //   CREATE LIST ORDER NUMBER
  let num = document.createElement("span");
  num.textContent = count++ + ".";
  num.classList.add("num");

  // CREATE LIST ITEMS
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = input.value;
  span.classList.add("inptVal");
  span.style.minWidth = "50%";
  li.classList.add("list-item");

  //   PREPENDING
  li.prepend(span);
  li.prepend(num);

  // CREATE DELETE BUTTON
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.classList.add("delete");

  // CREATE DONE BUTTON
  let done = document.createElement("button");
  done.innerHTML = '<i class="fa-solid fa-check"></i>';
  done.classList.add("done");

  // CREATE UNDO BUTTON
  let undo = document.createElement("button");
  undo.innerHTML = '<i class="fa-solid fa-rotate-left"></i>';
  undo.classList.add("undo");

  // CREATE EDIT BUTTON
  let edit = document.createElement("button");
  edit.innerHTML = '<i class="fa-solid fa-pen"></i>';
  edit.classList.add("edit");

  // CREATE DIV
  let div = document.createElement("div");
  div.classList.add("btn-box");
  li.append(div);

  // APPEND BUTTONS
  div.appendChild(done);
  div.appendChild(undo);
  div.appendChild(edit);
  div.appendChild(deleteBtn);
  ul.append(li);

  // DONE FUNCTIONALITY
  function Done() {
    span.classList.add("checkOut");
    num.classList.add("checkOut");
    done.classList.add("checkOut");
    edit.classList.add("checkOut");
    edit.removeEventListener("click", editContent);
  }
  done.addEventListener("click", Done);

  // UNDO FUNCTIONALITY
  function Undo() {
    span.classList.remove("checkOut");
    done.classList.remove("checkOut");
    num.classList.remove("checkOut");
    edit.addEventListener("click", editContent);
  }
  undo.addEventListener("click", Undo);

  // EDIT FUNCTIONALITY
  function editContent() {
    span.contentEditable = true;
    span.focus();
  }
  edit.addEventListener("click", editContent);

  function ItemDltBtn() {
    li.remove();
  }
  // DELETE FUNCTIONALITY
  deleteBtn.addEventListener("click", ItemDltBtn);

  // SAVE ON ENTER
  function Save(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      span.contentEditable = false;
    }
  }
  span.addEventListener("keydown", Save);

  // SAVE ON CLICK OUTSIDE
  function saveOnClick() {
    span.contentEditable = false;
    span.classList.remove("checkOut");
    done.classList.remove("redo");
  }
  span.addEventListener("blur", saveOnClick);

  input.value = "";
});

// DELETE ALL FUNCTIONALITY
function deleteAllBtn() {
  ul.innerHTML = "";
  count = 1;
  input.value = "";
}
dltBtn.addEventListener("click", deleteAllBtn);
