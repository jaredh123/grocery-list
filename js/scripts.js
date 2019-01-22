$(document).ready(function() {

var allItems = [];

  $("#mainForm").submit(function(event){
    var oneItem = $("#input").val();

    if (oneItem){
      allItems.push(oneItem.toUpperCase());
      allItems.sort();

      $("ul").empty();
      allItems.forEach(function(item){
        $("ul").append("<li>" + item + "</li>");
      });
      $("#input").val('');
    }
    else {
      alert("Fill in the item name");
    };

    $("#input").focus();
    event.preventDefault();
  });
});
