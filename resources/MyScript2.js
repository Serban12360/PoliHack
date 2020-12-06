/* Messages */
   $(function() {
    $("#add").on("click", function() {
        var val = $("input").val();
        if(val !== '') {
            document.getElementById("mylist").style.color= "white";
            document.getElementById("mylist").style.textAlign= "left";
            var elem = $("<li></li>").text(val);
            $("#mylist").append(elem);
            $("input").val("");
            
            var count = $("#mylist").children().length;
$("p>span2").text(count);

        }
    });
});