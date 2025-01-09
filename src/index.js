import "./styles.css";

import logo1 from './images/SMD_Farbversion_2';
import picture1 from './images/pexels-sebastian-palomino-2847765.jpg';
import documentPictogram from './images/document_piktogram.png';
import sailboatPictogram from './images/sailboat.svg';
import sawPictogram from './images/saw_piktogram.png';
import meImg from './images/aboutme.jpg';

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

                const title = document.createElement('div');
                    title.innerText = "Sachverständiger für Sportboote";
                    title.style.fontSize = '1.5em';
                    title.style.alignContent = 'center';
                    

                const mail = document.createElement('div');
                    mail.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50"><path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 14 6 L 36 6 C 40.430666 6 44 9.5693339 44 14 L 44 36 C 44 40.430666 40.430666 44 36 44 L 14 44 C 9.5693339 44 6 40.430666 6 36 L 6 14 C 6 9.5693339 9.5693339 6 14 6 z M 13 15 C 11.35503 15 10 16.35503 10 18 L 10 32 C 10 33.64497 11.35503 35 13 35 L 37 35 C 38.64497 35 40 33.64497 40 32 L 40 18 C 40 16.35503 38.64497 15 37 15 L 13 15 z M 13.414062 17 L 36.583984 17 L 27.677734 25.892578 C 26.18494 27.382984 23.796834 27.382819 22.304688 25.890625 L 13.414062 17 z M 38 18.412109 L 38 31.587891 L 31.402344 25 L 38 18.412109 z M 12 18.414062 L 18.585938 25 L 12 31.585938 L 12 18.414062 z M 29.988281 26.412109 L 36.585938 33 L 13.414062 33 L 20 26.414062 L 20.890625 27.304688 C 23.146478 29.56054 26.832638 29.562194 29.089844 27.308594 L 29.988281 26.412109 z"></path></svg>'
                    mail.style.cssText = 'display: flex; justyfy-content: center; align-self: center; fill: beige'
                    mail.style.paddingRight = '10px';
                    mail.style.cursor = 'pointer';
                    //click to send mail//
               
    header.append(logo, title, mail);
            
//creating content
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
                aboutContent.innerHTML = 'Hallo,<br>ich bin Sören (geb. 1993) und lebe mit meinen zwei wunderbaren Kindern (geb. 2019 & 2021) und meiner Frau in Lübeck. Ich bin gebürtiger Berliner, doch mein Herz schlägt für Wasser und Meer. Ich bin leidenschaftlicher Segler und Wellenreiter und begeistere mich für alle Sport- und Freizeitaktivitäten im und auf dem Wasser. Schon in jungen Jahren leitete ich eine Segelgilde und segelte erfolgreich Regatten auf der Kieler Woche. Durch die Ausbildung zum Bootsbauer fundierte ich mein Wissen und meine handwerklichen Fähigkeiten. Die Qualifizierung zum anerkannten Sachverständigen für Sportboote ergänzt meine praktischen Erfahrungen. <br>Ich beschreibe mich als offenen, lockeren und wissbegierigen Mann, der sein Wissen gerne an andere Personen weitergibt. '
            
            const imgContainer = document.createElement('div');
                imgContainer.style.cssText = 'display: flex; align-items: center; justify-content: center';
                const aboutImg = document.createElement('img');
                    aboutImg.src = meImg;
                    aboutImg.style.cssText = 'width: 80%'
                    
            imgContainer.append(aboutImg)
                


        about.append(imgContainer, aboutContent)

    const footer = document.createElement('div');
        footer.id = "footer";
        const impressum = document.createElement('div');
            impressum.innerHTML = 'Impressum';
        const agb = document.createElement('div');
            agb.innerHTML = 'AGB';
        const datenschutz = document.createElement('div');
            datenschutz.innerHTML = 'datenschutz';
        footer.append(impressum, agb, datenschutz)

    body.append(header, infoContent, serviceContent, about, footer);
})();

