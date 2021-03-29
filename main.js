function at1() {

    $(document).ready(function() {
        $("#at2").css("display", "none");
        $("#at3").css("display", "none");
        $("#at1").css("display", "block");
    });
}

function mcqpt1() {
    $(document).ready(function() {
        $("#cont1").load("mcqpt.html")

    });
}

$(document).ready(function() {
    $("#tomed").click(function() {
        $("#cont1").load("med.html");

    });
});

$(document).ready(function() {
    $("#tohard").click(function() {
        $("#cont1").load("form.html");

    });
});

function at2() {

    $(document).ready(function() {
        $("#at1").css("display", "none");
        $("#at3").css("display", "none");
        $("#at2").css("display", "block");
    });
}

function at3() {

    $(document).ready(function() {
        $("#at2").css("display", "none");
        $("#at1").css("display", "none");
        $("#at3").css("display", "block");
    });
}
var cbcount = 0,
    cbcount1 = 0;
var val, val1;

function cb1() {
    val = document.getElementById("ex1").value;

}

function cb2() {
    val = document.getElementById("ex2").value;

}

function cb3() {
    val = document.getElementById("ex3").value;

}

function cbcou1() {
    cbcount = cbcount + 1;
    if (val == 'a') {
        var res = "correct answer";
    } else {
        var res = "wrong answer"
    }

    $(document).ready(function() {
        $("#ans").empty();
        $("#ans").append("<p style='color:white'>" + res + " with " + cbcount + " attempts" + "</p>")
    });
}