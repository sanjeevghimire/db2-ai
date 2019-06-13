import { Component, OnInit } from '@angular/core';
import { FlightInfo } from '../models/flight-info';
import { PredictionService } from '../services/prediciton.service';
import { FormGroup, Form } from '@angular/forms';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  submitted = false;
  // predictionForm: FormGroup;
  model: FlightInfo;

  isLoading = true;

  predictions: any;

  months: {} = [{
    name: 'January',
    code: '1'
  },
  {
    name: 'February',
    code: '2'
  },
  {
    name: 'March',
    code: '3'
  },
  {
    name: 'April',
    code: '4'
  },
  {
    name: 'May',
    code: '5'
  },
  {
    name: 'June',
    code: '6'
  },
  {
    name: 'July',
    code: '7'
  },
  {
    name: 'August',
    code: '8'
  },
  {
    name: 'September',
    code: '9'
  },
  {
    name: 'October',
    code: '10'
  },
  {
    name: 'November',
    code: '11'
  },
  {
    name: 'December',
    code: '12'
  }];

  dayOfWeeks: {} = [{
    name: 'Sunday',
    code: '1'
  },
  {
    name: 'Monday',
    code: '2'
  },
  {
    name: 'Tuesday',
    code: '3'
  },
  {
    name: 'Wednesday',
    code: '4'
  },
  {
    name: 'Thursday',
    code: '5'
  },
  {
    name: 'Friday',
    code: '6'
  },
  {
    name: 'Saturday',
    code: '7'
  }];

  constructor(private predictionService: PredictionService) { }

  ngOnInit() {
    this.model = new FlightInfo('', '', '', '', '', '', '', '', 0, 0, '');
  }


  onSubmit() {
    console.log('Getting predictions result.');
    // this.model = this.predictionForm.value;
    console.log(this.model);
    this.submitted = true;

    this.predictionService.predict(this.model).subscribe(
      (predictions) => {
        this.isLoading = false;
        console.log('Predictions Result');
        console.log(predictions);
        this.predictions = predictions;
      });

  }

  newFlightInfo() {
    console.log('Resetting..');
    this.model = new FlightInfo('', '', '', '', '', '', '', '', 0, 0, '');
  }

}
