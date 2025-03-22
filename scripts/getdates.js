const currentYear =  document.querySelector("#current-year")
currentYear.innerHTML = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = "Last Modified: " + document.lastModified;