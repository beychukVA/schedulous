export interface ProgramTimeslot {
  id?: number | null;
  monday?: boolean | null;
  tuesday?: boolean | null;
  wednesday?: boolean | null;
  thursday?: boolean | null;
  friday?: boolean | null;
  saturday?: boolean | null;
  sunday?: boolean | null;
  hour?: number | null;
  meridiem?: number | null;
  minute?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  accountId?: number | null;
  programId?: number | null;
  _destroy?: boolean | null;
  uniqueId: string | null;
}

export interface Program {
  id?: number;
  accountId: number | null;
  capacity: number | null;
  duration: number | null;
  description: string | null;
  image: string | null;
  name: string | null;
  startDate: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  frequency: string | null;
  programTimeslots: ProgramTimeslot[];
}
