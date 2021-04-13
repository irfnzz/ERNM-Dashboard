//table columns
export const columns = [
  {
    name: 'ID',
    selector: 'id',
    width:'45px',
    sortable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Date Created',
    selector: 'date',
    minWidth:'200px',
    maxWidth:'300px',
    sortable: true,
  },
  {
    name: 'Read-Only',
    selector: 'read',
    sortable: true,
  },
  {
    name: 'Create',
    selector: 'create',
    sortable: true,
  },
  {
    name: 'Update',
    selector: 'update',
    sortable: true,
  },
  {
    name: 'Delete',
    selector: 'delete',
    sortable: true,
  },
];

//mock data
export const data = [
  {
    id: 1,
    name: 'Irfan Harith',
    date: '1-Jan-2021 12:15PM',
    read: '\u2714',
    create: '\u2714',
    update: '\u2714',
    delete: '\u2714',
  },
  {
    id: 2,
    name: 'Roman',
    date: '1-Jan-2021 12:15PM',
    read: '\u2714',
    create: '\u2714',
    update: '\u2714',
    delete: '\u2714',
  },
  {
    id: 3,
    name: 'Amira',
    date: '2-Jan-2021 12:15PM',
    read: '\u2714',
    create: '',
    update: '\u2714',
    delete: '\u2714',
  },
  {
    id: 4,
    name: 'Aqilah',
    date: '3-Jan-2021 12:15PM',
    read: '\u2714',
    create: '',
    update: '',
    delete: '\u2714',
  },
  {
    id: 5,
    name: 'Widad',
    date: '4-Jan-2021 12:15PM',
    read: '\u2714',
    create: '',
    update: '',
    delete: '',
  },
];
