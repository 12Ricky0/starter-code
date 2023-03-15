$(".burger").click(function () {
    $(".nav-links").css("display", "block");
    $(".close").css("display", "block");

})

$(".close").click(function () {
    $(".nav-links").css("display", "none");
    $(".close").css("display", "none");

})

// CREW Functions

$("button.douglas").click(function () {
    $(".com-art").css("display", "block");
    $(".pil-art").css("display", "none");
    $(".eng-art").css("display", "none");
    $(".spe-art").css("display", "none");
});

$("button.specialist").click(function () {
    $(".com-art").css("display", "none");
    $(".pil-art").css("display", "none");
    $(".eng-art").css("display", "none");
    $(".spe-art").css("display", "block");
});

$("button.pilot").click(function () {
    $(".com-art").css("display", "none");
    $(".spe-art").css("display", "none");
    $(".eng-art").css("display", "none");
    $(".pil-art").css("display", "block");

});

$("button.engineer").click(function () {
    $(".com-art").css("display", "none");
    $(".spe-art").css("display", "none");
    $(".pil-art").css("display", "none");
    $(".eng-art").css("display", "block");
});

$(".tech a").attr("href", "technology.html");
// $(".tech a").attr("href", "technology.html");

$(".nav-links .home").click(function () {
    $(".nav-links .home").addClass("active");
    // var inactive = $(".nav-links a");
    // inactive.toggleClass("active");
    // if (inactive == inactive + ":active") {

    // }
    // else { inactive.removeClass("active"); }
})

$(".spaceport-btn").click(function () {
    $(".space-capsule").css("display", "none");
    $(".vehicle").css("display", "none");

    $(".spaceport").css("display", "block");

});

$(".vehicle-btn").click(function () {
    $(".space-capsule").css("display", "none");
    $(".spaceport").css("display", "none");
    $(".vehicle").css("display", "block");

});


// $("button.specialist").click(function () {
//     $(".hidden1").css("display", "none");
//     $(".hidden").css("display", "block");
//     $(".hidden2").css("display", "none");
//     $(".hidden3").css("display", "none");

// });

// $("button.douglas").click(function () {
//     $(".hidden1").css("display", "block");
//     $(".hidden").css("display", "none");
//     $(".hidden2").css("display", "none");
//     $(".hidden3").css("display", "none");

// });

// $("button.pilot").click(function () {
//     $(".hidden2").css("display", "block");
//     $(".hidden").css("display", "none");
//     $(".hidden1").css("display", "none");
//     $(".hidden3").css("display", "none");

// });

// $("button.engineer").click(function () {
//     $(".hidden3").css("display", "block");
//     $(".hidden2").css("display", "none");
//     $(".hidden").css("display", "none");
//     $(".hidden1").css("display", "none");
// });


// $(document).keydown(function (event) {
//     console.log(event.key)
// })

// $(".sub-links a").click(function () {
//     $(".sub-links a").this.toggleClass("active-link");
// });