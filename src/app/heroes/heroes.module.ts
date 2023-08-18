import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { HeroListComponent} from "./list/hero-list/hero-list.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeroComponent,
        HeroListComponent
    ],
    exports:[
        HeroComponent,
        HeroListComponent
    ],
    imports:[
        CommonModule //! contiene el NGIF NGFOR NGSWITCH al haber creado este modulo a mano no trae por defecto estas directivas 
    ]
})
export class HeroesModule {

}