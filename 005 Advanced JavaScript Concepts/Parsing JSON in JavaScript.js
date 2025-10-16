function parseJSON() {
  const jsonInput = document.getElementById("jsonInput").value;
  try {
    const parsedData = JSON.parse(jsonInput);
    console.log("Parsed JSON:", parsedData);
    alert("JSON parsed successfully! Check the console for output.");
  } catch (error) {
    console.error("Error parsing JSON:", error);
    alert("Invalid JSON format. Please correct it and try again.");
  }
}
