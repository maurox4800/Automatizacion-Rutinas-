const table = document.getElementById("div_tabla")

function TablesGridJs(columns, data, pagination, search, ) {

    new gridjs.Grid({
        columns: columns,
        pagination: {
            enabled: pagination,
            limit: 5
        },
        search: search,
        data: data,
        style: {
           
            th: {
              'background-color': '#212529',
              color: 'white',
              'text-align': 'center'
            },
            td: {
              'text-align': 'center'
            }
          },
          language: {
            'pagination': {
              'previous': 'Anterior',
              'next': 'Siguiente',
              'to': 'a',
              'of': 'de',
              'showing': 'Mostrando',
              'results': () => 'Registros',
              
            },
            'noRecordsFound' : 'No se encontraron registros'
          }
    }).render(document.getElementById("wrapper"));
}

















