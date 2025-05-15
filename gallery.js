
document.addEventListener("DOMContentLoaded", () => {
  fetch("paintings.json")
    .then(response => response.json())
    .then(paintings => {
      const gallery = document.getElementById("gallery");
      paintings.forEach(p => {
        const div = document.createElement("div");
        div.innerHTML = `<img src="\${p.image}" alt="\${p.title}">
                         <h3>\${p.title}</h3>
                         <p>\${p.medium} - \${p.size}</p>`;
        gallery.appendChild(div);
      });
    });
});
