
import {Component} from '@angular/core';

@Component({
 selector :'app-property-Card',
  templateUrl:'Property-Card.component.html',
  styleUrls:['Property-Card.component.css']
})
export class PropertyCardComponent{

  property :any={
  Id:"1",
  Name:"Canal Garden",
  Type: "House",
  Price:"1200"

  }
}
