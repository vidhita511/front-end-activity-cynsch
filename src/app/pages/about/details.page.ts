import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PartnerService } from '../../services/partner/partner.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  http: any;
  error: string;
  hideMe: boolean;
  
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private modalCtrl: ModalController, public partnerService: PartnerService) { }
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private prepareDataRequest(): Observable<any> {  // <-- change return type here
    // Define the data URL
    const dataUrl = 'assets/data/data.json';
    // Prepare the request
    return this.http.get(dataUrl);
  }
  
  businesses= [];
  ionViewWillEnter() {
    
    this.prepareDataRequest().subscribe( 
      data => {
        this.businesses;
      },
      err => {
        
        this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
      }
    );
  }
  
  hide() {
      this.hideMe = true;
    }


}

 
  

