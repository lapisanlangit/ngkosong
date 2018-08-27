import { Component, OnInit } from '@angular/core';
import { KppnService } from './kppn.service';
import { KPPN } from './kppn';



@Component({
  selector: 'app-kppn',
  templateUrl: './kppn.component.html',
  styleUrls: ['./kppn.component.css']
})
export class KppnComponent implements OnInit {

  public listKPPN:KPPN[];

  constructor(private kppnservice:KppnService) { }

  ngOnInit() {

    
      this.kppnservice.getKPPN()
        .subscribe(
          data => {
            
            this.listKPPN = data;
            console.log(this.listKPPN);
        },
          error =>{
            alert(error)
          }
        );
    
  }

}
