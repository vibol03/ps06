/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function buildMultiplicationTable() {
    var horStart = document.getElementById("horizontalStart").value;
    var horEnd = document.getElementById("horizontalEnd").value;

    var vertStart = document.getElementById("verticalStart").value;
    var vertEnd = document.getElementById("verticalEnd").value;
    if(validateInput(horStart, horEnd, vertStart, vertEnd)){          
        buildTable(horStart, horEnd, vertStart, vertEnd);
    }
    else{        
        alert("mo");
        return;
    }
}
function buildTable(hs, he, vs, ve){
    // This code was taken from stackoverflow. It is an equivilent of string.Format() in C#
    if (!String.format) {
        String.format = function (format) {
            var args = Array.prototype.slice.call(arguments, 1);
            return format.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined'
                        ? args[number]
                        : match
                        ;
            });
        };
    }
    //************************************************************************//
    
    
    var tableStructure = "<table>\n\
{0}\n\
</table>";
    var row = "<tr>\n\
{0}\n\
</tr>\n\
";
    var down = "<td>\n\
{0}\n\
</td>\n\
";
//    alert(tableStructure);


    var tr = "<tr><td></td>";
    var firstRow = "";
    for(var k = vs; k <= ve; k++)
    {
        firstRow += String.format(down, k);
    }
    tr += firstRow + "</tr>";
    
    for(var i = hs; i <= he; i++){
        var td = "<td>" + i + "</td>";
        for(var j = vs; j <= ve; j++){
            td += String.format(down, i * j);
        }
        tr += String.format(row, td);
    }
    
    
    var table = String.format(tableStructure, tr);
    //alert(table);
    console.log(table);
    document.getElementById( "mulTable" ).innerHTML = table;
    
}
function validateInput()
{
    var horStart = document.getElementById("horizontalStart").value;
    var horEnd = document.getElementById("horizontalEnd").value;

    var vertStart = document.getElementById("verticalStart").value;
    var vertEnd = document.getElementById("verticalEnd").value;
    
    if (horStart === "" || horEnd === "" || vertStart === "" || vertEnd === "") {
        alert("All input must NOT be empty");
        return false;
    }
    
    if(isNaN(horStart) || isNaN(horEnd) || isNaN(vertStart) || isNaN(vertEnd))
    {
        alert("All input MUST be a number");
        return false;
    }    
    
    return true;
}
