function problema1()
{

}

function problema2()
{
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    //vamos a formar los vectores
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //vamos a meter una funcion de ordenamiento
    v1 = v1.sort(function(a,b)
    {
        return b-a;
    });

    v2 = v2.sort(function(a,b)
    {
        return b-a;
    });

    //invierte la cadena
    v2 = v2.reverse();

    //vamos a recorrer el v1 y lo vamos a multiplicar el inverso del v2
    var p2_producto = 0;
    for(var i = 0; i<v1.length; i++){
        p2_producto += v1[i] * v2[i];
    }
    //muestro el resultado
    document.querySelector('#p2-output').textContent = 'El producto escalar minimo es de: ' + p2_producto;
}

function problema3()
{
    
}