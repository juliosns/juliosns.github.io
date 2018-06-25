import { ValueAnimator } from './value.animator';
import { SoundManager } from './sound.manager';
import { ComponentSuffix } from './component.suffix';
import { SvgManager } from './svg.manager';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  exports: [],
  providers: [SvgManager, ComponentSuffix, SoundManager, ValueAnimator]
})


export class SharedModule { }