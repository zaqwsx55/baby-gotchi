import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss']
})
export class StatusIndicatorComponent implements OnInit {

  @Input() label: string;
  @Input() value: number;
  @Input() color = 'primary';

  constructor() { }

  ngOnInit() {
  }

}
