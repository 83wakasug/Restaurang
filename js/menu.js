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
  createMenuSection("Appetizers",menu.appetizers);
  createMenuSection("Main Course",menu.mainCourses);
  createMenuSection("Desserts",menu.desserts);
}

appertizers.onclick=function(){
  menuContainer.innerHTML = "";
  createMenuSection("Appetizers",menu.appetizers);

}

mainCourse.onclick=function(){
  menuContainer.innerHTML = "";
  createMenuSection("Main Course",menu.mainCourses);

}

desserts.onclick=function(){
  menuContainer.innerHTML = "";
  createMenuSection("Desserts",menu.desserts);

}


function createMenuSection(categoryName,items){
  let divCategory  = document.createElement("div"); 
  divCategory.className =`${categoryName.toLowerCase().replace(" ", "-")}`;
       let p_title=document.createElement("p");
       p_title.textContent=categoryName;
       p_title.className="title";
       divCategory.appendChild(p_title);

      items.forEach (item=>{
      
      let div_eachMenu = document.createElement("div");
      div_eachMenu.className="container_eachMenu";
      let sp_name = document.createElement("span");
      sp_name.className="manu_name";
      let sp_price= document.createElement("span");
      sp_price.className="price";
      let sp_description= document.createElement("p");
      sp_description.className="description";
      sp_name.textContent=item.name;
      sp_price.textContent=`$${item.price}`;
      sp_description.textContent=item.description;

    
      div_eachMenu.appendChild(sp_name);
      div_eachMenu.appendChild(sp_price);
      div_eachMenu.appendChild(sp_description);
      divCategory.appendChild(div_eachMenu);
    })
    menuContainer.appendChild(divCategory);
}


