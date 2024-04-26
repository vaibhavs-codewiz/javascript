# projects related to DOM :


## Javascript code :

```
let buttons = document.querySelectorAll(".button");
button.forEach(function (button)
{
    button.addEventListener("click",function (event)
    {
        switch (event.target.id) :
        {
            case "gray":
            document.body.style.backgroundColor = "gray";
            break; 

            case "white:
            document.body.style.backgroundColor = "white";
            break;

            case "blue":
            document.body.style.backgroundColor = "blue";
            break;

            case "yellow":
            document.body.style.backgroundColor = "yellow";
            break;

            default :
                break ;
        }
    })
})