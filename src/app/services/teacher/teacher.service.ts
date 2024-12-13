import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../../types/models';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl = 'http://localhost:8000/professors';

  constructor(
    private http: HttpClient,
  ) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || ''}`,
    });
  }

  getTeachers() {
    return this.http.get<Teacher[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  getTeacherById(id: number) {
    return this.http.get<Teacher>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  addTeacher(teacher: Teacher) {
    return this.http.post<Teacher>(this.apiUrl, teacher, { headers: this.getHeaders() });
  }

  updateTeacher(teacher: Teacher) {
    return this.http.put<Teacher>(`${this.apiUrl}/${teacher.id}`, teacher, { headers: this.getHeaders() });
  }

  deleteTeacher(id: number) {
    return this.http.delete<Teacher>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
