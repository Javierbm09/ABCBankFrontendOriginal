var baseUrl = $('base').attr('href');
let idTDE;

var _sourceTDEnrrolladoAction =
{
    dataType: "json",
    dataFields: [
        { name: 'Id_TanDeltaEnrollados', type: 'int' },
        { name: 'Seccion', type: 'string' },
        { name: 'Esquema', type: 'string' },
        { name: 'Capacitancia', type: 'double' },
        { name: 'TangenteDelta', type: 'double' },
    ],
    id: 'id',
    pagenum: 3,
    pagesize: 20,
    url: baseUrl + "Sub_MttoTFuerza/ObtenerListaTDEnrrollado",
    data: { idMTF: idMttoTF },
    type: 'GET',
    pager: function (pagenum, pagesize, oldpagenum) {
        // callback called when a page or page size is changed.
    },
    updaterow: function (rowid, newdata, commit) {
        $.ajax({
            cache: false,
            dataType: 'json',
            url: baseUrl + "Sub_MttoTFuerza/ActualizarTDEnrrollado",
            data: { datosFilaTDEnrrollado: newdata, idMTF: idMttoTF },
            type: "POST",
            success: function (data, status, xhr) {
                $("#TablaTDEnrrollado").jqxGrid('updatebounddata');
                // insert command is executed.
                App.alert({
                    container: "#bootstrap_alerts_TDEnrrollado", // alerts parent container(by default placed after the page breadcrumbs)
                    place: "prepend", // append or prepent in container
                    type: "success",  // alert's type
                    message: "Se actualizaron los datos correctamente.",  // alert's message
                    close: 1, // make alert closable
                    reset: 1, // close all previouse alerts first
                    focus: 1, // auto scroll to the alert after shown
                    closeInSeconds: 2,//, // auto close after defined seconds
                    icon: "fa fa-success" // put icon before the message
                });

            },
            error: function (jqXHR, textStatus, errorThrown) {
                commit(false);
                App.alert({
                    container: "#bootstrap_alerts_TDEnrrollado", // alerts parent container(by default placed after the page breadcrumbs)
                    place: "prepend", // append or prepent in container
                    type: "danger",  // alert's type
                    message: "No se pudieron actualizar los datos.",  // alert's message
                    close: 1, // make alert closable
                    reset: 1, // close all previouse alerts first
                    focus: 1, // auto scroll to the alert after shown
                    closeInSeconds: 5,//, // auto close after defined seconds
                    icon: "fa fa-danger" // put icon before the message
                });
            }
        });
    },
};



var _columnsTDEnrrolladoAction = [
    { text: 'idTDE', dataField: 'Id_TanDeltaEnrollados', hidden: true },
    { text: 'Seccion', columntype: 'textbox', filtertype: 'input', dataField: 'Seccion', align: 'left', width: '25%' },
    { text: 'Esquema', columntype: 'textbox', filtertype: 'input', dataField: 'Esquema', align: 'left', width: '25%' },
    { text: 'Capacitancia', columntype: 'textbox', filtertype: 'number', dataField: 'Capacitancia', align: 'left', width: '25%' },
    { text: 'Tangente Delta', columntype: 'textbox', filtertype: 'number', dataField: 'TangenteDelta', align: 'left', width: '25%' }
];

inicializarTDEnrrollado("#TablaTDEnrrollado", _sourceTDEnrrolladoAction, _columnsTDEnrrolladoAction);

function inicializarTDEnrrollado(_idTabla, _source, columns) {
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

$("#TablaTDEnrrollado").on('rowselect', function (event) {

    datosFilaTDEnrrollado = $("#TablaTDEnrrollado").jqxGrid('getrowdata', event.args.rowindex);
    idTDE = (datosFilaTDEnrrollado.Id_TanDeltaEnrollados);

});