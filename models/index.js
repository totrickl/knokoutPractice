var myViewModel = function (name, lastName) {

    this.firstName = ko.observable('Bert');
    this.lastName = ko.observable("Berlington");

    // function setName(name) {
    //     if(!name || !lastName){
    //         throw new Error("Please fill the fields with some values");
    //     }
    //
    // }
    //
    // function setlastName(lastName) {
    //     if(!lastName){
    //         throw new Error("Please fill the fields with some values");
    //     }
    // }


    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);
}
// Activates knockout.js
ko.applyBindings(new myViewModel());