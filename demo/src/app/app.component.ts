import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items$: Observable<any[]>;

  inputText: FormControl = new FormControl(null);

  constructor(private db: AngularFireDatabase) {
    this.items$ = db.list('items').valueChanges();
  }

  ngOnInit() {}

  submit() {
    this.db.list('items').push(this.inputText.value);
  }
}
