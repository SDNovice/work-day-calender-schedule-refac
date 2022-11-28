// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // This section of code defines the objects in my html that will display my current day
  // I have decided to use jQuery to help consolidate my code and make it more accesible
var day = $('#currentDay');
var now = dayjs();
var longDate = now.$d;
var hour = dayjs().hour();
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
day.text(longDate);
// Below is an array that holds the hours of a work shift
// This allows us to implent the array into a jQuery for loop
var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// The for loop below continuously pulls every ID from the html document
// and assigns it to a value for a time section an button value.
$.each(workHours, function(i, num){
let rowId = $('#hour-' + num);
let note = $('#note-' + num);
let btn = $('#btn-' + num);
// This takes the pulled button value and helps let the listner know what is 
// being targeted and triggers the save event.
btn.click(function(){saveEvent(num)});
// This helps us figure out what the current time of day is an assignt the propper
// css design to each section.
if (num === hour) {
  rowId.addClass('present');
}else if (num < hour) {
  rowId.addClass('past');
}else{
  rowId.addClass('future');
}
// This pulls the stores the entered text.
note.text(localStorage.getItem('data-' + num));
})

//this function displays the saved text
function saveEvent(event) {
  let note = document.getElementById('note-' + event).value;
  localStorage.setItem('data-' + event, note);
  
}
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
 });
