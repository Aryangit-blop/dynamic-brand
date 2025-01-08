

document.addEventListener("DOMContentLoaded", function() {
    let itemid = document.getElementsByClassName("info");
    if (itemid.length > 0) {
        let phn = itemid[0].getElementsByClassName("phn-number")
        phn[0].addEventListener("click", () => {
            let phoneNum = String(phn[0].textContent)
            phoneNum = phoneNum.trim();
            let cntry_id = phoneNum.indexOf('+')
            phoneNum = phoneNum.substring(cntry_id)
            console.log(phoneNum)
        navigator.clipboard.writeText(phoneNum).then(() => {
            alert('Phone number copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
        });
      
    } else {
        console.log("No elements with class 'info' found.");
    }

    let logo_selector = this.getElementById("logo")
    function animateLogo() {
        logo_selector.animate(
        [
            { transform: 'scale(1)' },
            { transform: 'scale(1.2)' },
            { transform: 'scale(1)' }
        ],
        {
            duration: 1000,
            iterations: 500
        }
        )
    }
    logo_selector.addEventListener("click", animateLogo)
});