/// POPULATE DATA

    $(document).ready(function(){
    $("#submit").on("click", function() {
    $.getJSON('data.json')
    .done(function(data) {
   
    var number = $("#submit").val();
        $("#firstName").val(data[number][0].firstName);
        $("#lastName").val(data[number][0].lastName);
     
    });

    
    $("tbody").append("<tr><td>"+data[i].firstname + '' + data[i].lastName + ',')
    .fail(function(){
        alert("xwerror")
       
    });
    });
    
    
/// ADD FORM

        $(document).ready(function(){
        $('#addform').hide();
        
        $('#addbtn').click(function(){
        $('#addform').show();
        });
        });
    
/// CLOSE FORM
    
        $(document).ready(function(){
        $('#close').click(function(){
        $('#addform').hide();
        });
        });

        $(document).ready(function(){
        $('#close').hide();
            
        $('#addbtn').click(function(){
        $('#close').show();
        });
        });
        
        $(document).ready(function(){
        $('#close').click(function(){
            
        $('#addform').hide();
         $('#close').hide();
        });
        });
    
    
/// MOUSE HOVER
    
        $(document).on("mouseenter", "td", function(){
        var index = $(this).index("td");
        $.get('data.json',function(data){
        $("#firstName").text(data[index]['firstName'] + " " + data[index]['lastName']);
        $("#city").text(data[index]['city'] + ", " + data[index]['country']);   
        });
        });

    
/// MOUSE CLICK
    
        $(document).on("click", "td", function(){
        var index = $(this).index("td");
        $.get('data.json',function(data){
        $("#firstName2").text(data[index]['firstName'] + " " + data[index]['lastName']);
        $("#streetaddress2").text(data[index]["streetAddress"]);    
        $("#city2").text(data[index]['city'] + ", " + data[index]['country']);
        $("#email2").text(data[index]['email']);
        $("#postcode2").text(data[index]['zipCode']);
        $("#firstName").hide();               
        $("#city").hide();    
        $("#citycard").hide();
        });
        });
        })


/// SORT A-Z

        function sortTable() {
        var table, rows, switching, i, x, y, shouldSwitch;
            table = document.getElementById("myTable");
            switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
            while (switching) {
    //start by saying: no switching is done:
            switching = false;
            rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
            shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
      }
    }
            if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
    }
  }
};




 // filter by first letter logic
    function filter(evt){
        var elm = evt.target;
        var query = elm.value.length > 0 ? tf.stOperator + elm.value : '';

        // set the column's filter value
        tf.setFilterValue(1, query);

        // filter the table
        tf.filter();

        // clear previously marked element
        if(tf.selectedLetter) {
            tf.selectedLetter.classList.remove('btn btn-outline-dark');
        }

        // mark selected letter
        elm.classList.add('btn btn-outline-dark');

        // keep reference of selected element
        tf.selectedLetter = elm;
    }

    var tf = new TableFilter(
        document.querySelector(".myTable"),
        {
            base_path: 'tablefilter/',
            start_with_operator: '←',
            paging: {
              length: 10
            },
            rows_counter: {
                text: 'Countries: '
            },
            col_types: [
              'string', 'string', 'string',
              'string', 'number'
            ],
            col_widths: [
                '75px','350px','350px',
                '75px','75px'
            ],

            // hide filters
            on_filters_loaded: function(tf) {
                tf.dom().rows[tf.getFiltersRowIndex()].style.display = 'none';
            },

            // sorting feature
            extensions: [{
                name: 'sort'
            }]
        }
    );
    tf.init();
    // keep reference of selected letter element
    tf.selectedLetter = null;


/// END OF JAVASCRIPT