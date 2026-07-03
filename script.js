// Wait until the HTML document is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    
    // Select the button and the empty paragraph message element from the HTML
    const button = document.getElementById("actionButton");
    const messageElement = document.getElementById("message");

    // Add an event listener to listen for a 'click' on the button
    button.addEventListener("click", function() {
        // Change the text content of the paragraph when clicked
        messageElement.textContent = "🎉 Awesome! You just triggered a JavaScript event. Your file is connected properly!";
        
        // Log a message to the browser console for debugging purposes
        console.log("The button was successfully clicked.");
    });
});
