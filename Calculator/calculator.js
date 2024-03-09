function calculateAge() {
    var dob = document.getElementById("dob").value;
    var dobDate = moment(dob);
    var today = moment();

    var totalSeconds = today.diff(dobDate, 'seconds');

    var years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
    var remainingSeconds = totalSeconds % (365 * 24 * 60 * 60);

    var months = Math.floor(remainingSeconds / (30 * 24 * 60 * 60));
    remainingSeconds = remainingSeconds % (30 * 24 * 60 * 60);

    var weeks = Math.floor(remainingSeconds / (7 * 24 * 60 * 60));
    remainingSeconds = remainingSeconds % (7 * 24 * 60 * 60);

    var days = Math.floor(remainingSeconds / (24 * 60 * 60));
    remainingSeconds = remainingSeconds % (24 * 60 * 60);

    var hours = Math.floor(remainingSeconds / (60 * 60));
    remainingSeconds = remainingSeconds % (60 * 60);

    var minutes = Math.floor(remainingSeconds / 60);
    var seconds = remainingSeconds % 60;

    document.getElementById("result").innerHTML = "Your age is: " +
        years + " years, " +
        months + " months, " +
        weeks + " weeks, " +
        days + " days, " +
        hours + " hours, " +
        minutes + " minutes, " +
        seconds + " seconds.";
}
