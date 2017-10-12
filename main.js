$(document).ready(function(data){
$.getJSON("data.json", function(data) { //retrieve data.JSON , and Function for Data
   var total_rows = ''; // varibale to store data  
  
   // using the .each method call each value using the name and inset into td tag 
   $.each(data, function(key, value){
    // insert each value into each cell per each row
        total_rows += '<tr>';
        total_rows += '<td>' + value.name + '</td>';
        total_rows += '<td>' + value.description + '</td>';
        total_rows += '<td>  <a href="https://www.google.com/maps?q=' + value.location + '"> Click Here </a> </td>';
        total_rows += '</tr>';
    });
    // and each data type the next row
    $('#table').append(total_rows);
});
});
//// cd ~/oca/startnow-web101-san-diego-top-spots

 

