sap.ui.define([
    "sap/ui/core/mvc/Controller",

], function(Controller) {
    'use strict';
    return Controller.extend("fiori.practice.controller.BaseController",{
        onInit: function(){},
        getAppObject: function(){
            return this.getView().getParent();
        }
    });
    
});