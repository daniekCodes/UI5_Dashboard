sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("product.dashboard.Component", {
        metadata: {
            manifest: "json"
        },

        init: function() {
            // Call parent init first
            UIComponent.prototype.init.apply(this,arguments);
            // Start router
            this.getRouter().initialize();
        }
    });
});