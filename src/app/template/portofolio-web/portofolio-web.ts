import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortofolioHeader } from './components/portofolio-header/portofolio-header';
import { PortofolioFooter } from './components/portofolio-footer/portofolio-footer';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-portofolio-web',
  imports: [
    RouterOutlet,
    PortofolioHeader,
    PortofolioFooter,
    MatSidenavModule
  ],
  templateUrl: './portofolio-web.html',
  styleUrl: './portofolio-web.scss',
})
export class PortofolioWeb {
  openSideMenu: boolean = false;

  onOpenMenu(e: any){
    e.toggle();
  }
}
