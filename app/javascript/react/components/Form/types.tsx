import { FormState } from 'final-form';

export type IFormState = FormState<any>;

export interface IFormArrayFields<T> {
  map: (cb: (name: string, index: number) => any) => any[];
  move: (from: number, to: number) => void;
  push: (value: T | undefined) => void;
  remove: (index: number) => void;
  value: T[];
  length: number;
  name: string;
}
