import { ProfileService } from '@app/core/profile/profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/internal/operators/finalize';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '@app/core/profile/user';
import { MatSnackBar } from '@angular/material';
import { AuthenticationService } from '@app/core/authentication/authentication.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {
  user: User = new User();
  username: string;
  sociallinks: any = [];
  errorString: string;
  showBio: boolean;
  loggedInUsername: string;
  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.showBio = true;
    this.username = this.route.snapshot.params.username;
    this.loggedInUsername = this.authenticationService.credentials.username;
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
          this.user = data[0];
          this.user.social_links.forEach(sociallink => {
            const username = sociallink.substr(sociallink.lastIndexOf('/') + 1, sociallink.length);
            if (sociallink.includes('facebook')) {
              this.sociallinks.push({
                socialLink: sociallink,
                username: username,
                logoUrl: '../../../../assets/logos/social/facebook-logo.svg'
              });
            } else if (sociallink.includes('github')) {
              this.sociallinks.push({
                socialLink: sociallink,
                username: username,
                logoUrl: '../../../../assets/logos/social/github-logo.svg'
              });
            } else if (sociallink.includes('twitter')) {
              this.sociallinks.push({
                socialLink: sociallink,
                username: username,
                logoUrl: '../../../../assets/logos/social/twitter-logo.svg'
              });
            } else {
              this.sociallinks.push({
                socialLink: sociallink,
                username: sociallink,
                logoUrl: '../../../../assets/logos/grid-world.svg'
              });
            }
          });
        },
        (error: any) => {
          this.errorString = '';
          for (let i = 0; i < Object.keys(error.error).length; i++) {
            this.errorString +=
              Object.keys(error.error)
                [i].toString()
                .charAt(0)
                .toUpperCase() +
              Object.keys(error.error)
                [i].toString()
                .slice(1) +
              ': ' +
              error.error[Object.keys(error.error)[i]]
                .toString()
                .charAt(0)
                .toUpperCase() +
              error.error[Object.keys(error.error)[i]].toString().slice(1) +
              '\n';
          }
          this.snackBar.open(this.errorString, 'Ok', {
            duration: 10000
          });
        }
      );
  }

  saveField(element: any) {
    this.user.bio = element.value;
  }

  updateBioValue(data: string) {
    this.showBio = true;
    this.user.bio = data;
  }
}
