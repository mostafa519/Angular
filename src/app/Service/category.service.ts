import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ICategory } from '../modulees/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {

  };
  ngOnInit(): void {
    this.getAllCategoriesAPI().subscribe({
      next: (data) => {
        this.category = data;
      },
      error: (err) => {
        console.log(`Get CAT From API Error: ${err}`);
      }
    })
  };
  category: ICategory[] = [];
  getCategoryName(id: number): string {
    let catName: any = this.category.find(c => c.ID == id)
    return catName?.name;
  };
  // Get All Categories
  getAllCategoriesAPI(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(`${environment.APIURL}/category`);
  };
}
