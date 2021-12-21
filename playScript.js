btn = document.getElementById("btn");
coupon = document.getElementById("coupon");
btn.addEventListener("click",Func1);

function Func1(){
    if (coupon.value==""){
        alert("Vui lòng nhập mã coupon!")
    }
    else
    alert("Mày bị lừa rồi. Đây là page bố mày làm con ngu ạ hahahahaha")
}