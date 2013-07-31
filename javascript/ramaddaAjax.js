// $Id$

/**
 * Copyright (c) 2013, Information Technology & Systems Center.  University of Alabama in Huntsville
 * All rights reserved.
 * Redistribution and use of the module, with or without modification, are permitted with proper credit to Information Technology & Systems Center,  University of Alabama in Huntsville.
 */

//the following object extention is run after the DOM is loaded on the page
Drupal.behaviors.threddiBehavior = function(context) {

}

function ramaddaSearch() {
    var input = $("[name='text']").val();
    alert(input);
}

function searchAjaxCall() {
    var text = $("[name='text']").val();
    var datadatefrom = $("[name='datadatefrom']").val();
    var datadateto = $("[name='datadateto']").val();
    var areanorth = $("[name='areanorth']").val();
    var areasouth = $("[name='areasouth']").val();
    var areaeast = $("[name='areaeast']").val();
    var areawest = $("[name='areawest']").val();

    $.ajax({
        type: 'GET',
        url: 'threddisearch/ajaxhelper',
        success: displayNewContent, // The js function that will be called upon success request
        dataType: 'text', //define the type of data that is going to get back from the server
        data: {
            text: text,
            datadatefrom: datadatefrom,
            datadateto: datadateto,
            areanorth: areanorth,
            areasouth: areasouth,
            areaeast: areaeast,
            areawest: areawest
        }
    });
}

function displayNewContent(xml) {
    if (xml == "") {
        xml += "<div class='new' style='color:#FF0000'>No matching resuls found</div>";
    }
    $(".new").remove(); //all content added with ajax is of the class 'new'. remove all these to refresh page
    $("#content-content").after(xml);
}

