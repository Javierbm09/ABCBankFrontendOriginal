var baseUrl = $('base').attr('href');

var _sourceTablaRelacionTransformacion =
{
    dataType: "json",
    dataFields: [
        { name: 'CodigoSub', type: 'string' },
        { name: 'Fecha', type: 'date' },
        { name: 'Id_Transformador', type: 'int' },
        { name: 'Id_EATransformador', type: 'short' },
        { name: 'NroTap', type: 'short' },
        { name: 'LabelFaseA', type: 'string' },
        { name: 'LabelFaseB', type: 'string' },
        { name: 'LabelFaseC', type: 'string' },
        { name: 'RelacTransFaseA', type: 'double' },
        { name: 'RelacTransFaseB', type: 'double' },
        { name: 'RelacTransFaseC', type: 'double' },

    ],
    id: 'id',
    pagenum: 1,
    pagesize: 5,
    url: baseUrl + "Sub_MttoTransformadoresUsoPlanta/ObtenerListaRelacionTransformacion",
    data: { NroTap: NroTap },
    type: 'GET',
    pager: function (pagenum, pagesize, oldpagenum) {
        // callback called when a page or page size is changed.
    },

    updaterow: function (rowid, newdata, commit) {
        var vAnno = newdata.Fecha.getFullYear(),
            vMes = newdata.Fecha.getMonth()+1,
            vDia = newdata.Fecha.getDate();        

        var vFecha = vDia + "-" + vMes + "-" + vAnno;
      
        
        $.ajax({
            cache: false,
            dataType: 'json',
            url: baseUrl + "Sub_MttoTransformadoresUsoPlanta/ActualizarRelacionTransformacion",
            data: { datosRelacionTransformacion: newdata, fecha: vFecha},
            type: "POST",
            success: function (data, status, xhr) {
                //$("#TablaRelacionTrasnfor").jqxGrid('updatebounddata');
                // insert command is executed.
                App.alert({
                    container: "#bootstrap_alerts_RelacionTrasnfor", // alerts parent container(by default placed after the page breadcrumbs)
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
                    container: "#bootstrap_alerts_RelacionTrasnfor", // alerts parent container(by default placed after the page breadcrumbs)
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

var _columnEncabesadoRelacionTransf = [

    { text: '', align: 'center', name: 'Tap' },
    { text: '', align: 'center', name: 'H-H' },
    { text: '% Diferencia', align: 'center', name: 'Diferencia' }
];

if (polaridadGrupo == "D/yn -1") {

    var _columnsRelacionTrasnforAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '8%', editable: false },
        { text: 'H1-H3,x1-x0', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseA', align: 'center', width: '16%', editable: true },
        { text: 'H2-H1, x2-x0', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseB', align: 'center', width: '16%', editable: true },
        { text: 'H3-H2,x3-x0', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseC', align: 'center', width: '16%', editable: true },
        { text: 'A-B', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseA', align: 'center', width: '15%', editable: false },
        { text: 'B-C', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseB', align: 'center', width: '15%', editable: false },
        { text: 'C-A', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseC', align: 'center', width: '15%', editable: false },
    ];
}
else if (polaridadGrupo == "D/yn -5") {
    var _columnsRelacionTrasnforAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '8%', editable: false },
        { text: 'H1-H3,x3-x0', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseA', align: 'center', width: '16%', editable: true },
        { text: 'H2-H1, x1-x0', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseB', align: 'center', width: '16%', editable: true },
        { text: 'H3-H2,x2-x0', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseC', align: 'center', width: '16%', editable: true },
        { text: 'A-B', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseA', align: 'center', width: '15%', editable: false },
        { text: 'B-C', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseB', align: 'center', width: '15%', editable: false },
        { text: 'C-A', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseC', align: 'center', width: '15%', editable: false },
    ];
}
else if (polaridadGrupo == "D/yn -7") {
    var _columnsRelacionTrasnforAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '8%', editable: false },
        { text: 'H1-H3,x0-x1', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseA', align: 'center', width: '16%', editable: true },
        { text: 'H2-H1,x0-x2', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseB', align: 'center', width: '16%', editable: true },
        { text: 'H3-H2,x0-x3', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseC', align: 'center', width: '16%', editable: true },
        { text: 'A-B', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseA', align: 'center', width: '15%', editable: false },
        { text: 'B-C', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseB', align: 'center', width: '15%', editable: false },
        { text: 'C-A', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseC', align: 'center', width: '15%', editable: false },
    ];
}
else if (polaridadGrupo == "D/yn -11") {
    var _columnsRelacionTrasnforAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '8%', editable: false },
        { text: 'H1-H3,x0-x3', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseA', align: 'center', width: '16%', editable: true },
        { text: 'H2-H1,x0-x1', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseB', align: 'center', width: '16%', editable: true },
        { text: 'H3-H2,x0-x2', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseC', align: 'center', width: '16%', editable: true },
        { text: 'A-B', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseA', align: 'center', width: '15%', editable: false },
        { text: 'B-C', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseB', align: 'center', width: '15%', editable: false },
        { text: 'C-A', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseC', align: 'center', width: '15%', editable: false },
    ];
}
else if (polaridadGrupo == "Yn/d - 1") {
    var _columnsRelacionTrasnforAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '8%', editable: false },
        { text: 'H1-H0,x1-x2', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseA', align: 'center', width: '16%', editable: true },
        { text: 'H2-H0, x2-x3', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseB', align: 'center', width: '16%', editable: true },
        { text: 'H3-H0,x3-x1', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseC', align: 'center', width: '16%', editable: true },
        { text: 'A-B', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseA', align: 'center', width: '15%', editable: false },
        { text: 'B-C', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseB', align: 'center', width: '15%', editable: false },
        { text: 'C-A', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseC', align: 'center', width: '15%', editable: false },
    ];
}
else if (polaridadGrupo == "Yn/d - 5") {
    var _columnsRelacionTrasnforAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '8%', editable: false },
        { text: 'H1-H0,x3-x1', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseA', align: 'center', width: '16%', editable: true },
        { text: 'H2-H0, x1-x2', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseB', align: 'center', width: '16%', editable: true },
        { text: 'H3-H0,x2-x3', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseC', align: 'center', width: '16%', editable: true },
        { text: 'A-B', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseA', align: 'center', width: '15%', editable: false },
        { text: 'B-C', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseB', align: 'center', width: '15%', editable: false },
        { text: 'C-A', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseC', align: 'center', width: '15%', editable: false },
    ];
}
else if (polaridadGrupo == "Yn/d - 7") {
    var _columnsRelacionTrasnforAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '8%', editable: false },
        { text: 'H1-H0,x2-x1', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseA', align: 'center', width: '16%', editable: true },
        { text: 'H2-H0, x3-x2', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseB', align: 'center', width: '16%', editable: true },
        { text: 'H3-H0,x1-x2', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseC', align: 'center', width: '16%', editable: true },
        { text: 'A-B', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseA', align: 'center', width: '15%', editable: false },
        { text: 'B-C', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseB', align: 'center', width: '15%', editable: false },
        { text: 'C-A', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseC', align: 'center', width: '15%', editable: false },
    ];
}
else if (polaridadGrupo == "Yn/d - 11") {
    var _columnsRelacionTrasnforAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '8%', editable: false },
        { text: 'H1-H0,x1-x3', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseA', align: 'center', width: '16%', editable: true },
        { text: 'H2-H0, x2-x1', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseB', align: 'center', width: '16%', editable: true },
        { text: 'H3-H0,x3-x2', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseC', align: 'center', width: '16%', editable: true },
        { text: 'A-B', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseA', align: 'center', width: '15%', editable: false },
        { text: 'B-C', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseB', align: 'center', width: '15%', editable: false },
        { text: 'C-A', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseC', align: 'center', width: '15%', editable: false },
    ];
}
else if (polaridadGrupo == "YYnYn -0/d - 11" || polaridadGrupo == "YnYn -0/d - 1") {
    var _columnsRelacionTrasnforAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '8%', editable: false },
        { text: 'H1-H0,x1-x0', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseA', align: 'center', width: '16%', editable: true },
        { text: 'H2-H0, x2-x0', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseB', align: 'center', width: '16%', editable: true },
        { text: 'H3-H0,x3-x0', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseC', align: 'center', width: '16%', editable: true },
        { text: 'A-B', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseA', align: 'center', width: '15%', editable: false },
        { text: 'B-C', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseB', align: 'center', width: '15%', editable: false },
        { text: 'C-A', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseC', align: 'center', width: '15%', editable: false },
    ];
}
else if (polaridadGrupo == "D/d - 0") {

    var _columnsRelacionTrasnforAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '8%', editable: false },
        { text: 'H1-H3,x1-x3', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseA', align: 'center', width: '16%', editable: true },
        { text: 'H2-H1,x2-x1', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseB', align: 'center', width: '16%', editable: true },
        { text: 'H3-H2,x3-x2', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseC', align: 'center', width: '16%', editable: true },
        { text: 'A-B', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseA', align: 'center', width: '15%', editable: false },
        { text: 'B-C', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseB', align: 'center', width: '15%', editable: false },
        { text: 'C-A', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseC', align: 'center', width: '15%', editable: false },
    ];
}
else {
    swal({
        title: "El grupo de conexión no es el correcto",
        text: "No tendrá permiso para realizar la Relación de Transformación y la Resistencia Ohmica",
        type: "error",
        confirmButtonClass: "btn-ok",
        confirmButtonText: "OK",
        closeOnConfirm: true
    });
    var _columnsRelacionTrasnforAction = [
        { text: 'CodigoSub', columngroup: 'Tap', columntype: 'textbox', filtertype: 'text', dataField: 'CodigoSub', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Fecha', columngroup: 'Tap', filtertype: 'date', cellsformat: 'yyyy-MM-dd', dataField: 'Fecha', align: 'center', width: '16%', editable: false, hidden: true },
        { text: 'Id_Transformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_Transformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'Id_EATransformador', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'Id_EATransformador', align: 'center', width: '8%', editable: false, hidden: true },
        { text: 'NroTap', columngroup: 'Tap', columntype: 'textbox', filtertype: 'number', dataField: 'NroTap', align: 'center', width: '8%', editable: false },
        { text: 'H1-H3,x1-x0', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseA', align: 'center', width: '16%', editable: false },
        { text: 'H2-H1, x2-x0', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseB', align: 'center', width: '16%', editable: false },
        { text: 'H3-H2,x3-x0', columngroup: 'H-H', columntype: 'textbox', filtertype: 'number', dataField: 'LabelFaseC', align: 'center', width: '16%', editable: false },
        { text: 'A-B', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseA', align: 'center', width: '15%', editable: false },
        { text: 'B-C', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseB', align: 'center', width: '15%', editable: false },
        { text: 'C-A', columngroup: 'Diferencia', columntype: 'textbox', filtertype: 'number', dataField: 'RelacTransFaseC', align: 'center', width: '15%', editable: false },
    ];
}


inicializarRelacionTrasnfor("#TablaRelacionTrasnfor", _sourceTablaRelacionTransformacion, _columnsRelacionTrasnforAction, _columnEncabesadoRelacionTransf);

function inicializarRelacionTrasnfor(_idTabla, _source, columns, columnsgroup) {


    $(_idTabla).jqxGrid(
        {
            width: '80%',
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

$("#TablaRelacionTrasnfor").on('rowselect', function (event) {
    datosRelacionTransformacion = $("#TablaRelacionTrasnfor").jqxGrid('getrowdata', event.args.rowindex);    
});

// Agregar el evento 'cellvaluechanged' al jqxGrid
$("#TablaRelacionTrasnfor").on('cellvaluechanged', function (event) {
    datosRelacionTransformacion = $("#TablaRelacionTrasnfor").jqxGrid('getrowdata', event.args.rowindex);
    datosRelacionTransformacion.RelacTransFaseA = datosRelacionTransformacion.LabelFaseA - datosRelacionTransformacion.LabelFaseB;
    datosRelacionTransformacion.RelacTransFaseB = datosRelacionTransformacion.LabelFaseB - datosRelacionTransformacion.LabelFaseC;
    datosRelacionTransformacion.RelacTransFaseC = datosRelacionTransformacion.LabelFaseC - datosRelacionTransformacion.LabelFaseA;
});
