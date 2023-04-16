function hesabla() {
    let eded1, eded2, select, netice;
    eded1 = parseInt(document.querySelector("#eded1").value);
    eded2 = parseInt(document.querySelector("#eded2").value);
    select = document.querySelector("#sel").value;

    if (select == "+") {
        netice = eded1 + eded2
    } else if (select == "-") {
        netice = eded1 - eded2
    } else if (select == "*") {
        netice = eded1 * eded2
    } else {
        netice = eded1 / eded2
    }
    alert("Neticeniz" + " " + netice + " ):")
}