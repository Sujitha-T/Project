import { Component, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  moduleId: module.id,
  selector: 'prodo',
  templateUrl: 'app.component.html',
})
export class AppComponent implements AfterViewInit {
  constructor(private toastrService: ToastrService) {}

  ngAfterViewInit(): void {
    this.toastrService.popAsync(
      'success',
      'Welcome',
      'Prodo is ready to be used.'
    );
  }
}
