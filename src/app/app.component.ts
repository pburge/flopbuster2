import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlopBuster';

  movieList = {
	  count:1
  }

  theRoom = { 
	title:"The Room"
  }

  anObject = {
	  property_one:"prop1",
	  property_two:2,
	  property_three: {
		sub_prop_one:"subPropOne",
		sub_prop_two:"subTwo"
	  }
  }


}
