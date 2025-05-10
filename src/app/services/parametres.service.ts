import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParametresService {

  // private apiUrl = 'http://localhost:8006/api/user';
  // private sessionTimer: any;
  // private activityTimeout: any;
  // private readonly USER_KEY = 'user';
  // private userSubject: BehaviorSubject<any>;
  // public user: Observable<any>;

  // constructor(private http: HttpClient, private router: Router) {
  //   this.userSubject = new BehaviorSubject<any>(null);
  //   this.user = this.userSubject.asObservable();

  //   const storedUser = this.loadUser();
  //   if (storedUser) {
  //     this.userSubject.next(storedUser);
  //     this.checkSession();
  //   }

  //   if (typeof window !== 'undefined') {
  //     ['click', 'keypress'].forEach(event =>
  //       window.addEventListener(event, () => this.debouncedUpdateActivity())
  //     );
  //   }
  // }

  // private loadUser(): any {
  //   try {
  //     const storedUser = localStorage.getItem(this.USER_KEY);
  //     return storedUser ? JSON.parse(storedUser) : null;
  //   } catch (e) {
  //     console.error('Erreur lors du chargement de l\'utilisateur :', e);
  //     this.clearUserData();
  //     return null;
  //   }
  // }

  // private clearUserData(): void {
  //   localStorage.removeItem(this.USER_KEY);
  //   if (this.userSubject) {
  //     this.userSubject.next(null);
  //   }
  //   this.stopSessionTimer();
  // }

  // private saveUser(user: any): void {
  //   localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  //   this.userSubject.next(user);
  // }

  // private checkSession(): void {
  //   const user = this.userValue;
  //   if (!user) return;

  //   const lastActivity = user.lastActivity || 0;
  //   if (Date.now() - lastActivity > 24 * 60 * 60 * 1000) {
  //     this.logout();
  //   } else {
  //     this.startSessionTimer();
  //   }
  // }

  // private startSessionTimer(): void {
  //   if (this.sessionTimer) clearInterval(this.sessionTimer);
  //   this.sessionTimer = setInterval(() => this.logout(), 24 * 60 * 60 * 1000);
  // }

  // private stopSessionTimer(): void {
  //   if (this.sessionTimer) {
  //     clearInterval(this.sessionTimer);
  //     this.sessionTimer = null;
  //   }
  // }

  // private debouncedUpdateActivity(): void {
  //   if (this.activityTimeout) clearTimeout(this.activityTimeout);
  //   this.activityTimeout = setTimeout(() => this.updateActivity(), 1000);
  // }

  // private updateActivity(): void {
  //   if (this.userValue) {
  //     const user = { ...this.userValue, lastActivity: Date.now() };
  //     this.saveUser(user);
  //     this.startSessionTimer();
  //   }
  // }

  // public get userValue() {
  //   return this.userSubject?.value;
  // }

  // login(email: string, password: string) {
  //   const body = { email, password };
  //   return this.http.post(`${this.apiUrl}/login`, body).pipe(
  //     map((response: any) => {
  //       if (response && response.user) {
  //         const userWithDefaults = {
  //           ...response.user,
  //           lastActivity: Date.now(),
  //           settings: response.user.settings || {
  //             emailNotifications: true,
  //             language: 'fr'
  //           }
  //         };
  //         this.saveUser(userWithDefaults);
  //         this.startSessionTimer();
  //         return response;
  //       }
  //       throw new Error('Réponse invalide du serveur');
  //     })
  //   );
  // }

  // logout() {
  //   this.clearUserData();
  //   this.router.navigate(['/login']);
  // }

  // isLoggedIn(): boolean {
  //   return !!this.userValue;
  // }

  // getRole(): string {
  //   return this.userValue?.role || '';
  // }

  // getDashboardUrl(): string {
  //   const role = this.getRole().toLowerCase();
  //   switch (role) {
  //     case 'admin':
  //       return '/admin-dashboard';
  //     case 'manager':
  //       return '/manager-dashboard';
  //     default:
  //       return '/user-dashboard';
  //   }
  // }

  // getCurrentUser(): any {
  //   return this.userValue;
  // }

  // updateUserSettings(updatedUser: any): Observable<any> {
  //   if (!updatedUser || !updatedUser.idUser) {
  //     return new Observable(observer => {
  //       observer.error('Utilisateur introuvable');
  //     });
  //   }

  //   const updateData = {
  //     prenomUser: updatedUser.prenomUser,
  //     nomUser: updatedUser.nomUser,
  //     emailUser: updatedUser.emailUser,
  //     telUser: updatedUser.telUser,
  //     adresseUser: updatedUser.adresseUser,
  //     role: updatedUser.role,
  //     passwordUser: updatedUser.passwordUser
  //   };

  //   return this.http.put(`${this.apiUrl}/${updatedUser.idUser}`, updateData).pipe(
  //     map((response: any) => {
  //       if (response) {
  //         const updatedUserData = {
  //           ...this.userValue,
  //           ...response
  //         };
  //         this.saveUser(updatedUserData);
  //         return updatedUserData;
  //       }
  //       throw new Error('Réponse invalide du serveur');
  //     })
  //   );
  // }
}
