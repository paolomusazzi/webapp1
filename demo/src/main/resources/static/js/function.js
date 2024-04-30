// Function to fetch users from the backend and display them in the UI
function fetchUsers() {
    fetch('http://localhost:8080/persons')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            return response.json();
        })
        .then(users => {
            displayUsers(person);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}

// Function to create a new user
function createUser(id, lastName, firstName, address, telephone) {
    const newUser = {
        id:id,
        lastName: lastName,
        firstName: firstName,
        address: address,
        telephone: telephone
    };

    fetch('http://localhost:8080/persons', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create user');
        }
        fetchUsers(); // Refresh the user list after creation
    })
    .catch(error => {
        console.error('Error creating user:', error);
    });
}

// Function to update an existing user
function updateUser(id, lastName, firstName, address, telephone) {
    const updatedUser = {
        id:id,
        lastName: lastName,
        firstName: firstName,
        address: address,
        telephone: telephone
    };

    fetch(`http://localhost:8080/persons/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
        fetchUsers(); // Refresh the user list after update
    })
    .catch(error => {
        console.error('Error updating user:', error);
    });
}

// Function to delete a user
function deleteUser(Id) {
    fetch(`http://localhost:8080/persons/${userId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete user');
        }
        fetchUsers(); // Refresh the user list after deletion
    })
    .catch(error => {
        console.error('Error deleting user:', error);
    });
}

// Function to display users in the UI
function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Clear existing list
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.username;
        userList.appendChild(listItem);
    });
}

// Add event listeners to forms for form submissions

// Create User Form
const createUserForm = document.getElementById('create-user-form');
createUserForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const lastName = document.getElementById('create-lastName').value;
    const firstName = document.getElementById('create-firstName').value;
    const address = document.getElementById('create-address').value;
    const telephone = document.getElementById('create-telephone').value;
    createUser(lastName, firstName, address, telephone);
});

// Update User Form
const updateUserForm = document.getElementById('update-user-form');
updateUserForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const Id = document.getElementById('update-user-id').value;
    const username = document.getElementById('update-firstName').value;
    const email = document.getElementById('update-lastName').value;
    const password = document.getElementById('update-address').value;
    const telephone = document.getElementById('update-telephone').value;
    updateUser(userId, firstName, lastName, address, telephone);
});

// Delete User Form
const deleteUserForm = document.getElementById('delete-user-form');
deleteUserForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userIdToDelete = document.getElementById('delete-user-id').value;
    deleteUser(userIdToDelete);
});

// Fetch users when the page loads
fetchUsers();










/*
function fetchUsers() {
    fetch('http://localhost:8080/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            return response.json();
        })
        .then(users => {
            // Display the retrieved users in the UI
            displayUsers(users);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}


// Function to create a new user
function createPerson(id, lastName, firstName, address, telephone) {
    const newUser = {
        id:id,
        lastName: lastName,
        firstName: firstName,
        address: address,
        telephone: telephone
    };

    fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create user');
        }
        // Fetch users again to update the UI
        fetchUsers();
    })
    .catch(error => {
        console.error('Error creating user:', error);
    });
}

// Function to update an existing user
function updatePerson(id, lastName, firstName, address, telephone) {
    const updatedUser = {
        id:id,
        lastName: lastName,
        firstName: firstName,
        address: address,
        telephone: telephone
    };

    fetch(`http://localhost:8080/${id}`,
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
        // Fetch users again to update the UI
        fetchUsers();
    })
    .catch(error => {
        console.error('Error updating user:', error);
    });
}

// Function to delete a user
function deleteUser(id) {
    fetch(`http://localhost:8080/users/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete user');
        }
        // Fetch users again to update the UI
        fetchUsers();
    })
    .catch(error => {
        console.error('Error deleting user:', error);
    });
}

// Function to display users in the UI
function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Clear existing list
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.username;
        userList.appendChild(listItem);
    });
}


// Fetch users when the page loads
fetchUsers();

// Example: Create a new user when a form is submitted
const form = document.getElementById('user-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const telephone = document.getElementById('telephone').value;
    createUser(id, firstName, lastName, address, telephone);
});

// Example: Update a user when a form is submitted
const updateForm = document.getElementById('update-form');
updateForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const updatedlastName = document.getElementById('updated-lastName').value;
    const updatedfirstName = document.getElementById('updated-firstName').value;
    const updatedaddress = document.getElementById('updated-address').value;
    const updatedtelephone = document.getElementById('updated-telephone').value;
    updateUser(id, updatedUsername, updatedEmail, updatedPassword);
});

// Example: Delete a user when a button is clicked
const deleteButton = document.getElementById('delete-button');
deleteButton.addEventListener('click', function() {
    const userIdToDelete = document.getElementById('user-id-to-delete').value;
    deleteUser(userIdToDelete);
});

*/
