import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   users = DUMMY_USERS;

  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((User) => User.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
