var user = [];

function getvalue() {
    var name = document.getElementById("name").value;
    var national = document.getElementById("id").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("Phone").value;
    console.log(user);  
    if (name !== "" && national !== "" && age !== "" && phone !== "") {
        if (name.length <= 25) {
            user.push(name);
        } else {
            alert("The name must be <= 25");
            return false;
        }

        if (national.length <= 14) {
            user.push(national);
        } else {
            alert("The national id must be <= 14");
            return false;
        }

        if (age > 16 ) {
            user.push(age);
        } else {
            alert("The age must be > 16 ");
            return false;
        }

        if (phone.length == 11) {
            user.push(phone);
        } else {
            alert("The phone must be <= 11");
            return false;
        }

        alert("successfully");
        return true;
    } else {
        alert("Please fill in all fields");
        return false;
    }
}
