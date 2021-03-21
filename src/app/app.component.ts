import {Component} from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'eko';
  headers = ['ID', 'NAME', 'AGE', 'COUNTRY'];
  ID = '';
  NAME = '';
  AGE = 0;
  COUNTRY = '';
  preferred_color = '';

  rows = [
    {
      ID: '1',
      NAME: 'ATIBA',
      AGE: 21,
      COUNTRY: 'CANADA',
      preferred_color: 'red'
    },
    {
      ID: '2',
      NAME: 'JOSEPH',
      AGE: 32,
      COUNTRY: 'BRAZIL',
      preferred_color: 'green'
    },
    {
      ID: '3',
      NAME: 'ABOUBAKAR',
      AGE: 41,
      COUNTRY: 'GHANA',
      preferred_color: 'black'
    },
    {
      ID: '4',
      NAME: 'VIDA',
      AGE: 36,
      COUNTRY: 'CROATIA',
      preferred_color: 'yellow'
    },
    {
      ID: '5',
      NAME: 'NKODOU',
      AGE: 43,
      COUNTRY: 'NIGERIA',
      preferred_color: 'pink'
    },
    {
      ID: '6',
      NAME: 'SERGEN',
      AGE: 51,
      COUNTRY: 'TURKEY',
      preferred_color: 'brown'
    },
    {
      ID: '7',
      NAME: 'LJAJIC',
      AGE: 31,
      COUNTRY: 'UKRAINE',
      preferred_color: 'white'
    },
    {
      ID: '8',
      NAME: 'QUARESMA',
      AGE: 43,
      COUNTRY: 'BRAZIL',
      preferred_color: 'purple'
    }
  ];


  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  SubmitMembership() {
    this.rows[0].hasOwnProperty('');
    this.rows.push({ID: this.ID, NAME: this.NAME, AGE: this.AGE, COUNTRY: this.COUNTRY, preferred_color: this.preferred_color});
  }

  deleteMembership(index: number) {
    this.rows.splice(index, 1);
  }
}

