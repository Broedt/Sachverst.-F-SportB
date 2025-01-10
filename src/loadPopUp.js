import gutachtenImg_1 from './images/gutachtenImg1';
import gutachtenImg_2 from './images/gutachtenImg2';
import gutachtenImg_3 from './images/gutachtenImg3';
import gutachtenImg_4 from './images/gutachtenImg4';

export default function loadPopUp (service) {
    
    const popUp = document.getElementById("popUp");
        popUp.classList.toggle('show');
        popUp.innerHTML = "";
        const content = document.createElement('div');
            content.style.cssText = 'display: flex; width: 80%; height: 80%; background-color: black; border-radius: 10px; padding: 10px; position: relative';
            content.id = "popUpContent";
            const closeBtn = document.createElement('button');
                closeBtn.innerHTML = 'X';
                closeBtn.style.cssText = 'background-color: red; border-radius: 5px; color: white; position: absolute; top: 5px; right: 5px'
            const imgContainer = document.createElement('div');
                imgContainer.style.display = 'grid';
                imgContainer.style.gridTemplateColumns = '1fr 1fr';
                imgContainer.style.gridTemplateRows = '1fr 1fr';
                imgContainer.style.padding = '5px';
                imgContainer.style.borderRadius = '5px';
                imgContainer.id = 'imgContainer';
                

            const textContainer = document.createElement('div');
                textContainer.style.textAlign = 'center';
                textContainer.style.padding = '5px';
                textContainer.id = 'textContainer';
                
            content.append(closeBtn, imgContainer, textContainer)
    
    popUp.appendChild(content)

    const gutachtenContent = document.createElement('div');
        gutachtenContent.innerHTML = 'Sie brauchen ein Gutachten für Schäden am Boot, für die Versicherung oder im Streitfall? Oder möchten den Wert Ihres Bootes ermitteln lassen? Gerne erstelle ich ein Schadengutachten oder Wertgutachten. Bei kleinen Schäden kann auch schon ein Kurzgutachten ausreichen. Mit einem Gutachten durch einen Sachverständigen für Sportboote stellen Sie sicher, dass sämtliche Schäden erfasst und kalkuliert werden, damit Ihr Boot wieder fachmännisch Instand gesetzt werden kann.'
    const gutachtenImg1 = document.createElement('img');
        gutachtenImg1.src = gutachtenImg_1;
    const gutachtenImg2 = document.createElement('img');
        gutachtenImg2.src = gutachtenImg_2;
    const gutachtenImg3 = document.createElement('img');
        gutachtenImg3.src = gutachtenImg_3;
    const gutachtenImg4 = document.createElement('img');
        gutachtenImg4.src = gutachtenImg_4;

        switch (service) {
            case "gutachten":
                imgContainer.append(gutachtenImg1, gutachtenImg2, gutachtenImg3, gutachtenImg4)
                textContainer.appendChild(gutachtenContent);
        }       



}