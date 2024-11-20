import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrl: './member-management.component.css'
})
export class MemberManagementComponent  {


   // Sample data for members
   members = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
    { id: 3, name: 'Tom Hardy', email: 'tom@example.com', role: 'Viewer' },
  ];

  editMember(id: number) {
    alert(`Edit Member with ID: ${id}`);
    // Add your navigation or modal logic here
  }

  deleteMember(id: number) {
    const confirmed = confirm('Are you sure you want to delete this member?');
    if (confirmed) {
      this.members = this.members.filter((member) => member.id !== id);
    }
  }
  // members: any[] = [];

  // constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.getMembers();
  // }

  // getMembers(): void {
  //   this.http.get<any[]>('https://api.example.com/members').subscribe(
  //     (data: any[]) => {
  //       this.members = data;
  //     },
  //     (error: any) => {
  //       console.error('Error fetching members', error);
  //     }
  //   );
  // }

  // editMember(member: any): void {
  //   // Logic for editing the member
  //   console.log('Edit member:', member);
  // }

  // deleteMember(memberId: number): void {
  //   if (confirm('Are you sure you want to delete this member?')) {
  //     this.http.delete(`https://api.example.com/members/${memberId}`).subscribe(
  //       () => {
  //         this.members = this.members.filter((member) => member.id !== memberId);
  //       },
  //       (error: any) => {
  //         console.error('Error deleting member', error);
  //       }
  //     );
  //   }
  // }
}
