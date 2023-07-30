var baseUrl = $('base').attr('href');
let idCE;

var _sourceCorrienteExitAction =
{
    dataType: "json",
    dataFields: [
        { name: 'Id_CorrienteExit', type: 'int' },
        { name: 'Tap', type: 'int' },
        { name: 'A_0', type: 'double' },
        { name: 'B_0', type: 'double' },
        { name: 'C_0', type: 'double' },
        { name: 'PorcientoDesviacion', type: 'double' },
    ],
    id: 'id',
    pagenum: 3,
    pagesize: 20,
    url: baseUrl + "Sub_MttoTFuerza/ObtenerListaCorrienteExit",
    data: { idMTF: idMttoTF },
    type: 'GET',
    pager: function (pagenum, pagesize, oldpagenum) {
        // callback called when a page or page size is changed.
    },
};



var _columnsCorrienteExitAction = [
    { text: 'idCE', dataField: 'Id_CorrienteExit', hidden: true },
    { text: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Tap', align: 'center', width: '20%', editable: false },
    { text: 'A-0', columntype: 'textbox', filtertype: 'number', dataField: 'A_0', align: 'center', width: '20%', editable: false },
    { text: 'B-0', columntype: 'textbox', filtertype: 'number', dataField: 'B_0', align: 'center', width: '20%', editable: false },
    { text: 'C-0', columntype: 'textbox', filtertype: 'number', dataField: 'C_0', align: 'center', width: '20%', editable: false },
    { text: '% Desviacion', columntype: 'textbox', filtertype: 'number', dataField: 'PorcientoDesviacion', align: 'center', width: '20%', editable: false }
];

inicializarCorrienteExit("#TablaCorrienteExit", _sourceCorrienteExitAction, _columnsCorrienteExitAction);

function inicializarCorrienteExit(_idTabla, _source, columns) {
    $(_idTabla).jqxGrid(
        {
            width: '76%',
            height: 400,
            theme: 'energyblue',
            source: _source,
            sortable: true,
            autoheight: true,
            filterable: true,
            pageable: true,
            localization: getLocalization('es'),

            rendertoolbar: function (statusbar) {
                var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
                statusbar.append(container);
            },
            columns: columns,
        });
}

$("#TablaCorrienteExit").on('rowselect', function (event) {

    datosCorrienteExit = $("#TablaCorrienteExit").jqxGrid('getrowdata', event.args.rowindex);
    idCE = (datosCorrienteExit.Id_CorrienteExit);

});