import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// random user display
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type Users = {
//   id: string;
//   avatar: string;
//   name: string;
// };

interface Users {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // Input & Output Decorators
  // Object type Input
  @Input({ required: true }) user!: Users;

  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Output() select = new EventEmitter();

  // output function
  // select = output<string>();

  get imagePath() {
    return 'users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  /////////////////////// Signals /////////////////
  //   avatar = input.required<string>();
  //   name = input.required<string>();

  //   imagePath = computed(() => {
  //     return 'image/users/' + this.avatar();
  //   });

  ///////////////// Other //////////////////
  // selectedUser = DUMMY_USERS[randomIndex];

  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // imagePath = computed(() => 'image/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return 'image/users/' + this.selectedUser.avatar;
  // }

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   // this.selectedUser = DUMMY_USERS[randomIndex];
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
}
