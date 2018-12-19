import { ProfileService } from '@app/core/profile/profile.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/internal/operators/finalize';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    this.profileService
      .getUserDetails('vp')
      .pipe(finalize(() => {}))
      .subscribe(
        (data: any) => {
          console.log(data);
          if (data.length === 0) {
            this.router.navigate(['404']);
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
