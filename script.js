const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const trash = document.querySelector(".trash");

parrafos.forEach(parrafo => {
  parrafo.addEventListener("dragstart", (e) => {
    console.log("Estoy arrastrando el parrafo: " + parrafo.innerText);
    parrafo.classList.add("dragging");
    e.dataTransfer.setData("id", parrafo.id)
    const elemento_fantasma = document.querySelector(".imagen-fantasma")
    e.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
  });

  parrafo.addEventListener("dragend", () => {
    //console.log("Estoy terminando de arrastrar");
    parrafo.classList.remove("dragging");
  });
});

secciones.forEach(seccion => {
  seccion.addEventListener("dragover", (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move";
    //console.log("Drag Over");
    //
  });

  seccion.addEventListener("drop", (e) => {
    console.log("Drop");
    const id_parrafo = e.dataTransfer.getData("id");
    // console.log("Párrafo id:", id_parrafo)
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  })
});

trash.addEventListener("dragover", e => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "copy";
});

trash.addEventListener("drop", e => {
    const id_trash = e.dataTransfer.getData("id");
    console.log("Borraste:", id_trash);
    const parrafo_trash = document.getElementById(id_trash);
    parrafo_trash.remove();
})

