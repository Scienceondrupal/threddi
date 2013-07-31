// $Id$

/**
 * Copyright (c) 2013, Information Technology & Systems Center.  University of Alabama in Huntsville
 * All rights reserved.
 * Redistribution and use of the module, with or without modification, are permitted with proper credit to Information Technology & Systems Center,  University of Alabama in Huntsville.
 */

var ajaxText = 'Error Loading content'; //the text from the ajax call
var domObject;
var domLevel;

//the following object extention is run after the DOM is loaded on the page
Drupal.behaviors.threddiBehavior = function(context) {
    //If an element with the class 'expandable' is clicked, insert an element after.
    //The function 'live' is used because it automatically updates the context so that the javascript knows about any added DOM elements
    jQuery(".expandable").live('click', function() {
        var url = (jQuery(this).attr('title')); //get the url of the next xml file from the dom element's 'title' attribute
        jQuery(this).attr('class', 'expanded2'); //set the class of the attribute to 'expanded' so that you can't click it again
        domObject = this; //remember what element we are working with so that the ajax callback function knows where to put new stuff
        domLevel = jQuery(this).attr('id'); //get the level of the item for spacing purposes and remember it
        ajaxCall(url);
    });

    jQuery(".expanded2").live('click', function() {
        //jQuery(this + "ul").hide();
    });
}

//makes an ajax call to threddi/ajaxhelper, and has the returned ajax value go to displayNewContent()
//url - the url value that gets passed to threddi/ajaxhelper
function ajaxCall(url) {
    jQuery.ajax({
        type: 'GET',
        url: 'threddi/ajaxhelper',
        success: displayNewContent, // The js function that will be called upon success request
        error: ajaxTimeout,
        dataType: 'text', //define the type of data that is going to get back from the server
        data: {url: url, spacing: domLevel}, //this data is used by threddi_ajaxhelper function in threddi.module
        timeout: Drupal.settings.threddi.timeout // how long (in milliseconds) until the request times out
    });
}

function ajaxTimeout(objAJAXRequest, strError) {
    jQuery(domObject).after("<div style='color:#FF0000'>Request timed out</div>");
}

//callback function for the ajax call defined in 'ajaxCall()'. It adds the new content after 'domObject'
function displayNewContent(xml) {
    if (xml == "") {
        xml += "<div style='color:#FF0000'>Error Loading Content</div>";
    }
    jQuery(domObject).after(xml);
}

