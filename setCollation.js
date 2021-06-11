let selectElements = document.getElementsByTagName('select')
let selectors = []

for (let elementID = 0; elementID < selectElements.length; elementID++) {
    let element = selectElements[elementID]

    if (element.name.indexOf('field_collation') !== -1) {
        element.value = 'utf8_general_ci'
        selectors.push(element)
    }
}

console.log(selectors)
