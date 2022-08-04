

const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")


const shrekLivesH2 = document.getElementById("shrek-life-counter")
const farquadLivesH2 = document.getElementById("farquad-life-counter")

const farquadChoices = ['rock', 'paper', 'scissors']
let shrekLives = 3;
let farquadLives = 3;

//delay function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


// on rock button click
const rock = () => {
    document.getElementById("shrek-rock").style.visibility="visible";
    document.getElementById("prompt").innerHTML = "Shrek chose rock!"

    sleep(1500).then(() =>{

    let randomIndex = Math.floor(Math.random() * farquadChoices.length);
    let farqPick = farquadChoices[randomIndex];
    
    if (farqPick === 'paper'){
        document.getElementById("farq-paper").style.visibility="visible";
        document.getElementById("prompt").innerHTML = "Lord Farquad chose paper!"
        sleep(1500).then(() =>{
        
        document.getElementById("prompt").innerHTML = "Paper wins!"
        shrekLives--
        });
        

    } else if (farqPick === 'scissors'){
        document.getElementById("farq-scissors").style.visibility="visible";
        document.getElementById("prompt").innerHTML = "Lord Farquad chose scissors!"
        sleep(1500).then(() =>{
    
        document.getElementById("prompt").innerHTML = "Rock wins!"
        farquadLives--
        });
    } else if (farqPick === 'rock'){
        document.getElementById("farq-rock").style.visibility="visible";
        document.getElementById("prompt").innerHTML = "Lord Farquad chose rock!"
        sleep(1500).then(() =>{
            document.getElementById("prompt").innerHTML = "Tie!"
        });
        
    }

    sleep(1600).then(() =>{
    if (shrekLives === 0){
        // document.getElementById("shrek-life-counter").innerHTML = shrekLives
        // // document.getElementById("container").style.visibility="hidden";
        // // document.getElementById("container2").style.visibility="visible";
        // // document.getElementById("shrekLoses").style.visibility="visible";
        // document.getElementById("shrek-rock").style.visibility="hidden";
        // document.getElementById("farq-rock").style.visibility="hidden";
        // document.getElementById("farq-paper").style.visibility="hidden";
        // document.getElementById("farq-scissors").style.visibility="hidden";
        window.location.href = "http://127.0.0.1:5500/rps-frontend/sl.html"
        // window.open("http://127.0.0.1:5500/rps-frontend/sl.html")
        
    } else if ((farquadLives === 0)&&(shrekLives > 2)){
        axios.post('http://localhost:4004/api/changeWinCondition')
        .then(res => {
            console.log(res.data)

            console.log('asdf')
            
            window.location.href = "http://127.0.0.1:5500/rps-frontend/homescreen.html"
            
        })
        
    } else if (farquadLives === 0){
        console.log('fdasfdsa')
        // document.getElementById("farquad-life-counter").innerHTML = farquadLives
        // document.getElementById("container").style.visibility="hidden";
        // document.getElementById("container2").style.visibility="visible";

        // document.getElementById("shrekWins").style.visibility="visible";
        // document.getElementById("shrek-rock").style.visibility="hidden";
        // document.getElementById("farq-rock").style.visibility="hidden";
        // document.getElementById("farq-paper").style.visibility="hidden";
        // document.getElementById("farq-scissors").style.visibility="hidden";
        // window.open("http://127.0.0.1:5500/rps-frontend/sw.html")
        
        window.location.href = "http://127.0.0.1:5500/rps-frontend/sw.html"
        
    } else {

    document.getElementById("shrek-life-counter").innerHTML = shrekLives
    document.getElementById("farquad-life-counter").innerHTML = farquadLives
    sleep(1500).then(() =>{
        document.getElementById("shrek-rock").style.visibility="hidden";
        document.getElementById("farq-rock").style.visibility="hidden";
        document.getElementById("farq-paper").style.visibility="hidden";
        document.getElementById("farq-scissors").style.visibility="hidden";
        document.getElementById("prompt").innerHTML = "What Will Shrek Do?"


    })
    }
})

})

    
}

// on paper button click
const paper = () => {

    document.getElementById("shrek-paper").style.visibility="visible";
    document.getElementById("prompt").innerHTML = "Shrek chose paper!"

    sleep(1500).then(() =>{

    let randomIndex = Math.floor(Math.random() * farquadChoices.length);
    let farqPick = farquadChoices[randomIndex];

    if (farqPick === 'scissors'){

        document.getElementById("farq-scissors").style.visibility="visible";
        document.getElementById("prompt").innerHTML = "Lord Farquad chose scissors!"
        sleep(1500).then(() =>{
        
        document.getElementById("prompt").innerHTML = "Scissors wins!"
        shrekLives--
        });

    } else if (farqPick === 'rock'){

        document.getElementById("farq-rock").style.visibility="visible";
        document.getElementById("prompt").innerHTML = "Lord Farquad chose rock!"
        sleep(1500).then(() =>{
        
        document.getElementById("prompt").innerHTML = "Paper wins!"
        farquadLives--
        });

    } else if (farqPick === 'paper'){
        document.getElementById("farq-paper").style.visibility="visible";
        document.getElementById("prompt").innerHTML = "Lord Farquad chose paper!"
        sleep(1500).then(() =>{
            document.getElementById("prompt").innerHTML = "Tie!"
        });
        
    }

    
sleep(1500).then(() =>{
    if (shrekLives === 0){
        // document.getElementById("shrek-life-counter").innerHTML = shrekLives
        // document.getElementById("shrekLoses").style.visibility="visisble";
        window.location.href = "http://127.0.0.1:5500/rps-frontend/sl.html"
        
    } else if ((farquadLives === 0)&(shrekLives > 2)){
        axios.post('http://localhost:4004/api/changeWinCondition')
        .then(res => {
            console.log(res.data)

            console.log('asdf')
            
            window.location.href = "http://127.0.0.1:5500/rps-frontend/homescreen.html"
            
        })
        
    }else if (farquadLives === 0){
        // document.getElementById("farquad-life-counter").innerHTML = farquadLives
        // document.getElementById("shrekWins").style.visibility="visisble";
        window.location.href = "http://127.0.0.1:5500/rps-frontend/sw.html"
        
    } else {

    document.getElementById("shrek-life-counter").innerHTML = shrekLives
    document.getElementById("farquad-life-counter").innerHTML = farquadLives
    sleep(1500).then(() =>{
        document.getElementById("shrek-paper").style.visibility="hidden";
        document.getElementById("farq-rock").style.visibility="hidden";
        document.getElementById("farq-paper").style.visibility="hidden";
        document.getElementById("farq-scissors").style.visibility="hidden";
        document.getElementById("prompt").innerHTML = "What Will Shrek Do?"


    })
    }
})


})

    

}


// on scissors button click
const scissors = () => {

    document.getElementById("shrek-scissors").style.visibility="visible";
    document.getElementById("prompt").innerHTML = "Shrek chose scissors!"

    sleep(1500).then(() =>{

    let randomIndex = Math.floor(Math.random() * farquadChoices.length);
    let farqPick = farquadChoices[randomIndex];

    if (farqPick === 'rock'){
        document.getElementById("farq-rock").style.visibility="visible";
        document.getElementById("prompt").innerHTML = "Lord Farquad chose rock!"
        sleep(1500).then(() =>{
        
        document.getElementById("prompt").innerHTML = "Rock wins!"
        shrekLives--
        });
        
    } else if (farqPick === 'paper'){
        document.getElementById("farq-paper").style.visibility="visible";
        document.getElementById("prompt").innerHTML = "Lord Farquad chose paper!"
        sleep(1500).then(() =>{
        
        document.getElementById("prompt").innerHTML = "Scissors wins!"
        farquadLives--
        });
    } else if (farqPick === 'scissors'){
        document.getElementById("farq-scissors").style.visibility="visible";
        document.getElementById("prompt").innerHTML = "Lord Farquad chose scissors!"
        sleep(1500).then(() =>{
            document.getElementById("prompt").innerHTML = "Tie!"
        });
       
    }
    sleep(1500).then(() =>{
    if (shrekLives === 0){
        // document.getElementById("shrek-life-counter").innerHTML = shrekLives
        // document.getElementById("shrekLoses").style.visibility="visisble";
        window.location.href = "http://127.0.0.1:5500/rps-frontend/sl.html"
        
    } else if ((farquadLives === 0)&(shrekLives > 2)){
        axios.post('http://localhost:4004/api/changeWinCondition')
        .then(res => {
            console.log(res.data)

            console.log('asdf')
            
            window.location.href = "http://127.0.0.1:5500/rps-frontend/homescreen.html"
            
        })
        
    } else if (farquadLives === 0){
        // document.getElementById("farquad-life-counter").innerHTML = farquadLives
        // document.getElementById("shrekWins").style.visibility="visisble";
        window.location.href = "http://127.0.0.1:5500/rps-frontend/sw.html"
        
    } else {

    document.getElementById("shrek-life-counter").innerHTML = shrekLives
    document.getElementById("farquad-life-counter").innerHTML = farquadLives
    sleep(1500).then(() =>{
        document.getElementById("shrek-scissors").style.visibility="hidden";
        document.getElementById("farq-rock").style.visibility="hidden";
        document.getElementById("farq-paper").style.visibility="hidden";
        document.getElementById("farq-scissors").style.visibility="hidden";
        document.getElementById("prompt").innerHTML = "What Will Shrek Do?"


    })
    }

})

});
}

// const submit = () => {
//     return document.getElementById("hallOfFameName").style.visibility="hidden";

// }

// const getHall = () => {
//     console.log('hit the button')
//     // axios.get(`http://localhost:4004/api/hall`)
//     // .then(res => {
//     //     console.log(res.data)
//     // })

// }



rockBtn.addEventListener('click', rock)
paperBtn.addEventListener('click', paper)
scissorsBtn.addEventListener('click', scissors)
// submitBtn.addEventListener('click', submit)
// getHallBtn.addEventListener('click', getHall)
// homeBtn.addEventListener('click',

// sleep(1600).then(() => {
//     if (shrekLives === 0) {
//         document.getElementById("shrekWins").style.visibility="visisble";

//     } else if (farquadLives === 0) {
//         document.getElementById("shrekLoses").style.visibility="visisble";

//     }

// })

// document.getElementById("thingid").style.visibility="hidden"; ----- to hide
// document.getElementById("thingid").style.visibility="visible"; ----- to show

//window.open()
