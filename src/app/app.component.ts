import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

searchBar: FormGroup;
starwars: Object;

constructor(
  private formBuilder: FormBuilder,
  private databaseService: DataService
) {}

ngOnInit() {
  this.searchBar = this.formBuilder.group({
    selectType: new FormControl(),
    getSearch: new FormControl(),
  })
}

onSubmit() {
  if (this.searchBar.value.searchType === "people") {
    this.databaseService.getPeople(this.searchBar.value.getSearch)
    .subscribe(search => {
      this.starwars = search;
    })
  }
  else if (this.searchBar.value.searchType === "films") {
    this.databaseService.getFilms(this.searchBar.value.getSearch)
    .subscribe(search => {
      this.starwars = search;
    })
  }
  else if (this.searchBar.value.searchType === "starships") {
    this.databaseService.getStarships(this.searchBar.value.getSearch)
    .subscribe(search => {
      this.starwars = search;
    })
  }
  else {
    this.databaseService.getNothing()
    .subscribe(search => {
      this.starwars = search;
    })
  }
}
}
