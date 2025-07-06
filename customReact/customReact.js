//create a react custom react render function
function customRender(react_element, container){
  /*
  //element mins h1, p, div tag
  const domElement = document.createElement(react_element.type)
  domElement.innerHTML = react_element.children
  //add atributes
  domElement.setAttribute('href', react_element.props.href)
  domElement.setAttribute('target', react_element.props.target)
  container.appendChild(domElement);
*/
  // loop based add attribute
  const domElement = document.createElement(react_element.type)
  domElement.innerHTML = react_element.children
  for (prop in react_element.props) {
    if (prop === 'children') continue
    domElement.setAttribute(prop, react_element.props[prop])
  }
  container.appendChild(domElement)
}
//Set React Element
const reactElement = {
  type: 'a',
  props: {
    href:'https://google.com',
    target: '_blank'
  },
  children: 'Click to visit google' 
}
//main container select
const mainContainer = document.querySelector('#root');
//call custom react render function
customRender(reactElement, mainContainer);