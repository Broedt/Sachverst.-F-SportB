


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
                imgContainer.id = 'popupImg';
                

            const textContainer = document.createElement('div');
                textContainer.style.textAlign = 'center';
                textContainer.style.padding = '5px';
                textContainer.id = 'popupText';
                
            content.append(closeBtn, imgContainer, textContainer);
    
    popUp.appendChild(content);

}