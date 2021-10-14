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

  grouped = [1,2,3,4,5,6,7,8,9,10];
  grouped2 = [1,2,3,4,5,6,7,8,9,10];

  async showPop(ev: any) {
    const popover = await this.popoverController.create({
      component: PopContentComponent,      
      event: ev      
    });
    await popover.present();
  }

}
