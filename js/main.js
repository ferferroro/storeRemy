function search() {
    
    var textSearch = document.getElementById("text-search").value;
    var itr;
    var itd;

    var supplierjsonData = [
        { supplierCode: 'SM', supplierName: 'Save More' },
        { supplierCode: 'Qmart', supplierName: 'Qmart' },
        { supplierCode: 'San Roque', supplierName: 'San Roque' }
    ];
    
    const producttab = document.querySelector("#product-tab");
    const suppliertab = document.querySelector("#supplier-tab");
    const usertab = document.querySelector("#user-tab");

    // Find the active tab
    if(producttab.classList.contains("active")) {
        alert("product tab is active");
    }
    else if (suppliertab.classList.contains("active")) {
        loadTable('data-supplier', ['supplierCode', 'supplierName'], supplierjsonData);
    }
    else if(usertab.classList.contains("active")) {
        alert("user tab is active");
    };
    
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
}
