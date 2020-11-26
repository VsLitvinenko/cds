import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-report-bug',
  templateUrl: './report-bug.component.html',
  styleUrls: ['./report-bug.component.scss'],
})
export class ReportBugComponent implements OnInit {
  public bugFormGroup: FormGroup = new FormGroup({
    header: new FormControl(null, Validators.required),
    body: new FormControl(null, Validators.required),
  });

  constructor() { }

  ngOnInit() {}

}
