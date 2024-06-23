export interface lessonRecordModel {
    id: number;
    uid: string;
    dersid: number;
    teacherid: number;
    tarih: string;
    baslangic: string;
    bitis: string;
    isCreatedUserId: number;
    isCreatedUser?: User;
    isCreatedDate: string;
    isModifiedUserId: number;
    isModifiedUser?: User;
    isModifiedDate: string;
    isActive: boolean;
    ders?: Ders;
    dersOturumUserSets: any[];
    teacher?: Teacher;
  }

  export interface Teacher {
    id: number;
    uid: string;
    subeId: number;
    ad: string;
    soyad: string;
    kullaniciAdi: string;
    sifre: string;
    tel: string;
    eposta: string;
    role: number;
    isCreatedDate: string;
    isModifiedDate: string;
    isActive: boolean;
    isCreatedUserid: number;
    isModifiedUserid: number;
    dersOturumSets: any[];
    dersOturumUserSets: any[];
    kullaniciMesajLogs: any[];
    studentOtherInfos: any[];
    sube: any;
    teacherHaftaGunSets: any[];
    userDersSets: any[];
    userOturumSets: any[];
  }

  
  export interface Ders {
    id: number;
    uid: string;
    subeId: number;
    dersAd: string;
    bilgi: string;
    isCreatedUserId: number;
    isCreatedDate: string;
    isModifiedUserId: number;
    isModifiedDate: string;
    isActive: boolean;
    dersOturumSets: any[];
    sube: any;
    userDersSets: any[];
  }

  
  export interface User {
    id: number;
    uid: string;
    subeId: number;
    ad: string;
    soyad: string;
    kullaniciAdi: string;
    sifre: string;
    tel: string;
    eposta: string;
    role: number;
    isCreatedDate: string;
    isModifiedDate: string;
    isActive: boolean;
    isCreatedUserid: number;
    isModifiedUserid: number;
    dersOturumSets: any[];
    dersOturumUserSets: any[];
    kullaniciMesajLogs: any[];
    studentOtherInfos: any[];
    sube: any;
    teacherHaftaGunSets: any[];
    userDersSets: any[];
    userOturumSets: any[];
  }
  