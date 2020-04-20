import { Component, OnInit } from '@angular/core';

import { Member } from '../member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  selectedMember: Member;
  members: Member[];

  constructor(private memberService: MemberService, private messageService: MessageService) { };

  ngOnInit(): void {
    this.getMembers();
  }

  // onSelect(member: Member): void {
  //   this.selectedMember = member;
  //   this.messageService.add(`MessageService: Selected Member id=${member.id}`);
  // }
  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members);
  }



}
