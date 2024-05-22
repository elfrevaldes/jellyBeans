import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[appReqField]'
})

export class ReqFieldDirective {
    @Input('errorMessage') warningMessage: string = 'This field is required dude';

    constructor(private theEle: ElementRef) {}

    @HostListener('blur') onBlur() {
        // get reference from the element
        const htmlElement: HTMLInputElement = this.theEle.nativeElement;
        // does it have content
        if (!htmlElement.value.trim()) {
            this.addErrorMessage();
        }
        else {
            this.removeErrorMessage();
        }
    }
    ngOnInit(): void {
        this.theEle.nativeElement.setAttribute('required', 'true');
    }

    private addErrorMessage() {
        const htmlElement: HTMLInputElement = this.theEle.nativeElement;
        const errorElement = htmlElement.nextSibling as HTMLElement | null;
        // We do not want to re-add the message again and again
        if (!(errorElement != null && errorElement.classList.contains('warning-message'))) {
            htmlElement.classList.add('warning');
            const elemToAdd = document.createElement('div');
            elemToAdd.textContent = this.warningMessage;
            elemToAdd.classList.add('warning-message');
            elemToAdd.classList.add('p-error');
            htmlElement.parentNode!.insertBefore(elemToAdd, htmlElement.nextSibling);
        }
    }

    private removeErrorMessage() {
        const htmlElement: HTMLInputElement = this.theEle.nativeElement;
        htmlElement.classList.remove('warning');
        const errorElement = htmlElement.nextSibling as HTMLElement;
        if (errorElement && errorElement.classList.contains('warning-message')) {
            errorElement.parentNode!.removeChild(errorElement);
        }
    }
}