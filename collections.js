$(document).ready(function(){
    //$('p.para1').css('color', 'blue');
      //$('p.para1').css({color: 'blue', background:'#ccc'});
      //$('#btnl').click(function(){
       //   $('p.para2').toggleClass('myClass')
      })
//$('table').append('<td> ""</td>');
//$('table').prepend('<td>""</td>');
//$('.para1').appendTo('.para2');
//$('.para1').prependTo('.para2');

$('table').before('<h4>unichris libray</h4>')
$('table').after('<h4>unichris library</h4>')
$('#newItem').keyup(function(e){
      var code = e.which;
      if(code == 13){
          e.preventDefault();
      $('table').append('<td>'+e.target.value +'</td>' );

  
  }
})
  //})
  var newItemCounter = 1;
  var ourList = document.getElementById("our-listItem");
  var ourNewItem = document.getElementById("newItem");
var Headline = document.getElementById("our-headline");
var listItems = document.getElementById("our-listItem").getElementsByTagName("td");
//for(i = 0; i < listItems.length; i++){
ourList.addEventListener("click", activateItem);
//}
function activateItem(e){
  if(e.target.nodeName == "TD"){
  Headline.innerHTML = e.target.innerHTML;
  for(i = 0; i < e.target.parentNode.children.length; i++)
  e.target.parentNode.children[i].classList.remove("active");
   newItemCounter++;
};
}

ourNewItem.addEventListener("click",createNewItem);

function  createNewItem(){
  ourList.innerHTML += "<td> " + newItemCounter + "</td>";
   newItemCounter++;
};


function myFunction(){
    var input, filter, table, tr, td, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("our-listItem");
    tr = table.getElementsByTagName("tr");
    for(i = 0; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[0];
        if(td){
        txtValue = td.textContent || td.innerText;
      
        
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = "";
          
        } else{
            tr[i].style.display = "none";
        }
    }
}
}
