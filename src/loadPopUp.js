

export default function loadPopUp () {
    
    const popUp = document.getElementById("popUp");
        popUp.classList.toggle('show');
        popUp.innerHTML = "";
        const content = document.createElement('div');
            content.style.cssText = 'width: 80%; height: 80%; background-color: black; border-radius: 10px; padding: 10px; position: relative';
            content.id = "popUpContent";
            const closeBtn = document.createElement('button');
                closeBtn.innerHTML = 'X';
                closeBtn.style.cssText = 'background-color: red; border-radius: 5px; color: white; position: absolute'
        content.append(closeBtn)
    
        
    popUp.appendChild(content)
            

}