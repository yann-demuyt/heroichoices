//Showpage to replace `prompt`
function showPage( page )
{
  //Fade out existing page
  $("span:visible").fadeOut(750 , function()
  {
    //Fade in the new page
    $("#"+page).fadeIn(1500, function()
    {
      //Give focus to whatever is appropriate
      if( $("input:visible").length )
        $("input:visible").focus();    
      else if( $("select:visible").length )
        $("select:visible").focus();
      else
        $("button").focus();
      //Unfold the story
      $("#"+page+" part").each( function( i , e ){ $(e).fadeIn( i*600 ) } );
    });
  });

}

function unfoldStory()
{
  $("part:hidden").eq(0).fadeIn( 750 , unfoldStory );
}

//Magic buttons, to replace `prompt` and `alert` ok
$("button").live("click", function(e)
{
  var value;
  //Was there an input box ?
  if( $("input:visible").length )
    value = $("input:visible").val();
  else if( this.dataset.go )
    return showPage( this.dataset.go )
  else
    value = this.innerText;
  console.log(this, this.parentNode.id,value);
  window[this.parentNode.id]( value );  
});
