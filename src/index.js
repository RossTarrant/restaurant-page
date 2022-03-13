import './styles.css';
import createNav from './nav';
import homePage from './home';
import menuPage from './menu';
import contactPage from './contact';

const content = document.querySelector('#content');
let active = "home";
content.appendChild(createNav());
content.appendChild(homePage())

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function(){
        let currentNode = document.querySelector(`.${active}`);
        content.removeChild(currentNode);
        if(button.textContent==='Home'){
            content.appendChild(homePage())
            active = "home";
        }
        else if(button.textContent=='Menu'){
            content.appendChild(menuPage())
            active = "menu";
        }
        else if(button.textContent=='Contact'){
            content.appendChild(contactPage())
            active = "contact";
        }
    })
});