const fetchConversionAndDisplayResults = (formData, resultElement, jsonResultElement) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `/api/convert?${new URLSearchParams(formData).toString()}`, true);
  
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        resultElement.textContent = data.string || data;
        jsonResultElement.textContent = JSON.stringify(data);
      } else {
        console.error("Error:", xhr.statusText);
      }
    };
  
    xhr.onerror = () => console.error("Network Error");
    xhr.send();
  };