$(document).ready(function(){
    // $(".toggleNoticeboardFormBtn").click(function(){
    //     console.log("BtnClicked")
    //     $("").toggleClass("hidden")
    // })

    $(".toggleNoticeboardFormBtn").click(function () {
        $(".notice_wrapper").css({"display":"flex"})
        $(".active_notice_wrapper").show()
        $("body").css({"overflow":"hidden"})
        // $(".create-wrapper").show().stop().animate({ height: "400px", padding: "1rem" }, 350).css("border", "1px solid #555");
    });
    $(".close_icon").click(function () {
        // $(".create-wrapper").stop().animate({ height: "0px", padding: "0px", border: "0px" }, 350).delay(400, function () { $(this).hide(); $(".wrapper-wrapper").hide(); });
        $(".notice_wrapper").hide()
        $(".active_notice_wrapper").hide()
        $("body").css({"overflow":"auto"})

    });
})