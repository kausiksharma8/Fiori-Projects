sap.ui.define([
    'fiori/practice/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("fiori.practice.controller.View2",{
        onInit: function(){
           
        },
        onBack:function(){
            var oApp = this.getAppObject();//get the parent object
            oApp.to("idEmptyView");
        }
    });
});