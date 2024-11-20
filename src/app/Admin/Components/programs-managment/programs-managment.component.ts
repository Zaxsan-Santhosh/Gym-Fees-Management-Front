import { Component } from '@angular/core';

@Component({
  selector: 'app-programs-managment',
  templateUrl: './programs-managment.component.html',
  styleUrl: './programs-managment.component.css'
})
export class ProgramsManagementComponent {

  programs = [
    {
      id: 1,
      name: 'Yoga Basics',
      duration: '4 Weeks',
      level: 'Beginner',
      description: 'A foundational yoga program designed for beginners.',
    },
    {
      id: 2,
      name: 'Strength Training',
      duration: '8 Weeks',
      level: 'Intermediate',
      description: 'A focused strength-building program for intermediate fitness levels.',
    },
    {
      id: 3,
      name: 'HIIT Blast',
      duration: '6 Weeks',
      level: 'Advanced',
      description: 'High-intensity interval training for experienced individuals.',
    },
  ];

  editProgram(id: number) {
    alert(`Edit Program with ID: ${id}`);
    // Add your navigation or modal logic here
  }

  deleteProgram(id: number) {
    const confirmed = confirm('Are you sure you want to delete this program?');
    if (confirmed) {
      this.programs = this.programs.filter((program) => program.id !== id);
    }
  }
}
