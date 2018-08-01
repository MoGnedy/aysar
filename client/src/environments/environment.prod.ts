export const environment = {
  production: true
};

export let users = [
  {
    id: '1',
    name: 'Mohamed',
    email: 'mohamed@email.com',
    phone: '010',
    password: '123456',
    nationalId: '000'
  },
  {
    id: '2',
    name: 'Ibrahim',
    email: 'ibrahim@email.com',
    phone: '011',
    password: '123456',
    nationalId: '111'
  },
  {
    id: '3',
    name: 'Iman',
    email: 'iman@email.com',
    phone: '012',
    password: '123456',
    nationalId: '222'
  },
  {
    id: '4',
    name: 'Amjad',
    email: 'amjad@email.com',
    phone: '013',
    password: '123456',
    nationalId: '333'
  }
];

export let items = [
  {
    images: [],
    title: 'Bathroom 1',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    price: '100',
    type: '1',
    userId: '1'
  },
  {
    images: [],
    title: 'Appartment 1',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    price: '500',
    type: '0',
    userId: '1'
  },
  {
    images: [],
    title: 'Appartment',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    price: '300',
    type: '0',
    userId: '2'
  },
  {
    images: [],
    title: 'Bathroom 2',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    price: '200',
    type: '1',
    userId: '3'
  },
  {
    images: [],
    title: 'Appartment',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    price: '',
    type: '0',
    userId: '4'
  }
];

export const types = {
  0: 'Appartment',
  1: 'Bathroom'
};

export let user = {
  isAuthenticated: false,
  data: {}
};
