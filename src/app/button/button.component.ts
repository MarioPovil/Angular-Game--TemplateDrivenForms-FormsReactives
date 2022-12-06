import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges, OnDestroy{
@Input() color!: string;
@Input() label!: string;
@Input() selection!: string;
ciudad!: string;
constructor(){

}
ngOnChanges(changes: SimpleChanges): void {
console.log(changes);
}

ngOnInit(): void {
console.log('onInit')
}
ngOnDestroy(): void{
  console.log('destroy')
}
}
