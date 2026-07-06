// const api="67fe2398154d6bacbd357369734b817d";

// const input=document.querySelector(".in-put input");
// const button=document.querySelector("#btn");
// const cityname=document.querySelector("#o");
// const temp=document.querySelector("#n");
// const condition=document.querySelector("#e");
// btn.addEventListener("click",()=>{
// const city=input.value.trim();
// if(city!==""){
//     getweather(city);
// }
// })
// input.addEventListener("keypress",(e)=>{
//     if(e.key==="Enter"){
//         btn.click();
//     }
// })
// async function getweather(city){
// try{
//     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//     const response=await fetch(url);
//     const data=await response.json();
//     if(data.cod==="404"){
//         alert("city not found");
//         return;
//     }
//     cityname.innerText=data.name;
//     temp.innerText=Math.round(data.main.temp)+"°C";
//     condition.innerText=data.weather[0].main;
// }
// catch(error){
//     console.log("error",error);
// }
// }

const api = "67fe2398154d6bacbd357369734b817d";
const input = document.querySelector(".in-put input");
const button = document.getElementById("btn");
const cityname = document.getElementById("o");
const temp = document.getElementById("n");
const condition = document.getElementById("e");
const cards = document.querySelectorAll(".pic img, .other img");
let otherTemps = null;
button.addEventListener("click", () => {
    const city = input.value.trim();
    if (city !== "") {
        otherTemps = null; 
        getweather(city);
        input.value = ""; 
    }
});
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        button.click();
    }
});
function highlightCondition(current) {
    cards.forEach(card => {
        card.style.border = "none";
    });
    if (current === "Clear") {
        document.getElementById("one").style.border = "3px solid red";
    } 
    else if (current === "Clouds") {
        document.getElementById("three").style.border = "3px solid red";
    } 
    else if (current === "Rain") {
        document.getElementById("five").style.border = "3px solid red";
    } 
    else if (current === "Thunderstorm") {
        document.getElementById("four").style.border = "3px solid red";
    }
}
async function getweather(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod == "404") {
            alert("City not found");
            return;
        }

        cityname.innerText = data.name;
        temp.innerText = Math.round(data.main.temp) + "°C";
        condition.innerText = data.weather[0].main;

        highlightCondition(data.weather[0].main);
        if (!otherTemps) {
            otherTemps = {
                t1: Math.floor(Math.random() * 10 + 20),
                t2: Math.floor(Math.random() * 10 + 25),
                t3: Math.floor(Math.random() * 10 + 22),
                t4: Math.floor(Math.random() * 10 + 20),
                t5: Math.floor(Math.random() * 10 + 25)
            };
        }
        document.getElementById("on").innerText = otherTemps.t1 + "°C";
        document.getElementById("off").innerText = otherTemps.t2 + "°C";
        document.getElementById("bb").innerText = otherTemps.t3 + "°C";

        document.getElementById("on1").innerText = otherTemps.t4 + "°C";
        document.getElementById("off1").innerText = otherTemps.t5 + "°C";

    } catch (error) {
        console.log("error", error);
    }
}