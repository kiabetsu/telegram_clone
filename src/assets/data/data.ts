export type Data = {
  users: User[];
};

export type User = {
  id: number;
  phone: string;
  confirmCode: string;
  password?: string;
};

export const data: Data = {
  users: [
    //old user
    {
      id: 1,
      phone: '+7 777 777 77 77',
      confirmCode: '12345',
      password: '1234',
    },
    //new user
    {
      id: 2,
      phone: '+7 111 111 11 11',
      confirmCode: '11111',
    },
  ],
};
