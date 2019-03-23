$(document).on("ready",function() {
    $(".devour").on("click",function() {
        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + $(this).attr("data-value"),
            data : {
                eating : true
            }
        }).then(result => {
            console.log(result);
            location.reload();
        })
    })
    $(".revive").on("click",function() {
        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + $(this).attr("data-value"),
            data : {
                eating : false
            }
        }).then(result => {
            console.log(result);
            location.reload();
        })
    })
    $("#add-burger").on("click",function(event) {
        event.preventDefault();
        $.ajax({
            method:"POST",
            url : "/api/burgers",
            data : {
                burger_name : $("#new-burger").val()
            }
        }).then(result => {
            console.log(result);
            location.reload();
        })
    })
})