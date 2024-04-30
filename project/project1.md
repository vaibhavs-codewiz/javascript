# projects related to DOM :


## Javascript code : for color change project .

```
let buttons = document.querySelectorAll(".button");
buttons.forEach(function (button)
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

```
 ## javascript code for : BMI calculator .

 ``` 
 //at first select the form 
const form = document.querySelector("form");

//this use case will give you empty since value extracted before submititon.
//parseInt(document.querySelector("#height").value);

form.addEventListener("submit",function(e)
{
  e.preventDefault();
  //to stop the default behaviour of submit of form.
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  //value we get is string so parse into int.
  const result = document.querySelector("#results");

  //some checks
  if(height < 0 || height === "" || height === NaN)
  results.innerHTML = `please enter a valid height , not ${height}`;

  else if(weight < 0 || weight === NaN || weight === "")
  results.innerHTML = `please enter a valid weight, ${weight}`;

  else 
{const bmi = (weight / ((height*height) / 10000)).toFixed(2);//to fixed set value after decimal.

results.innerHTML = `<span>${bmi}</span>`;
}

});
 ```