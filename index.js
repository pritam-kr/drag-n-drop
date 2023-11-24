const candidateFields = document.querySelector("#candidate_fields");
const columns = document.querySelector("#columns");
const allFields = document.querySelector("#all_fields");
const header = document.querySelector("#header");

const CANDIDATE_FIELDS = [
  { id: "1", name: "first_name", lable: "First Name" },
  { id: "2", name: "last_name", lable: "Last Name" },
  { id: "3", name: "job_title", lable: "Job Title" },
  { id: "4", name: "email", lable: "Email" },
  { id: "5", name: "phone", lable: "Phone" },
  { id: "6", name: "company", lable: "Company" },
  { id: "7", name: "github", lable: "Github" },
  { id: "8", name: "twitter", lable: "Twitter" },
  { id: "9", name: "linkedin", lable: "LinkedIn" },
];

const EXTRACTED_FIELDS = [
  { id: "1", name: "first_name", lable: "First Name" },
  { id: "8", name: "twitter", lable: "Twitter" },
  { id: "4", name: "email", lable: "Email" },
  { id: "6", name: "company", lable: "Company" },
  { id: "2", name: "last_name", lable: "Last Name" },
  { id: "7", name: "github", lable: "Github" },
  { id: "3", name: "job_title", lable: "Job Title" },
  { id: "9", name: "linkedin", lable: "LinkedIn" },
  { id: "5", name: "phone", lable: "Phone" },
];

const renderCandidateField = () => {
  const fields = [...CANDIDATE_FIELDS];

  fields.forEach((item) => {
    let list = document.createElement("li");
    list.textContent = item.lable;
    list.classList.add("list_fields");
    candidateFields.appendChild(list);
  });
};

renderCandidateField();

//dragstart: When the user begins dragging the item, this event occurs.
const dragStart = (e) => {
  const currentElement = e.target;
  currentElement.style.borderRadius = "10px";
  // setTimeout(() => currentElement.classList.add("hide_item"), 0);
  e.dataTransfer.setData("text", e.target.id);
};

//dragend: When the user releases the mouse button while dragging an item, this event occurs.
const dragEnd = (e) => {};

//dragenter: When the mouse is moved over the target element for the
//first time when dragging, this event is triggered
const dragEnter = (e) => {
  // console.log(e.target, "dragEnter");
};

//dragover: When a drag occurs, this event is triggered when the mouse is
//dragged over an element. The process that happens during a listener is
//frequently the same as the dragenter event.
const dragOver = (e) => {
  e.preventDefault();
};

//dragleave: When the mouse leaves an element while dragging, this event is triggered.
const dragLeave = (e) => {
  //console.log(e.target, "dragLeave");
};

const dragDrop = (e) => {
  e.preventDefault();
  const draggableId = e.dataTransfer.getData("text");
  const dropZone = e.target;

  const droppableElement = document.querySelector(`#${draggableId}`);
  droppableElement.classList.remove("hide_item");

  if (!dropZone.hasChildNodes()) {
    dropZone.style.padding = "0";
    dropZone.style.border = "none";
    dropZone.appendChild(droppableElement);
    droppableElement.style.margin = "0";
  }
};

const renderExtractedField = () => {
  const fields = [...EXTRACTED_FIELDS];

  fields.forEach((item, i) => {
    let list = document.createElement("li");
    list.textContent = item.lable;
    list.classList.add("list_fields");
    list.setAttribute("id", `extract_field-${i}`);
    list.setAttribute("draggable", true);
    list.addEventListener("dragstart", dragStart);
    list.addEventListener("dragend", dragEnd);
    allFields.appendChild(list);
  });
};

renderExtractedField();

const renderColumns = () => {
  [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((item) => {
    let list = document.createElement("div");
    // list.textContent = item.lable;
    list.classList.add("column_fields");
    list.setAttribute("id", `column_field-${item}`);
    list.addEventListener("dragover", dragOver);
    list.addEventListener("dragenter", dragEnter);
    list.addEventListener("dragleave", dragLeave);
    list.addEventListener("drop", dragDrop);
    columns.appendChild(list);
  });
};

renderColumns();

// Back to extract Fields

allFields.addEventListener("dragover", (e) => {
  e.preventDefault();
});

allFields.addEventListener("dragenter", () => {});

allFields.addEventListener("dragleave", () => {});

allFields.addEventListener("drop", (e) => {
  e.preventDefault();

  const draggableId = e.dataTransfer.getData("text");
  const droppableElement = document.querySelector(`#${draggableId}`);
  droppableElement.style.marginBottom = "10px";
  allFields.appendChild(droppableElement);
});
