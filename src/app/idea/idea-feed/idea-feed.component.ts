import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea-feed',
  templateUrl: './idea-feed.component.html',
  styleUrls: ['./idea-feed.component.scss']
})
export class IdeaFeedComponent implements OnInit {
  ideas: { idea_name: string; description: string; tags: string[]; require_assistance: boolean }[] = [];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 10000; i++) {
      this.ideas.push({
        idea_name: `idea${i}`,
        description: `description${i}`,
        tags: [`tags${i}`, `tags${i}`, `tags${i}`],
        require_assistance: true
      });
    }
  }
}
