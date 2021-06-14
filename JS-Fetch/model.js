const h1 = document.getElementsByTagName('h1')[0];
let activePost = null;

function getDataWithAjax(url) {
    const xhhtp = new XMLHttpRequest();

    xhhtp.open('GET', url);

    xhhtp.send(); /// metoda care trimite requestul//

    xhhtp.addEventListener("load", function(e) {
        const post = JSON.parse(this.response)
        activePost = post;
        const {id, title} = post;
        h1.textContent = `${id} - ${title}` ;
    
    });
}
const buttons = document.getElementsByTagName('button')

for(let button of buttons) {
    button.addEventListener('click', function(e) {
        const id = e.target.dataset.id;
        getDataWithAjax(`http://jsonplaceholder.typicode.com/posts/${id}`)
    });
}

fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        return  response.json
    })
    .then(post => {
        const {id, title} = post;
        h1.textContent = `${id} - ${title}`;
    })

 
