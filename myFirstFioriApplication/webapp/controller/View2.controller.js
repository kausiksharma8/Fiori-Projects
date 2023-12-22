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
        approveClose: function (choice) {
            if (choice === 'OK') {
                debugger;
            }
            else if (choice === 'CANCEL') {
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
        supplierAppendColumn: ['name', 'city'],
        onAdd: function (oEvent) {
            debugger;
            var aSuppliersKeys = Object.keys(this.getView().getModel().getProperty("/suppliers")[0]);
            if (!this._oPopover) {
                this._oPopover = new sap.ui.xmlfragment("fiori.practice.fragments.addRow", this);
                this.getView().addDependent(this._oPopover);
            }

            //Get the combobox data from addRow.fragment 
            var oAddRowComboBox = sap.ui.getCore().byId("addRowComboBox");
            oAddRowComboBox.removeAllItems()
            oAddRowComboBox.clearSelection()
            var columnArr = aSuppliersKeys.filter((element) => !this.supplierAppendColumn.includes(element));

            for (let index = 0; index < columnArr.length; index++) {
                oAddRowComboBox.addItem(new sap.ui.core.Item({
                    key: columnArr[index],
                    text: columnArr[index]
                }))

            }
            this._oPopover.open(oEvent.getSource());

        },
        onAddRowOk: function (oEvent) {
            debugger;
            var getSelectedItem = sap.ui.getCore().byId("addRowComboBox").getSelectedItem()
            if (getSelectedItem) {
                var colName = getSelectedItem.getText()
                var oSupplierTable = this.getView().byId("__idSuppliersTable")
                var columnListTable = this.getView().byId("__tableColList")

                oSupplierTable.addColumn(new sap.m.Column({
                    header: new sap.m.Label({
                        text: colName 
                    })
                }));
                columnListTable.addCell(new sap.m.Text({ text: "{" + colName + "}" }));
                oSupplierTable.bindItems("/suppliers", columnListTable)
                this.supplierAppendColumn.push(colName);
                this._oPopover.close();

            }
        },

        onAddRowClose: function () {
            if (this._oPopover) {
                this._oPopover.close();

            }
        }

    });
});