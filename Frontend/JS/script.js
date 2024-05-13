const allInvestments=document.getElementsByClassName("allInvestment");
const investment=document.getElementById("investment");
const watchlist=document.getElementById("watchlist");
const allInvestors=document.getElementsByClassName("allInvestors");
const topInvestors=document.getElementsByClassName('topInvestors');
const signIns=document.getElementsByClassName("signInbutton");
const signUps=document.getElementsByClassName('signUpbutton');
const homes=document.getElementsByClassName('home');
const signUpForm=document.getElementById('mySignUpForm');


signUpForm.addEventListener("submit", async function(event) {
    event.preventDefault(); 
    const formData = new FormData(signUpForm);


    const signUpData = {};
    formData.forEach((value, key) => {
        signUpData[key] = value;
    });

    // Send the sign-up data to the backend
    try {
        const response = await fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signUpData),
        });
        const result = await response.json();
        console.log("Success", result);
        
    } catch (error) {
        console.error("Error: ", error);
       
    }
});


Array.from(allInvestments).forEach(allInvestment => {
    allInvestment.addEventListener('click', () => {
        window.location.href = './AllInvestment.html';
    });
});
Array.from(allInvestors).forEach(investor=>{
    investor.addEventListener('click', ()=>{
        window.location.href='./AllInvestor.html'
    })
});
Array.from(signIns).forEach(signIn=>{
    signIn.addEventListener('click', ()=>{
        window.location.href='./SignIn.html';
    })
});
Array.from(homes).forEach(home=>{
    home.addEventListener('click',moveToHome=()=>{
        window.location.href='./dashboard.html'   
    });
})
Array.from(signUps).forEach(signUp=>{
    signUp.addEventListener('click', ()=>{
        window.location.href='./SignIn.html'
        
    })
})
Array.from(topInvestors).forEach(investor=>{
    investor.addEventListener('click', ()=>{
        window.location.href='./TopInvestor.html'
    })
})
investment.addEventListener('click', moveToInvestment=()=>{
    window.location.href='./Investment.html' 
});
watchlist.addEventListener('click', moveToWatchList=()=>{
    window.location.href='./WatchList.html'
});







