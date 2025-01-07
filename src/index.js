import "./styles.css";
import logo1 from './images/SMD_Farbversion_2'

(function initialLoad () {
    const body = document.querySelector('body')
//creating header
    const header = document.createElement('div');
        header.id = "header";
            const logo = document.createElement('img');
                logo.src = logo1;
                logo.alt = 'Logo from Sören Modery-Diekhans showing an abstract Sailboat';
                logo.style.paddingLeft = '10px';
        
            const navBar = document.createElement('div');
                const bezeichnung = document.createElement('div');
                    bezeichnung.innerText = "Sachverständiger für Sportboote";
                    bezeichnung.style.fontSize = '1.5em'
                const name = document.createElement('div');
                    name.innerText = "Sören Modery-Diekhans";
               
            navBar.style.cssText = 'display: flex; align-items: center; width: 70vw; justify-content: space-around; padding: 10px'
            navBar.append(bezeichnung, name);
    header.append(logo, navBar);
            
//creating content
    const content = document.createElement('div');
        content.id = "content"


    const footer = document.createElement('div');
        footer.id = "footer"

    body.append(header, content, footer)
})();