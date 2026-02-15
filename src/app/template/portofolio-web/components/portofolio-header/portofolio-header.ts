import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-portofolio-header',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './portofolio-header.html',
  styleUrl: './portofolio-header.scss',
})
export class PortofolioHeader {
  @Output() onOpenMenu = new EventEmitter();

  openSideMenu() {
    this.onOpenMenu.emit(true);
  }

}
