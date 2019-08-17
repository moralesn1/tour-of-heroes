import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  config: Config;


  constructor() { }

  ngOnInit() {
  }

  showConfig() {
    this.configService.getConfig(
      .subscribe((data: Config) => this.config = {
      heroesUrl: data['heroesURL'],
      textFile: data['textFile'],
    })
    )
  }
}
