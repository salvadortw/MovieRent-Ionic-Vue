export interface Purchase {
    movieId: number;
    movieTitle: string;
    type: 'buy' | 'rent';
    hours: number | string;
    price: number;
}