﻿var baseUrl = $('base').attr('href');
let idTPA;

var _sourceTDEnrrolladoAction =
{
    dataType: "json",
    dataFields: [
        { name: 'Id_EAdminTransformador', type: 'int' },
        { name: 'CodigoEquipo', type: 'string' },
        { name: 'Id_MttoTransformador', type: 'int' },
        { name: 'Id_MttoAislamiento', type: 'int' },
        { name: 'Enrrollado', type: 'int' },
        { name: 'R15A', type: 'int' },
        { name: 'R15B', type: 'int' },
        { name: 'R15C', type: 'int' },
        { name: 'R60A', type: 'int' },
        { name: 'R60B', type: 'int' },
        { name: 'R60C', type: 'int' },
        { name: 'KA', type: 'double' },
        { name: 'KB', type: 'double' },
        { name: 'KC', type: 'double' },
        { name: 'EstadoA', type: 'string' },
        { name: 'EstadoB', type: 'string' },
        { name: 'EstadoC', type: 'string' },
        { name: 'TipoTransformador', type: 'string' },
    ],
    id: 'id',
    pagenum: 3,
    pagesize: 20,
    url: baseUrl + "Sub_MttoTP/ObtenerListaTPAislamiento",
    data: { idMTP: idMttoTP },
    type: 'GET',
    pager: function (pagenum, pagesize, oldpagenum) {
        // callback called when a page or page size is changed.
    },   
    deleterow: function (rowid, newdata, commit) {
        $.ajax({
            dataType: 'json',
            cache: false,
            url: baseUrl + "Sub_MttoTP/EliminarTPAislamiento",
            type: "POST",
            data: {
                idTPA: idTPA
            },
            success: function (data, status, xhr) {
                // delete command is executed.
                $("#TablaTPAislamiento").jqxGrid('updatebounddata');

                App.alert({
                    container: "#bootstrap_alerts_TPAislamiento", // alerts parent container(by default placed after the page breadcrumbs)
                    place: "prepend", // append or prepent in container
                    type: "success",  // alert's type
                    message: "La fila se eliminó correctamente.",  // alert's message
                    close: 1, // make alert closable
                    reset: 1, // close all previouse alerts first
                    focus: 1, // auto scroll to the alert after shown
                    closeInSeconds: 5,//, // auto close after defined seconds
                    icon: "fa fa-success" // put icon before the message
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
                App.alert({
                    container: "#bootstrap_alerts_TPAislamiento", // alerts parent container(by default placed after the page breadcrumbs)
                    place: "prepend", // append or prepent in container
                    type: "danger",  // alert's type
                    message: "La fila no ha sido eliminada.",  // alert's message
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

var _columnsgroupFases = [
    { text: '', align: 'center', name: 'Enr' },
    { text: 'Fase A', align: 'center', name: 'FaseA' },
    { text: 'Fase B', align: 'center', name: 'FaseB' },
    { text: 'Fase C', align: 'center', name: 'FaseC' },
];


var _columnsTDEnrrolladoAction = [
    { text: 'Id_EAdminTransformador', columngroup: 'Enr', dataField: 'Id_EAdminTransformador', hidden: true },
    { text: 'CodigoEquipo', columngroup: 'Enr', dataField: 'CodigoEquipo', hidden: true },
    { text: 'Id_MttoTransformador', columngroup: 'Enr', dataField: 'Id_MttoTransformador', hidden: true },
    { text: 'Id_MttoAislamiento', columngroup: 'Enr', dataField: 'Id_MttoAislamiento', hidden: true },
    { text: 'Enrrollado', columngroup: 'Enr', columntype: 'textbox', filtertype: 'number', dataField: 'Enrrollado', align: 'center', width: '8%' },
    { text: 'R15A', columngroup: 'FaseA', columntype: 'textbox', filtertype: 'number', dataField: 'R15A', align: 'center', width: '7%' },
    { text: 'R60A', columngroup: 'FaseA', columntype: 'textbox', filtertype: 'number', dataField: 'R60A', align: 'center', width: '7%' },
    { text: 'KA', columngroup: 'FaseA', columntype: 'textbox', filtertype: 'number', dataField: 'KA', align: 'center', width: '8%' },
    { text: 'EstadoA', columngroup: 'FaseA', columntype: 'textbox', filtertype: 'input', dataField: 'EstadoA', align: 'center', width: '7%' },
    { text: 'R15B', columngroup: 'FaseB', columntype: 'textbox', filtertype: 'number', dataField: 'R15B', align: 'center', width: '7%' },
    { text: 'R60B', columngroup: 'FaseB', columntype: 'textbox', filtertype: 'number', dataField: 'R60B', align: 'center', width: '7%' },
    { text: 'KB', columngroup: 'FaseB', columntype: 'textbox', filtertype: 'number', dataField: 'KB', align: 'center', width: '8%' },
    { text: 'EstadoB', columngroup: 'FaseB', columntype: 'textbox', filtertype: 'input', dataField: 'EstadoB', align: 'center', width: '7%' },
    { text: 'R15C', columngroup: 'FaseC', columntype: 'textbox', filtertype: 'number', dataField: 'R15C', align: 'center', width: '7%' },
    { text: 'R60C', columngroup: 'FaseC', columntype: 'textbox', filtertype: 'number', dataField: 'R60C', align: 'center', width: '7%' },
    { text: 'KC', columngroup: 'FaseC', columntype: 'textbox', filtertype: 'number', dataField: 'KC', align: 'center', width: '8%' },
    { text: 'EstadoC', columngroup: 'FaseC', columntype: 'textbox', filtertype: 'input', dataField: 'EstadoC', align: 'center', width: '7%' },

    {
        text: '', datafield: 'addButtonColumn', columntype: 'button', width: '5%', cellsrenderer: function () {
            return "Eliminar";
        }, buttonclick: function (row) {
            // open the popup window when the user clicks a button.
            editrow = row;
            filaSeleccionada = $("#TablaTPAislamiento").jqxGrid('getrowid', editrow);
            swal({
                title: '¿Está seguro de eliminar esta fila?',
                text: '¡Los valores de esta fila se eliminarán y no se podrán recuperar!',
                type: 'info',
                allowOutsideClick: 'allow-outside-click',
                showConfirmButton: 'true',
                showCancelButton: 'true',
                confirmButtonClass: 'btn-success',
                cancelButtonClass: 'btn-default',

                closeOnConfirm: 'false',
                closeOnCancel: 'false',
                confirmButtonText: '¡Sí, eliminar!',
                cancelButtonText: '¡No, cancelar!',

            }, function (isConfirm) {
                if (isConfirm) {
                    $("#TablaTPAislamiento").jqxGrid('deleterow', filaSeleccionada);

                } else {
                    swal("Cancelado", "Los acción de eliminar ha sido cancelada.", "error")
                }
            });
        }
    }
];

inicializarTablaConColumnGroups("#TablaTPAislamiento", _sourceTDEnrrolladoAction, _columnsTDEnrrolladoAction, _columnsgroupFases);

function inicializarTablaConColumnGroups(_idTabla, _source, columns, columnsgroup) {
    $(_idTabla).jqxGrid(
        {
            width: '100%',
            height: 400,
            theme: 'energyblue',
            source: _source,
            sortable: true,
            //editable: true,
            autoheight: true,
            filterable: true,
            pageable: true,
            localization: getLocalization('es'),

            rendertoolbar: function (statusbar) {
                var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
                statusbar.append(container);
            },
            columns: columns,
            columngroups: columnsgroup,
        });
}

$("#TablaTPAislamiento").on('rowselect', function (event) {

    datosFilaTPAislamiento = $("#TablaTPAislamiento").jqxGrid('getrowdata', event.args.rowindex);
    idTPA = (datosFilaTPAislamiento.Id_MttoAislamiento);

});