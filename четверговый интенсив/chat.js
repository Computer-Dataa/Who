function sendMessage() {
    let TextIn = document.getElementById('input').value;
    let UserName = document.getElementById('username').value;
    
    let NewElem = document.createElement('div');
    
    if(UserName == "") {
      alert ("nick?")
      return;
    }
    
    
    
    NewElem.classList.add("cont-cv-new");
    NewElem.innerHTML = `
    <div class="message"><a href="#на профиль" class="username">${UserName}: </a>${TextIn}</div>
    `
    
    let CvContainer = document.getElementById('text-board');
      CvContainer.appendChild(NewElem);
    }