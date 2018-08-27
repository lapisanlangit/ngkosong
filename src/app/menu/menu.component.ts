import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.body.className = 'hold-transition skin-blue sidebar-mini';
    $(document).ready(function () {
      $('.sidebar-menu').tree()
    })

  }

}
