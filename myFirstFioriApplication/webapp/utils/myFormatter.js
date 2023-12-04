sap.ui.define([], function () {
  "use strict";
  return {
    getAvailability: function (availability) {
      if (availability === "O") {
        return "Out of Stock";
      } else if (availability === "A") {
        return "Available";
      } else if (availability === "D") {
        return "Discontinued";
      }
    },
    setState: function (state) {
      if (state === "O") {
        return "Warning";
      } else if (state === "A") {
        return "Success";
      } else if (state === "D") {
        return "Error";
      }
    },
  };
});
