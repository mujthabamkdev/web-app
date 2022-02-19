import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/api-service/home/home.service';
import { MasterDataService } from 'src/app/shared/services/master-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeForm: FormGroup;
  isSubmited = false;
  wordsCount: any;
  totalWordCount = 0;

  constructor(
    private formBuilder: FormBuilder,
    private service: HomeService,
    private dataService: MasterDataService
  ) { }

  ngOnInit() {
    this.homeForm = this.formBuilder.group({
      sampleControl: ['', Validators.required],
      urlControl: ['', Validators.required]
    });
  }

  submit() {
    this.isSubmited = true;
    if (!this.homeForm.valid) {
      return;
    }

    this.service.getData().subscribe(result => {
      if (result) {
        result.text_out = [
          'Cattle',
          'Rabbit',
          'Duck',
          'Pig',
          'Cattle',
          'Rabbit',
          'Bee',
          'Cattle',
          'Goat',
          'Chicken',
          'Rabbit',
          'Crab',
          'Cattle',
          'Chicken',
          'Fish',
          'Fish',
          'Rabbit',
          'Cattle',
          'Chicken',
          'Fish',
          'Sheep',
          'Horse',
          'Fish',
          'Cattle',
          'Rabbit',
          'Sheep',
          'Cattle',
          'Dog',
          'Llamas',
          'Cattle',
          'Deer',
          'Llamas',
          'Sheep',
          'Deer',
          'Llamas',
          'Ostriches',
          'Camels',
          'Rabbit',
          'Dog',
          'Deer',
          'Sheep',
          'Dog',
          'Deer',
          'Shrimp',
          'Rabbit',
          'Dog',
          'Deer',
          'Deer',
          'Dog',
          'Deer',
          'Sheep',
          'Rabbit',
          'Dog',
          'Deer',
          'Turkey',
          'Deer',
          'Dog',
          'Rabbit',
          'Dog',
          'Dove',
          'Sheep',
          'Sheep',
          'Sheep',
          'Reindeer',
          'Sheep',
          'Geese',
          'Deer',
          'Turkey',
          'Oxen',
          'Reindeer',
          'Turkey'
        ]
      }
      this.totalWordCount = result.text_out.length;
      const key = this.homeForm.value.urlControl + new Date().getTime();
      this.dataService.setWordsCount(key, result.text_out);
      this.wordsCount = this.dataService.getWordsCount(key)
    });
  }

}
