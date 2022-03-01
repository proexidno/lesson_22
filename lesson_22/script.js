function SortingFunc(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
}
// $("#WS1 input").on("focusout", function () {
//     $(this).val($(this).val().split(".").reverse().join("-"))
// })

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// $("#WS2 input").on("focusout", function () {
//     let answ = new Date().getFullYear() - Number($(this).val().split(".")[2]) - 1
//     if (new Date().getMonth() > Number($(this).val().split(".")[1])){
//         console.log(1)
//         answ += 1
//     }else if (new Date().getMonth() + 1 == Number($(this).val().split(".")[1]) && new Date().getDate() >= Number($(this).val().split(".")[0])) {
//         console.log(1)
//         answ += 1
//     }
//     $(this).val(answ)
// })

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$("#WS3 #button").click( () => {
    let A = [];
    $("#WS3 #in").each( function () {
        A.push(Number($(this).val()))
       
    })
    let D = Math.pow(A[1], 2) - 4 * A[0] * A[2]
    if (D > 0) {
        alert(String((-A[1] + Math.pow(D, 1/2))/(2*A[0])) + "; " + String((-A[1] - Math.pow(D, 1/2))/2))
    }else if (D == 0){
        alert(-A[1]/(A[0] * 2))
    } else {
        alert("Корней нет")
    }
    A.sort(SortingFunc)
    if (Math.pow(A[2], 2) == Math.pow(A[1], 2) + Math.pow(A[0], 2)){
        alert("Это пифагорова тройка")
    }
})

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$("#WS4 #button").click( () => {
    let A = []
    for (let i = 2; i < $("#WS4 #in").val(); i++) {
        if (!($("#WS4 #in").val() % i)){
            A.push(String(i))
        }
    }
    alert(A.join(", "))
});

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$("#WS5 #button").click( () => {
    let A = [], B = []
    for (let i = 2; i < $("#WS5 #in1").val(); i++) {
        if (!($("#WS5 #in1").val() % i)){
            A.push(Number(i))
        }
    }
    for (let i = 2; i < $("#WS5 #in2").val(); i++) {
        if (!($("#WS5 #in2").val() % i)){
            B.push(Number(i))
        }
    }
    console.log(A, B);
    let C = []
    for (i of A) {
        if (B.indexOf(i) != -1) {
            C.push(i)
        }
    }
    let a = Math.min($("#WS5 #in1").val(), $("#WS5 #in2").val())
    while (a % Number($("#WS5 #in1").val()) != 0 || a % Number($("#WS5 #in2").val()) != 0) {
        a++;
    }
    alert(C.join(", "))
    alert(C[C.length - 1])
    alert(a)
})

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

for (let i = 0; i < 10; i++){
    $("#WS6 ul").append($("<li>"))
}
$("#WS6 ul li").each( function () {
    for (let i = 0; i < 10; i++){
        $(this).append($("<div>").toggleClass("hidden").toggleClass("game"))
    }
})