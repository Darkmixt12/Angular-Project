import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {

  public heroNames: string[] = ['Spiderman', 'Thor', 'Hulk', 'Superman']; 
  public heroDeleted: string | undefined
  removeLastHero():void {
    this.heroDeleted = this.heroNames.pop(); //! pop elimina el ultimo valor dl array y lo retorna
    console.log(this.heroDeleted); //! si ya no hay mas valores para eliminar retornara undefined

  } 
  //? MUY IMPORTANTE!! si no declaramos la variable en el export no podremos utilizarla
  //? fuera de la funcion por lo que no podremos usarla fuera en el HTML
}
