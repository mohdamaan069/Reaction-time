// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function () {
    const movingShape = document.getElementById("moving-shape");
    const reactionTimeDisplay = document.getElementById("reaction-time");
    let startTime;
    let clicked = false;

    // Move the shape randomly within the game container
    function moveShape() {
        const containerWidth = document.getElementById("game-container").offsetWidth;
        const containerHeight = document.getElementById("game-container").offsetHeight;
        const shapeWidth = movingShape.offsetWidth;
        const shapeHeight = movingShape.offsetHeight;

        const maxX = containerWidth - shapeWidth;
        const maxY = containerHeight - shapeHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        movingShape.style.left = randomX + "px";
        movingShape.style.top = randomY + "px";
    }

    // Change the shape's appearance randomly
    function changeShape() {
        const shapeClasses = ["circle", "triangle", "rectangle"];

        // Remove all existing shape classes
        for (let i = 0; i < shapeClasses.length; i++) {
            movingShape.classList.remove(shapeClasses[i]);
        }

        // Add a randomly selected shape class
        const randomIndex = Math.floor(Math.random() * shapeClasses.length);
        movingShape.classList.add(shapeClasses[randomIndex]);
    }

    // Start the game by moving the shape, changing its appearance, and tracking time
    function startGame() {
        moveShape();
        changeShape();
        startTime = new Date().getTime();
    }

    // Handle shape click event
    movingShape.addEventListener("click", function () {
        if (startTime && !clicked) {
            const endTime = new Date().getTime();
            const reactionTime = endTime - startTime;

            reactionTimeDisplay.textContent = `Your Reaction Time: ${reactionTime/1000}s`;
            clicked = true;

            setTimeout(function () {
                clicked = false;
                startGame();
            }, 1000);
        }
    });

    // Start the game on page load
    startGame();
});
