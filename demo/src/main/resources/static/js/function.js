document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('http://localhost:8080/users');
    const myJson = await response.json();
    userAction(myJson); // Chiamo la funzione userAction passando i dati JSON
  } catch (error) {
    console.error('Si è verificato un errore durante il recupero dei dati:', error);
  }
});

// La tua funzione userAction qui...
const userAction = async (jsonData) => {
console.log(jsonData);
};