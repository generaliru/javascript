let v1 = 'Soy nua variable 1';
console.log(v1);
v1 = 123;
console.log(v1);

const v2 = 'Soy nua variable 2';
console.log(v2);
/* v2 = 10;
console.log(v2); */

function varTest() {
    var x = 31;
    if (true) {
        var x = 71;
        console.log(x);
    }
    console.log(x);
}

varTest();

function letTest() {
    let x = 31;
    if (true) {
        let x = 71;
        console.log(x);
    }
    console.log(x);
}

letTest();

const nuevaFunccion = () => {
    var x = 31;
    if (true) {
        var x = 71;
        console.log(x);
    }
    console.log(x);    
}

nuevaFunccion();

const nombre = "Uriel German";
const apellidos = "Camacho Ayala";

console.log(`Hola mi nombre es ${nombre} mis apellidos son ${apellidos}`);

const arr = [1,2,3,4,5,6];
console.log(arr)