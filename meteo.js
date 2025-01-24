

    const searchbtn = document.querySelector('.btn');
    const searchbox = document.querySelector('.search-input');

    const apiKey = "a652cfec10c374408a42f0530571a4ba";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
    async function afficherMeteo(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data =await response.json();
        document.getElementById('nomVille').innerHTML=data.name;
        document.getElementById('ta').innerHTML=data.main.temp + "°C";
        document.getElementById('humidite').innerHTML=data.main.humidity + "%";
        document.getElementById('vent').innerHTML=data.wind.speed + "Km/h";
        document.querySelector('.icon').src= `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        console.log(data)
    }

    const apiUrl1 = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

    // async function afficheJours(city){
    //     const response  = await fetch (apiUrl1 + city + `&appid=${apiKey}`);
    //     var data1  = await response.json();
    //     document.getElementById('td1').innerHTML=data1.list(0).main.temp;
    //     document.getElementById('td2').innerHTML=data1.list(8).main.temp;
    //     document.getElementById('td3').innerHTML=data1.list(16).main.temp;
    //     document.getElementById('td4').innerHTML=data1.list(24).main.temp;
    //     document.getElementById('td5').innerHTML=data1.list(32).main.temp;
    //     document.getElementById('td6').innerHTML=data1.list(39).main.temp;
        
    //     console.log(data1)
    // }
    
    searchbtn.addEventListener('click' , ()=>{
        afficherMeteo(searchbox.value);
        meteoCinqJour(searchbox.value);
    } )

    
    async function meteoCinqJour(city) {
        const response = await fetch(apiUrl1 +city+`&appid=${apiKey}`);
        var dataJour = await response.json();
        console.log(dataJour);
    
        // const forecastFooter = document.querySelector(".footer");
        const days = dataJour.list.filter((item) => item.dt_txt.includes("12:00:00"));
        
    
        document.querySelector('#td1').innerHTML=days[0].main.temp+" °C";
        document.querySelector('#td2').innerHTML=days[8].main.temp+" °C";
        document.querySelector('#td3').innerHTML=days[16].main.temp+" °C";
        document.querySelector('#td4').innerHTML=days[24].main.temp+" °C";
        document.querySelector('#td5').innerHTML=days[32].main.temp+" °C";
        document.querySelector('#td6').innerHTML=days[39].main.temp+" °C";
    
    
    }