import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/timer';


export class CountDownTimer
{
    //internal
    private _subscription: Subscription;
    private _milliseconds: number;
    private _minutes: number;

    //display
    public milliseconds: number = 0;
    public seconds: number = 0;
    get minutes(): number { return this._minutes; }
    set minutes(value: number)
    {
        this._minutes = value;
        this._milliseconds = this._minutes * (1000 * 60);
    }

    public event: Event = new Event('timerComplete');

    constructor(public min: number)
    {
      this.minutes = min;

      this.onTimerComplete(() => this.stop());
    }

    private convertToTime()
    {
        this.milliseconds = Math.floor(this._milliseconds % 1000) / 10;

        this.seconds = Math.floor((this._milliseconds / 1000) % 60);

        this._minutes = Math.floor((this._milliseconds / (1000 * 60)) % 60);
    }

    public start()
    {
        if (this._subscription == undefined)
        {
            this._subscription = Observable.timer(10, 10).subscribe(() =>
            {
                this._milliseconds -= 10;

                this.convertToTime();

                if (this._milliseconds <= 0)
                {
                    document.dispatchEvent(this.event);
                }
            });
        }
    }

    public onTimerComplete(callBack: any)
    {
        document.addEventListener('timerComplete', (e) => callBack());
    }

    public stop()
    {
        if (this._subscription)
        {
            this._subscription.unsubscribe();

            this._subscription = undefined;
        }
    }
}
