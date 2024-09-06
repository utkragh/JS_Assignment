// document.getElementById('b1').onmouseover =
//     "document.getElementById('b1').innerHTML = "HELLO"

// onclick="document.getElementById('hej').innerHTML = Date()"

// // document.getElementById('lightpink').onclick =
//     // function(){
//     //     document.getElementById('changeBG').style.backgroundColor = 'lightpink'
//     // }

// document.getElementsByClassName('btn').onmouseover =
//     "document.getElementsByClassName('btn').innerHTML = HELLO"

document.getElementById('b1').onmouseover =
    function(){
        document.getElementById('b1').innerHTML = "HELLO"
    }
document.getElementById('b1').onmouseout =
    function(){
        document.getElementById('b1').innerHTML = "Page 1"
    }

document.getElementById('b2').onmouseover =
    function(){
        document.getElementById('b2').innerHTML = "ALMOST"
    }
document.getElementById('b2').onmouseout =
    function(){
        document.getElementById('b2').innerHTML = "Page 2"
    }

document.getElementById('b3').onmouseover =
    function(){
        document.getElementById('b3').innerHTML = "GOT ME!"
    }
document.getElementById('b3').onmouseout =
    function(){
        document.getElementById('b3').innerHTML = "Page 3"
    }

document.getElementById('b4').onmouseover =
     function(){
         document.getElementById('b4').innerHTML = "YOU THINK?"
     }
 document.getElementById('b4').onmouseout =
     function(){
         document.getElementById('b4').innerHTML = "Page 4"
     }