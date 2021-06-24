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
        // localStorage.set('logkey', objSerialized);
    }
    else{
        console.log('no estas logeado')
        window.location.href = 'ejercicio2.html'
    }
}

var w = new whithList();
objSerialized = localStorage.getItem('logkey');
if (objSerialized){
    let obj = JSON.parse(objSerialized);
    console.log(obj);
    checkLogin(obj.email, obj.password);
}
else{
    window.location.href = 'galery.html'
}
var button = document.forms[0].elements[0];

console.log(button);
button.onclick = function(e){
    e.preventDefault();
    localStorage.removeItem('logkey')
    window.location.href = 'ejercicio2.html'
}