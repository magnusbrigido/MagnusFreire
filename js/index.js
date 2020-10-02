let main = document.querySelector('main#content');

function handleTwoDigits(data) {
  if(data < 10) 
    return '0' + data;
  else 
    return data;
}

function getDate() {
  let newDate = `${handleTwoDigits(new Date().getHours())}:${handleTwoDigits(new Date().getMinutes())} - ${handleTwoDigits(new Date().getDate())}/${handleTwoDigits(new Date().getMonth())}/${handleTwoDigits(new Date().getFullYear())}`;
  let dateContent = document.createElement('span');
  dateContent.innerText = newDate;
  return dateContent; 
}

function handleSubmit(event) {
  event.preventDefault()
  let title = document.querySelector('input#titulo').value;
  let content = document.querySelector('textarea#conteudo').value;
  
  if(title == '' || content == '') {
    alert("A postagem precisa ter um título e um conteúdo.")
  } else {
    let articleElement = document.createElement('article');
    let h3Element = document.createElement('h3');
    let pElement = document.createElement('p');
    let buttonElement = document.createElement('button');
    buttonElement.innerText = "X";
    buttonElement.setAttribute("onclick", "remove(this)");
    

    h3Element.innerText = title;
    pElement.innerText = content;

    articleElement.appendChild(buttonElement);
    articleElement.appendChild(h3Element);
    articleElement.appendChild(getDate());
    articleElement.appendChild(pElement);
    main.appendChild(articleElement);
  }
}


function remove(button) {
  let articleToRemove = button.parentNode;
  main.removeChild(articleToRemove);
}
