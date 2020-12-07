import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { MessageService } from "./messages/message.service";
import { Message } from "./messages/message.model";

@Injectable()
export class TermsGuard {
  constructor(private messages: MessageService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    if (route.params["mode"] == "create") {
      return new Promise<boolean>((resolve, reject) => {
        let responses: [[string, (string) => void], [string, (string) => void]] = [
          ["Tak", () => { resolve(true) }],
          ["Nie", () => {
            //this.router.navigateByUrl(this.router.url);
            resolve(false);
          }]
        ];
        this.messages.reportMessage(new Message("Akceptujesz warunki?", false, responses));
      })
    } else {
      return true;
    }

  }
}
