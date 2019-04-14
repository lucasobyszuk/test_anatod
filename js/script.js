 $(document).ready(function(){
    $("button[name='newClientButton']").click(function(){
    	if ($(".form-cliente").css("display") == "none") {
    		$(".form-cliente").css("display","block");
    	}
    });
  });