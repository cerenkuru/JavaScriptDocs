const name = "Ceren Kuru";
const department = "Bilisim";
const salary = 16000;


// const a = "İsim: " + name + "\n" + "Department: " + department + "\n" + "Salary: " + salary;

// const a = `İsim:${name}\nDepartment:${department}\nSalary:${salary}`; // alt gr noktalı virgüle 2 kere bas


// const html = "<ul> " +
//              "<li>" + name + "</li>" +
//              "<li>" + department + "</li>" +
//              "<li>" + salary + "</li>" +
//              "</ul>";
function a() {

    return "Merhaba";
}
const html = `
    <ul>
        <li>${name}</li>
        <li>${department}</li>
        <li>${salary}</li>
        <li>${10 / 4}</li>
        <li>${a()}</li>
    </ul>

`;
document.body.innerHTML = html;             
             