function skillMembers() {
    var skill = document.getElementById("skill").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var members = JSON.parse(this.responseText);
            var table = "<table border='1'><tr><th>Id</th><th>Name</th><th>Skill</th></tr>";
            for (var i = 0; i < members.length; i++) {
                table += "<tr><td>" + members[i].id + "</td><td>" + members[i].name + "</td><td>" + members[i].skill + "</td></tr>";
            }
            table += "</table>";
            document.getElementById("members").innerHTML = table;
        }
    };
    xhttp.open("GET", "http://localhost:8080/ProjectManagementSystem/api/member/skill/" + skill, true);
    xhttp.send();
}