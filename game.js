

function showPage( page )
{
    $("span:visible").fadeOut(1500);
    $("#"+page).fadeIn(1500);
    if( $("input:visible").length )
      $("input:visible").focus();    
    else if( $("select:visible").length )
      $("select:visible").focus();
    else
      $("button").focus();
}
