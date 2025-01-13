
import b1 from './images/beratungImg1.JPG';
import b2 from './images/beratungImg2.JPG';
import b3 from './images/beratungImg3.JPG';
import b4 from './images/beratungImg6.JPG';

import g1 from './images/gutachtenImg1.jpg';
import g2 from './images/gutachtenImg2.jpeg';
import g3 from './images/gutachtenImg3.jpg';
import g4 from './images/gutachtenImg4.jpg';

import d1 from './images/diy1.jpeg';
import d2 from './images/diy2.jpeg';
import d3 from './images/bugstrahl4.png';
import d4 from './images/bugstrahl3.png';

export default function loadPopUp (service) {
    
    const popUp = document.getElementById("popUp");
        popUp.classList.toggle('show');
        popUp.innerHTML = "";
        const content = document.createElement('div');
            content.id = "popUpContent";
            const closeBtn = document.createElement('button');
                closeBtn.innerHTML = 'X';
                closeBtn.style.cssText = 'background-color: beige; border-radius: 5px; color: black; position: absolute; top: 5px; right: 5px'
                closeBtn.id = 'closeBtn';
                closeBtn.addEventListener('click', () => {
                    popUp.classList.toggle('show');
                })
            const imgContainer = document.createElement('div');
                imgContainer.id = 'popupImg';
                
                

            const textContainer = document.createElement('div');
                
                textContainer.id = 'popupText';
                
            content.append(closeBtn, imgContainer, textContainer);

        switch (service) {
            case "g":
                textContainer.innerHTML = "<div><h2>Gutachten</h2>Sie brauchen ein Gutachten für Schäden am Boot, für die Versicherung oder im Streitfall? Oder möchten den Wert Ihres Bootes ermitteln lassen?<br>Gerne erstelle ich ein Schadengutachten oder Wertgutachten. Bei kleinen Schäden kann auch schon ein Kurzgutachten ausreichen.<br>Mit einem Gutachten stellen Sie sicher, dass sämtliche Schäden erfasst und kalkuliert werden, damit Ihr Boot wieder fachmännisch Instand gesetzt werden kann. <br>Auch vor Gericht kann ich als unabhängige Partei meine Begutachtung professionell erläutern. </div> "
                const image01 = document.createElement('div');
                    const gOne = document.createElement('img');
                        gOne.src = g1;
                   image01.appendChild(gOne);
                const image02 = document.createElement('div');
                    const gTwo = document.createElement('img');
                        gTwo.src = g2;
                    image02.appendChild(gTwo);
                const image03 = document.createElement('div');
                    const gThree = document.createElement('img');
                        gThree.src = g3;
                    image03.appendChild(gThree);
                const image04 = document.createElement('div');
                    const gFour = document.createElement('img');
                        gFour.src = g4;
                    image04.appendChild(gFour);
                imgContainer.append(image01, image02, image03, image04);                    
                break;
            case "b":
                textContainer.innerHTML = "<div><h2>Beratung</h2>Sie möchten ein Boot kaufen, Ihr Boot verkaufen oder in Ihr Boot investieren?<br>Ich unterstütze bei der Recherche nach einem passenden Objekt oder erstelle ein Verkaufsexposé für Sie.<br>Dazu achte ich auf individuelle Bedürfnisse und gebe fachmännische Beratung sowie Aufschluss über die Beschaffenheit des Bootes, eventueller Materialermüdungen und Arbeiten, welche zeitnah erledigt werden sollten.<br>Auch bei größeren Reparaturen oder Umbauten am Boot begleite ich den gesamten Prozess und übernehme die Bauabnahmen.</div> "
                const image1 = document.createElement('div');
                    const bOne = document.createElement('img');
                        bOne.src = b1;
                    image1.appendChild(bOne);
                const image2 = document.createElement('div');
                    const bTwo = document.createElement('img');
                        bTwo.src = b2;
                    image2.appendChild(bTwo);
                const image3 = document.createElement('div');
                    const bThree = document.createElement('img');
                        bThree.src = b3;
                    image3.appendChild(bThree);
                const image4 = document.createElement('div');
                    const bFour = document.createElement('img');
                        bFour.src = b4;
                    image4.appendChild(bFour);
                imgContainer.append(image1, image2, image3, image4);
                break;
            case "d":
                textContainer.innerHTML = "<div><h2>DIY-Unterstützun</h2>Sie möchten eine Reparatur, Wartungsarbeiten oder einen Umbau, wie das Nachrüsten eines Bugstrahlruders, angehen und benötigen Hilfe bei der fachgerechten Planung und Umsetzung?<br>Ich helfe den Aufwand einzuschätzen, erstelle einen umsetzbaren Reparatur-/ Umbauplan und helfe aktiv bei der Umsetzung. Hierbei lege ich besonderen Wert darauf, Lösungen zu finden, welche zu den örtliche Gegebenheiten und technischen Ausstattungen passen, die schon vorhanden sind.<br>Tips und Tricks wie die Arbeit besser gelingt gibt es natürlich auch.</div> "
                const image11 = document.createElement('div');
                    const dOne = document.createElement('img');
                        dOne.src = d1;
                    image11.appendChild(dOne);
                const image12 = document.createElement('div');
                    const dTwo = document.createElement('img');
                        dTwo.src = d2;
                    image12.appendChild(dTwo);
                const image13 = document.createElement('div');
                    const dThree = document.createElement('img');
                        dThree.src = d3;
                    image13.appendChild(dThree);
                const image14 = document.createElement('div');
                    const dFour = document.createElement('img');
                        dFour.src = d4;
                    image14.appendChild(dFour);
                imgContainer.append(image11, image12, image13, image14);
                break;
        }
    
    popUp.appendChild(content);
        

}