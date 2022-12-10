import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent {
  @Input() className!:string;
  @Input() label!:string;
  @Output() NewItemEvent = new EventEmitter<string>();

  onAddNewItem(item:string): void{
    this.NewItemEvent.emit(item);
  }
  counterRender(): Boolean {
  console.log('Render Del Form');
    return true;
  }
}
