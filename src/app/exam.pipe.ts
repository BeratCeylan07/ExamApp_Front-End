import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exam',
  standalone: true,
})
export class ExamPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 1:
        return 'Yoklama Bekleniyor';
      case 2:
        return 'Katılım Sağladı';
      case 3:
        return 'Kitapçık Aldı';
      case 4:
        return 'Devamsız';
      case 0:
        return 'Ön Kayıt';
      default:
        return 'Kayıt Durumu Bulunamadı';
    }
  }
}
