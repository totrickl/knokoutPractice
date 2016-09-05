var myViewModel = function (name, lastName) {

    this.firstName = ko.observable('Bert');
    this.lastName = ko.observable("Berlington");

    this.capitalizeLastName = function () {
        var currentVal = this.lastName();        // Read the current value
        this.lastName(currentVal.toUpperCase()); // Write back a modified value
    };

    this.fullName = ko.computed(function () {
        return this.firstName() + " " + this.lastName();
    }, this);
}
// Activates knockout.js
ko.applyBindings(new myViewModel());