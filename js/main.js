function search() {
    
    var textSearch = document.getElementById("text-search").value;
    var itr;
    var itd;
    
    const producttab = document.querySelector("#product-tab");
    const suppliertab = document.querySelector("#supplier-tab");
    const usertab = document.querySelector("#user-tab");

    // Find the active tab
    if(producttab.classList.contains("active")) {
        alert("product tab is active");
    }
    else if (suppliertab.classList.contains("active")) {

        // $.get('../php/crud.php', function(data) {      
        //     console.log(data);
        // } );

        getdata('data-supplier');
        
    }
    else if(usertab.classList.contains("active")) {
        alert("user tab is active");
    };
    
};

function getdata(tableId) {
    
    var supplierjsonData = [
        { supplierCode: 'xSM', supplierName: 'Save More' },
        { supplierCode: 'xQmart', supplierName: 'Qmart' },
        { supplierCode: 'xSan Roque', supplierName: 'San Roque' }
    ];

    if (tableId=='data-supplier') {

        

        loadTable(tableId, ['supplierCode', 'supplierName'], supplierjsonData);
    }

};

function loadTable(tableId, fields, data) {
    //$('#' + tableId).empty(); //not really necessary
    var rows = '';
    $.each(data, function(index, item) {
        var row = '<tr>';
        $.each(fields, function(index, field) {
            row += '<td>' + item[field] + '</td>';
        });
        rows += row + '<tr>';
    });
    $('#' + tableId).html(rows);
};
