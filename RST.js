$(document).ready(function(){
    var myArray = ['1', '2', '3', '4', '5'];
    $('select').each(function(){
        var items =  myArray[Math.floor(Math.random() * myArray.length)],
            options = $(this).children('option'),
            option;
             
        option = options.eq(items).attr("selected","selected");
    });
});