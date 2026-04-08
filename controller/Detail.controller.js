sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    "use strict";

    return Controller.extend("product.dashboard.controller.Detail", {
        onInit: function() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("detail").attachPatternMatched(this.onRouteMatched, this);
        },

        onRouteMatched: function(oEvent) {
            var iProductId = oEvent.getParameter("arguments").productId;
            var sUrl = "https://services.odata.org/V4/Northwind/Northwind.svc/Products(" + iProductId + ")?$format=json";

            var oModel = new JSONModel();
            oModel.loadData(sUrl);
            this.getView().setModel(oModel);
        },
        onNavBack: function() {
            this.getOwnerComponent().getRouter().navTo("products");
        }
    });
});