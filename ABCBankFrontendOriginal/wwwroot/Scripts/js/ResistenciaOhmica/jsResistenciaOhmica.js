var baseUrl = $('base').attr('href');

var _sourceTablaResistenciaOhmica = {

    dataType: "json",
    dataFields: [
        { name: 'CodigoSub', type: 'string' },
        { name: 'Fecha', type: 'date' },
        { name: 'Id_Transformador', type: 'int' },
        { name: 'Id_EATransformador', type: 'short' },
        { name: 'NroTap', type: 'short' },
        { name: 'LabelFaseAPrim', type: 'string' },
        { name: 'LabelFaseBPrim', type: 'string' },
        { name: 'LabelFaseCPrim', type: 'string' },
        { name: 'LabelFaseASec', type: 'string' },
        { name: 'LabelFaseBSec', type: 'string' },
        { name: 'LabelFaseCSec', type: 'string' },
        { name: 'ResistOhmFaseAPrim', type: 'double' },
        { name: 'ResistOhmFaseBPrim', type: 'double' },
        { name: 'ResistOhmFaseCPrim', type: 'double' },
        { name: 'ResistOhmFaseASec', type: 'double' },
        { name: 'ResistOhmFaseBSec', type: 'double' },
        { name: 'ResistOhmFaseCSec', type: 'double' },
    ],
    id: 'id',
    pagenum: 1,
    pagesize: 5,
    url: baseUrl + "Sub_MttoTransformadoresUsoPlanta/ObtenerListaResistenciaOhmica",
    data: { NroTap: NroTap },
    type: 'GET',
    pager: function (pagenum, pagesize, oldpagenum) {
        // callback called when a page or page size is changed.
    },
    updaterow: function (rowid, newdata, commit) {
        var vAnno = newdata.Fecha.getFullYear(),
            vMes = newdata.Fecha.getMonth() + 1,
            vDia = newdata.Fecha.getDate();

        var vFecha = vDia + "-" + vMes + "-" + vAnno;
        $.ajax({
            cache: false,
            dataType: 'json',
            url: baseUrl + "Sub_MttoTransformadoresUsoPlanta/ActualizarResistenciaOhmica",
            data: { datosResistenciaOhmica: newdata, fecha: vFecha },
            type: "POST",
            success: function (data, status, xhr) {
                //$("#TablaResistenciaOhmica").jqxGrid('updatebounddata');
                // insert command is executed.
                App.alert({
                    container: "#bootstrap_alerts_ResistenciaOhmica", // alerts parent container(by default placed after the page breadcrumbs)
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
                    container: "#bootstrap_alerts_ResistenciaOhmica", // alerts parent container(by default placed after the page breadcrumbs)
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

var polaridadGrupo = ObtenerPolaridad();

var _columnEncabesadoResistenciaOhmica = [

    { text: '', align: 'center', name: 'Tap' },
    { text: 'Primario', align: 'center', name: 'Primario' },
    { text: 'Secundario', align: 'center', name: 'Secundario' },
    { text: 'Primario % diferencia', align: 'center', name: 'PrimarioDiferencia' },
    { text: 'Secundario % difirencia', align: 'center', name: 'SecundarioDiferencia' }
];

if (polaridadGrupo == "D/yn -1" || polaridadGrupo == "D/yn -5" || polaridadGrupo == "D/yn -7" || polaridadGrupo == "D/yn -11") {
    var _columnsResistenciaOhmicaAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '5%', editable: false },
        { text: 'A-B', columngroup: 'Primario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseAPrim', align: 'center', width: '8%', editable: true },
        { text: 'B-C', columngroup: 'Primario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseBPrim', align: 'center', width: '8%', editable: true },
        { text: 'C-A', columngroup: 'Primario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseCPrim', align: 'center', width: '8%', editable: true },
        { text: 'a-n', columngroup: 'Secundario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseASec', align: 'center', width: '8%', editable: true },
        { text: 'b-n', columngroup: 'Secundario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseBSec', align: 'center', width: '8%', editable: true },
        { text: 'c-n', columngroup: 'Secundario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseCSec', align: 'center', width: '8%', editable: true },
        { text: 'A-B', columngroup: 'PrimarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseAPrim', align: 'center', width: '8%', editable: false },
        { text: 'B-C', columngroup: 'PrimarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseBPrim', align: 'center', width: '8%', editable: false },
        { text: 'C-A', columngroup: 'PrimarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseCPrim', align: 'center', width: '8%', editable: false },
        { text: 'a-b', columngroup: 'SecundarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseASec', align: 'center', width: '8%', editable: false },
        { text: 'b-c', columngroup: 'SecundarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseBSec', align: 'center', width: '8%', editable: false },
        { text: 'c-a', columngroup: 'SecundarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseCSec', align: 'center', width: '6%', editable: false },

    ];
}
else if (polaridadGrupo == "Yn/d - 1" || polaridadGrupo == "Yn/d - 5" || polaridadGrupo == "Yn/d - 7" || polaridadGrupo == "Yn/d - 11") {
    var _columnsResistenciaOhmicaAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '5%', editable: false },
        { text: 'A-N', columngroup: 'Primario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseAPrim', align: 'center', width: '8%', editable: true },
        { text: 'B-N', columngroup: 'Primario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseBPrim', align: 'center', width: '8%', editable: true },
        { text: 'C-N', columngroup: 'Primario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseCPrim', align: 'center', width: '8%', editable: true },
        { text: 'a-b', columngroup: 'Secundario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseASec', align: 'center', width: '8%', editable: true },
        { text: 'b-c', columngroup: 'Secundario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseBSec', align: 'center', width: '8%', editable: true },
        { text: 'c-a', columngroup: 'Secundario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseCSec', align: 'center', width: '8%', editable: true },
        { text: 'A-B', columngroup: 'PrimarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseAPrim', align: 'center', width: '8%', editable: false },
        { text: 'B-C', columngroup: 'PrimarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseBPrim', align: 'center', width: '8%', editable: false },
        { text: 'C-A', columngroup: 'PrimarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseCPrim', align: 'center', width: '8%', editable: false },
        { text: 'a-b', columngroup: 'SecundarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseASec', align: 'center', width: '8%', editable: false },
        { text: 'b-c', columngroup: 'SecundarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseBSec', align: 'center', width: '8%', editable: false },
        { text: 'c-a', columngroup: 'SecundarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseCSec', align: 'center', width: '6%', editable: false },

    ];
}
else if (polaridadGrupo == "YYnYn -0/d - 11" || polaridadGrupo == "YnYn -0/d - 1") {
    var _columnsResistenciaOhmicaAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '5%', editable: false },
        { text: 'A-N', columngroup: 'Primario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseAPrim', align: 'center', width: '8%', editable: true },
        { text: 'B-N', columngroup: 'Primario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseBPrim', align: 'center', width: '8%', editable: true },
        { text: 'C-N', columngroup: 'Primario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseCPrim', align: 'center', width: '8%', editable: true },
        { text: 'a-n', columngroup: 'Secundario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseASec', align: 'center', width: '8%', editable: true },
        { text: 'b-n', columngroup: 'Secundario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseBSec', align: 'center', width: '8%', editable: true },
        { text: 'c-n', columngroup: 'Secundario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseCSec', align: 'center', width: '8%', editable: true },
        { text: 'A-B', columngroup: 'PrimarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseAPrim', align: 'center', width: '8%', editable: false },
        { text: 'B-C', columngroup: 'PrimarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseBPrim', align: 'center', width: '8%', editable: false },
        { text: 'C-A', columngroup: 'PrimarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseCPrim', align: 'center', width: '8%', editable: false },
        { text: 'a-b', columngroup: 'SecundarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseASec', align: 'center', width: '8%', editable: false },
        { text: 'b-c', columngroup: 'SecundarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseBSec', align: 'center', width: '8%', editable: false },
        { text: 'c-a', columngroup: 'SecundarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseCSec', align: 'center', width: '6%', editable: false },

    ];
}
else if (polaridadGrupo == "D/d - 0") {
    var _columnsResistenciaOhmicaAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '5%', editable: false },
        { text: 'A-B', columngroup: 'Primario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseAPrim', align: 'center', width: '8%', editable: true },
        { text: 'B-C', columngroup: 'Primario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseBPrim', align: 'center', width: '8%', editable: true },
        { text: 'C-A', columngroup: 'Primario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseCPrim', align: 'center', width: '8%', editable: true },
        { text: 'a-b', columngroup: 'Secundario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseASec', align: 'center', width: '8%', editable: true },
        { text: 'b-c', columngroup: 'Secundario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseBSec', align: 'center', width: '8%', editable: true },
        { text: 'c-a', columngroup: 'Secundario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseCSec', align: 'center', width: '8%', editable: true },
        { text: 'A-B', columngroup: 'PrimarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseAPrim', align: 'center', width: '8%', editable: false },
        { text: 'B-C', columngroup: 'PrimarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseBPrim', align: 'center', width: '8%', editable: false },
        { text: 'C-A', columngroup: 'PrimarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseCPrim', align: 'center', width: '8%', editable: false },
        { text: 'a-b', columngroup: 'SecundarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseASec', align: 'center', width: '8%', editable: false },
        { text: 'b-c', columngroup: 'SecundarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseBSec', align: 'center', width: '8%', editable: false },
        { text: 'c-a', columngroup: 'SecundarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseCSec', align: 'center', width: '6%', editable: false },

    ];
}
else {
    var _columnsResistenciaOhmicaAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '5%', editable: false },
        { text: 'A-B', columngroup: 'Primario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseAPrim', align: 'center', width: '8%', editable: false },
        { text: 'B-C', columngroup: 'Primario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseBPrim', align: 'center', width: '8%', editable: false },
        { text: 'C-A', columngroup: 'Primario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseCPrim', align: 'center', width: '8%', editable: false },
        { text: 'a-n', columngroup: 'Secundario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseASec', align: 'center', width: '8%', editable: false },
        { text: 'b-n', columngroup: 'Secundario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseBSec', align: 'center', width: '8%', editable: false },
        { text: 'c-n', columngroup: 'Secundario', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseCSec', align: 'center', width: '8%', editable: false },
        { text: 'A-B', columngroup: 'PrimarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseAPrim', align: 'center', width: '8%', editable: false },
        { text: 'B-C', columngroup: 'PrimarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseBPrim', align: 'center', width: '8%', editable: false },
        { text: 'C-A', columngroup: 'PrimarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseCPrim', align: 'center', width: '8%', editable: false },
        { text: 'a-b', columngroup: 'SecundarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseASec', align: 'center', width: '8%', editable: false },
        { text: 'b-c', columngroup: 'SecundarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseBSec', align: 'center', width: '8%', editable: false },
        { text: 'c-a', columngroup: 'SecundarioDiferencia', columntype: 'textbox', filtertype: 'number', dataField: 'ResistOhmFaseCSec', align: 'center', width: '6%', editable: false },

    ];
}


inicializarResistenciaOhmica("#TablaResistenciaOhmica", _sourceTablaResistenciaOhmica, _columnsResistenciaOhmicaAction, _columnEncabesadoResistenciaOhmica);

function inicializarResistenciaOhmica(_idTabla, _source, columns, columnsgroup) {


    $(_idTabla).jqxGrid(
        {
            width: '100%',
            height: 400,
            theme: 'energyblue',
            source: _source,
            sortable: true,
            editable: true,
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

$("#TablaResistenciaOhmica").on('rowselect', function (event) {

    datosResistenciaOhmica = $("#TablaResistenciaOhmica").jqxGrid('getrowdata', event.args.rowindex);
});

// Agregar el evento 'cellvaluechanged' al jqxGrid
$("#TablaResistenciaOhmica").on('cellvaluechanged', function (event) {
    datosResistenciaOhmica = $("#TablaResistenciaOhmica").jqxGrid('getrowdata', event.args.rowindex);
    datosResistenciaOhmica.ResistOhmFaseAPrim = ((datosResistenciaOhmica.LabelFaseBSec/datosResistenciaOhmica.LabelFaseAPrim * 100) - 100).toFixed(2);
    datosResistenciaOhmica.ResistOhmFaseBPrim = ((datosResistenciaOhmica.LabelFaseCPrim/datosResistenciaOhmica.LabelFaseBPrim * 100) - 100).toFixed(2);
    datosResistenciaOhmica.ResistOhmFaseCPrim = ((datosResistenciaOhmica.LabelFaseAPrim / datosResistenciaOhmica.LabelFaseCPrim * 100) - 100).toFixed(2);
    datosResistenciaOhmica.ResistOhmFaseASec = ((datosResistenciaOhmica.LabelFaseBSec / datosResistenciaOhmica.LabelFaseASec * 100) - 100).toFixed(2);
    datosResistenciaOhmica.ResistOhmFaseBSec = ((datosResistenciaOhmica.LabelFaseCSec / datosResistenciaOhmica.LabelFaseBSec * 100) - 100).toFixed(2);
    datosResistenciaOhmica.ResistOhmFaseCSec = ((datosResistenciaOhmica.LabelFaseASec / datosResistenciaOhmica.LabelFaseCSec * 100) - 100).toFixed(2);
});