import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'md-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public data: Observable<any>;

  // maps the remote data column to fields property
  public remoteFields: Object = { value: 'UserName' };

  // set the placeholder to AutoComplete input element
  public remoteWaterMark = 'Select a customer';

  public value = 'Badminton';
  constructor(private http: HttpClient) {
    this.data = this.http.get<{ [key: string]: object }[]>('https://services.odata.org/V4/Northwind/Northwind.svc/Customers').pipe(
      map((results: { [key: string]: any }) => {
        return results.value;
      })
    );
  }
  ngOnInit(): void {}

  filtering(event) {
    console.log(event);
    this.data = this.onSearchingData(event.text);
  }

  onSearchingData(params) {
    return this.http.get("https://services.odata.org/TripPinRESTierService/People?$filter=FirstName eq '" + params + "'");
    // return this.http.get("https://jsonplaceholder.typicode.com/comments", {params})
  }
}
