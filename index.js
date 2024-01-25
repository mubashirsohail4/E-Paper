const todayBtn = document.querySelector("#today");
const paperImages = document.querySelectorAll(".paper-img");

todayBtn.addEventListener("click", function () {
  
  const date = new Date();
  const year = "" + date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = "" + date.getDate();

  const dateFormat = year + month + day;

  const preSrc = "https://www.express.com.pk/images/NP_KHI/";

  var src = [];

  for (let i = 0; i < paperImages.length; i++) {
    src[i] = preSrc + dateFormat + "/" + dateFormat + "-NP_KHI-";
  }

  if (date.getDay() === 0) {
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

  for (let i = 0; i < paperImages.length; i++) {
    document.querySelector(".pg" + (i + 1)).setAttribute("src", src[i]);
  }
});
