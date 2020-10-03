function toggleAnnualyMonthly(obj) {
    var decider = document.getElementById('toggle');
    if (decider.checked) {


        document.getElementsByClassName("monthly").item(0).style.display = "block"
        document.getElementsByClassName("monthly").item(1).style.display = "block"
        document.getElementsByClassName("monthly").item(2).style.display = "block"
        document.getElementsByClassName("annually").item(0).style.display = "none"
        document.getElementsByClassName("annually").item(1).style.display = "none"
        document.getElementsByClassName("annually").item(2).style.display = "none"


    } else {
        document.getElementsByClassName("monthly").item(0).style.display = "none"
        document.getElementsByClassName("monthly").item(1).style.display = "none"
        document.getElementsByClassName("monthly").item(2).style.display = "none"
        document.getElementsByClassName("annually").item(0).style.display = "block"
        document.getElementsByClassName("annually").item(1).style.display = "block"
        document.getElementsByClassName("annually").item(2).style.display = "block"

    }
}