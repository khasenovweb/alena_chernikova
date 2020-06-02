$(document).ready(function(){
	$("a[data-role='scroll']").mPageScroll2id({
		offset: 96
	});


	$.validator.addMethod(
	        "phone",
	        function (value) {
	            return value.replace(/\D+/g, "").length >= 11;
	        },
	        "Введите номер телефона полностью"
	    );

	    $("form[data-validate]").each(function (i, el) {
	        $(el).validate({
	            rules: {
	                lead_phone: "phone",
	                lead_email: {
	                	required: true,
	                	email: true
	                }
	            },
	            messages: {
	            	lead_email: {
	                	required: "Заполните поле E-mail",
	                	email: "Введите корректно E-mail"
	                }
	            }
	        });
	    });



	$('input[name="lead_phone"]').mask('+7 (999) 999-9999');
});
