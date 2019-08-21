
//==== Урок 4
let str = "Ea irure ullamco est aliquip duis id. Pariatur culpa veniam culpa qui non id. Ad aliquip minim amet irure dolore adipisicing. \
In amet ex duis exercitation cillum reprehenderit pariatur qui est. Occaecat deserunt et in adipisicing non aute voluptate esse ullamco ullamco duis et excepteur incididunt. Aliqua proident id sit ea. \
Id proident voluptate: 'Ea laboris sit ullamco deserunt veniam aliquip. Do cillum consectetur elit aliquip commodo sint fugiat occaecat.' \
Eu sit cillum: 'adipisicing mollit ex velit ea est ullamco anim velit aliquip.'\
Officia irure velit ullamco ullamco consequat minim duis do enim laboris labore laboris. aren't"

//1
// const regexp1 = new RegExp('\'', 'g');
// console.log(str.replace(regexp1, '\"'));

//2
// const regexp2 = new RegExp('\\B\'', 'g');
// console.log(str.replace(regexp2, '\"'));

//3

class Validator {
  constructor(name, phone, email, text) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.text = text;
    this.regexpEmail = new RegExp('^[a-z0-9\-\_\\.]+\@[a-z0-9\-\_]+.\\w+$', 'i');
    this.regexpName = new RegExp('^[a-zа-я]+(\ [a-zа-я]+){0,1}$', 'i');
    this.regexpPhone = RegExp('^\\+\\d\\(\\d{3}\\)(\\d){3}\\-(\\d){4}$');
    this.regexpText = new RegExp('.{10,500}', 'g');
  }

  _checkEmail () { 
    return this.email.match(this.regexpEmail)
  }

  _checkName () { 
    return this.name.match(this.regexpName)
  }

  _checkPhone () { 
    return this.phone.match(this.regexpPhone)
  }

  _checkText () { 
    return this.text.match(this.regexpText)
  }
}

function validateMyForm() {
  let nameValue = document.querySelector("#name").value;
  let phoneValue = document.querySelector("#phone").value;
  let emailValue = document.querySelector("#email").value;
  let textValue = document.querySelector("#text").value;
  let val = new Validator (nameValue, phoneValue, emailValue, textValue);

  if (val._checkEmail() == null) {
    console.log("email введен не верно");
    return false; 
  }

  if (val._checkName() == null) {
    console.log("Имя введено не верно");
    return false; 
  }

  if (val._checkPhone() == null) {
    console.log("Номер телефона введен не верно");
    return false; 
  }

  if (val._checkText() == null) {
    console.log("Текст должен содержать не менее 10 и не более 500 символов");
    return false; 
  }
}

