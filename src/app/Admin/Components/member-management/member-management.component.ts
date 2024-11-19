import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrl: './member-management.component.css'
})
export class MemberManagementComponent implements OnInit {


  members: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.http.get<any[]>('https://api.example.com/members').subscribe(
      (data: any[]) => {
        this.members = data;
      },
      (error: any) => {
        console.error('Error fetching members', error);
      }
    );
  }

  editMember(member: any): void {
    // Logic for editing the member
    console.log('Edit member:', member);
  }

  deleteMember(memberId: number): void {
    if (confirm('Are you sure you want to delete this member?')) {
      this.http.delete(`https://api.example.com/members/${memberId}`).subscribe(
        () => {
          this.members = this.members.filter((member) => member.id !== memberId);
        },
        (error: any) => {
          console.error('Error deleting member', error);
        }
      );
    }
  }
}
