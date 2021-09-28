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

  public months: number = 0;
  public weeks: number = 0;
  public days: number = 0;
  public globaldays: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;
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
    switch (this.globaldays) {
      case 0:
        text = 'Ha nechtěl bych mít příjmačky';
        break;
      case 1:
        text = 'Ha zítra máš příjmačky, nechtěl bych';
        break;
      case 69:
        text = 'Ha za 69 dní to píšeš, nechtěl bych!';
        break;
      case 123:
        text = 'Mám hlad!';
        break;
      case 365:
        text = 'Tvl no maké, za rok to píšeš!';
        break;
      case 9:
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
    this.months = Math.round(distance / 1000 / 2629800);
    this.days = this.globaldays = Math.round((distance / 1000 % 2629800) / 86400);
    this.hours = Math.round((distance / 1000 % 86400) / 3600)
    this.minutes = Math.round(distance / 1000 % 3600 / 60);
    this.seconds = Math.floor(distance / 1000 % 60);
    this.milliseconds = this.numberOption(Math.round(distance % 1000));
  }

  protected numberOption(number: number): any {
    if (number < 100)
    {
      if (number < 10)
      {
        return `00${number}`;
      }else{
        return `0${number}`;
      }
    }else{
      return number;
    }
  }
}
