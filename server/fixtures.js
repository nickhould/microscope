if (Posts.find().count() === 0) {
    console.log("Running fixtures");
    Posts.insert({
        title: "Introducing Telescope",
        author: "Sacha Greif",
        url: "http://sachagreif.com/introducing-telescope"
    });

    Posts.insert({
        title: "Meteor",
        author: "Tom Colemna",
        url: "http://themeteorbook.com"
    });

    Posts.insert({
        title: "Meteor",
        author: "Tom Coleman",
        url: "http://meteor.com"
    });
}