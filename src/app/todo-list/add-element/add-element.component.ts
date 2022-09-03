import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {
  @Input()element:string=""
  @Input()indexOfelement:number=0;
  @Output() delete=new EventEmitter<String>();
  @Output() update=new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }
  deletUpdate(index:any,action:string){
    if(action=="Delete")
     this.delete.emit(index)
    else
       this.update.emit(index)
}

}
