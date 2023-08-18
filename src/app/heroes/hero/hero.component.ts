import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName():string{ // los get no son mas que una propiedad 
                                //que se ve como una propiedad pero es un metodo
    return this.name.toUpperCase();
  }

  nameDescriptionConc():string{
    
    return `${ this.name } - ${ this.age}`;
  }

  changeHero():void {
    this.name = 'spiderman';
  }

  changeAge():void {
    this.age = 25;
  }

  resetBtns():void{
    this.age = 45;
    this.name = 'ironman'
  }

}
 //? duda para claudio si los get son metodos que se ven como propiedades cual es el propositos de estos ya que podriamos usar una funcion o una propiedar normal ///
//? duda numero dos los backpicks? sirven para escribir HTML en el componente ts? y que significa el simbolo $

//! Las clases controlan absolutamente toda la informacion que mostramos y no mostramos
//! Por ejemplo si yo pusiera privado el metodo nameDescriptionConc no podria usarlo en el HTML
