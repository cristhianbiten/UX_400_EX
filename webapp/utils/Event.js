sap.ui.define([
    "sap/m/MessageBox",
],
    function (MessageBox) {
        "use strict";

        var Event = {

            messageInformation: function (message) {
                return MessageBox.information(message);
            }

        }

        return Event;

    }, true);