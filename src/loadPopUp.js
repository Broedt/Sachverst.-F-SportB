


export default function loadPopUp (service) {
    
    const popUp = document.getElementById("popUp");
        popUp.classList.toggle('show');
        popUp.innerHTML = "";
        const content = document.createElement('div');
            content.id = "popUpContent";
            const closeBtn = document.createElement('button');
                closeBtn.innerHTML = 'X';
                closeBtn.style.cssText = 'background-color: rgb(0,0,0,0); color: black; position: absolute; top: 5px; right: 5px; border: none'
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
                        gOne.src = require('./images/gutachtenImg1.jpg');
                        gOne.alt = "Bug eines Schiffes mit Bugstrahlruder";
                   image01.appendChild(gOne);
                const image02 = document.createElement('div');
                    const gTwo = document.createElement('img');
                        gTwo.src = require('./images/gutachtenImg2.jpeg');
                        gTwo.alt = "Schaden am Bug eines GFK Schiffes"
                    image02.appendChild(gTwo);
                const image03 = document.createElement('div');
                    const gThree = document.createElement('img');
                        gThree.src = require('./images/gutachtenImg3.jpg');
                        gThree.alt = "Motoryacht im Hafen"
                    image03.appendChild(gThree);
                const image04 = document.createElement('div');
                    const gFour = document.createElement('img');
                        gFour.src = require('./images/gutachtenImg4.jpg');
                        gFour.alt= "Kleines Motorboot im Hafen";
                    image04.appendChild(gFour);
                imgContainer.append(image01, image02, image03, image04);                    
                break;
            case "b":
                textContainer.innerHTML = "<div><h2>Beratung</h2>Sie möchten ein Boot kaufen, Ihr Boot verkaufen oder in Ihr Boot investieren?<br>Ich unterstütze bei der Recherche nach einem passenden Objekt oder erstelle ein Verkaufsexposé für Sie.<br>Dazu achte ich auf individuelle Bedürfnisse und gebe fachmännische Beratung sowie Aufschluss über die Beschaffenheit des Bootes, eventueller Materialermüdungen und Arbeiten, welche zeitnah erledigt werden sollten.<br>Auch bei größeren Reparaturen oder Umbauten am Boot begleite ich den gesamten Prozess und übernehme die Bauabnahmen.</div> "
                const image1 = document.createElement('div');
                    const bOne = document.createElement('img');
                        bOne.src = require('./images/beratungImg1.JPG');
                        bOne.alt = "Sören Modery-Diekhans begutachtet die Ruderanlage eines Schiffes"
                    image1.appendChild(bOne);
                const image2 = document.createElement('div');
                    const bTwo = document.createElement('img');
                        bTwo.src = require('./images/beratungImg2.JPG');
                        bTwo.alt = "Steuerstand eines Motorboots";
                    image2.appendChild(bTwo);
                const image3 = document.createElement('div');
                    const bThree = document.createElement('img');
                        bThree.src = require('./images/beratungImg3.JPG');
                        bThree.alt = "Segelboot unter Segeln auf dem Wasser";
                    image3.appendChild(bThree);
                const image4 = document.createElement('div');
                    const bFour = document.createElement('img');
                        bFour.src =  require('./images/beratungImg6.JPG');
                        bFour.alt = "Motorboot in fahrt";
                    image4.appendChild(bFour);
                imgContainer.append(image1, image2, image3, image4);
                break;
            case "d":
                textContainer.innerHTML = "<div><h2>DIY-Unterstützun</h2>Sie möchten eine Reparatur, Wartungsarbeiten oder einen Umbau, wie das Nachrüsten eines Bugstrahlruders, angehen und benötigen Hilfe bei der fachgerechten Planung und Umsetzung?<br>Ich helfe den Aufwand einzuschätzen, erstelle einen umsetzbaren Reparatur-/ Umbauplan und helfe aktiv bei der Umsetzung. Hierbei lege ich besonderen Wert darauf, Lösungen zu finden, welche zu den örtliche Gegebenheiten und technischen Ausstattungen passen, die schon vorhanden sind.<br>Tips und Tricks wie die Arbeit besser gelingt gibt es natürlich auch.</div> "
                const image11 = document.createElement('div');
                    const dOne = document.createElement('img');
                        dOne.src = require('./images/diy1.jpeg');
                        dOne.alt = "Herstellung einer Pinne per Hand";
                    image11.appendChild(dOne);
                const image12 = document.createElement('div');
                    const dTwo = document.createElement('img');
                        dTwo.src = require('./images/diy2.jpeg');
                        dTwo.alt = "aufbereitetes Unterwasserschiff eines kleinen Motorbootes";
                    image12.appendChild(dTwo);
                const image13 = document.createElement('div');
                    const dThree = document.createElement('img');
                        dThree.src = require('./images/bugstrahl4.png');
                        dThree.alt = "montierter Motor eines Bugstrahlruders im Boot";
                    image13.appendChild(dThree);
                const image14 = document.createElement('div');
                    const dFour = document.createElement('img');
                        dFour.src =  require('./images/bugstrahl3.png');
                        dFour.alt = "Bugstrahlruder von außen";
                    image14.appendChild(dFour);
                imgContainer.append(image11, image12, image13, image14);
                break;
        }
    
    popUp.appendChild(content);
        

}