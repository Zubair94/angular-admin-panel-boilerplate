import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTachometerAlt, faBars, faBell, faUserCircle, faEnvelope, faSearch, faChartArea, faUserPlus, faUpload } from '@fortawesome/free-solid-svg-icons';

library.add(faTachometerAlt)
library.add(faBars);
library.add(faBell);
library.add(faUserCircle);
library.add(faEnvelope);
library.add(faSearch);
library.add(faChartArea);
library.add(faUserPlus);
library.add(faUpload);
@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule
  ],
  exports:[
    FontAwesomeModule
  ]
})
export class FaIconModule { }
