import "./styles.css";

import logo1 from './images/SMD_Farbversion_2';
import picture1 from './images/pexels-sebastian-palomino-2847765.jpg';
import meImg from './images/aboutme.jpg';

import scrollToElement from "./scrollToElement";
import loadPopUp from "./loadPopUp";





(function initialLoad () {
    const body = document.querySelector('body')
//creating header


const header = document.createElement('div');
    header.id = "header";
        const logo = document.createElement('img');
            logo.id = "logo"
            logo.src = logo1;
            logo.alt = 'Logo from Sören Modery-Diekhans showing an abstract Sailboat';
            

        const navBar = document.createElement('ul');
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
                        heading.id = "infocontentHeading";
                    const headingText = document.createElement('div');
                        headingText.innerHTML = 'Ob bei einem Schaden, im Streitfall oder beim Kauf oder Verkauf eines Bootes – ein Sachverständiger als neutrale Partei kann Aufklärung, Absicherung und Unterstützung bieten. Die Begutachtung eines Schadens am Boot, durch einen unabhängigen Sachverständigen, ermöglicht die Kostenübernahme einer fachgerechten Reparatur durch eine Versicherung. Durch Fachexpertise gelingt eine umfassende Beurteilung des Bootszustandes und auch nicht sichtbarer Mängel, was sowohl zur Abwicklung von Reparaturen mit Versicherungen als auch beim Kauf von Gebrauchtbooten von Vorteil ist.';
                        headingText.id = "headingText";
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
                    const gutachtenImg = document.createElement('div');
                            gutachtenImg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20vh" viewBox="0 0 24 24"><title>file-document</title><path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" /></svg>'
                            gutachtenImg.style.fill = 'beige';
                    const gutachtenHeading = document.createElement('div');
                        gutachtenHeading.innerHTML = '<h3>Gutachten</h3>';
                    const gutachtenText = document.createElement('div');
                        gutachtenText.innerHTML = 'SchadenGutachten, WertGutachten, Kurzgutachten'
                    gutachten.append(gutachtenImg, gutachtenHeading, gutachtenText);
                    gutachten.addEventListener("click", () => {
                        loadPopUp ();
                            
                    });

                const beratung = document.createElement('div');
                    beratung.classList = 'service';
                    const beratungImg = document.createElement('div');
                        beratungImg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20vh" viewBox="0 0 24 24"><title>sail-boat</title><path d="M3 13.5L11 2.03V13.5H3M12.5 13.5C13.85 9.75 13.67 4.71 12.5 1C17.26 2.54 20.9 8.4 20.96 13.5H12.5M21.1 17.08C20.69 17.72 20.21 18.27 19.65 18.74C19 18.45 18.42 18 17.96 17.5C16.47 19.43 13.46 19.43 11.97 17.5C10.5 19.43 7.47 19.43 6 17.5C5.5 18 4.95 18.45 4.3 18.74C3.16 17.8 2.3 16.46 2 15H21.94C21.78 15.75 21.5 16.44 21.1 17.08M20.96 23C19.9 23 18.9 22.75 17.96 22.25C16.12 23.25 13.81 23.25 11.97 22.25C10.13 23.25 7.82 23.25 6 22.25C4.77 22.94 3.36 23.05 2 23V21C3.41 21.05 4.77 20.9 6 20C7.74 21.25 10.21 21.25 11.97 20C13.74 21.25 16.2 21.25 17.96 20C19.17 20.9 20.54 21.05 21.94 21V23H20.96Z" /></svg>';
                        beratungImg.style.fill = 'beige';
                    const beratungHeading = document.createElement('div');
                        beratungHeading.innerHTML = '<h3>Beratung</h3>';
                    const beratungText = document.createElement('div');
                        beratungText.innerHTML = 'Kauf- & Verkaufsberatung, Investitionsberatung, Reparaturabnahmen'
                beratung.append(beratungImg,beratungHeading, beratungText);
                beratung.addEventListener("click", () => {
                    loadPopUp ();
                        
                });

                const support = document.createElement('div');
                    support.classList = 'service';
                    const supportImg = document.createElement('div');
                        supportImg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="20vh" viewBox="0 0 24 24"><title>hand-saw</title><path d="M9.8,17L5.9,11.6L20,2L22,5V8H19V11H16V14H13V17M9.7,18.7L9.2,21.5L7.6,22.7C6.7,23.3 5.5,23.1 4.8,22.2L1.3,17.3C0.7,16.4 0.9,15.2 1.8,14.5L5.1,12.2L9.7,18.7M4.6,15L3,16.1L6.5,21L8.1,19.8L4.6,15Z" /></svg>'
                        supportImg.style.fill = 'beige';
                    const supportHeading = document.createElement('div');
                        supportHeading.innerHTML = '<h3>DIY-Unterastützung</h3>';
                    const supportText = document.createElement('div');
                        supportText.innerHTML = 'Fachmännische, individuelle Beratung bei der Umsetzung von DIY Projecten'
                support.append(supportImg, supportHeading, supportText);
                support.addEventListener("click", () => {
                    loadPopUp ();
                        
                });

        serviceContent.append(gutachten, beratung, support, popUp);
        
        
        const about = document.createElement('div');
                about.classList = 'about';
                about.id = 'about';
                const aboutContent = document.createElement('div');
                    aboutContent.id = "aboutContent";
                    aboutContent.innerHTML = 'Hallo,<br>ich bin Sören (geb. 1993) und lebe mit meinen zwei wunderbaren Kindern (geb. 2019 & 2021) und meiner Frau in Lübeck. Ich bin gebürtiger Berliner, doch mein Herz schlägt für Wasser und Meer. Ich bin leidenschaftlicher Segler und Wellenreiter und begeistere mich für alle Sport- und Freizeitaktivitäten im und auf dem Wasser. Schon in jungen Jahren leitete ich eine Segelgilde und segelte erfolgreich Regatten auf der Kieler Woche. Durch die Ausbildung zum Bootsbauer fundierte ich mein Wissen und meine handwerklichen Fähigkeiten. Die Qualifizierung zum anerkannten Sachverständigen für Sportboote ergänzt meine praktischen Erfahrungen. <br>Ich beschreibe mich als offenen und wissbegierigen Menschen, der sein Wissen gerne an andere Personen weitergibt. '
                
                const imgContainer = document.createElement('div');
                    imgContainer.id = 'aboutImgContainer';
                    const aboutImg = document.createElement('img');
                        aboutImg.src = meImg;
                        aboutImg.id = "aboutImg";
                        
                imgContainer.append(aboutImg);
        
        about.append(imgContainer, aboutContent);

        const kontakt = document.createElement('div');
            kontakt.id = 'kontakt';
            const kontaktContainer = document.createElement('div');
                kontaktContainer.id = "kontaktContainer";
                const myInfo = document.createElement('div');
                    myInfo.innerHTML = '<h2>Sören Modery-Diekhans<br>Wakenitzmauer 130<br>23552 Lübeck<p>s.modery-diekhans@web.de</p><p>+49(0)1723900214</p></h2>'
                const mailForm = document.createElement('div');
                    mailForm.innerHTML = '<form class="contact-form" action="mailto:s.modery-diekhans@web.de" method="POST" enctype="text/plain"><input type="text" name="name" placeholder="Dein Name" required><input type="email" name="email" placeholder="Deine Email" required><textarea name="message" placeholder="Deine Nachricht" rows="5" required></textarea><button type="submit">Nachricht abschicken</button></form>';
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

