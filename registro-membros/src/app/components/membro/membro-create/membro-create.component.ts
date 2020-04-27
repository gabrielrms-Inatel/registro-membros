import { MembroService } from './../membro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membro-create',
  templateUrl: './membro-create.component.html',
  styleUrls: ['./membro-create.component.css']
})
export class MembroCreateComponent implements OnInit {

  constructor(private membroService: MembroService, private router: Router) { }

  ngOnInit(): void {
  }

  createMembro(): void {
    this.membroService.showMessage('Operação realizada!');
  }

  cancel(): void {
    this.router.navigate(['/membros']);
  }
}
