  const convert = () => {
    const jsonResultElement = document.getElementById("jsonResult");
    jsonResultElement.style.display = "none";
    const convertForm = document.getElementById("convertForm");
    if (convertForm) convertForm.addEventListener("submit", handleFormSubmit);
  };
  
  document.addEventListener("DOMContentLoaded", convert);