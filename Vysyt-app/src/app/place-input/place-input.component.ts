import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-input',
  templateUrl: './place-input.component.html',
  styleUrls: ['./place-input.component.css']
})


export class PlaceInputComponent implements OnInit {
  value = 'Clear me';

  rawUserPlaceInput = '';
  placeInput = '';
  constructor() { }

  ngOnInit(): void {
    const placeInput = this.rawUserPlaceInput;
    console.log("user inputted:" + placeInput);
  }

}
