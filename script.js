let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let dltBtn = document.querySelector("#deleteAll");

// ADD FUNCTIONALITY
btn.addEventListener("click", function () {
  if (input.value.trim() === "") {
    alert("Please enter a task before adding !!");
    return;
  }

  // CREATE LIST ITEMS
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = input.value;
  li.classList.add("list-item");
  li.prepend(span);

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
  undo.classList.add("done");

  // CREATE DIV
  let div = document.createElement("div");
  div.classList.add("btn-box");

  li.append(div);

  // APPEND BUTTONS
  div.appendChild(done);
  div.appendChild(undo);
  div.appendChild(deleteBtn);

  ul.append(li);

  // DELETE FUNCTIONALITY
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // DONE FUNCTIONALITY
  done.addEventListener("click", function () {
    span.classList.add("checkOut");
  });

  // UNDO FUNCTIONALITY
  undo.addEventListener("click", function () {
    span.classList.remove("checkOut");
  });

  input.value = "";
});

// DELETE ALL FUNCTIONALITY
dltBtn.addEventListener("click", () => {
  ul.innerHTML = "";
});