let errorDiv = document.querySelector(".error");

try {
  // Intentionally cause an error
  nonExistentFunction();
} catch (error) {
  // Handle the error
  errorDiv.textContent = "An error occurred: " + error.message;
  console.error("Caught an error:", error);
} finally {
  console.log("Execution completed.");
}
