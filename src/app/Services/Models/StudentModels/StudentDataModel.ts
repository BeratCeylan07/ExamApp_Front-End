export interface UserListOfExamSeted {
  userUIID: string;
  examSetUID: string;
  studentInfo: string;
  examInfo: string;
  examSetStatus: number;
  examSetDate: Date;
}

export interface UserListModel {
  studentUID: string;
  name: string;
  surname: string;
  phone: string;
}

export interface UserRecordModel {
  studentUID: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
}

// Student Record Model
export interface studentEditModel{
    studentUID: string,
    ad: string,
    soyad: string,
    telefon: string,
    eposta: string,
    userID: number,
    subeID: 1
}

export interface StudentRecordModel {
  ad: string;
  soyad: string;
  telefon: string;
  eposta: string;
  studentUID: string;
  userID: any;
  subeNo: number;
  toplamSinavKayit: number;
  toplamBekleyen: number;
  toplamKatilim: number;
  isCreatedDate: Date;
  isModifiedDate: Date;
  isCreatedUser?: any[];
  isModifiedUser?: any[];
}
export interface NewStudentModel{
  ad: string;
  soyad: string;
  telefon: string;
  eposta: string;
  userID: number;
  subeID: number;
}
export interface StudentExamListModel {
    id: number;
    uid: string | null;
    session: {
      id: number;
      uid: string;
      denemeSinavId: number;
      oturumNo: number;
      tarih: string;
      bilgi: any | null;
      kontenjan: number;
      isCreatedDate: string;
      isModifiedDate: string;
      isCreatedUserid: number;
      isModifiedUserid: number;
      isActive: boolean;
      denemeSinav: any | null;
      userOturumSets: any[];
    };
    examName: string;
    examCat: string;
    examPub: string;
    examAmount: number;
    status: number;
    isCreatedDate: string;
    isModifiedDate: string;
    isCreatedUserid: number;
    isModifiedUserid: number;
    isActive: boolean;
    dogru:number;
    yanlis:number;
    net:number;
  }
  