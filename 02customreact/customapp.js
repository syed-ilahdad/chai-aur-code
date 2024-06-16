function customRender(element,container){
/*
    const domelement=document.createElement(reactElement.type)
    domelement.innerHTML=reactElement.Children
    domelement.setAttribute('href',reactElement.props.href)
    domelement.setAttribute('target',reactElement.props.target)

    container.appendChild(domelement)
    */

    const domelement=document.createElement(reactElement.type)
    domelement.innerHTML=reactElement.Children
    for (const prop in reactElement.props) {
            domelement.setAttribute(prop,reactElement.props[prop])
        }
        container.appendChild(domelement)
}

const reactElement={
    type : 'a',
    props: {
        href:'google.com',
        target:'_blank'
    },
    Children: 'this is custom react',
}
const container=document.querySelector("#root")
customRender(reactElement,container)