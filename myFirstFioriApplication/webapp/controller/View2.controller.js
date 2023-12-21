sap.ui.define([
    'fiori/practice/controller/BaseController',
    'sap/m/MessageToast',
    'sap/m/MessageBox'
], function (BaseController, MessageToast, MessageBox) {
    'use strict';
    return BaseController.extend("fiori.practice.controller.View2", {
        onInit: function () {

        },
        onBack: function () {
            var oApp = this.getAppObject();//get the parent object
            oApp.to("idEmptyView");
        },
        approveClose:function(choice){
            if(choice === 'OK'){
                debugger;
            }
            else if(choice === 'CANCEL'){
                debugger;
            }
        },
        __onApprove: function (oEvent) {
            MessageBox.confirm("Please confirm", {
                title: "Confirm",                                    // default
                onClose: this.approveClose.bind(this),                                       // default
                styleClass: "",                                      // default
                actions: [sap.m.MessageBox.Action.OK,
                sap.m.MessageBox.Action.CANCEL],         // default
                emphasizedAction: sap.m.MessageBox.Action.OK,        // default
                initialFocus: null,                                  // default
                textDirection: sap.ui.core.TextDirection.Inherit,
                
            })
        },
        onAdd:function(oEvent){
            debugger;
            var columnArr = Object.keys(this.getView().getModel().getProperty("/suppliers")[0]);
            if (!this._oPopover) {
                this._oPopover = new sap.ui.xmlfragment("fiori.practice.fragments.addRow", this);
                this.getView().addDependent(this._oPopover);
                this._oPopover.open(oEvent.getSource());
                debugger;
              }
              else {
                this._oPopover.open(oEvent.getSource());
                //this._pPopover=undefined;
              }
            
        }

    });
});