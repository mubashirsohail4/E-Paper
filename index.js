const paperImages = document.querySelectorAll(".paper-img");

window.addEventListener("load", function () {
  var localDate = new Date();

  // Get the UTC time in milliseconds
  var utcTime = localDate.getTime();

  // Calculate the offset for UTC+5 (Pakistan Standard Time) timezone (5 hours * 60 minutes * 60 seconds * 1000 milliseconds)
  var utcOffset = 5 * 60 * 60 * 1000;

  // Adjust the UTC time with the offset to get the time in UTC+5 timezone
  var date = new Date(utcTime + utcOffset);

  if (date.getHours() < 12) {
    date.setDate(date.getDate() - 1)
  }

  const dateFormat = "/" + date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2);
  const city = "NP_KHI";
  const preSrc = "https://www.express.com.pk/images/" + city;
  var currentSrc = [];

  for (let i = 0; i < paperImages.length; i++) {
    currentSrc[i] = preSrc + dateFormat + dateFormat + "-" + city + "-";
  }

  srcImageSetter(currentSrc, date);
});

function srcImageSetter(src, date) {
  var pageCount = 0;
  if (date.getDay() === 0) {
    pageCount = 13;
    src[0] = src[0] + "Front_Page_1.jpg";
    src[1] = src[1] + "City_Page002_2.jpg";
    src[2] = src[2] + "National_Page003_3.jpg";
    src[3] = src[3] + "Classified_Page004_4.jpg";
    src[4] = src[4] + "Baqia_Page005_5.jpg";
    src[5] = src[5] + "Commerce_PageBW_6.jpg";
    src[6] = src[6] + "Sports_PAGE007_7.jpg";
    src[7] = src[7] + "Back_Page008_8.jpg";
    src[8] = src[8] + "Metropolitan_Page009_9.jpg";
    src[9] = src[9] + "Editorial_Page10_10.jpg";
    src[10] = src[10] + "Opinion_Page011_11.jpg";
    src[11] = src[11] + "Magazine_Page12_12.jpg";
    src[12] = src[12] + "Sunday_Class_01_19.jpg";
    src[13] = src[13] + "Sunday_Class_02_20.jpg";
  } else {
    pageCount = 9;
    src[0] = src[0] + "Front_Page_1.jpg";
    src[1] = src[1] + "Metropolitan_PageC002_2.jpg";
    src[2] = src[2] + "NAT_INT_PageC003_3.jpg";
    src[3] = src[3] + "City_PageC004_4.jpg";
    src[4] = src[4] + "Baqia_PageC005_5.jpg";
    src[5] = src[5] + "Editorial_PageC006_6.jpg";
    src[6] = src[6] + "Classified_PageC007_7.jpg";
    src[7] = src[7] + "Sports_PageC008_8.jpg";
    src[8] = src[8] + "Magazine_PageC009_9.jpg";
    src[9] = src[9] + "Back_PageC010_10.jpg";
  }

  for (let i = 0; i <= pageCount; i++) {
    document.querySelector(".pg" + (i + 1)).setAttribute("src", src[i]);
  }

};
