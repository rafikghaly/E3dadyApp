// Replace this with your actual Apps Script Web App URL
const API_URL = 'https://script.google.com/macros/s/AKfycbyQNqIukQRuj2Eo35AOKGJPm9NzNBoe3D_HuKWvAkc3P89smHqf31ar1LiGVHxV3s7l4A/exec';

async function apiCall(action, data) {
    console.log('Making API call:', action, data);
    
    // Check if API_URL is set
    if (API_URL === 'YOUR_APPS_SCRIPT_URL_HERE') {
        alert('ERROR: You need to set your Apps Script URL in script.js!');
        throw new Error('API_URL not configured');
    }
    
    const payload = {
        action: action,
        ...data
    };
    
    console.log('Sending payload:', payload);
    
    const response = await fetch(API_URL, {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        },
    });
    
    const result = await response.json();
    console.log('API response:', result);
    return result;
}




