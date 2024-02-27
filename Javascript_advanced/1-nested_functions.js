// this code/program is for nested function

var globalVariable = 'Welcome';

function outer(){
    alert(globalVariable)

    var courseDone = 'Holberton'

    function inner(){
        alert(globalVariable + ' ' + courseDone)

        var exclamationMark = '!'

        function inception(){
            alert(globalVariable + ' ' + course + exclamationMark)

        }
        inception()

    }
    inner()

}
outer()
