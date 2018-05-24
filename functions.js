function logout() {
    firebase.auth().signOut().then(function() {
        window.location.replace('login.html')    
    }).catch(function(error) {    
    
    });
}

function createElement(elementType, elementText) {
    var element = document.createElement(elementType); 
    element.appendChild(document.createTextNode(elementText));
    return element;
} 