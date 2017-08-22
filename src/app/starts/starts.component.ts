import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit {

  private starts: boolean[];

  @Input()
  private rating: number = 0;

  constructor() { }

  ngOnInit() {
    this.starts = [];
    for(let i=1;i<=5;i++){
      this.starts.push(i>this.rating);
    }
  }

}
