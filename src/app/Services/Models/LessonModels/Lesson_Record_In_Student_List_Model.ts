export interface LessonRecordInStudentListModel{
    student:student;
    oturum:oturum;
    kayitDate: Date;
}


export interface student{
    ad:string;
    soyad:string;
}

export interface oturum{
    tarih: Date;
    baslangic: Date;
    bitis: Date;
}