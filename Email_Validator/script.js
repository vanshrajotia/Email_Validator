submit.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("clicked");
  content.innerHTML = `<h3><img src="loading.svg" alt="loading"></h3>`;
  let key = "ema_live_OYPzAN82W0pnSqMX8ytGtWGSIxMGeQPnb5HqSngQ";
  let email = document.getElementById("mail").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

  let res = await fetch(url);
  let result = await res.json();

  let str = "";
  for (key of Object.keys(result)) {
    if(result[key] !== "" && result[key] !== " "){
        str = str + `<div>${key}: ${result[key]} </div>`;
    }
    
  }

  content.innerHTML = str;
});
