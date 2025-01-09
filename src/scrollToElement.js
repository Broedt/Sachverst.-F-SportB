

export default function scrollToElement (liId) {
    let target = null;
    switch (liId){
        case 'li-0':
            target = document.getElementById('infoContent');
            break;
        case 'li-1':
            target = document.getElementById('serviceContent');
            break;
        case 'li-2':
            target = document.getElementById('about');
    }
    
    
  target.scrollIntoView({ behavior: 'smooth' })

};
    
//if (targetElement) {
//    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
 //   const offset = window.innerHeight * 0.15; // 15vh as offset

    // Scroll to the target position minus the offset
 //   window.scrollTo({
 //       top: targetPosition - offset,
 //       behavior: 'smooth'
 //   });