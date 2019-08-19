import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars, faBell, faUserCircle, faEnvelope, faSearch, faChartArea, faUserPlus, faUpload, faNewspaper, faUserCog, faUsersCog, faChevronRight, faTable, faCertificate, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule
  ],
  exports:[
    FontAwesomeModule
  ]
})
export class FaIconModule { 
  iconDefinitionsMap: Array<IconDefinition>=[
    faBars, faBell, faUserCircle, faEnvelope, faSearch, faChartArea, faUserPlus, faUpload, faNewspaper, faUserCog, faUsersCog, faChevronRight, faTable, faCertificate
  ];
  constructor(library: FaIconLibrary){
    library.addIcons(...this.iconDefinitionsMap);
  }
}
