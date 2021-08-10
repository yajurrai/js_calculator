// Button Class ;)
export class Button {
  private cssClass: string;
  private cssClass2: any;
  private content: string;
  public button: any;

  constructor(cssClass: string, cssClass2: any, content: string) {
    this.cssClass = cssClass;
    this.cssClass2 = cssClass2;
    this.content = content;
    this.button = document.createElement('button');

    this.button.classList.add(this.cssClass);
    this.button.classList.add(this.cssClass2);
    this.button.innerHTML = this.content;

    return this.button;
  }
}
