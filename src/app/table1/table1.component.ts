import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Datas} from "./data";
import {dataClass} from "./dataClass";
import {dashCaseToCamelCase} from "@angular/compiler/src/util";

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})

export class Table1Component implements OnInit {
  @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any> | undefined
  @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any> | undefined;

  datas = Datas
  createdData: dataClass = new dataClass(0,"",[])

  constructor() {
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.datas = this.datas
  }

  loadTemplate(data: dataClass) {
    console.log(this.createdData)
    if (this.createdData && this.createdData.id === data.id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  edit(data: dataClass) {
    this.createdData = new dataClass(data.id, data.name, data.params)
  }

  delete(data: dataClass) {
    this.datas.pop()
  }

  save() {
    this.datas[this.createdData.id-1] = this.createdData
    this.createdData = new dataClass(0,"",[])
  }

  cancel() {
    this.createdData = new dataClass(0,"",[])
  }

  add() {
    this.datas.push(new dataClass(this.datas.length+1,"",[]))
  }
}

