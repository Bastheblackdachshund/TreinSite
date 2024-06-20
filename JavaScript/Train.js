
const Wheel_LS = "selectedWheel";
const Cockpit_LS = "selectedCockpit";
const Front_LS = "selectedFront";

// Event listener for clicks
onclick = function (e) {
    switch (e.target.id) {
        case "blackWheels":
            localStorage.setItem(Wheel_LS, "Black");
            window.location.href = "Cockpit.html";
            break;
        case "redWheels":
            localStorage.setItem(Wheel_LS, "Red");
            window.location.href = "Cockpit.html";
            break;
        case "BlackCockpit":
            localStorage.setItem(Cockpit_LS, "Black");
            window.location.href = "Front.html";
            break;
        case "RedCockpit":
            localStorage.setItem(Cockpit_LS, "Red");
            window.location.href = "Front.html";
            break;
        case "BlackFront":
            localStorage.setItem(Front_LS, "Black");
            Result();
            break;
        case "redFront":
            localStorage.setItem(Front_LS, "Red");
            Result();
            break;
        case "IDK":
            window.location.href = "Homepage.html";
            break;
    }
};

function Result() {
    const wheel = localStorage.getItem(Wheel_LS);
    const cockpit = localStorage.getItem(Cockpit_LS);
    const front = localStorage.getItem(Front_LS);
    if (wheel == "Red" && cockpit == "Red" && front == "Red") {
        window.location.href = "ResultRRR.html";
    }
    else if (wheel == "Red" && cockpit == "Black" && front == "Red") {
        window.location.href = "ResultRBR.html";
    }
    else if (wheel == "Red" && cockpit == "Black" && front == "Black") {
        window.location.href = "ResultRBB.html";
    }
    else if (wheel == "Red" && cockpit == "Red" && front == "Black") {
        window.location.href = "ResultRRB.html";
    }
    else if (wheel == "Black" && cockpit == "Black" && front == "Black") {
        window.location.href = "ResultBBB.html";
    }
    else if (wheel == "Black" && cockpit == "Black" && front == "Red") {
        window.location.href = "ResultBBR.html";
    }
    else if (wheel == "Black" && cockpit == "Red" && front == "Red") {
        window.location.href = "ResultBRR.html";
    }
    else if (wheel == "Black" && cockpit == "Red" && front == "Black") {
        window.location.href = "ResultBRB.html";
    }
    else { window.location.href = "Homepage.html"; }
}

