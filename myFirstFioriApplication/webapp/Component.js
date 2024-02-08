sap.ui.define(["sap/ui/core/UIComponent"],function(UIComponent){
    return UIComponent.extend("fiori.practice.Component",{

        metadata:{},
        init:function(){
            //Constructor Section

            /**This line calling the BASE class constructor
             * Why? - the standard base class Constructor creates a lots of FREE objectes like Router and many more
             */
            UIComponent.prototype.init.apply(this);
        },
        createContent: function() {
            // Start of the application
            var oApp = new sap.ui.view({
                id:"idDemoView",
                viewName: "fiori.practice.view.App",
                type:'XML'
            }) ;
            return oApp;
        },
        destroy:function () {
            //Destroyer
        }
    })
})