
let power = false
let fanIndicator = 1
let temprature = 24

function togglePower(){
    if (power == false){
        power = true
        let image = document.getElementById('powerOn-Off');
        image.setAttribute('src', "./Footage/power-off-solid-full_Gren.svg");

        document.getElementById("indicators").style.display = "flex";
        document.getElementById("indicators").style.backgroundColor = "rgba(149, 225, 167, 0.3)";
    }else{
        power = false
        let image = document.getElementById('powerOn-Off');
        image.setAttribute('src', "./Footage/power-off-solid-full_Red.svg");

        document.getElementById("indicators").style.display = "none";
    }

    console.log(power)
}

function tempIncrease(){
    if (power == true){
        if(temprature >= 16 && temprature < 29){
            temprature ++
            console.log(temprature)
        }
        document.getElementById("tempIndicator").textContent = temprature;
    }
}

function tempDecrease(){
    if (power == true){
        if(temprature <= 29 && temprature > 16){
            temprature --
            console.log(temprature)
        }
        document.getElementById("tempIndicator").textContent = temprature;
    }
}

function fanSpeed(){
    if (power == true){
        if (fanIndicator < 3 && fanIndicator >= 0){
            fanIndicator ++
            document.getElementById("fanSpeed").textContent = fanIndicator;
        }else{
            fanIndicator = 1
            document.getElementById("fanSpeed").textContent = fanIndicator;
        }
    }
    console.log(fanIndicator)
}



