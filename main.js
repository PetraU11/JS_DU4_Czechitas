/*
let title = 'Avengers'

title.length
title.toUpperCase()
title.slice(0,5)
title.slice(title.length - 5, title.length)
*/

let email = prompt('Zadejte emailou adresu:')
let atIndex = email.indexOf('@')

let nameDomain = {
    name: email.slice(0,atIndex),
    domain: email.slice(atIndex + 1, email.length),
}

document.body.innerHTML = "<p> User name: " + nameDomain.name + "</p>" + "<p> Domain: " + nameDomain.domain + "</p>"

