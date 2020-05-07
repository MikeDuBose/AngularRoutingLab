import { Component, OnInit, Input } from '@angular/core';
import { Donut, Donuts, DonutDetail } from '../interfaces/donutList';
import { ActivatedRoute } from '@angular/router';
import { DonutService } from '../donuts.service'

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.scss']
})
export class DonutDetailComponent implements OnInit {


  constructor(private donutData:DonutService, private route:ActivatedRoute) { }

  donut:DonutDetail;
  id:number;
  @Input() ref:string;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.donutData.getDonutDetail(this.id).subscribe(
        (data: DonutDetail) => this.donut = { ...data },
        error => console.error(error)
      );
    })
  }

}
