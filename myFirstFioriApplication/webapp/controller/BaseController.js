sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "fiori/practice/utils/myFormatter"

], function(Controller,myFormatter) {
    'use strict';
    return Controller.extend("fiori.practice.controller.BaseController",{
        onInit: function(){},
        formatter:myFormatter,
        getAppObject: function(){
            return this.getView().getParent().getParent(); //view -->master section-->splitApp
        }
    });
    
});