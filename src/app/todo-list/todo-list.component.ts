import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, Input, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  itemList:string[]=[]
  label_action="Add Item"
  tmref:any
  indx=0

  constructor() { }
  
  AddItem(item:any,label_action:string){
    // console.log(item.value)
      this.tmref=item
      if(label_action=="Add Item")
         this.itemList.push(item.value)
      else 
          this.itemList[this.indx]=item.value
    
    }
  
  
  deleteItem(item:any){
        this.itemList.splice(item,1)
  }

  updateItem(item1:any){
    this.tmref.value=this.itemList[item1]
    this.label_action="Update"
    this.indx=item1
  }

  
  
  
  ngOnInit(): void {
  }

}
