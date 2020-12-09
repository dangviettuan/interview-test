export type SeatStatus =
  | 'empty'
  | 'selected'
  | 'selecting'
  | 'available'
  | 'sold';

export type SeatType = 'standard' | 'vip' | 'deluxe';

export interface FilmTime {
  from?: string;
  to?: string;
  date?: string;
}

export interface RoomSeat {
  status?: SeatStatus;
  type?: SeatType;
}

export interface RoomRow {
  name?: string;
  seats?: RoomSeat[];
}

export interface RoomData {
  filmName?: string;
  room?: string;
  filmType?: string;
  location?: string;
  time?: FilmTime;
  rows?: RoomRow[];
}
