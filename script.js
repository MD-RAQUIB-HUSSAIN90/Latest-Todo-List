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

  // DELETE FUNCTIONALITY
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // DONE FUNCTIONALITY
  done.addEventListener("click", function () {
    span.classList.add("checkOut");
    done.classList.add("redo");
  });

  // UNDO FUNCTIONALITY
  undo.addEventListener("click", function () {
    span.classList.remove("checkOut");
    done.classList.remove("redo");
  });

  span.addEventListener("click", () => {
    span.contentEditable = true;
    span.focus();
  });

  // EDIT FUNCTIONALITY
  edit.addEventListener("click", function () {
    span.contentEditable = true;
    span.focus();
  });

  // SAVE ON ENTER
  span.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();

      span.contentEditable = false;
    }
  });

  // SAVE ON CLICK OUTSIDE
  span.addEventListener("blur", function () {
    span.contentEditable = false;
    span.classList.remove("checkOut");
    done.classList.remove("redo");
  });

  input.value = "";
});

// DELETE ALL FUNCTIONALITY
dltBtn.addEventListener("click", () => {
  ul.innerHTML = "";
  count = 1;
  input.value = "";
});
