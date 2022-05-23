export type Car = {
    id: string;
    ownerId: User;
    maxRange: number;
    odometer: number;
    name: string;
    colour: string;
    type: CarTypeEnum;
    tank: number;
    users: User[];
    trips: Trip[];
    reservations: Reservation[];
    transactions: Transaction[];
    percentages: PercentageUser[]
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
    user: User;
}
export type Transaction = {
    id: string;
    user: User;
    liters: number;
    date: Date;
    amount: number;
}
export type Trip = {
    id: string;
    distance: number;
    date: Date;
    user: User;
}

export type PercentageUser = {
    id: string;
    user: User;
    percentage: number;
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