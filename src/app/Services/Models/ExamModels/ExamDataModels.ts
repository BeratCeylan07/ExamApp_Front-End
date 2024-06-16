export interface ExamList {
  id: string;
  exam: string;
  catandpub: string;
}

export interface ExamInList {
  examUID: string;
  examInfo: string;
  catAndPub: string;
  examLocation: string;
}

export interface ExamSession {
  examUID: string;
  examSessionUID: string;
  examInfo: string;
  examCategory: string;
  examPub: string;
  examLocation: string;
}

export interface NewExamModel {
  userid: number;
  sinavKategori: string;
  denemeAdi: string;
  yayinAdi: string;
  yayinLogo: string;
  ucret?: number;
  kitapcikToplam?: number;
  kitapcikAdetMaliyet?: number;
  userID: number;
}

export interface ExamEditModel {
  uid: string;
  isActive: boolean;
  subeid: number;
  denemeAdi: string;
  sinavKategori: string;
  yayinAdi: string;
  yayinLogo: string;
  sinavYeri: string;
  ucret: number;
  kitapcikToplam: number;
  kitapcikAdetMaliyet: number;
  ApplicationuserID: any;
  isCreatedUser: any;
  isCreatedDate: Date;
  isModifiedUser: any;
  isModifiedDate: Date;
}

export interface ExamRecordModel {
  id: number;
  uid: string;
  subeid: number;
  denemeAdi: string;
  sinavKategori: string;
  yayinAdi: string;
  yayinLogo: string;
  ucret: number;
  sinavYeri: string;
  kitapcikToplam: number;
  kitapcikAdetMaliyet: number;
  isCreatedDate: Date;
  isModifiedDate: Date;
  isCreatedUserid: number;
  isModifiedUserid: number;
  isActive: boolean;
  denemeSinaviOturums: any[]; // Burada oturumlar için bir veri yapısı tanımlanabilir
  sube: any; // Şube veri yapısı
}

export interface ExamSessionStudentListModel {
  sessionSetId: number;
  sessinSetUID: string;
  isCreatedDate: Date;
  isActive: boolean;
  status: number;
  student: any[];
  session: any[];
}
export interface StudentYoklamaModel {
  studentSessionSetUID: string;
  status: number;
}
export interface ExamSessionRecordModel {
  userID: number;
  oturumNo: number;
  examSessionUID: string;
  sessionDate: Date;
  kontenjan: number;
  toplamKesinKayit: number;
  toplamOnKayit: number;
  toplamKitapcikAlan: number;
  toplamKatilimSaglayan: number;
  toplamDevamsiz: number;
  isActive: boolean;
  isCreatedUser: any;
  isModifiedUser: any;
  isCreatedDate: Date;
  isModifiedDate: Date;
  sessionBilgi: string;
}
