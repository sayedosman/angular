import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeviceService } from '../service/service.service';
import { Observable } from 'rxjs';
import { History } from '../model/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historys: Observable<Array<History>>;
  constructor(private router: ActivatedRoute, private service:SeviceService) {
  }

  ngOnInit(): void {
this.historys=this.service.getAllHistory();
  }

}
