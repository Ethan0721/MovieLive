import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  img_url = "../../assets/images/footer.jpg";
  constructor() { }

  ngOnInit() {
  }

}
