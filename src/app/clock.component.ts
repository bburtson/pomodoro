import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ClockModel } from './ClockModel';
import { CountDownTimer } from './CountDownTimer'


@Component({
    selector: 'clock-component',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit
{
    private readonly DEFAULT_WORK_TITLE: string = 'Work';
    private readonly DEFAULT_BREAK_TITLE: string = 'Break';
    private readonly DEFAULT_WORK_MINUTES: number = 25;
    private readonly DEFAULT_BREAK_MINUTES: number = 5;

    public title: string;
    public minutes: number;
    public userClocks: ClockModel[] = [];
    public timer: CountDownTimer = new CountDownTimer(25);
    private hasClockData: boolean;
    private timerSound: any = new Audio('/assets/complete_alert.mp3');

    ngOnInit(): void
    {
        this.setDefaults();
        //subscribe some  noise to be played when timer is complete
        this.timer.onTimerComplete(() =>
        {
            this.updateTimer();
            this.timerSound.play();
        });
    }

    updateTimer(): void
    {
        this.userClocks.shift();

        this.userClocks.length ? this.setActiveTimer() : this.setDefaults();
    }

    setDefaults(): void
    {
        this.hasClockData = false;

        this.title = this.DEFAULT_WORK_TITLE;

        this.minutes = this.DEFAULT_WORK_MINUTES;
    }

    addClock(): void
    {
        var newClock = new ClockModel(this.title, this.minutes);

        this.userClocks.push(newClock);

        this.title = this.DEFAULT_BREAK_TITLE;

        this.minutes = this.DEFAULT_BREAK_MINUTES;

        if (this.userClocks.length === 2)
        {
            this.hasClockData = true;

            this.setActiveTimer();
        }
    }

    setActiveTimer(): void
    {
        this.title = this.userClocks[0].title;

        this.timer.minutes = this.userClocks[0].minutes;
    }
}