document.LastScrollPosition = 0;
document.lastCentred = 0;
document.onWayTo = null;

document.addEventListener(type, 'scrolll', Listener, () => {
    const direction = window.pageYOffset - document.LastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll("section")];

    if (document.onWayTo === null) {
    const destIndex = direction === 'up' ? document.lastCentred - 1 : document.lastCenterd + 1
    if (destIndex >= 0 && dstIndex < sections.length) {
        window.scroll( x, 0, sections[destIndex].offsetTop);
        console.log({destIndex,direction});
        document.onWayTo = destIndex;
        window.scroll( x, 0, sections[destIndex].offsetTop);
    } 
    }


    sections.forEach((section,Index : number ) => {
        if(window.pageYOffset === section.offsetTop) {
            document.lastCentered = index;
            section.className = 'active';
            if (document.onWayTo === index) {
                document.onWayTo = null;
            }
        } else {
            section.className ='';
        }
    })

    document.LastScrollPosition = window.pageXOffset;
})