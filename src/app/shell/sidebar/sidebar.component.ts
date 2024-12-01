import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFileLines as fasFileLines, faEnvelope as fasEnvelope, faUsers as fasUsers, faComments as fasComments, faArrowRightFromBracket as fasArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(faEnvelope, fasEnvelope, fasUsers, fasFileLines, fasComments, fasArrowRightFromBracket);
  }
}
