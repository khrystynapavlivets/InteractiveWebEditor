# InteractiveWebEditor
The code creates a page with the ability to edit the text, change the text style, and create tables and lists with various parameters
1. The getS function:
This function takes a CSS selector as an argument and returns the first DOM element that matches the selector using document.querySelector(selector).
2. Event listener for the "Edit" button:
When the element with the class .btn-edit is clicked, it triggers a function.
This function adds the class show to the element with the class .edit-block, which makes it visible.
It removes the class show from the element with the class .style-block, hiding the style block.
It sets the value of the .edit-area element to the HTML content of the .top-block element.
3. Event listener for the "Save" button:
When the element with the class .btn-save is clicked, it triggers a function.
This function removes the class show from the element with the class .edit-block, hiding the edit block.
It sets the HTML content of the .top-block element to the value of the .edit-area element.
4. vent listener for the "Style" button:
When the element with the class .btn-style is clicked, it triggers an anonymous arrow function.
This function adds the class show to the element with the class .style-block, making it visible.
It removes the class show from the element with the class .edit-block, hiding the edit block.
5. The fontSize function:
This function sets the font size of the .top-block element to the value of event.target.value.
6. Event listener for changing font family:
This code selects an element with the id fontFamily and adds an onchange event listener.
When the font family selection changes, it sets the font family of the .top-block element to the selected value and disables the first option.
7. Event listener for the "Background color" button:
When the element with the class .btn-bg-color is clicked, it triggers a function.
This function is similar to the previous one but changes the background color of the .top-block element.
8. Functions for toggling bold and cursive styles:
fontWeight toggles the class bold on the .top-block element.
fontCursive toggles the class cursive on the .top-block element.
9. Event listener for the "Add" button:
When the element with the class .btn-add is clicked, it triggers a function.
This function hides the element with the class .first and shows the element with the class .second.
10. Event listeners for creating lists and tables:
These event listeners handle the creation of lists and tables based on user input.
