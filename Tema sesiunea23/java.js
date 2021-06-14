function fetchData() {
    const app = document.getElementById('app')
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(persons => {
            const info = []
            info.push(persons.data)
            for(let person of info) {
                const [primul, alDoilea, alTreilea] = person
                const p = document.createElement('p')
                p.textContent = `${primul.first_name} ${primul.last_name}`
                app.appendChild(p)
                const p2 =document.createElement('p')
                p2.textContent = `${primul.email}`
                app.appendChild(p2)
                
            }
        })
}

fetchData()

// const info = persons.data.map(user => {
//     return `<div class="users">
//                 <p><img src="${user.avatar}"/></p>
//                 <p>${user.first_name} ${user.last_name} </p>
//                 <p>${user.email}</p>
//             </div>`;
// }).join("");
// document.querySelector("#app").insertAdjacentHTML("afterbegin", info)