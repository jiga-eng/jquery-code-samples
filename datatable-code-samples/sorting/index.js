function getDynamicRows() {
  // this can come from an Ajax response
  return [
    {
      "id": 1,
      "name": "Amory Saxe"
    },
    {
      "id": 2,
      "name": "Jana Tudor"
    },
    {
      "id": 3,
      "name": "Bernadette Mercia"
    },
    {
      "id": 4,
      "name": "Ethelinda Windsor"
    },
    {
      "id": 5,
      "name": "Jochebed Angevin"
    },
    {
      "id": 6,
      "name": "Lucille Hanover"
    },
    {
      "id": 7,
      "name": "Ruby Bruce"
    },
    {
      "id": 8,
      "name": "Delmira Canmore"
    },
    {
      "id": 9,
      "name": "Fleur Chandler"
    },
    {
      "id": 10,
      "name": "Imogen Robinson"
    }
  ];
}

function applyDynamicSorting() {
  $.fn.dataTable.ext.order['data-sort'] = function (settings, col) {
    return this.api().column(col, {order: 'index'}).nodes().map(function (td, i) {
      return $(td).attr('data-sort');
    });
  }
}

$(document).ready(function () {
  const dynamicRows = getDynamicRows();
  dynamicRows.forEach((row) => {
    $('tbody').append(`<tr><td>${row.id}</td><td data-sort="${row.name.split(' ')[1]}">${row.name}</td></tr>`);
  });

  applyDynamicSorting();
  $('#employees').DataTable(
      {
        "paging": false,
        "columnDefs": [
          { "orderDataType": "data-sort", "targets": [1]}
        ],
      }
  );
});
