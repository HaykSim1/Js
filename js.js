class Halperclass{

function gets(req, url, asynchronously) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, asynchronously);
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200){
          alert("yes");
        }else {
          alert("somthing is wrong");
        }
    };
  }

  function post(url, data, asynchronously) {
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, asynchronously);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    alert("yes");
	} else {
     alert("somthing is wrong");
	}
}
  xhr.send(json);
  }
  function delete(url,asynchronously) {
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", url, asynchronously);
    xhr.onload = function () {
	if (xhr.readyState == 4 && xhr.status == "200") {
    alert("yes");
	} else {
     alert("somthing is wrong");
	}
}
xhr.send(null);
  }
  function Put(url,asynchronously) {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Content-Type", "text/plain; charset=UTF-8");
    xhr.onload = function () {
        	if (xhr.readyState == 4 && xhr.status == "200") {
        	  alert("yes");
        	} else {
        	   alert("somthing is wrong");
        	}
        }
xhr.send(json);
  }
}
