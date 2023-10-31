import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private auth: Auth) {
    }
    register({ email, password }: any) {
        return createUserWithEmailAndPassword(this.auth, email, password)

    }

    login({ email, password }: any) {
        return signInWithEmailAndPassword(this.auth, email, password)

    }

    logout() {
        return signOut(this.auth);

    }
    getCurrentUser(): Promise<User | null> {
        return new Promise((resolve) => {
            // Comprueba si hay un usuario actualmente autenticado
            this.auth.onAuthStateChanged((user) => {
                resolve(user); // Devuelve el usuario o null si no está autenticado
            });
        });
    }
}