const menu = {
  appetizers: [
    {
      name: "Bruschetta al Pomodoro",
      price: 6,
      description: "Fresh tomato, basil, and garlic on toasted baguette slices, drizzled with olive oil."
    },
    {
      name: "Smoked Salmon Tartare",
      price: 9,
      description: "Finely diced smoked salmon, capers, and shallots, served with a zesty lemon dressing."
    },
    {
      name: "Roasted Beet Salad",
      price: 7,
      description: "Roasted beets with goat cheese, arugula, walnuts, and a balsamic glaze."
    }
  ],
  mainCourses: [
    {
      name: "Grilled Filet Mignon",
      price: 28,
      description: "A tender 8oz filet, grilled to perfection, served with mashed potatoes and seasonal vegetables."
    },
    {
      name: "Linguine alla Vongole",
      price: 22,
      description: "Fresh linguine pasta with a savory clam sauce, garlic, and white wine."
    },
    {
      name: "Vegetable Risotto",
      price: 18,
      description: "A creamy risotto made with seasonal vegetables and a touch of parmesan cheese."
    }
  ],
  desserts: [
    {
      name: "Tiramisu",
      price: 6,
      description: "A classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder."
    },
    {
      name: "Crème Brûlée",
      price: 7,
      description: "A rich and creamy vanilla custard with a caramelized sugar top."
    },
    {
      name: "Chocolate Fondant",
      price: 8,
      description: "A decadent molten chocolate cake served with vanilla ice cream."
    }
  ]
};


const all = document.getElementById("all");
const appertizers = document.getElementById("appertizers");
const mainCourse = document.getElementById("main_course");
const desserts = document.getElementById("desserts");
const menuContainer = document.getElementById("menu");

all.onclick = function(){
  menuContainer.innerHTML = "";
 getAppertizers(menuContainer);
 getMain(menuContainer);
 getDesserts(menuContainer);

}

function getAppertizers(menuContainer){
  let divAppertizers = document.createElement("div"); 
       divAppertizers.className="div_Appertizers";
      
       p_title=document.createElement("p");
       p_title.textContent="Appetizers";
       p_title.className="title";
       divAppertizers.appendChild(p_title);

       menu.appetizers.forEach (appetizer=>{
      
      let sp_name = document.createElement("span");
      let sp_price= document.createElement("span");
      let sp_description= document.createElement("span");
    
      sp_name.textContent=appetizer.name;
      sp_price.textContent=`$${appetizer.price}`;
      sp_description.textContent=appetizer.description;

    
      divAppertizers.appendChild(sp_name);
      divAppertizers.appendChild(sp_price);
      divAppertizers.appendChild(sp_description);

    })
    menuContainer.appendChild(divAppertizers);
}


function getMain(menuContainer){
  let divmain = document.createElement("div"); 
       divmain.className="div_main";
      
       p_title=document.createElement("p");
       p_title.textContent="Main Course";
       p_title.className="title";
       divmain.appendChild(p_title);

       menu.mainCourses.forEach (mainCourse=>{
      
      let sp_name = document.createElement("span");
      let sp_price= document.createElement("span");
      let sp_description= document.createElement("span");
    
      sp_name.textContent=mainCourse.name;
      sp_price.textContent=`$${mainCourse.price}`;
      sp_description.textContent=mainCourse.description;

    
      divmain.appendChild(sp_name);
      divmain.appendChild(sp_price);
      divmain.appendChild(sp_description);

    })
    menuContainer.appendChild(divmain);
}


function getDesserts(menuContainer){
  let divDesserts = document.createElement("div"); 
  divDesserts.className="div_deserts";
      
       p_title=document.createElement("p");
       p_title.textContent="Deserts";
       p_title.className="title";
       divDesserts.appendChild(p_title);

       menu.desserts.forEach (dessert=>{
      let div_eachMenu = document.createElement("div");
      let sp_name = document.createElement("span");
      let sp_price= document.createElement("span");
      let sp_description= document.createElement("span");
      
      sp_name.textContent=dessert.name;
      sp_price.textContent = `$${dessert.price}`;
      sp_description.textContent=dessert.description;

      
      div_eachMenu.appendChild(sp_name);
      div_eachMenu.appendChild(sp_price);
      div_eachMenu.appendChild(sp_description);
      divDesserts.appendChild(div_eachMenu);

    })
    menuContainer.appendChild(divDesserts);
}