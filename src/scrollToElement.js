

export default function scrollToElement (liId) {
    let target = null;
    const offset = window.innerHeight * 0.15;
    let targetPosition = null;
    switch (liId){
        case 'li-0':
            target = document.getElementById('infoContent');
            target.scrollIntoView({behavior: 'smooth'})
            break;
        case 'li-1':
            target = document.getElementById('serviceContent');
            targetPosition = target.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                top: targetPosition - offset,
                behavior: 'smooth'
                });
                break;
        case 'li-2':
            target = document.getElementById('about');
            targetPosition = target.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                top: targetPosition - offset,
                behavior: 'smooth'
                });
                break
        case 'li-3':
            target = document.getElementById('kontakt');
            targetPosition = target.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                top: targetPosition - offset,
                behavior: 'smooth'
                });

    // still need to add case li-3 as soon as contetn for kontakt is created
    
  

    }};
 