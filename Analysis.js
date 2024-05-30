
    const apiurl ="https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=";
    const apikey = "0c80c034c5d6e44c8fd6bea2e8e6f290";

    document.addEventListener("DOMContentLoaded", function() {
    var inputData = localStorage.getItem("cityname"); 
    getweatherdata(inputData);
    
});



async function getweatherdata(city) {
    
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".weather").style.display = "none";

  } else {
    
    document.querySelector(".weather").style.display = "flex";
    document.querySelector(".weather1 .cityname").textContent=city;
    document.querySelector(".weather2 .cityname").textContent=city;
    document.querySelector(".weather3 .cityname").textContent=city;
    document.querySelector(".weather4 .cityname").textContent=city;
    
    const data = await response.json();
    console.log(data);
    console.log(data.list[0]);
    document.querySelector(".forecast1").innerHTML =data.list[0].weather[0].main;
    document.querySelector(".temp1").innerHTML = data.list[0].main.temp + "°C";
    document.querySelector(".pressure1").innerHTML = data.list[0].main.pressure;
    document.querySelector(".forecast2").innerHTML =data.list[1].weather[0].main;
    document.querySelector(".temp2").innerHTML = data.list[1].main.temp + "°C";
    document.querySelector(".pressure2").innerHTML = data.list[1].main.pressure;
    document.querySelector(".forecast3").innerHTML =data.list[2].weather[0].main;
    document.querySelector(".temp3").innerHTML = data.list[2].main.temp + "°C";
    document.querySelector(".pressure3").innerHTML = data.list[2].main.pressure;
    document.querySelector(".forecast4").innerHTML =data.list[3].weather[0].main;
    document.querySelector(".temp4").innerHTML = data.list[3].main.temp + "°C";
    document.querySelector(".pressure4").innerHTML = data.list[3].main.pressure;
   
    const umbrella1=document.querySelector(".text1");
    const sunstroke=document.querySelector(".text2");
    const outdoors=document.querySelector(".text3");
    const droplet=document.querySelector(".text4");
    const glasses=document.querySelector(".text5");
    const cool=document.querySelector(".text6");
    const hygenic=document.querySelector(".text7");

    if(umbrella1)
      {
        if(data.list[0].main.temp>35)
          {
            umbrella1.innerHTML="umbrella needed";
            droplet.innerHTML="Drink plenty of water";
            glasses.innerHTML="Wear lightweight, loose-fitting clothing and sunscreen.";
            sunstroke.innerHTML="Danger";
            outdoors.innerHTML="UnSafe";
            cool.innerHTML=" Use air conditioning, take cool showers";
            hygenic.innerHTML="--";
          }
          else if(data.list[0].weather[0].main=="Rain"){
            umbrella1.innerHTML="umbrella needed";
            sunstroke.innerHTML="No Chance";
            outdoors.innerHTML="UnSafe";
            cool.innerHTML="--";
            hygenic.innerHTML=" Wash your hands regularly";
            droplet.innerHTML="Drink hot water";
            cool.innerHTML=" not use air conditioning";
            
          }
          else if(data.list[0].main.temp<20)
            {
              droplet.innerHTML="Drink hot water";
            cool.innerHTML=" not use air conditioning";
            umbrella1.innerHTML="umbrella not needed";
            sunstroke.innerHTML="---";
            outdoors.innerHTML="stay home";
              
            }
          else{
            umbrella1.innerHTML="umbrella not needed";
            droplet.innerHTML="--";
            glasses.innerHTML="Wear lightweight, loose-fitting clothing ";
            sunstroke.innerHTML="Medium";
            outdoors.innerHTML="safe";
            cool.innerHTML="--"
            hygenic.innerHTML="--"
          }
      }
      else{
        alert("umbrella element not found");
      }
      
        

  const now = new Date(); 
  const localeTime = now.toLocaleTimeString();
  document.querySelector(".time1").textContent = localeTime;
  const now1 = new Date();
  now1.setHours(now1.getHours() + 4); 
  const localeTime1 = now1.toLocaleTimeString();
  document.querySelector(".time2").textContent = localeTime1;
  const now2 = new Date();
  now2.setHours(now2.getHours() + 8); 
  const localeTime2 = now2.toLocaleTimeString();
  document.querySelector(".time3").textContent = localeTime2;
  const now3 = new Date();
  now3.setHours(now3.getHours() + 12); 
  const localeTime3 = now3.toLocaleTimeString();
  document.querySelector(".time4").textContent = localeTime3;
  
   
   
  }
}










