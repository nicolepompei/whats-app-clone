import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/SERVICES/api.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  chats: any[] = [];
  messages: any[] = [];
  date: number;
  createdDate: number;

  constructor(private navCtl: NavController,
    private api: ApiService) { }

  ngOnInit() {
    this.getAllChats();
  }
  
  selectChat(chat: any){
    let navigationExtra: NavigationExtras ={
      state:{
        chat: chat
      }
    }
    this.navCtl.navigateForward('messages', navigationExtra);
  }

  getAllChats(){
   this.api.getChats()
    .subscribe(resp => {
      this.chats = resp;
    });
  }
  getLastMessage(index: number){
    this.messages = this.chats[index].messages;
    if(this.messages.length == 0) return '';
    return this.messages[this.messages.length - 1].message;
    
  }

  getLastMessageTime(index: number){
    this.messages = this.chats[index].messages;
    if(this.messages.length == 0) return '';
    return this.date = this.messages[this.messages.length - 1].time;

  }

  
  

}
