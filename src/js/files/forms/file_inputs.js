const fileInputs = document.querySelectorAll("input[type='file']");
if (fileInputs.length) {
   fileInputs.forEach(input => {
      const label = input.previousElementSibling;
      input.addEventListener("change", (event) => {
         if (label.tagName == "LABEL") {
            const fileName = input.files[0].name;
            label.querySelector("span").textContent = fileName.length > 10 ? fileName.slice(0, 10) + '...' : fileName;
         }
      })
   })
}