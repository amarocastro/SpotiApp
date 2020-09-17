import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitazer: DomSanitizer){}

  transform(value: string): any {

    const url = 'https://open.spotify.com/embed?uri=';

    return this.domSanitazer.bypassSecurityTrustResourceUrl(url + value);
  }

}