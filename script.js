// Replace this with your actual Apps Script Web App URL
const API_URL = 'https://script.google.com/macros/s/AKfycbyD-kk6K8bpPM-x5BABONpBgB0l22kn6CB8V7wpth7FdZ33GcYVS2TxOSUfCo3JwllW_Q/exec';

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

