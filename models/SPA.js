var WebmailViewModel = function () {
    var self = this;
    self.folders = ["Inbox", "Archive", "Sent", "Spam"];
    self.chosenFolderId = ko.observable();
    self.chosenFolderData = ko.observable();
    self.chosenMailData = ko.observable();

    self.goToFolder = function (folder) {
        self.chosenFolderId(folder);
        self.chosenMailData(null);
        $.get('/mail/' + folder, {folder: folder}, function (data) {
            self.chosenFolderData(JSON.parse(data));
        });
    };

    self.goToMail = function (mail) {
        self.chosenFolderId(mail.folder);
        self.chosenFolderData(null); // Stop showing a folder
        $.get("/mail/" + mail.folder, {mailId: mail.id}, function () {
            // console.log(JSON.parse(data))
            self.chosenMailData(mail);
        });
    };
};

ko.applyBindings(new WebmailViewModel());