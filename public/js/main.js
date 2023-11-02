const submitBtn = document.getElementById("submitBtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temprature = document.getElementById("temprature");
const temp_status = document.getElementById("temp_status");
const dayname=document.getElementById("day");
const today_date=document.getElementById("today_date");
const datahide=document.querySelector('.middle_layer');

let dateObject = new Date();
let dt=new Date().toDateString();
let dtarr=dt.split(' ');
let day=dtarr[0];
let date = dtarr[2];
let month = dtarr[1];

let hrmin=dateObject.toLocaleString('en-in',{hour: 'numeric', minute:'numeric'});
let dthr= `${day} ${month} ${date} | ${hrmin} `
dayname.innerText=`${day}`;
today_date.innerText= `${date} ${month}`
const getinfo = async (event) => {
  event.preventDefault();
  let cityval = cityname.value;
  if (cityval === "") {
    city_name.innerText = "Please provide valid city name";
    datahide.classList.add('data_hide');
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=03479cccfa915aa469df8a451050f1cb`;
      const respone = await fetch(url);
      const jsondata = await respone.json();
      const arrdata = [jsondata];

       
      city_name.innerText=`${arrdata[0].name}, ${arrdata[0].sys.country}`
      temprature.innerText=arrdata[0].main.temp;
     /// temp_status.innerText=arrdata[0].weather[0].main;

      let tempratureStatus=arrdata[0].weather[0].main;;
      if (tempratureStatus=='Clear'){
        temp_status.innerHTML ="<i class='fas fa-sun' style='color:#eccc68;'></i>";
      }
      else if (tempratureStatus=='Clouds'){
        temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
      }
      else if (tempratureStatus=='Rainy'){
        temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
      }
      else
      {
        temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
      }

      datahide.classList.remove('data_hide');

    } catch {
      city_name.innerText = "Please provide valid city name";
      datahide.classList.add('data_hide');
    }
  }
};

submitBtn.addEventListener("click", getinfo);
