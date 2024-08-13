**Simple Quiz Project**

This is a simple quiz application built using HTML, CSS, and JavaScript. It displays one question at a time and allows users to select an answer. After selecting an answer, users can proceed to the next question, and at the end, their score is displayed.
**
Project Structure**

index.html: This is the main HTML file that contains the structure of the quiz application.

styles.css: This CSS file styles the quiz application, including the layout, colors, and button designs.

script.js: This JavaScript file handles the logic of the quiz, including displaying questions, handling user input, and showing the score.

**Features**
Question Display: The quiz displays one question at a time.

Answer Selection: Users can select one answer per question. Correct and incorrect answers are indicated by different colors.

Score Calculation: At the end of the quiz, the user's score is displayed.

Restart Option: Users can restart the quiz after completing it.

**Code Explanation**
HTML (index.html)
The HTML file includes a basic structure for the quiz, with elements for displaying the question, answer buttons, and a "Next" button.
The quiz is contained within a div with the class "app".

CSS (styles.css)
The CSS file styles the quiz application with a blue background and a white quiz container.
It includes styles for the question, buttons, and different states of the buttons (hover, correct, incorrect).

JavaScript (script.js)
questions Array: Contains the list of questions and their corresponding answers.
startQuiz Function: Initializes the quiz by resetting the question index and score.
showQuestion Function: Displays the current question and its possible answers.
selectAnswer Function: Handles the user's answer selection, highlights correct/incorrect answers, and updates the score.
showScore Function: Displays the user's final score at the end of the quiz.
handleNextButton Function: Moves to the next question or shows the final score if the quiz is completed.
The script dynamically creates buttons for each answer and handles user interaction.
