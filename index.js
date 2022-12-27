let browserDetailsRef = document.getElementById("browser-details");
let osDetailsRef = document.getElementById("os-details");

var browserList = [
    { name: "Firefox", value: "Firefox" },
    { name: "Opera", value: "OPR" },
    { name: "Edge", value: "Edg" },
    { name: "Chrome", value: "Chrome"},
    { name: "Safari", value: "Safari" },
];

var os = [
    { name: "Android", value: "Android" },
    { name: "iPhone", value: "iPhone" },
    { name: "iPad", value: "Mac" },
    { name: "Macintosh", value: "Mac" },
    { name: "Linux", value: "Linux" },
    { name: "Windows", value: "Win" },
];

let broswerChecker = () => {
    let userDetails = navigator.userAgent;
    for (let i in browserList) {
        if (userDetails.includes(browserList[i].value)) {
            browserDetailsRef.innerHTML = browserList[i].name || "Unknown Browser";
            break;    
        }
    }
for (let i in os) {
    if (userDetails.includes(os[i].value)) {
        osDetailsRef.innerHTML = os[i].name;
            break;
    }
  }
};

window.onload = broswerChecker();

