let a = document.getElementById("hour");
let b = document.getElementById("minute");
let c = document.getElementById("second");
let d = document.getElementById("milli");
let start = document.getElementById("start");
let stops = document.getElementById("stops");
let reset = document.getElementById("reset");

let e = 0;
let f = 0;
let g = 0;
let h = 0;
let i;
function starts(){
    i = setInterval(startf, 100);

    function startf(){
        e += 1;
        if (e<10){
            d.innerHTML = "0"+e;
        }else{
            d.innerHTML = e;
        }
        if (e>9){
            f +=1;
            if (f<10){
                c.innerHTML = "0"+f;
            }else{
                c.innerHTML = f;
            }
            e = 0;
        }
        if (f>59){
            g +=1;
            b.innerHTML = g;
            f = 0;
        }
    }
}

function stopss(){
    clearInterval(i);
}

function resets(){
    clearInterval(i);
    a.innerHTML = "00";
    b.innerHTML = "00";
    c.innerHTML = "00";
    d.innerHTML = "00";
    e = 0;
    f = 0;
    g = 0;
    h = 0;
}

start.addEventListener("click", starts);
reset.addEventListener("click", resets);
stops.addEventListener("click", stopss);