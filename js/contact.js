import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from "./apikey.js";
const Airtable = require('airtable');

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

export function airtable() {

    const myForm = document.getElementById('contact-form');

    myForm.addEventListener('submit', function(e) {

        e.preventDefault(); 

        const [message, name, phone, email] = Array(...myForm.elements).map(element => element.value);

        base('Contacts').create([ 
        {
            "fields": {
                "Phone #": phone,
                "Name": name,
                "Email Address": email,
                "Interactions": message
            }
        }])
        alert("Success: Form Sent!");
    });
}