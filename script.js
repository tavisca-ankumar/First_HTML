window.onload = function () {
	Showlist();
}

function Showlist() {
	let element = document.getElementById("todo");
	SetClassNameSelected(element);
	OnClickHide();
	let html = `<input list ="list" type="text" id="mySearch" onkeyup="return SearchFunction();" placeholder="Search In List.." title="Type anything">
	<table><tr>`;
	for (var i = 0; i < varAutopopulateData.length; i++) {
		html += "<td>" + varAutopopulateData[i].title + "</td>";
		html += `<td>
		<button type="button">EDIT</button>
		<button type="button">DELETE</button>
		</td>`;
		html += "</tr><tr>";
	}
	html += "</tr></table>";
	document.getElementById("todo-container").innerHTML = html;
}

function OnClickHide() {
	var menuItemsArray = document.getElementsByClassName("menu-item");
	for (var i = 0; i < menuItemsArray.length; i++) {
		if (menuItemsArray[i].firstChild.className == "selected") {
			console.log(menuItemsArray[i].id);
			document.getElementById(menuItemsArray[i].id + "-container").style.display = "block";
		}
		else {
			document.getElementById(menuItemsArray[i].id + "-container").style.display = "none";
		}
	}
}

function ShowUserDetails() {
	let element = document.getElementById("user");
	SetClassNameSelected(element);
	OnClickHide();
	console.log(element);
	let html = "<h4>Hi I am anoop</h4>";
	document.getElementById("user-container").innerHTML = html;
}

function ShowDeptDetails() {
	SetClassNameSelected(document.getElementById("dept"));
	OnClickHide();
	console.log(document.getElementById("dept-container"));
	let html = "<h4>Computer Science department</h4>";
	document.getElementById("dept-container").innerHTML = html;
}

function SetClassNameSelected(element) {
	var menuItemsArray = document.getElementsByClassName("menu-item");
	console.log(menuItemsArray);
	for (var i = 0; i < menuItemsArray.length; i++) {
		if (menuItemsArray[i].firstChild.className == "selected") {
			console.log(menuItemsArray[i].id);
			menuItemsArray[i].firstChild.classList.remove("selected");
		}
	}
	element.firstChild.className = "selected";
}

function RemoveSearchFromHTMLDOM() {
    const previousSearchList = document.getElementById("search-list");
    while (previousSearchList.firstChild) {
        previousSearchList.removeChild(previousSearchList.firstChild);
    }
}

function SearchFunction() {
    let input = document.getElementById("mySearch");
    let searchResults = [];

    // get results array
    for (let index = 0; index < varAutopopulateData.length; ++index) {
        let foundIndex = varAutopopulateData[index].title.search(input.value);
        if (foundIndex > 0) {
            searchResults.push(varAutopopulateData[index]);
        }
    }

    //RemoveSearchFromHTMLDOM();

    // set results to html dom
    for (let index = 0; index < searchResults.length-1; ++index) {
        if (searchResults.length > index) {
            let node = document.createElement("td");
            let textnode = document.createTextNode(
                searchResults[index].title
            );
            node.appendChild(textnode);
            document.getElementById("search-container").appendChild(node);
        }
    }
}