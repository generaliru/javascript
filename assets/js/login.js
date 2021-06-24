function setButtonSuccess(){
    let classes = document.forms[0].elements[0].className.split(' ');
    classes[1] = 'btn-outline-success';
    document.forms[0].elements[0].className = ''.concat(classes).replace(/,/g,' ');
    document.forms[0].elements[0].textContent = 'Login';
}

function setButtonDanger(){
    let classes = document.forms[0].elements[0].className.split(' ');
    classes[1] = 'btn-outline-danger';
    document.forms[0].elements[0].className = ''.concat(classes).replace(/,/g,' ');
    document.forms[0].elements[0].textContent = 'Logout';
}

class whithList{

    constructor(){
        this.emails =  ['supper@'];
        this.passwords = ['1234'];
    }  

    setNewAccount(email,password){
        let e = this.emails.indexOf(email);
        let p = this.emails.indexOf(password);
        if(e == p && e == -1 && p == -1){
            this.emails.push(email);
            this.passwords.push(password);
            return null
        }
        return 'Ingrese un usuario dif';
    }

    checkIfIsAccount(email,password){
        let e = this.emails.indexOf(email);
        let p = this.passwords.indexOf(password);
        if(e == p && e != -1 && p != -1){
            return true;
        }
        return false;
    }
}

class Login{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
}

function checkLogin(email,password) {
    if(w.checkIfIsAccount(email, password)){
        console.log('Login Succefull')
        var obj = new Login(email,password);
        objSerialized = JSON.stringify(obj);
        localStorage.setItem('logkey',objSerialized)
        window.location.href = 'galery.html'
    }
}

var button = document.forms[1].elements[3];
var w = new whithList();
objSerialized = localStorage.getItem('logkey');
if (objSerialized){
    let obj = JSON.parse(objSerialized);
    console.log(obj);
    checkLogin(obj.email, obj.password);
}
console.log(objSerialized);

button.onclick = function(e){
    e.preventDefault();
    let form = document.forms[1];
    let email = form.elements[0].value;
    let password = form.elements[1].value;
    let check = form.elements[2].value;
    checkLogin(email, password);
}

