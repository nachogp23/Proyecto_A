import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { faBoxOpen, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {



  }

  public onClick() {
    this.route.params.subscribe((params) => {
      console.log(params);

    })
  }


}
