export interface IUser {
  name: string;
  surname: string;
  mail: string;
}

export interface IUserRandom {
  results: {
    name: {
      first: string,
      last: string
    },
    email: string

  }
}
