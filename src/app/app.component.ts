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


}
