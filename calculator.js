var tabletouch = document.getElementsByTagName('td');
var whiteboard = document.getElementById('whiteboard');
var operator1=0;
var operator2 = null;
var operand;
function perform(dataValue){
    operator1 = parseFloat(whiteboard.textContent);
            operand = dataValue;
            whiteboard.textContent = dataValue;
            setTimeout(function(){
                whiteboard.textContent = '';
            },500);
}
for(let i=0;i<tabletouch.length;i++)
{
     click1 =tabletouch[i].addEventListener('click' ,function(){
         var dataValue = tabletouch[i].getAttribute('data-value');
        if(dataValue == 'AC')
        {
            whiteboard.textContent = '';
        }
        else if(dataValue == '+' || dataValue=='-' || dataValue == '*' || dataValue=='/'||dataValue=='%')
        {
            perform(dataValue);           
        }
        else if(dataValue == '.')
        {
            operator1 =whiteboard.textContent + '.';
            whiteboard.textContent = operator1;
        }
        else if(dataValue == '+/-')
        {
            operator1 = whiteboard.textContent;
            operator1 = -1*operator1;
            whiteboard.textContent = operator1;
        }
        else if(dataValue == '=')
        {
            operator2 = whiteboard.textContent;
            if(operator2 == 0 && operand=='/')
            {
                whiteboard.textContent = 'ERROR';
            }
            else{
                var result = eval(operator1+" "+ operand+" "+ operator2);
                whiteboard.textContent = result;
            }
        }
        else
        {
            whiteboard.textContent +=parseFloat(tabletouch[i].textContent);
        }

    })
}
