let main = document.querySelector(".area")
let Additems = document.getElementById("Additems")
let searchbar = document.getElementById("searchbar")
Additems.addEventListener("click", function(){
    searchbar.value
    let Element = document.createElement("li")
    main.appendChild(Element)
    Element.innerHTML = `
    <ul>
    <li>
    ${searchbar.value}
    <button>Remove</button>
    </li>
    </ul>
    `
    Element.querySelector("button").addEventListener("click", function(){
        Element.remove()
    })
})