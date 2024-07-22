window.onload = function () {
    let name = prompt("Adın Nedir?");
  
    document.getElementById("myName").textContent = name;
  
    showDateTime();
  };
  
  function showDateTime() {
    let now = new Date();
  
    let day = now.getDate();
    let month = now.getMonth() + 1; 
    let year = now.getFullYear();
  
    
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
  
    let daysOfWeek = [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ];
    let dayOfWeek = daysOfWeek[now.getDay()]; 
  
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    
    let date = day + "/" + month + "/" + year + " " + dayOfWeek;
    let time = hours + ":" + minutes + ":" + seconds;
  
    
    let dateTime = date + " " + time;
  
   
    document.getElementById("myClock").innerText = dateTime;
  
    setTimeout(showDateTime, 1000);
  }