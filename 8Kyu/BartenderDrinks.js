//Bartender Drinks
//https://www.codewars.com/kata/568dc014440f03b13900001d/javascript

function getDrinkByProfession(param){
    let x = param.toLowerCase()
      switch(x) {
        case "jabroni": 
          return "Patron Tequila";
        case "school counselor": 
          return "Anything with Alcohol";
        case "programmer": 
          return "Hipster Craft Beer";
        case "bike gang member": 
          return "Moonshine";
        case "politician": 
          return "Your tax dollars";
        case "rapper": 
          return "Cristal";
      default: return "Beer";
    }
  }