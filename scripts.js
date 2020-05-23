/// SEARCH AND COUNT
        
    function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
    }
    }       
    }                  
    };


    $(document).ready(function(){
    $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    var rowCount = $('#myTable >tbody >tr:visible').length;
    $('#results').text("Showing " + rowCount + " Contacts")
        
    });
    });
    });


/// POPULATE TABLE WITH JSON DATA

    fetch('/table')
        .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              appendData(data);
            })
            .catch(function (err) {
              console.log('error: ' + err);
            });

        function appendData(data) {            
            for (var i = 0; i < data.length; i++) {
                
 /// DELETE BUTTON ADDED HERE
                
                $("tbody").append("<tr><td>"+data[i].firstName + ' ' + data[i].lastName + ', ' + data[i].country + "<button class='btn btn-danger float-right' >Delete</button></td></tr>")

        }
        }
        
     
/// DELETE FUNCTION

        $(document).on('click', '.btn-danger', function(){
     
        var id = $(this).closest('tr').index();
        var El = $(this).closest('tr');

        $.ajax({
            url: '/products/' + id,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                El.remove();
                console.log(response);
                
        }
        });
        });



/// TOOLTIP

    

$(document).ready(function() {
// Tooltip only Text
$('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
}, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
}).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
});
});