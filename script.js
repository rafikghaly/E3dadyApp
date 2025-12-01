// Replace this with your actual Apps Script Web App URL
const API_URL = 'https://script.google.com/macros/s/AKfycbz1n0-H-x6TesQ0Akc86btR7kMKLzTfZe-P8JC5MpcobSfH1Fdr4pjC33vLlNz3YHICow/exec';

async function apiCall(action, data) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: action,
            ...data
        })
    });
    
    return await response.json();

}
