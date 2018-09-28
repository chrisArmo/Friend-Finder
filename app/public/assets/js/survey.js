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
    const name = title($("#full-name").val().trim()),
    image = $("#image-url").val().trim(),
    selects = $("#survey select"),
    scores = $.map(selects, function(select, index) {
        return parseInt($(select).val(), 10);
    });
    $("#full-name").val("");
    $("#image-url").val("");
    // location.reload();
    $.post("/api/friends", {
        name,
        image,
        scores
    }, (data) => {
        console.log(data);
    });
};

// Main
// ----------------------------------------

form.on("submit", postSurveyData);
