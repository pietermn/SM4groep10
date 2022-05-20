export type Car = {
    id: string;
    ownerId: User;
    maxRange: number;
    name: string;
    colour: string;
    type: CarTypeEnum;
    tank: number;
    users: User[];
    trips: Trip[];
    reservations: Reservation[];
    transactions: Transaction[];
  };

export type User = {
    id: string;
    name: string;
    colour: string;
    firebaseId: number;
};

export type Reservation = {
    id: string;
    startDate: Date;
    endDate: Date;
}
export type Transaction = {
    id: string;
    liters: number;
    date: Date;
    amount: number;
}
export type Trip = {
    id: string;
    distance: number;
    date: Date;
}
export enum CarTypeEnum  {
    bmw2022sideview = 'bmw2022sideview',
    minicooperside = 'minicooperside',
    porschetaycan = 'porschetaycan'
    
};
export enum CarStatus {
    'Currently reserved',
    'Currently available'
}
