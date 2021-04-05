import {RedmineUser} from "./redmine-user";

export class CustomCardUserModel {

  username: string

  constructor(
    public user: RedmineUser,
    public label: string
  ) {
    this.username = this.getUsername()
  }

  getUsername(): string {
    return `${this.user.firstname} ${this.user.lastname}`
  }

}