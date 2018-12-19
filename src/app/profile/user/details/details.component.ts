import { ProfileService } from '@app/core/profile/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/internal/operators/finalize';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '@app/core/profile/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {
  user: User = new User();
  username: string;
  constructor(private profileService: ProfileService, private route: ActivatedRoute, private router: Router) {
    this.username = this.route.snapshot.params.username;
  }

  ngOnInit() {
    this.profileService
      .getUserDetails(this.username)
      .pipe(finalize(() => {}))
      .subscribe(
        (data: any) => {
          if (data.length === 0) {
            this.router.navigate(['404']);
          }
          /*
           // dummy data. 
           this.user ={ "username": "vp", "full_name": "vivek patel", "email": "vivekjasubhai5@gmail.com", "is_admin": false, "is_staff": false, "is_superuser": false, "birth_date": new Date('September 5, 1996'), "technologies": ["SASS","NodeJS","Firebase","SASS","NodeJS","Firebase"], "bio": "Hi ! I am Vivek Patel.", "social_links": [] };
          */
          this.user = data[0];
          console.log(this.user);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
