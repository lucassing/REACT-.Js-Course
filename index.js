function showPolicyTypeVal(){
    let policySelected = document.getElementById('policy_type_selector').value
    let selector = document.getElementById('value_policy_selected')
    switch (policySelected){
        case "basic":
            selector.innerText = "500$"
        break;
        case "intermedium":
            selector.innerText = "1000$"
        break;
        case  "premium":
            selector.innerText = "1500$"
        break;
    }
    selector.style.display = 'block'
}

function submitContactForm(){
    alert("Form submitted! We will contact you ASAP!")
}
