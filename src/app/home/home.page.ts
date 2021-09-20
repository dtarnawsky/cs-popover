import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopContentComponent } from '../pop-content/pop-content.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private popoverController: PopoverController) {}

  async showPop(ev: any) {
    const popover = await this.popoverController.create({
      component: PopContentComponent,      
      event: ev      
    });
    await popover.present();
  }

}
