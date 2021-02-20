arr = []

function validate(form) {

    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    age = document.getElementById("Age").value;
    roll = document.getElementById("rollno").value;
    date = document.getElementById("date").value;
    ocupn = document.getElementById("ocupn").value;
    gender = null
    errors = ""
    document.getElementById("errors").innerHTML = errors
    f = 0
    if (document.getElementById('male')) {
        gender = "male"
    } else if (document.getElementById('female')) {
        gender = "female"
    }
    regName = /^[A-Za-z]+$/
    if (!regName.test(fname)) {
        errors = errors + "Enter valid firstname" + "<br>"
        f = 1
    }
    if (!regName.test(lname)) {
        errors = errors + "Enter valid lastname" + "<br>"
        f = 1
    }
    if (!date) {
        errors = errors + "Enter valid date" + "<br>"
        f = 1
    }
    if (!age || age == 0) {
        errors = errors + "Enter valid age" + "<br>"
        f = 1
    }
    if (!gender) {
        errors = errors + "Enter valid gender" + "<br>"
        f = 1
    }

    if (f == 0) {
        doc = { firstname: fname, lastname: lname, age: age, rollno: roll, gender: gender, date: date }
        if (ocupn) {
            doc.occupation = ocupn;
        }
        arr.push(doc)
        console.log(arr)
    } else {
        document.getElementById("errors").innerHTML = errors
    }


}

function retrive() {
    roll = document.getElementById("groll").value
    for (var o of arr) {
        if (o.rollno == roll) {
            document.getElementById("output").innerText = "" + JSON.stringify(o)
        }
    }
}