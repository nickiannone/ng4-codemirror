import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodemirrorComponent} from './codemirror.component';

@NgModule({
    imports:[CommonModule],
    declarations: [
        CodemirrorComponent,
    ],
    exports: [
        CodemirrorComponent,
    ]
})

export class CodemirrorModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: CodemirrorModule,
            providers: []};
    }
}
