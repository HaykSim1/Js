class Halperclass{
    constructor(url,asynchronously,type){
      this.url = url;
      this.asynchronously = asynchronously;
      this.type = type;
    }
    function request() {
      var xhr = new XMLHttpRequest();
    xhr.open(this.type, this.url, this.asynchronously);
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200){
          alert("yes");
        }else {
          alert("somthing is wrong");
        }
    };
    }
function gets() {
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

  function post() {
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
  function delete() {
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
