declare module "lean-qr" {
    export class RGBA {
      constructor(r: number, g: number, b: number, a: number);
    }
  
    export function generate(
      text: string,
      options?: {
        color?: RGBA;
        background?: RGBA;
        size?: number;
        margin?: number;
      }
    ): string;
  }
  