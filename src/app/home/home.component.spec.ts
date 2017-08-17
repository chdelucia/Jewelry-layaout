import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Location, CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeComponent} from './home.component';
import {TRANSLATION_PROVIDERS, TranslatePipe, TranslateService} from '../translate';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let app;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                RouterTestingModule
            ],
            declarations: [HomeComponent, TranslatePipe],
            providers: [TRANSLATION_PROVIDERS, TranslateService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        app = fixture.debugElement.componentInstance;
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('edad menos 4', () => {
//        const fixture = TestBed.createComponent(HomeComponent);
//        const app = fixture.debugElement.componentInstance;
        expect(app.alexa("hola", 8)).toEqual(5);
    });

    it('Should not return null', () => {
//        const app = fixture.debugElement.componentInstance;
        let result = app.alexa();
        expect(result).not.toBe(null);
    });

});
