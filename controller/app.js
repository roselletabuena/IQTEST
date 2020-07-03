$(document).ready(function()
{
    $('#date').combodate({
        minYear: 1975,
        maxYear: 2013
    });    

    $(".day").addClass("custom-select")
    $(".month").addClass("custom-select")
    $(".year").addClass("custom-select")

    $("#reg").click(function(){
    $(".reg-container").addClass("d-none");
    $(".log-container").removeClass("d-none");
    });
    
    $("#login").click(function(){
    $(".log-container").addClass("d-none");
    $(".reg-container").removeClass("d-none");
    });

    $("#fullname").keypress(function(event){
    var inputValue = event.which;
    // allow letters and whitespaces only.
    if(!(inputValue >= 65 && inputValue <= 120) 
    && (inputValue != 32 && inputValue != 0)) { 
        event.preventDefault(); 
        }
    });

    $("#register-form").submit(function(event) {
        $.ajax({
            url: "php/crud.php",
            type: "POST",
            data: {
                fullname : $("#fullname").val(),
                email: $("#email").val(),
                birthDate: $("#date").val(),
                gender   : $("input:radio[name=gender]:checked").val(),
                password : $("#password").val(),
                action   : "insert_user"},
            success: (data) => {
                window.location.href = "home.html";
            }
        });

        event.preventDefault();
    });

    }
)

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
