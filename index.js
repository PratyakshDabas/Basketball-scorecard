let homeScore = 0
let scoreboard = document.getElementById("home-score")

let guestScore = 0
let guestScoreboard = document.getElementById("guest-score")

function leading(){
    if(homeScore > guestScore){
        return lead.textContent += " Home"
    }else{
        return lead.textContent += " Guest"
    }
}


function onePoint(){
    homeScore += 1
    scoreboard.textContent = homeScore
}

function twoPoint(){
    homeScore += 2
    scoreboard.textContent = homeScore
}

function threePoint(){
    homeScore += 3
    scoreboard.textContent = homeScore
}





function onePointGuest(){
    guestScore += 1
    guestScoreboard.textContent = guestScore
}

function twoPointGuest(){
    guestScore += 2
    guestScoreboard.textContent = guestScore
}

function threePointGuest(){
    guestScore += 3
    guestScoreboard.textContent = guestScore
}

function reset(){
    scoreboard.textContent = 0
    guestScoreboard.textContent = 0
    homeScore = 0
    guestScore = 0
}

let lead = document.getElementById("leaderTeam")

