
// This function will handle all the changes that will be made on the template.
function updateTemplate() 
{
    if(document.getElementById("middle-text").value != document.getElementById("template-text").value
    && document.getElementById("template-text").value !== "") {
        document.getElementById("middle-text").innerHTML = document.getElementById("template-text").value;
    }
}