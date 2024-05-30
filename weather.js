
const apiurl =
  "https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=";
const apikey = "0c80c034c5d6e44c8fd6bea2e8e6f290";
const cityname1 = document.querySelector(".search input");
const cityname=localStorage.getItem("cityname");
document.querySelector(".cityname").innerHTML=cityname;
/*datesmonths section 
-----------------------start*/
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let month = months[d.getMonth()];
document.querySelector(".monthname").innerHTML = month;
let day = days[d.getDay()];
document.querySelector(".dayname").innerHTML = day;
let monthinteger=d.getMonth();
document.querySelector(".month").innerHTML =monthinteger+1;
/*dates months 
-----------section end*/
const btn=document.querySelector(".icon");
getweatherdata(cityname);

async function getweatherdata(city) {
  
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".inputerr").style.display="block";

  } else {
    
    document.querySelector(".weather").style.display = "flex";
    
    const data = await response.json();
    console.log(data);
    console.log(data.list[0]);
    document.querySelector(".forecast1").innerHTML =data.list[0].weather[0].main;
    document.querySelector(".temp1").innerHTML = data.list[0].main.temp + "°C";
    document.querySelector(".pressure1").innerHTML = data.list[0].main.pressure;
    
   
    /*document.querySelector(".forecast2").innerHTML =data.list[1].weather[0].main;
    document.querySelector(".temp2").innerHTML = data.list[1].main.temp + "°C";
    document.querySelector(".pressure2").innerHTML = data.list[1].main.pressure;
    document.querySelector(".forecast3").innerHTML =data.list[2].weather[0].main;
    document.querySelector(".temp3").innerHTML = data.list[2].main.temp + "°C";
    document.querySelector(".pressure3").innerHTML = data.list[2].main.pressure;
    document.querySelector(".forecast4").innerHTML =data.list[3].weather[0].main;
    document.querySelector(".temp4").innerHTML = data.list[3].main.temp + "°C";
    document.querySelector(".pressure4").innerHTML = data.list[3].main.pressure;
    */
    /*let alertmsg = document.querySelector(".forecast1").textContent;
    if(alertmsg=="Clouds")
    {
        alert("please stay safe");
    }*/
    
    cityname.value = "";
    
  }
  const now = new Date();
const localeTime = now.toLocaleTimeString(); 

document.querySelector(".time").textContent=localeTime;


 
}



const a=35;
let alertmsg = document.querySelector(".temp1").textContent;
showalert(alertmsg)
function showalert(str)
{
  if(str>a)
  {
    alert("sx");
  }
}
function rendersearch()
{
  window.location.href="search.html";
}









