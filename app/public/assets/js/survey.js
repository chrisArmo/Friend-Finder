/**
 * Survey Handler
 */

// Global Variables
// ----------------------------------------
const form = $("#survey");

// Functions
// ----------------------------------------

// Capitalize word
const capitalize = (word) => `${word.charAt(0).toUpperCase()}${word.substring(1).toLowerCase()}`;

// Title case text
const title = (text) => text.split(" ").map(capitalize).join(" ");

// Post survey data
const postSurveyData = (e) => {
    e.preventDefault();
    const namePattern = /^[a-z]{2,20}((\s|-)[a-z]{2,20}){0,5}$/i,
        imagePattern = /^.{5,}/i,
    name = title($("#full-name").val().trim()),
    image = $("#image-url").val().trim(),
    selects = $("#survey select"),
    scores = $.map(selects, function(select, index) {
        return parseInt($(select).val(), 10);
    });
    if (namePattern.test(name) && imagePattern.test(image)) {
        $("#full-name").val("");
        $("#image-url").val("");
        $("select option:nth-child(3)").prop("selected", true);
        $.post("/api/friends", {
            name,
            image,
            scores
        }, (data) => {
            console.log(data);
            $(".modal-title").text(`Your new bestie: ${data.name}`);
            $(".modal-body").html(`
                <img 
                    src="${data.image}" 
                    alt="Random people placeholder image"
                    class="img-fluid rounded" />
            `);
            $("#friendMatchModal").modal("show");
        });
    } else {
        $("#errorModal").modal("show");
    }
};

// Main
// ----------------------------------------

form.on("submit", postSurveyData);
