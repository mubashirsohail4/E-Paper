const city = "NP_KHI";

window.addEventListener("load", function () {
  var localDate = new Date();

  // Get the UTC time in milliseconds
  var utcTime = localDate.getTime();

  // Calculate the offset for UTC+5 (Pakistan Standard Time) timezone (5 hours * 60 minutes * 60 seconds * 1000 milliseconds)
  var utcOffset = 5 * 60 * 60 * 1000;

  // Adjust the UTC time with the offset to get the time in UTC+5 timezone
  var date = new Date(utcTime + utcOffset);

  srcImageSetter(date);
});

function srcImageSetter(date) {

  var paperSrc = [];
  var magSrc = [];
  var paperPageCount = 0;

  // Set the date to previous day if it is not 12 PM
  if (date.getHours() < 12) {
    date.setDate(date.getDate() - 1);
  }

  // Sunday date of the current week for magazine
  let sunday = new Date(date.valueOf())
  var sundayDate = new Date(
    sunday.setDate(date.getDate() - date.getDay()),
  );

  var prePaperSrc = preSrcSetter(date);
  var preMagSrc = preSrcSetter(sundayDate);

  // If day is Sunday
  if (date.getDay() === 0) {
    paperPageCount = 14;
    paperSrc[0] = prePaperSrc + "FRONT_PAGE_1.jpg";
    paperSrc[1] = prePaperSrc + "CITY_PAGE002_2.jpg";
    paperSrc[2] = prePaperSrc + "NATIONAL_PAGE003_3.jpg";
    paperSrc[3] = prePaperSrc + "CLASSIFIED_PAGE004_4.jpg";
    paperSrc[4] = prePaperSrc + "BAQIA_PAGE005_5.jpg";
    paperSrc[5] = prePaperSrc + "COMMERCE_PAGEBW_6.jpg";
    paperSrc[6] = prePaperSrc + "SPORTS_PAGE007_7.jpg";
    paperSrc[7] = prePaperSrc + "BACK_PAGE008_8.jpg";
    paperSrc[8] = prePaperSrc + "METROPOLITAN_PAGE009_9.jpg";
    paperSrc[9] = prePaperSrc + "EDITORIAL_PAGE10_10.jpg";
    paperSrc[10] = prePaperSrc + "OPINION_PAGE011_11.jpg";
    paperSrc[11] = prePaperSrc + "MAGAZINE_PAGE12_12.jpg";
    paperSrc[12] = prePaperSrc + "Sunday_Class_01_19.jpg";
    paperSrc[13] = prePaperSrc + "Sunday_Class_02_20.jpg";
  } else {
    paperPageCount = 10;
    paperSrc[0] = prePaperSrc + "FRONT_PAGE_1.jpg";
    paperSrc[1] = prePaperSrc + "METROPOLITAN_PAGEC002_2.jpg";
    paperSrc[2] = prePaperSrc + "NAT_INT_PAGEC003_3.jpg";
    paperSrc[3] = prePaperSrc + "CITY_PAGEC004_4.jpg";
    paperSrc[4] = prePaperSrc + "BAQIA_PAGEC005_5.jpg";
    paperSrc[5] = prePaperSrc + "EDITORIAL_PAGEC006_6.jpg";
    paperSrc[6] = prePaperSrc + "CLASSIFIED_PAGEC007_7.jpg";
    paperSrc[7] = prePaperSrc + "SPORTS_PAGEC008_8.jpg";
    paperSrc[8] = prePaperSrc + "MAGAZINE_PAGEC009_9.jpg";
    paperSrc[9] = prePaperSrc + "BACK_PAGEC010_10.jpg";
  }

  for (let i = 0; i < paperPageCount; i++) {
    document.querySelector(".paper-img.pg" + i).setAttribute("src", paperSrc[i]);
  }

  var magPageCount = 15;
  magSrc[0] = preMagSrc + "EXP-SM01_53.jpg";
  magSrc[1] = preMagSrc + "EXP-SM02_54.jpg";
  magSrc[2] = preMagSrc + "EXP-SM03_55.jpg";
  magSrc[3] = preMagSrc + "EXP-SM04_56.jpg";
  magSrc[4] = preMagSrc + "EXP-SM05_57.jpg";
  magSrc[5] = preMagSrc + "EXP-SM06_58.jpg";
  magSrc[6] = preMagSrc + "EXP-SM07_59.jpg";
  magSrc[7] = preMagSrc + "EXP-SM0809_60.jpg";
  magSrc[8] = preMagSrc + "EXP-SM10_61.jpg";
  magSrc[9] = preMagSrc + "EXP-SM11_63.jpg";
  magSrc[10] = preMagSrc + "EXP-SM12_64.jpg";
  magSrc[11] = preMagSrc + "EXP-SM13_65.jpg";
  magSrc[12] = preMagSrc + "EXP-SM14_66.jpg";
  magSrc[13] = preMagSrc + "EXP-SM15_67.jpg";
  magSrc[14] = preMagSrc + "EXP-SM16_68.jpg";

  for (let i = 0; i < magPageCount; i++) {
    document.querySelector(".mag-img.pg" + i).setAttribute("src", magSrc[i]);
  }
};

function preSrcSetter(date) {
  const dateFormat = "/" + date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2);
  var preSrc = "https://www.express.com.pk/images/" + city + dateFormat + dateFormat + "-" + city + "-";
  return preSrc;
}
