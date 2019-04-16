$(document).ready(function () {
    $('p.para1').css('color', 'blue');
    $('p.para1').css({ color: 'blue', background: '#ccc' });
    $('#btnl').click(function () {
        $('p.para2').toggleClass('myClass')
    })
    //$('table').append('<td> ""</td>');
    //$('table').prepend('<td>""</td>');
    $('.para1').appendTo('.para2');
    $('.para1').prependTo('.para2');

    $('ul').before('<h4>unichris libray</h4>')
    $('ul').after('<h4>unichris library</h4>')
    $('#newItem').keyup(function (e) {
        var code = e.which;
        if (code == 13) {
            e.preventDefault();
            $('ul').append('<li>' + e.target.value + '</li>');


        }
    })
})

const courses = {};
courses["pshychology"] = {
    url: "pshychology.html",
    data: [
        {
            Author: "SEGUN BAKARE", Title: "basics of broadcasting : A manual on radio and television techniques in nigeria.", isbn: "978-o67-039-4",
            "Year of Publication": "2005", "Place of Publication": "palms publications", "Number of Title": "1", "Class Number": "PN 1990.83.B166", "Edition": "First Edition"
        }
    ]
}

var newItemCounter = 1;
var ourList = document.getElementById("our-listItem");
var ourNewItem = document.getElementById("newItem");
var Headline = document.getElementById("our-headline");
var listItems = document.getElementById("our-listItem").getElementsByTagName("li");
//for(i = 0; i < listItems.length; i++){
ourList.addEventListener("click", activateItem);
//}
function activateItem(e) {
    if (e.target.nodeName == "LI") {
        Headline.innerHTML = e.target.innerHTML;
        for (i = 0; i < e.target.parentNode.children.length; i++)
            e.target.parentNode.children[i].classList.remove("active");
        newItemCounter++;
    };
}

ourNewItem.addEventListener("click", createNewItem);

function createNewItem() {
    ourList.innerHTML += "<li> " + newItemCounter + "</li>";
    newItemCounter++;
};

// Array of objects representing the courses
// This should ideally come from a back end service/server
const listData = [
    { href: "English.html", description: "English" },
    { href: "Literature.html", description: "Literature and Language" },
    { href: "Philosophy.html", description: "Philosophy" },
    { href: "Psychology.html", description: "Psychology" },
    { href: "Mass communication.html", description: "Mass communication" },
    { href: "Religion.html", description: "Religion" }
]

const renderListItems = (listNode, listData) => {

    listData.map((anElement) => {

        var liElement = document.createElement("li");
        var aElement = document.createElement("a");

        aElement.setAttribute("href", anElement.href);
        aElement.innerText = anElement.description;

        liElement.appendChild(aElement);

        listNode.appendChild(liElement);
    })
}

function myFunction() {
    var input, filter, ul, li, a, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("our-listItem");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.txtContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";

        } else {
            li[i].style.display = "none";
        }
    }
}
renderListItems(ourList, listData);
