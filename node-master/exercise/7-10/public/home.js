$(function() {
    $("form").submit(function() {

		var files=new FormDate(this);
		$.$.ajax({
			url: '/upload',
			type: 'POST',
			contentType: false,
			data: files,
			success:function(data){
				alert("complete");
			}
		})

    });
});