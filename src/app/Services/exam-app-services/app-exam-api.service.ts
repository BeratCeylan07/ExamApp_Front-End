import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ExamInList,
  ExamList,
  ExamRecordModel,
  ExamSessionRecordModel,
  ExamSessionStudentListModel,
  StudentYoklamaModel,
} from '../Models/ExamModels/ExamDataModels';
import {
  StudentExamListModel,
  StudentRecordModel,
  UserListModel,
  UserListOfExamSeted,
} from '../Models/StudentModels/StudentDataModel';

@Injectable({
  providedIn: 'root',
})
export class AppExamApiService {
  private _ENDPOINTURL = 'https://localhost:7016/api/';
  public token = localStorage.getItem('_APIToken')?.toString();

  constructor(private _http: HttpClient) {}

  // DashBoard Requests Start
  get_ExamList_For_Dashboard(): Observable<ExamList[]> {
    const headers = { Authorization: 'Bearer ' + this.token };
    return this._http.get<ExamList[]>(
      this._ENDPOINTURL + 'exam/ExamListForDashBoard?subeID=1',
      { headers }
    );
  }
  get_examChartsData() {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');
    return this._http.get<any>(
      this._ENDPOINTURL + 'exam/examCharts?subeID=1',
      { headers }
    );
  }
  get_examScoreOfStudent(studentUID: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');
    return this._http.get<any>(
      this._ENDPOINTURL + 'exam/studentExamScoreChart?studentUID='+studentUID,
      { headers }
    );
  }
  get_examChartsDataDaily() {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');
    return this._http.get<any>(
      this._ENDPOINTURL + 'exam/examCharts?subeID=1&daily='+true,
      { headers }
    );
  }
  get_UserListOfExam_For_Dashboard(): Observable<UserListOfExamSeted[]> {
    const headers = { Authorization: 'Bearer ' + this.token };
    return this._http.get<UserListOfExamSeted[]>(
      this._ENDPOINTURL + 'student/DashBoardStudentList?subeID=1',
      { headers }
    );
  }

  get_ExamList_For_ExamComp() {
    const headers = { Authorization: 'Bearer ' + this.token };
    return this._http.get<ExamInList[]>(
      this._ENDPOINTURL + 'exam/List?subeID=1',
      { headers: headers }
    );
  }

  get_ExamList_For_StudentSetOpt(userUID: string) {
    const headers = { Authorization: 'Bearer ' + this.token };
    return this._http.get<ExamInList[]>(
      this._ENDPOINTURL + 'exam/ExamListWithNotUserSet?userUID=' + userUID,
      { headers: headers }
    );
  }

  get_UserList_For_UserLayer() {
    const headers = { Authorization: 'Bearer ' + this.token };
    return this._http.get<UserListModel[]>(
      this._ENDPOINTURL + 'student/UserList?subeID=1',
      { headers: headers }
    );
  }

  get_TeacherList() {
    const headers = { Authorization: 'Bearer ' + this.token };
    return this._http.get<UserListModel[]>(
      this._ENDPOINTURL + 'teacher/TeacherList?subeID=1',
      { headers: headers }
    );
  }
  get_TeacherSums(teacherUID: string) {
    const headers = { Authorization: 'Bearer ' + this.token };
    return this._http.get<UserListModel[]>(
      this._ENDPOINTURL + 'teacher/TeacherSums?teacherUID='+teacherUID,
      { headers: headers }
    );
  }
  get_TeacherInfo(teacherUID: string) {
    const headers = { Authorization: 'Bearer ' + this.token };
    return this._http.get<UserListModel[]>(
      this._ENDPOINTURL + 'teacher/TeacherInfo?teacherUID='+teacherUID,
      { headers: headers }
    );
  }
  get_UserRecord_Data(userUID: string) {
    const headers = { Authorization: 'Bearer ' + this.token };
    return this._http.get<StudentRecordModel[]>(
      this._ENDPOINTURL + 'student/StudentDetail?UID=' + userUID + '&subeid=1',
      { headers: headers }
    );
  }

  get_RecordOfExam_For_User(userUID: string) {
    const headers = { Authorization: 'Bearer ' + this.token };
    return this._http.get<StudentExamListModel[]>(
      this._ENDPOINTURL + 'exam/SessionListOfExamForStudent?userUID=' + userUID,
      { headers: headers }
    );
  }
  post_Student(studentData: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');

    return this._http.post<any>(
      this._ENDPOINTURL + 'student/NewStudent',
      studentData,
      { headers: headers }
    );
  }
  post_Teacher(studentData: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');

    return this._http.post<any>(
      this._ENDPOINTURL + 'teacher/NewTeacher',
      studentData,
      { headers: headers }
    );
  }
  post_StudentEdit(studentData: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');

    return this._http.post<any>(
      this._ENDPOINTURL + 'student/EditUser',
      studentData,
      { headers: headers }
    );
  }
  post_NewExam(examData: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');

    return this._http.post<any>(this._ENDPOINTURL + 'exam/NewExam', examData, {
      headers: headers,
    });
  }
  post_NewSessionOfExam(examData: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');

    return this._http.post<any>(
      this._ENDPOINTURL + 'exam/NewSessionOfExam',
      examData,
      {
        headers: headers,
      }
    );
  }
  get_ExamRecordData(examUID: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');
      console.log(examUID);
    return this._http.get<any>(
      this._ENDPOINTURL + 'exam/DetailExam?examUID=' + examUID,
      { headers: headers }
    );
  }

  get_ExamSessionRecordData(examSessionUID: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');
    return this._http.get<ExamSessionRecordModel>(
      this._ENDPOINTURL +
        'exam/ExamSessionDetail?examSessionUID=' +
        examSessionUID,
      { headers: headers }
    );
  }

  get_StudentListForSession(examSessionUID: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');
    return this._http.get<any>(
      this._ENDPOINTURL +
        'exam/examUserSetList?examSessionUID=' +
        examSessionUID,
      { headers: headers }
    );
  }

  get_StudentlistInExamSession(examUID: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');
    return this._http.get<ExamSessionStudentListModel[]>(
      this._ENDPOINTURL + 'exam/ExamSessionStudentList?examUID=' + examUID,
      { headers: headers }
    );
  }
  get_ExamSumsData(examUID: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');
    return this._http.get<ExamRecordModel>(
      this._ENDPOINTURL + 'exam/ExamSums?examUID=' + examUID,
      { headers: headers }
    );
  }
  get_SessionListOfExam(examUID: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');
    return this._http.get<ExamSessionStudentListModel[]>(
      this._ENDPOINTURL + 'exam/SessionListOfExam?examUID=' + examUID,
      { headers: headers }
    );
  }
  get_StudentlistNotInExamSession(examUID: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');
    return this._http.get<ExamSessionStudentListModel[]>(
      this._ENDPOINTURL + 'exam/StudentListNotInExam?examUID=' + examUID,
      { headers: headers }
    );
  }
  get_examUID(sessionUID: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');
    return this._http.get<any>(
      this._ENDPOINTURL + 'exam/GetExamUID?sessionUID=' + sessionUID,
      { headers: headers }
    );
  }
  post_StudentExamSet(studentExamSet: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');

    return this._http.post<any>(
      this._ENDPOINTURL +
        `exam/SingleStudentExamSet`,
      studentExamSet,
      {
        headers: headers,
      }
    );
  }
  post_ExamUpdate(examInfo: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');

    return this._http.post<any>(this._ENDPOINTURL + 'exam/EditExam', examInfo, {
      headers: headers,
    });
  }
  post_StudentYoklama(examInfo: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');

    return this._http.post<any>(
      this._ENDPOINTURL + 'exam/sinavYoklama',
      examInfo,
      {
        headers: headers,
      }
    );
  }
  post_SessionUpdate(sessionInfo: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');  
      return this._http.post<any>(
        this._ENDPOINTURL + 'exam/EditSession',
        sessionInfo,
        {
          headers: headers,
        }
      );
    }
  post_Wp(wpModel: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');  
      return this._http.post<any>(
        this._ENDPOINTURL + 'exam/WP_LOG',
        wpModel,
        {
          headers: headers,
        }
      );
  }
  get_Wp_Logs(type: number, uid: string){
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.token)
    .set('Accept', 'text/plain');
  return this._http.get<any>(
    this._ENDPOINTURL + 'exam/wp_logs?type='+type+'&uid='+uid,
    { headers: headers }
  );
  }
  get_Action_Logs(subeID: number, actionUID: string){
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.token)
    .set('Accept', 'text/plain');
  return this._http.get<any>(
    this._ENDPOINTURL + 'logs/getLogList?subeID='+subeID+'&actionuid='+actionUID,
    { headers: headers }
  );
  }
  post_sessionSetScore(scoreModel: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');  
      return this._http.post<any>(
        this._ENDPOINTURL + 'exam/ExamUserScoreSet',
        scoreModel,
        {
          headers: headers,
        }
      );
    }
    get_lessonList(){
      const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');
    return this._http.get<any>(
      this._ENDPOINTURL + 'lesson/lesson_list?subeID=1',
      { headers: headers }
    );
  }
  get_teacher_session_setList(teacherUID: string){
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');
    return this._http.get<any>(
      this._ENDPOINTURL + 'lesson/Teacher_Lesson_Set_List?teacherUID='+teacherUID,
      { headers: headers }
    );
  }
  get_StudentList_Of_Teacher(teacherUID: string){
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');
    return this._http.get<any>(
      this._ENDPOINTURL + 'lesson/StudentList_Of_Teacher_List?teacherUID='+teacherUID,
      { headers: headers }
    );
  }
  post_new_lesson(lesson_model: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token)
      .set('Accept', 'text/plain');  
      return this._http.post<any>(
        this._ENDPOINTURL + 'lesson/new_lesson',
        lesson_model,
        {
          headers: headers,
        }
      );
    }
    get_lesson_detail(lessonUID: string){
      const headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.token)
        .set('Accept', 'text/plain');
      return this._http.get<any>(
        this._ENDPOINTURL + 'lesson/lesson_Detail?lessonUID='+lessonUID,
        { headers: headers }
      );
    }
    get_lesson_session_list(lessonUID: string){
      const headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.token)
        .set('Accept', 'text/plain');
      return this._http.get<any>(
        this._ENDPOINTURL + 'lesson/lesson_session_list?lessonUID='+lessonUID,
        { headers: headers }
      );
    }
    get_lesson_student_list(lessonUID: string){
      const headers = new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.token)
        .set('Accept', 'text/plain');
      return this._http.get<any>(
        this._ENDPOINTURL + 'lesson/lesson_user_set_list?lessonUID='+lessonUID,
        { headers: headers }
      );
    }
}
