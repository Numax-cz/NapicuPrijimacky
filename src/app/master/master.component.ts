import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss'],
})
export class MasterComponent implements OnInit {
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
    var now = date.getTime();
    var nowY = date.getFullYear();
    while (this.getYear(nowY) < now) {
      nowY++;
    }
    return this.getYear(nowY);
  }

  protected setText(): void {
    var text;
    switch (this.days) {
      case '0':
        text = 'Ha nechtěl bych mít příjmačky';
        break;
      case '1':
        text = 'Ha zítra máš příjmačky, nechtěl bych';
        break;
      case '69':
        text = 'Ha za 69 dní to píšeš, nechtěl bych!';
        break;
      case '123':
        text = 'Mám hlad!';
        break;
      case '364':
        text = 'Tvl no maké, za rok to píšeš!';
        break;
      case '9':
        text = 'Uč se maké!';
        break;
      default:
        text = 'No maké maké! Ať vše umíš!';
        break;
    }
    this.text = text;
  }

  protected getYear(year: number): number {
    return new Date(`Apr 12, ${year} 8:00:00`).getTime();
  }

  protected checkTime(): void {
    var now = new Date().getTime();
    var distance = this.Time - now;
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
