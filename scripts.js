// JavaScript for Git Project functionality

document.addEventListener("DOMContentLoaded", () => {
    const showMessageButton = document.getElementById("showMessageButton");
    const dynamicMessage = document.getElementById("dynamicMessage");

    // Button click event to display a dynamic message
    showMessageButton.addEventListener("click", () => {
        dynamicMessage.textContent = "Thank you for exploring the Git Project! Feel free to explore more.";
        dynamicMessage.style.display = "block";
        dynamicMessage.style.color = "#007aff";
        dynamicMessage.style.marginTop = "10px";
    });
});