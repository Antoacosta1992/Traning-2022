import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
export class ShoppingListService { 
/*  121 added this new event emitter (that we will trigger via the addIngredient() method below) */ 
ingredientsChanged = new EventEmitter<Ingredient[]>();  
// 120 added 
private ingredients: Ingredient[] = [ 
    new Ingredient('Apples',5), 
    new Ingredient('Scrapple',10),  
    new Ingredient('Snapple',6),  
    new Ingredient('Crabapples',42) 
 ];  
 // 0 added 
 getIngredients(){ 
    console.log('shopping-list.service getIngredients');
    return this.ingredients.slice(); } 
    // 1 added 
    addIngredient(ingredient: Ingredient){ 
        console.log('shopping-list.service addIngredient'); 
        this.ingredients.push(ingredient); 
        // 2 we pass in the updated ingredients array via the event emitter (defined above) 
        this.ingredientsChanged.emit(this.ingredients.slice());  } 
        // 3  
        addIngredients( ingredients: Ingredient[]
             ){ 
      /*  we could do it this way...the down-side is  that we emit a lot of events for(let ingredient of ingredients)
      {this.addIngredient(ingredient)}
      instead we directly add all ingredient in one go and the emit the even*/
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.emit(this.ingredients.slice());
             }
            }
        