class cajero{
    constructor(billetes){
        this.billetes = billetes;
        this.nomBilletes = [1000,500,200,100,50]
    }
    restarBilletes(minBilletes){
        for(var i = this.billetes.length-1; i >= 0; i--){
            this.billetes[i] = this.billetes[i] - minBilletes[i];
        }
    }
    calcularCaja(){
        let caja = 0
        for(var i = this.billetes.length-1; i >= 0; i--){
        // console.log(`b: ${this.billetes[i]} m: ${this.nomBilletes[i]} and: ${this.billetes[i]*this.nomBilletes[i]}`)
            caja = caja + this.billetes[i]*this.nomBilletes[i]
        }
        return caja
    }
    extraerBilletes(monto){
        console.log(this.calcularCaja())
        if(this.calcularCaja() >= monto){
            let salidaBilletes = [];
            for(var i = 0; i < this.billetes.length; i++){
                console.log(`i: ${i}: ${this.billetes[i] != 0} and ${(monto/50)-parseInt(monto / 50) >= 0}`)
                if(this.billetes[i] != 0 && (monto/50)-parseInt(monto / 50) >= 0){
                    let n = parseInt(monto/this.nomBilletes[i]);
                    if(n > this.billetes[i]){
                        n = this.billetes[i];
                    }
                    console.log(`monto: ${monto} nom: ${this.nomBilletes[i]} n: ${n}`);
                    if (n >= 1 && n <= this.billetes[i]){
                        salidaBilletes.push(n);
                        monto = monto - n * this.nomBilletes[i];
                    } 
                    else{
                        salidaBilletes.push(0)
                    }
                    console.log(`Billetes: ${salidaBilletes} \n Monto: ${monto}`);
                }
                else{
                    salidaBilletes.push(0)
                }
            }
            this.restarBilletes(salidaBilletes)
            console.log(`fin: ${this.billetes}`)
            return salidaBilletes;
        }
        return null
    }
}

let cajero1 = new cajero([2,5,7,10,20]);
var button = document.getElementById('btn-confirm');
var out = document.querySelector('#o');


button.onclick = function(e) {
    e.preventDefault();
    
    var x = document.forms[0];
    console.log(this.id + ": Clicked");
    console.log(x.elements[0].value);
    let monto = x.elements[0].value;
    billetes = cajero1.extraerBilletes(monto);
    if(billetes){
        nomBilletes = cajero1.nomBilletes;
        salida = [];
        for(var i = 0; i < nomBilletes.length; i++){
            for( var j = 0; j < billetes[i]; j++){
                salida.push(nomBilletes[i])
            }
        }
        out.textContent = `Billtes: ${salida}, Cajero: ${cajero1.calcularCaja()}`
    }
    else{
        out.textContent = "No hay fondos"
    }
}