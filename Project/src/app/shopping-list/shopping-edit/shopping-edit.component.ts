import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListComponent } from '../shopping-list.component';
import {ShoppingListService} from '../shopping-list.service';


@Component({ 
    selector: 'app-shopping-edit', 
    templateUrl: './shopping-edit.component.html', 
    styleUrls: ['./shopping-edit.component.css']})
    
    export class ShoppingEditComponent implements OnInit { 

        @ViewChild('nameInput', {static:true}) nameInputRef: ElementRef;
        @ViewChild('amountInput', {static:true}) amountInputRef: ElementRef;
        
        onAddItem()
        console.log('shopping-edit > onAddItem')
        const newIngrediente = new Ingredient
        (
            this.nameInputRef.nativeElement.value,
            this.amountInputRef.nativeElement.value);
            this.slService.addIngredient(newIngredient);
        }

        constructor( private slService: ShoppingListService) { } 
        ngOnInit(): void{}
        