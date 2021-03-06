import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from './member';
import { MEMBERS } from './mock-members';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private messageService: MessageService) { }
  getMembers(): Observable<Member[]> {
    this.messageService.add('MemberService: fetched members');
    return of(MEMBERS);
  }
  getMember(id: number): Observable<Member> {
    this.messageService.add(`MemberService: fetched  member id=${id}`);
    return of(MEMBERS.find(member => member.id === id));
  }
  
}
