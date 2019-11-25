new Vue({
  el: '.content',
  data: {
    mainPrague: "",
    mainCzechRep: "",
    mainBrno: "",
    mainLiberec: "",
    mainBudejovice: "",
    mainOstrava: "",

    weatherPrague: "",
    weatherCzechRep: "",
    weatherBrno: "",
    weatherLiberec: "",
    weatherBudejovice: "",
    weatherOstrava: ""
  },

  mounted() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?id=3067696&lang=cz&units=metric&APPID=1dbaf66e87431e054b298a1e09ad90b1')
    .then((response) => {
      this.mainPrague = response.data.main;
      this.weatherPrague = response.data.weather[0];
    }),
    axios.get('http://api.openweathermap.org/data/2.5/weather?id=3077311&lang=cz&units=metric&APPID=1dbaf66e87431e054b298a1e09ad90b1')
    .then((response) => {
      this.mainCzechRep = response.data.main;
      this.weatherCzechRep = response.data.weather[0];
    }),
    axios.get('http://api.openweathermap.org/data/2.5/weather?id=3078610&lang=cz&units=metric&APPID=1dbaf66e87431e054b298a1e09ad90b1')
    .then((response) => {
      this.mainBrno = response.data.main;
      this.weatherBrno = response.data.weather[0];
    }),

    axios.get('http://api.openweathermap.org/data/2.5/weather?id=3071961&lang=cz&units=metric&APPID=1dbaf66e87431e054b298a1e09ad90b1')
    .then((response) => {
      this.mainLiberec = response.data.main;
      this.weatherLiberec = response.data.weather[0];
    }),
    axios.get('http://api.openweathermap.org/data/2.5/weather?id=3077916&lang=cz&units=metric&APPID=1dbaf66e87431e054b298a1e09ad90b1')
    .then((response) => {
      this.mainBudejovice = response.data.main;
      this.weatherBudejovice = response.data.weather[0];
    }),
    axios.get('http://api.openweathermap.org/data/2.5/weather?id=3068799&lang=cz&units=metric&APPID=1dbaf66e87431e054b298a1e09ad90b1')
    .then((response) => {
      this.mainOstrava = response.data.main;
      this.weatherOstrava = response.data.weather[0];
    })
  },

  filters: {
    decimal(amount) {
      const amt = Number(amount)
      return amt && amt.toLocaleString(undefined, {maximumFractionDigits:1}) || '0'
    }
  }
});
