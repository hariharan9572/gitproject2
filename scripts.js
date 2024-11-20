// JavaScript for Git Project functionality

document.addEventListener("DOMContentLoaded", () => {
    const showMessageButton = document.getElementById("showMessageButton");
    const dynamicMessage = document.getElementById("dynamicMessage");

    // Button click event to display a dynamic message
    showMessageButton.addEventListener("click", () => {
        dynamicMessage.textContent = "Thank you for exploring the Git Project! Feel free to explore more.";
        dynamicMessage.style.display = "block";

        // Add some dynamic styling
        dynamicMessage.style.color = "#007aff"; // Apple-inspired blue color
        dynamicMessage.style.backgroundColor = "#f1f1f1";
        dynamicMessage.style.border = "1px solid #d1d1d6";
        dynamicMessage.style.borderRadius = "8px";
        dynamicMessage.style.padding = "10px 15px";
        dynamicMessage.style.marginTop = "10px";
        dynamicMessage.style.fontSize = "1rem";
        dynamicMessage.style.textAlign = "center";
        dynamicMessage.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
    });
});