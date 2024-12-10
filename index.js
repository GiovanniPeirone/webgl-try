var InitDemo = function() {
   console.log('working') 

    var canvas = document.getElementById('canvas')
    var gl = canvas.getContext('webgl')

    if(!gl){
        console.log('webgl dont support')
        gl = canvas.getContext('expreimental-webgl')
    }

    if(!gl){
        alert('dont work')
    }
}