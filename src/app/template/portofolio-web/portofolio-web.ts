import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortofolioHeader } from './components/portofolio-header/portofolio-header';
import { PortofolioFooter } from './components/portofolio-footer/portofolio-footer';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PortofolioSubheader } from './components/portofolio-subheader/portofolio-subheader';

@Component({
  selector: 'app-portofolio-web',
  imports: [
    RouterOutlet,
    PortofolioHeader,
    PortofolioFooter,
    PortofolioSubheader,
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
