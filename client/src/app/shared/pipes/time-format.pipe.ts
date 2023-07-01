import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'timeFormat'})
export class TimeFormat implements PipeTransform {
    transform(value: number): string {
        const hours = Math.floor(value / (1000 * 60 * 60));
        value = value % (1000 * 60 * 60); 
        const minutes = Math.floor(value / (1000 * 60));
        value = value % (1000 * 60);
        const seconds = Math.floor(value / 1000);
        
        return `${hours}:${minutes}:${seconds}`;
    }
}