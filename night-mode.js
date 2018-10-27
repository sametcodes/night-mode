function nightMode({exclusiveElements}){
    document.addEventListener("DOMContentLoaded", function(event) {
        document.body.style = "background: #111 !important; filter: invert(100%);"

        exclusiveElements.forEach(element => {
            for(var el of document.querySelectorAll(element)){
                el.style.filter = "invert(100%)"
            }
        })
    })
} 
