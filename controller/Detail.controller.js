sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    "use strict";

    return Controller.extend("product.dashboard.controller.Detail", {
        // Match detail route
        onInit: function() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("detail").attachPatternMatched(this.onRouteMatched, this);
        },

        onRouteMatched: function(oEvent) {
            // Read product ID from URL and fetch info
            var iProductId = oEvent.getParameter("arguments").productId;
            var sUrl = "https://services.odata.org/V4/Northwind/Northwind.svc/Products(" + iProductId + ")?$format=json";

            var oModel = new JSONModel();
            oModel.loadData(sUrl);
            this.getView().setModel(oModel);
        },
        onNavBack: function() {
            // Go back to product list
            this.getOwnerComponent().getRouter().navTo("products");
        }
    });
});