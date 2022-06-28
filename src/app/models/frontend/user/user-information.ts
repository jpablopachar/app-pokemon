export interface UserInformation {
  name: string;
  hobby: { id: number, name: string };
  birthday: Date;
  document?: string;
}