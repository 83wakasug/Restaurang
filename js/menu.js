class Menu {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.description;
  }
}



const menu = {
  appetizers: [
    new Menu("Bruschetta al Pomodoro", 6, "Fresh tomato, basil, and garlic on toasted baguette slices, drizzled with olive oil."),
    new Menu("Smoked Salmon Tartare", 9, "Finely diced smoked salmon, capers, and shallots, served with a zesty lemon dressing."),
    new Menu("Roasted Beet Salad", 7, "Roasted beets with goat cheese, arugula, walnuts, and a balsamic glaze.")
  ],
  mainCourses: [
    new Menu("Grilled Filet Mignon", 28, "A tender 8oz filet, grilled to perfection, served with mashed potatoes and seasonal vegetables."),
    new Menu("Linguine alla Vongole", 22, "Fresh linguine pasta with a savory clam sauce, garlic, and white wine."),
    new Menu("Vegetable Risotto", 18, "A creamy risotto made with seasonal vegetables and a touch of parmesan cheese.")
  ],
  desserts: [
    new Menu("Tiramisu", 6, "A classic Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder."),
    new Menu("Crème Brûlée", 7, "A rich and creamy vanilla custard with a caramelized sugar top."),
    new Menu("Chocolate Fondant", 8, "A decadent molten chocolate cake served with vanilla ice cream.")
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
      sp_price.textContent=`$${item.getPrice()}`;
      sp_description.textContent=item.description;

    
      div_eachMenu.appendChild(sp_name);
      div_eachMenu.appendChild(sp_price);
      div_eachMenu.appendChild(sp_description);
      divCategory.appendChild(div_eachMenu);
    })
    menuContainer.appendChild(divCategory);
}


