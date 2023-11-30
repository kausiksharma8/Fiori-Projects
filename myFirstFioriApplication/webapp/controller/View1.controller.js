sap.ui.define([
    'fiori/practice/controller/BaseController'
], function(BaseController) {
    'use strict';
    return BaseController.extend("fiori.practice.controller.View1",{
        onInit: function(){
        },
        goToView1:function(){
            debugger;
            var oApp = this.getAppObject();
            oApp.to("idView2");
        }
    });
});