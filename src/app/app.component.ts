import { Component, VERSION } from "@angular/core";
import { todo} from "./todo";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  me: string = "Ayush Shah";
  todoVal : string;
  list: todo[];
 ngOnInit(){
   this.list =[]
   this.todoVal = null;
 }

 addItem(){
   if(this.todoVal!==null){
     const item : todo ={
      id:this.list.length+1,
      value: this.todoVal,
      isDone : false
     }
     this.list.push(item);
   }
 }

 deleteItem(id : number){
   
 }
}
