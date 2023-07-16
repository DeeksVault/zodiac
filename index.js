const zodiac = document.getElementById("zodiac");
const body = document.body;
// body.style.backgroundColor = "red"
const changeBackground = ()=>{
    switch(zodiac.value){
        case "Aries":
            body.style.backgroundColor="violet"
            break;
        case "Tarus":
            body.style.backgroundColor="blue"
            break;
        case "Gemini":
            body.style.backgroundColor="green"
            break;
        case "Cancer":
            body.style.backgroundColor="yellow"
            break;
        case "Leo":
            body.style.backgroundColor="orange"
            break;
        case "Virgo":
            body.style.backgroundColor="red"
            break;
        case "Libra":
            body.style.backgroundColor="light-green"
            break;
        case "Scorpio":
            body.style.backgroundColor="light-blue"
            break;
        case "Sagittarius":
            body.style.backgroundColor="blue"
            break;
        case "Aquarius":
            body.style.backgroundColor="blue"
            break;
        case "Capricorn":
            body.style.backgroundColor="blue"
            break;
        case "Pisces":
            body.style.backgroundColor="blue"
            break;
        default:
            break;
    }
};