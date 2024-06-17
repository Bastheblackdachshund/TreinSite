
onclick = function (e) {
    let selectedWheel;
    console.log(e.target.id);
    if (e.target.id === 'blackWheels') {
        selectedWheel = 'Black';
    } else if (e.target.id === 'redWheels') {
        selectedWheel = 'Red';
    }
    console.log("Selected wheel type:", selectedWheel);
}
