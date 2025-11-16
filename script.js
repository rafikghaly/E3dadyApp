// Replace this with your actual Apps Script Web App URL
const API_URL = 'YOUR_APPS_SCRIPT_URL_HERE';

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