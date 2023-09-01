const handleFormSubmit = (event) => {
    event.preventDefault();
    const convertForm = event.target;
    const formData = new FormData(convertForm);
    const resultElement = document.getElementById("result");
    const jsonResultElement = document.getElementById("jsonResult");
    
    if (convertForm && resultElement && jsonResultElement) {
      fetchConversionAndDisplayResults(formData, resultElement, jsonResultElement);
      jsonResultElement.style.display = "block";
    }
  };