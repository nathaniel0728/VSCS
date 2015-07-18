$(document).ready(function()
{
    var $name = $("#overview");
    $("code").waypoint(function()
    { 
        $name = $(this).parent().next();
        
    });
    $(document).on("click", "li[name=down]", function()
    {
        $("html, body").animate({
        scrollTop: $name.offset().top 
        }, 1000);
    });
    $("li[name=home").click(function()
    {
        $('html, body').animate({
        scrollTop: 0
        }, 1000);
    });
    $(document).on("click", "nav[name=top] li", function()
    {
        $name = $("div[name=" + $(this).attr('name') + "]");
        if($name.attr('name') === 'home')
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        else
            $("html, body").animate({
                scrollTop: $name.offset().top
            }, 1000);
    });
    $(document).on("click", "li[name=wrong]", function()
    {
        $(this).siblings("p").empty();
        $(this).siblings("p").append("<strong>Comment: </strong> Oops! Try again!");
    });
    $(document).on("click", ".right", function()
    {
        $(this).siblings("p").empty();
        $(this).siblings("p").append("<strong>Comment: </strong>" + $(this).attr("name"));
    });
    $(document).on("mouseover", "ul[name=quiz] li", function()
    {
        $(this).css("font-weight", "bold");
    });
    $(document).on("mouseleave", "ul[name=quiz] li", function()
    {
        $(this).css("font-weight", "normal");
    });
});