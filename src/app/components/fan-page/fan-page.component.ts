import { Component } from '@angular/core';
import { Fan } from 'src/app/models/fan.model';
import { RandomUserService } from 'src/app/services/random-user.service';

// fan-page.component.ts

@Component({
  selector: "app-fan-page",
  templateUrl: "./fan-page.component.html",
  styleUrls: ["./fan-page.component.css"],
})
export class FanPageComponent  {
  madridFans: Fan[];
  barcelonaFans: Fan[];
  fanName: string;
  fanAge!: number;
  fanCountry: string;
  fanTeam: string;
counter: any;

  constructor(private randomUserService: RandomUserService) {
    
    this.madridFans = [
      new Fan("John Doe", 26, "United States"),
      new Fan("Lucia Martin", 39, "Spain"),
    ];
    this.barcelonaFans = [
      new Fan("Manuel Garcia", 26, "Spain"),
      new Fan("Akira Yamaoka", 39, "Japan"),
    ];

    this.fanName = "";
    // this.fanAge = 0;
    this.fanCountry = "";
    this.fanTeam = "";
  }

  isDisabled(): boolean {
    return (
      this.fanName === "" ||
      this.fanAge === undefined ||
      this.fanAge <= 0 ||
      this.fanCountry === "" ||
      this.fanTeam === ""
    );
  }

  addFan(): void {
    if (this.isDisabled()) {
      alert("Please fill all the fields");
      return;
    }

    if (this.fanTeam === "madrid") {
      this.madridFans.push(new Fan(this.fanName, this.fanAge, this.fanCountry));
    } else {
      this.barcelonaFans.push(
        new Fan(this.fanName, this.fanAge, this.fanCountry)
      );
    }
  }

  addRandomFan(team: string): void{
    this.randomUserService.getRandomUser().subscribe({
      next: (dataResult) => { // Response data
        const name: string = `${dataResult.results[0].name.title} ${dataResult.results[0].name.first} ${dataResult.results[0].name.last}`;
        const age: number = dataResult.results[0].dob.age;
        const country: string = dataResult.results[0].location.country;
        const profilePicture: string = dataResult.results[0].picture.large;

        const randomFan: Fan = new Fan(name, age, country, profilePicture);
        if(team === 'madrid') {
          this.madridFans.push(randomFan);
        } else {
          this.barcelonaFans.push(randomFan);
        }
      },
      error: (error: any) => { // Error response
        console.log(error);
      },
      complete:() =>{
        console.log("Fetching completed");
      }

    });
  }

  removeFan(index: number, team: string): void {
    if (team === "madrid") {
      this.madridFans.splice(index, 1);
    } else {
      this.barcelonaFans.splice(index, 1);
    }
  }
}
