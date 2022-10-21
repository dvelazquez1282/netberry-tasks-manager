export class TextInputComponentConfig {
    id: string;
    label: string;
    rules: any;
    type: TextInputComponentConfigType
}


export enum TextInputComponentConfigType {
    text, 
    email, 
    password,     
  }