const notesEl = document.querySelector(".notes");
const addBtn = document.querySelector(".note-add");
// const addEl = document.querySelector(".note-add");

function createNote(title, text) {
  const noteEl = document.createElement("div");
  noteEl.classList.add("note");
  noteEl.innerHTML = `
		<div class="note-header">
			<p id="note-title">${title}</p>
			<div class="note-actions">
				<button class="note-edit"><i class="fa-regular fa-pen-to-square"></i></button>
				<button class="note-delete"><i class="fa-solid fa-trash"></i></button>
			</div>
		</div>
		<p id="note-text">${text}</p>
	`;

  const editBtn = noteEl.querySelector(".note-edit");
  const deleteBtn = noteEl.querySelector(".note-delete");

  editBtn.addEventListener("click", (e) => {
    console.log();
  });

  deleteBtn.addEventListener("click", (e) => {
    noteEl.remove();
  });

  return noteEl;
}

addBtn.addEventListener("click", (e) => {
  const el = createNote("Загаловок", "Ваш текст");
  notesEl.appendChild(el);
});
