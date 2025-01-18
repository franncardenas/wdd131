// Variables to reference DOM elements
const input = document.querySelector('#favchap'); // Input field
const button = document.querySelector('button'); // Add Chapter button
const list = document.querySelector('ul'); // Unordered list

// Event listener for the Add Chapter button
button.addEventListener('click', () => {
    // Trim the input value to remove extra spaces
    const chapter = input.value.trim();

    // Check if the input is empty
    if (chapter !== '') {
        // Create a new list item (li) and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Populate the li with the chapter title and append the delete button
        li.textContent = chapter;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        li.append(deleteButton);

        // Add the li to the list
        list.append(li);

        // Clear the input field and set focus back to it
        input.value = '';
        input.focus();

        // Add event listener to the delete button
        deleteButton.addEventListener('click', () => {
            list.removeChild(li); // Remove the list item
            input.focus(); // Return focus to the input field
        });
    } else {
        // If the input is empty, show an alert or return focus to the input
        alert('Please enter a chapter title.');
        input.focus();
    }
});
