import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor() {}

  protected Time: number = this.getTime();

  protected readonly date: string = 'Apr 12';
  protected readonly time: string = '8:00:00';

  public days: string = '0';
  public hours: string = '0';
  public minutes: string = '0';
  public seconds: string = '0';
  public milliseconds: string = '0';

  protected readonly _second = 1000;
  protected readonly _minute = this._second * 60;
  protected readonly _hour = this._minute * 60;
  protected readonly _day = this._hour * 24;
  public text: string = '';

  public ngOnInit(): void {

    this.checkTime();
    this.setText();
    setInterval(() => this.checkTime(), 10);
  }
  protected getTime(): number {
    const date = new Date();
    let now = date.getTime();
    let nowY = date.getFullYear();
    while (this.getYear(nowY) < now) {
      nowY++;
    }
    return this.getYear(nowY);
  }

  protected setText(): void {
    let text;
    const dayNum = Number(this.days);

    if(dayNum <= 0){
      text = 'Ha nechtěl bych mít přijímačky';
    }else if (dayNum <= 69) {
      text = `Ha za ${dayNum} dní to píšeš, nechtěl bych!`;
    }else if(dayNum <= 100) {
      text = 'Uč se maké!';
    }else if(dayNum <= 364) {
      text = 'Maké za chvilku máš přijímačky!'
    }else if(dayNum < 9){
      text = 'No maké maké! Ať vše umíš!';
    }else {
      text = 'Uč se maké!';
    }

    this.text = text;
  }

  protected getYear(year: number): number {
    return new Date(`Apr 12, ${year} 8:00:00`).getTime();
  }

  protected checkTime(): void {
    let now = new Date().getTime();
    let distance = this.Time - now;
    this.days = Math.floor(distance / this._day).toLocaleString('en-US', this.numberOption(3));
    this.hours = Math.floor((distance % this._day) / this._hour).toLocaleString(
      'en-US',
      this.numberOption(2)
    );
    this.minutes = Math.floor((distance % this._hour) / this._minute).toLocaleString(
      'en-US',
      this.numberOption(2)
    );
    this.seconds = Math.floor((distance % this._minute) / this._second).toLocaleString(
      'en-US',
      this.numberOption(2)
    );
    this.milliseconds = (distance % this._second).toLocaleString('en-US', this.numberOption(3));
  }

  protected numberOption(number: number): Intl.NumberFormatOptions {
    return {
      minimumIntegerDigits: number,
      useGrouping: false,
    };
  }
}
