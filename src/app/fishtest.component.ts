import {Component} from "@angular/core";

@Component({
  templateUrl: `app.component.html`
})
export class FishComponent {
  public pet: Fish | Bird;

  public isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
  }
}

class Bird {
  }
}

class Fish {
  public swim(): string {
    return "blub";
  }
}
