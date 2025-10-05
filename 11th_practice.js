let Data = "Secret information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("College Data=", Data);
  }
}

let student = new User("payel", "p@gmail.com");
// console.log(student);

class Admin extends User {
  // constructor() {}
  editData() {
    Data = "new datas";
  }
}
let dean = new Admin("admin", "admin@gmail.com");
console.log(dean);
