$(function(){
    $("#submitButton").click(function(){
        if ($("#name").val() == ""){
            $("#namewarning").show();
        }
        else{
            $("#namewarning").hide();
        }


        if ($("#email").val() == ""){
            $("#emailwarning").show();
        }
        else{
            $("#emailwarning").hide();
        }


        if ($("#password").val() == ""){
            $("#passwordwarning").show();
        }
        else{
            $("#passwordwarning").hide();
        }
        
        
        if ($("#textarea").val() == ""){
            $("#textareawarning").show();
        }
        else{
            $("#textareawarning").hide();
        }

        if ($('input[name="gender"]:checked').length == 0) {
            $("#genderwarning").show();  // Show warning if no radio button is selected
        } else {
            $("#genderwarning").hide();  // Hide warning if a radio button is selected
        }

        if ($('input[name="hobby"]:checked').length == 0) {
            $("#checkboxwarning").show();  // Show warning if no radio button is selected
        } else {
            $("#checkboxwarning").hide();  // Hide warning if a radio button is selected
        }

    });
});