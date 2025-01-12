import "./styles.css";

import logo1 from './images/SMD_Farbversion_2';
import picture1 from './images/pexels-sebastian-palomino-2847765.jpg';
import documentPictogram from './images/document_piktogram.png';
import sailboatPictogram from './images/sailboat.svg';
import sawPictogram from './images/saw_piktogram.png';
import meImg from './images/aboutme.jpg';

import scrollToElement from "./scrollToElement";
import loadPopUp from "./loadPopUp";





(function initialLoad () {
    const body = document.querySelector('body')
//creating header


const header = document.createElement('div');
    header.id = "header";
        const logo = document.createElement('img');
            logo.src = logo1;
            logo.alt = 'Logo from Sören Modery-Diekhans showing an abstract Sailboat';
            logo.style.paddingLeft = '10px';

        const navBar = document.createElement('ul');
            navBar.style.cssText = 'display: flex; list-style-type: none; justify-content: space-around; width: 60%; align-items: center; '
            navBar.id = 'items';
                document.addEventListener('DOMContentLoaded', () =>{
                const items = ["Start", "Leistungen", "Über Mich", "Kontakt"]
                items.forEach((item, index) => {
                    const li = document.createElement('li');
                        li.textContent = item;
                        li.id = `li-${index}`;
                    li.classList = 'navbarItems';
                navBar.append(li);
                });
                const allLi = document.querySelectorAll('#items li');
                    allLi.forEach(item => {
                        item.addEventListener('click', () => {
                            main.replaceChildren(infoContent, serviceContent, about, kontakt);
                            let liId = item.id;
                            scrollToElement(liId);
                        })
                    })
                });
header.append(logo, navBar);
            
//creating content
const main = document.createElement('div');
    main.id = "main";
        const infoContent = document.createElement('div');
            infoContent.id = "infoContent";

                const text = document.createElement('div');
                    const heading = document.createElement('div');
                        heading.innerHTML = '<h1>Sachverständiger für </h1><h1>Sportboote</h1><h2>Sören Modery-Diekhans</h2><h4>Segel- & Motorboote bis 24m</h4>'
                        heading.style.cssText = 'line-height: 150%; text-align: center; padding-top: 30px; padding: 30px'
                    const headingText = document.createElement('div');
                        headingText.innerHTML = 'Ob bei einem Schaden, im Streitfall oder beim Kauf oder Verkauf eines Bootes – ein Sachverständiger als neutrale Partei kann Aufklärung, Absicherung und Unterstützung bieten. Die Begutachtung eines Schadens am Boot, durch einen unabhängigen Sachverständigen, ermöglicht die Kostenübernahme einer fachgerechten Reparatur durch eine Versicherung. Durch Fachexpertise gelingt eine umfassende Beurteilung des Bootszustandes und auch nicht sichtbarer Mängel, was sowohl zur Abwicklung von Reparaturen mit Versicherungen als auch beim Kauf von Gebrauchtbooten von Vorteil ist.';
                        headingText.style.cssText = 'line-height: 180%; padding: 30px'
                        text.append(heading, headingText);

                const picture = document.createElement('img')
                    picture.src = picture1;

        infoContent.append(text, picture)

        const popUp = document.createElement('div');
            popUp.id = 'popUp';
            popUp.classList = 'popUp';
            
            
        
        const serviceContent = document.createElement('div');
            serviceContent.classList = "serviceContent";
            serviceContent.id = "serviceContent";
            
                const gutachten = document.createElement('div');
                    gutachten.classList = 'service';
                    gutachten.style.cssText = 'display: flex; flex-direction: column; align-items: center; justify-content: center;'
                    const gutachtenImg = document.createElement('img');
                            gutachtenImg.src = documentPictogram;
                            gutachtenImg.style.height = '20vh';
                    const gutachtenText = document.createElement('div');
                        gutachtenText.innerHTML = '<h3>Gutachten</h3>SchadenGutachten, WertGutachten, Kurzgutachten';
                        gutachtenText.style.cssText = 'text-align: center;'
                    gutachten.append(gutachtenImg, gutachtenText);
                    gutachten.addEventListener("click", () => {
                        loadPopUp ();
                            
                    });

                const beratung = document.createElement('div');
                    beratung.classList = 'service';
                    beratung.style.cssText = 'display: flex; flex-direction: column; align-items: center; justify-content: center;'
                    const beratungImg = document.createElement('img');
                        beratungImg.src = sailboatPictogram;
                        beratungImg.style.height = '20vh';
                        beratungImg.style.fill = 'beige';
                    const beratungText = document.createElement('div');
                        beratungText.innerHTML = '<h3>Beratung</h3>Kauf- & Verkaufsberatung, Investitionsberatung, Reparaturabnahmen';
                        beratungText.style.cssText = 'text-align: center;'
                beratung.append(beratungImg, beratungText);
                beratung.addEventListener("click", () => {
                    loadPopUp ();
                        
                });

                const support = document.createElement('div');
                    support.classList = 'service';
                    support.style.cssText = 'display: flex; flex-direction: column; align-items: center; justify-content: center;'
                    const supportImg = document.createElement('img');
                        supportImg.src = sawPictogram;
                        supportImg.style.height = '20vh';
                        supportImg.style.fill = 'beige';
                    const supportText = document.createElement('div');
                        supportText.innerHTML = '<h3>DIY-Unterastützung</h3>Fachmännische, individuelle Beratung bei der Umsetzung von DIY Projecten';
                        supportText.style.cssText = 'text-align: center;'
                support.append(supportImg, supportText);
                support.addEventListener("click", () => {
                    loadPopUp ();
                        
                });

        serviceContent.append(gutachten, beratung, support, popUp);
        
        
        const about = document.createElement('div');
                about.classList = 'about';
                about.id = 'about';
                const aboutContent = document.createElement('div');
                    aboutContent.style.cssText = 'display: flex; justify-self: center; align-self: center'
                    aboutContent.innerHTML = 'Hallo,<br>ich bin Sören (geb. 1993) und lebe mit meinen zwei wunderbaren Kindern (geb. 2019 & 2021) und meiner Frau in Lübeck. Ich bin gebürtiger Berliner, doch mein Herz schlägt für Wasser und Meer. Ich bin leidenschaftlicher Segler und Wellenreiter und begeistere mich für alle Sport- und Freizeitaktivitäten im und auf dem Wasser. Schon in jungen Jahren leitete ich eine Segelgilde und segelte erfolgreich Regatten auf der Kieler Woche. Durch die Ausbildung zum Bootsbauer fundierte ich mein Wissen und meine handwerklichen Fähigkeiten. Die Qualifizierung zum anerkannten Sachverständigen für Sportboote ergänzt meine praktischen Erfahrungen. <br>Ich beschreibe mich als offenen und wissbegierigen Menschen, der sein Wissen gerne an andere Personen weitergibt. '
                
                const imgContainer = document.createElement('div');
                    imgContainer.style.cssText = 'display: flex; align-items: center; justify-content: center';
                    const aboutImg = document.createElement('img');
                        aboutImg.src = meImg;
                        aboutImg.style.cssText = 'width: 80%; height 80%';
                        
                imgContainer.append(aboutImg);
        
        about.append(imgContainer, aboutContent);

        const kontakt = document.createElement('div');
            kontakt.id = 'kontakt';
            const kontaktContainer = document.createElement('div');
                kontaktContainer.style.cssText = 'height: 80%; width: 60%; background-color:rgb(0,0,0,0.5); display: flex; align-items: center; justify-content: space-around; padding: 10px; border-radius: 20px '
                const myInfo = document.createElement('div');
                    myInfo.innerHTML = '<h2>Sören Modery-Diekhans<br>Wakenitzmauer 130<br>23552 Lübeck<p>s.modery-diekhans@web.de</p><p>+49(0)1723900214</p></h2>'
                const mailForm = document.createElement('div');
                    mailForm.innerHTML = '<form class="contact-form" action="mailto:s.modery-diekhans@web.de" method="POST" enctype="text/plain"><h2>Kontakt</h2><input type="text" name="name" placeholder="Dein Name" required><input type="email" name="email" placeholder="Deine Email" required><textarea name="message" placeholder="Deine Nachricht" rows="5" required></textarea><button type="submit">Nachricht abschicken</button></form>';
            kontaktContainer.append(myInfo, mailForm)

        kontakt.appendChild(kontaktContainer );
main.append(infoContent, serviceContent, about, kontakt);


    const footer = document.createElement('div');
        footer.id = "footer";
        const impressum = document.createElement('div');
            impressum.innerHTML = 'Impressum';
        const agb = document.createElement('div');
            agb.innerHTML = 'AGB';
        const datenschutz = document.createElement('div');
            datenschutz.innerHTML = 'Datenschutz';
        footer.append(impressum, agb, datenschutz);

const iframe = document.createElement('iframe');
    iframe.id = "iframe";
    
        impressum.addEventListener("click", () => {
            iframe.src = 'impressum.html';
            main.replaceChildren(iframe);
        });
        agb.addEventListener("click", () => {
            iframe.src = 'agb.html';
            main.replaceChildren(iframe);
        });
        datenschutz.addEventListener("click", () => {
            iframe.src = 'datenschutz.html';
            main.replaceChildren(iframe);
        })

    body.append(header, main, footer);
})();

