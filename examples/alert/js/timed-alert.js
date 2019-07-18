/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
window.addEventListener('load', function() {
    this.setTimeout(addAlert, 60000);
});

/*
 * @function addAlert
 *
 * @desc Adds an alert to the page
 *
 * @param   {Object}  event  -  Standard W3C event object
 *
 */

function addAlert(event) {
    var title = document.getElementById('title');
    var desc = document.getElementById('desc');
    var example = document.getElementById('example');
    var template = document.getElementById('alert-template').innerHTML;

    title.disabled = true;
    desc.disabled = true;
    example.innerHTML = template;

}