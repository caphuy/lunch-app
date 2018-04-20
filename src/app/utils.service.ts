import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  convertRgbToRgbA(rgb: String, alpha: Number) {
    if (rgb.indexOf('rgba') === -1) {
      const openBracketInd = rgb.indexOf('(');
      const closeBraketInd = rgb.indexOf(')');
      const rgba = 'rgba' + rgb.substring(openBracketInd, closeBraketInd) + ', ' + alpha + ')';
      return rgba;
    }
    return rgb;
  }

  convertRgbAToRgb(rgba: String) {
    if (rgba.indexOf('rgba') !== -1) {
      const openBracketInd = rgba.indexOf('(');
      const closeBraketInd = rgba.indexOf(')');
      const paramsString = rgba.substring(openBracketInd + 1, closeBraketInd);
      const params = paramsString.split(', ');
      const rgb = 'rgb(' + params[0] + ', ' + params[1] + ', ' + params[2] + ')';
      return rgb;
    }
    return rgba;
  }

}
