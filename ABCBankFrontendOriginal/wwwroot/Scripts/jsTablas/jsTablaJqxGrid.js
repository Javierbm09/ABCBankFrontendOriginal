﻿
var style = {
    headerBackgroundColor: '#000000',
    headerColor: '#fff',
    //groupColor: '#FF0000',
    //headerBackgroundHoveredColor: '#FE6602',
    //headerHoveredColor: '#fff',
    //headerBackgroundSelectedColor: '#FC3752',
    //headerSelectedColor: '#fff',
    //backgroundColor: '#fff',
    color: '#000',
    //backgroundHoveredColor: '#FE6602',
    //hoveredColor: '#fff',
    //backgroundSelectedColor: '#FC3752',
    //selectedColor: '#fff'
};
function inicializarTabla(_idTabla, _source, columns) {
    $(_idTabla).jqxGrid(
        {
            width: "100%",
            sortable: false,
            filterable: true,
            pageable: false,
            altRows: true,
            autorowheight: true,
            autoheight: true,
            editable: false,
            showStatusbar: true,
            showaggregates: false,           
            columnsresize: true,
            selectionMode: 'singleRow',
            autorowheight: true,
            source: _source,          
            //theme: 'shinyblack',
            columnsresize: true,
            columnsautoresize: true,
            showfiltercolumnbackground: false,
            showfiltermenuitems: false,
            showsortcolumnbackground: false,
            showsortmenuitems: false,
            showstatusbar: false,
            showtoolbar: false,
            localization: getLocalization('es'),
            rendertoolbar: function (statusbar) {
                var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
                statusbar.append(container);
            },
            columns: columns,
        });
   
};
function inicializarTablaConColumnGroups(_idTabla, _source, columns, columnsgroup) {
    $(_idTabla).jqxGrid(
        {
            width: "100%",
            sortable: false,
            filterable: true,
            pageable: false,
            altRows: true,
            autorowheight: true,
            autoheight: true,
            editable: false,
            showStatusbar: true,
            showaggregates: true,
            selectionMode: 'singleRow',
            source: _source,
            //theme: 'energyblue',  
            columnsresize: true,
            columnsautoresize: true,
            showfiltercolumnbackground: false,
            showfiltermenuitems: false,
            showsortcolumnbackground: false,
            showsortmenuitems: false,
            showstatusbar: false,
            showtoolbar: false,
            localization: getLocalization('es'),
            rendertoolbar: function (statusbar) {
                var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
                statusbar.append(container);
            },
            columns: columns,
            columngroups: columnsgroup,
        });
};