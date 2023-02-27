class sinciclos{
    sumardosnumeros(){
        console.warn("Sumar siempre que el primer numeros sea mayor")
        let num1=10
        let num2=5
        let suma=0
        if(num1 > num2){
            suma=num1+num2
            console.log(suma)
        }else{
            console.log("el",num1,"es menor al ",num2)
        }
       
    }
    operaciones(){
        console.warn("Operaciones segun el operador(+,-,*,/,%)")
        let num1=10
        let num2=2
        let suma=0,resta=0,multiplicacion=0,division=0,residuo=0
        let ops="+",opr="-",opm="*",opd="/",opres="%"
        suma=num1+num2
        resta=num1-num2
        multiplicacion=num1*num2
        division=num1/num2
        residuo=num1%num2

        console.log(num1,ops,num2,"=",suma)
        console.log(num1,opr,num2,"=",resta)
        console.log(num1,opm,num2,"=",multiplicacion)
        console.log(num1,opd,num2,"=",division)
        console.log(num1,opres,num2,"=",residuo)

    }
    mayordedos(){
        console.warn("EL Mayor de 2 Numeros")
        let num1=11
        let num2=6

        if(num1 > num2){
            console.log(num1,"es mayor")
        }else{
            console.log(num2,"es mayor")
        } 
    }
    presennombre(){
        console.warn("Presentar Nombre")
        let nom= "karlos";
        console.log(nom)
    }
    valordecompra(){
        console.warn("Valor de la Compra considerando el 12% IVA")
        let compra=500
        const iva=12
        const tan=100
        let division=0,porcen=0,total=0
        division=compra/tan
        porcen=division*iva
        total=compra+porcen
        console.log("el total de la compra es",total)

    }
    nombrecinco(){
        console.warn("Nombre 5 veces")
        const nom = "karlos";
        for (let i=0; i < 5; i++){
            console.log(nom)
        }
    }
    multiplo3al21(){
        console.warn("Multiplos de 3 del 3 al 21")
        for(let i=3; i <= 21; i++){
            if(i % 3 === 0) {
                console.log(i);
            }
        } 
    }
    multiplos21al3(){
        console.warn("Multiplos de 3 del 21 al 3")
        for(let i=21; i >= 3; i--) {
            if(i % 3 === 0) {
                console.log(i);
            }
        }

    }
    dosnombresiguales(){
        console.warn("Indicar si los 2 NOMBRES son iguales o diferentes")
        let nom1="Karlos"
        let nom2="karlos"
        if(nom1 == nom2){
            console.log("Los nombres son IGUALES")
        }else{
            console.log("Los nombres son DIFERENTES")
        }
    }
}
//ejercicio 1
//let ejercicios = new sinciclos()
//ejercicios.sumardosnumeros()
//ejercicio 2
//ejercicios.operaciones()
//ejercicio 3
//ejercicios.mayordedos()
//ejercicio 4
//ejercicios.presennombre()
//ejercicio 5
//ejercicios.valordecompra()
//ejercicio6
//ejercicios.nombrecinco()
//ejercicio7
//ejercicios.multiplo3al21()
//ejercicio8
//ejercicios.multiplos21al3()
//ejercicio9
//ejercicios.dosnombresiguales()

class conciclos{
    numerosconmenos5cifras(){
        console.warn("Presentar los numeros que tengan menos de 5 caracteres")
        let numeros = ["102","2020","45500","500204","451015","1203","12","128560","125","1589"];
        for (let pos=0; pos < 10; pos++){
            if(numeros[pos].length < 5){
            console.log(`pos=${pos} elemento= ${numeros[pos]}`)
        }
    }   
    }
    presenarreglo(){
        console.warn("Presentar elementos de un arreglo")
        let elemens = ["uva","limon","pera","piña"];
        console.log(elemens);
    }
    numerosmenoresa10(){
        console.warn("Numeros menores a 10")
        let arreglo =[10,4,12,34,6,8,2,19]
    
        for(let pos=0; pos <  arreglo.length; pos++){
        
            if(arreglo[pos] < 10){
                console.log(arreglo[pos])
            }

        }
        
    }
    presenimparesysumapares(){
        console.warn("Presentar los impares y al final la suma de los pares")
        let arr=[10,3,2,5,1,4,7]
        let suma = 0;
        
        for(let i = 0; i < arr.length; i++){
            
            if( arr[i]%2 !== 0){
    
                console.log(arr[i]);
            }else{
                suma += arr[i];

            }
        }
        console.warn(`La suma de los pares es = ${suma}`)
    }
    primermedioyultimoelemen(){
        console.warn("Presentar el primero el medio y el ultimo valor de un arreglo")
        let elen =[2,,1,5,20,8,9,10]
        
        let primer= elen[0]
        console.log(`Primer elemnto= ${primer}`)
        
        let medio =(elen.length/2)
        let m = elen[medio]
        console.log(`Segundo elemnto= ${m}`)
        
        let ultimo =elen[elen.length - 1] 
        console.log(`Ultimo elemnto= ${ultimo}`)


    }
    vueltodeunacompra(){
       console.warn("Calcular el vuelto de un a compra")
        let costo=115
       let pago=150
       let vuelto=0
       vuelto=costo-pago
       console.log(`El vuelto de ${costo}-${pago} es= ${vuelto}`) 
    }

}
//let arreglos = new conciclos()
//ejercicio10
//arreglos.numerosconmenos5cifras()
//ejercicio11
//arreglos.presenarreglo()
//ejercicio12
//arreglos.numerosmenoresa10()
//ejercicio13
//arreglos.presenimparesysumapares()
//ejercicio14
//arreglos.primermedioyultimoelemen()
//ejercicio15
//arreglos.vueltodeunacompra()

class calculosyciclos{
    tablademultiplicar(){ 
        console.warn("Tabla de multiplicar")
        let num = 5
        let mul = 0

        for( let i=1; i <= 12; i++){
            mul=num*i
            console.log(`${num} * ${i} = ${mul}`)   
        }
        
    }
    multiporsumasucesivas(){
        console.warn("Multiplicacion por sumas sucesivas")
        let num1= 5
        let num2= 3
        let resul= 0
        for(let i=1; i <= num2 ; i++){
            resul += num1
            console.log(`${resul-num1} + ${num1} = ${resul}`)

        }
        console.warn(`La Multiplicacion de ${num1}*${num2}=${resul}`)
    }
    divisionporrestas(){
        let dividendo = 4
        let divisor = 2
        let rest = dividendo
        let cont=0
        while( dividendo >= divisor){
            dividendo = dividendo - divisor
            cont++
            //console.log(`${rest} - ${divisor} = ${cont}`)
            
        }
        console.log(`${rest} / ${divisor} = ${cont}`)

    }
    numfactorial(){
        let num=4
        let fac=1

        while(num > 0){
    
            fac=num*fac
            num=num-1
            console.log(`${fac}`)

        }
    }
    exponentedenum(){
        let num=4
        let exp=3
        let res=1
        for(let i=1; i <= exp; i++ ){
            res=res*num
            console.log(`${res}`)
        }
        console.log(`la respuesta es ${res}`)
    }
    fibonacci(){
       let num=8
       let a=0;b=1;c=1
       let con=3
       while(con<num){

       }

    }
    invertirnum(){
        let num=1234
    
        let resi=0

        while(num > 0){
            resi = num % 10
            num = Math.floor(num / 10)
            console.log(resi)
    
        }
        //console.log(inver)

    }
    divisoresdenum(){
        let num=8
        let acu=num-1
        let r=0
        while(acu>=1){
            acu=acu-1
            if(num%acu==0){
                console.log(`ès divisible para ${acu}`)
            }
        }
           
    }
    numperfecto(){
        let num=6, acu=num-1,c=0
        while(acu>=1){
            if(num%acu==0){
                c=c+acu
            }
            acu=acu-1
        }
        if(num==c){
           console.log(`${num} es perfecto`)
        }else{
            console.log(`${num} no es perfecto`)
        }
    }
    numprimo(){
        let num=5, acu=0,c=0
        for(c=1;c<=num;c++){
            if(num%c==0){
                acu=acu+1
            }
        }
        if(acu==2){
            console.log(`${num} si es un numero primo`)
        }else{
            console.log(`${num} no es un numero primo`)
        }
        
    }
    

    

}
let calculos = new calculosyciclos()
//ejercicio16
//calculos.tablademultiplicar()
//ejercicio17
//calculos.multiporsumasucesivas()
//ejercicio18
//*calculos.divisionporrestas()
//ejercicio19
//*calculos.numfactorial()
//ejercico20
//*calculos.exponentedenum()
//ejercicio21
//calculos.fibonacci()
//ejercicio22
//*calculos.invertirnum()
//ejercicio23
//calculos.divisoresdenum()
//ejercico24
//calculos.numperfecto()
///ejercicio25
calculos.numprimo()



