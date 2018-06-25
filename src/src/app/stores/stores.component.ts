import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
 
  public boxStores;

  public form: FormGroup;
  items: any[] = [
    'Select a location',
    'Location 01',
    'Location 02',
    'Location 03'
  ]
  
  //Angular Google Maps
  lat: number = 50.820124;
  lng: number = 4.359299;
  zoom: number = 15;
  marker: string = '../../assets/images/content/marker.png';
  elementType:'all';
  styles = [{
    "stylers": [
      {
        "saturation": -150
      },
      {
        "hue": "#000000"
      },
      {
        "lightness": -17
      },
      {
        "gamma": 0
      },
    ]
  }
];
  selectLocation: any = this.items[0];  
  
  constructor(private fb: FormBuilder) {
    //console.log(this.items[2])
  }

  ngOnInit() {
      this.boxStores = document.getElementById("store");
      this.form = this.fb.group({
      locations: [null, Validators.compose([Validators.required])]
    });
  }
  onChange(newValue) {
    console.log(newValue)
    if(newValue != "Select a location"){
      this.boxStores.classList.add("open");
    }
  }
  close(){
    this.boxStores.classList.remove("open");
  }  
}


