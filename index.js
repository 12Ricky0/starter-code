$(".burger").click(function () {
    $(".nav-links").css("display", "block");
    $(".close").css("display", "block");
    $(".burger").css("display", "none");

})

$(".close").click(function () {
    $(".nav-links").css("display", "none");
    $(".close").css("display", "none");
    $(".burger").css("display", "block");
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

// $(".nav-links .home").click(function () {
//     $(".nav-links .home").addClass("active");
// })

$(".capsule-btn").click(function () {
    $(".space-capsule").css("display", "block");
    $(".vehicle").css("display", "none");

    $(".spaceport").css("display", "none");

});


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


