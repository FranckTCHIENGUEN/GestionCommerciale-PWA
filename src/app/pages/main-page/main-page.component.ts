import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PlatformService} from "../../services/platformService/platform.service";
import {menuList} from "../../menuList";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
private _platform: string | undefined;
private _menu = menuList;
 private _activeLink?:any;

  get platform(): string | undefined {
    return this._platform;
  }

  set activeLink(value: any) {
    this._activeLink = value;
  }

  get activeLink(): any {
    return this._activeLink;
  }

  get menu(): ({ routerLink: string; icon: string; id: string; label: string } | { routerLink: string; icon: string; id: string; label: string } | { routerLink: string; icon: string; id: string; label: string } | { routerLink: string; icon: string; id: string; label: string } | { routerLink: string; icon: string; id: string; label: string } | { routerLink: string; icon: string; id: string; label: string } | { routerLink: string; icon: string; id: string; label: string } | { routerLink: string; icon: string; id: string; label: string })[] {
    return this._menu;
  }

  constructor(private curentPlatform:PlatformService, private route: ActivatedRoute,
              private router:Router,) {
    this._activeLink = this._menu[0].routerLink
  }
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  ngOnInit() {
    this._platform = this.curentPlatform.currentPlatform
  }

  navigate(routerLink: string) {
    this.router.navigate([routerLink])
  }
}
