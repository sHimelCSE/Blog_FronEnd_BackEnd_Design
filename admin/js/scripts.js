
$(document).ready(function () {
    // sidebar height
    var ch = $("#content-body").innerHeight();
    var sh = $("#sidebar-menu").innerHeight();
    var h = ch+"px";
    if (ch > sh) {
        $("#sidebar-menu").innerHeight(h);
    }
    //sidebar menu
    $("#sidebar-menu ul li").click(function () { 
        var b = $(this).children().next().css("display");
        if(b == "block"){
            $(this).children().next().slideUp();
            $(this).css({"background-color":"rgb(238, 243, 245)"});
        }else{
            
            $("#sidebar-menu ul li ul").slideUp();
            $(this).children().next().slideDown();
            $("#sidebar-menu ul li ul").parent().css({"background-color":"rgb(238, 243, 245)"});
            $(this).css({"background-color":"rgb(199, 226, 236)"});
        }
    });
});

    // ==============================================
    // Table javascript code with data 
    // ==============================================
    
    
    var columns = {
        'serialNo': 'Serial No.',
        'categoryName': 'Category Name',
        'action': 'Action'
    }
    
    var TestData = {
        data: data,
        columns: columns
    }
    
    // var table = $('#root').tableSortable({
    //     data: TestData.data,
    //     columns: TestData.columns,
    //     dateParsing: true,
    //     processHtml: function(row, key) {
    //         if (key === 'avatar_url') {
    //             return '<a href="' + row[key] + '" target="_blank">View Avatar</a>'
    //         }
    //         if (key === 'url') {
    //             return '<a href="' + row[key] + '" target="_blank">Github Link</a>'
    //         }
    //         if (key === 'site_admin' && row[key]) {
    //             return '<span class="btn btn-warning btn-sm">Admin</span>'
    //         }
    //         return row[key]
    //     },
    //     columnsHtml: function(value, key) {
    //         return value;
    //     },
    //     pagination: 2,
    //     showPaginationLabel: true,
    //     prevText: 'Prev',
    //     nextText: 'Next',
    //     searchField: $('input'),
    //     responsive: [
    //         {
    //             maxWidth: 992,
    //             minWidth: 769,
    //             columns: TestData.col,
    //             pagination: true,
    //             paginationLength: 3
    //         },
    //         {
    //             maxWidth: 768,
    //             minWidth: 0,
    //             columns: TestData.colXS,
    //             pagination: true,
    //             paginationLength: 2
    //         }
    //     ]
    // })

    var table = $('#root').tableSortable({
        data: data,
        columns: columns,
        searchField: '#searchField',
        responsive: {
            900: {
                columns: {
                    formCode: 'Form Code',
                    formName: 'Form Name',
                },
            },
        },
        rowsPerPage: 5,
        pagination: true,
        tableWillMount: function() {
            console.log('table will mount')
        },
        tableDidMount: function() {
            console.log('table did mount')
        },
        tableWillUpdate: function() {console.log('table will update')},
        tableDidUpdate: function() {console.log('table did update')},
        tableWillUnmount: function() {console.log('table will unmount')},
        tableDidUnmount: function() {console.log('table did unmount')},
        onPaginationChange: function(nextPage, setPage) {
            setPage(nextPage);
        }
    });

    $('#changeRows').on('change', function() {
        table.updateRowsPerPage(parseInt($(this).val(), 10));
    })

    $('#rerender').click(function() {
        table.refresh(true);
    })

    $('#distory').click(function() {
        table.distroy();
    })

    $('#refresh').click(function() {
        table.refresh();
    })

    $('#setPage2').click(function() {
        table.setPage(1);
    })

    // ==============================================
    // ===========    End   ========================
    // Table javascript code with data 
    // ==============================================


























// function menuopt(id,id2) {

//     for(var i=1; i<10; i++){
//         var ids = 'sidebar-sub-menu'+i;
//         var id2s = 'm'+i;
//         if(ids == id && id2s == id2){
//             var val = document.getElementById(id).style.display;
//             document.getElementById(id2).classList.add("active-menu");
//             if (val == 'none') {
//                 document.getElementById(id).style.display = "block";
//             } else {
//                 document.getElementById(id).style.display = "none";
//             }
//         }else {
//             document.getElementById(id2s).classList.remove("active-menu");
//             document.getElementById(ids).style.display = "none";
//         }
        
//     }
// }






