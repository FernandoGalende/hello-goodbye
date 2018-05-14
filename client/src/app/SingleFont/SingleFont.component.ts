import { Component, OnInit } from "@angular/core";
import { FontsService } from "../Services/fonts.service";
import { FontInterface } from "../interfaces/font-Interface";
import { ActivatedRoute } from "@angular/router";
import { SessionService } from "./../Services/session.service";
import { promised } from "q";
import { FontInUseService } from "./../Services/fontInUse.service";

@Component({
  selector: "app-SingleFont",
  templateUrl: "./SingleFont.component.html",
  styleUrls: ["./SingleFont.component.css"],
  providers: [FontsService, SessionService, FontInUseService]
})
export class SingleFontComponent implements OnInit {
  font: any = {};
  fontUses: any = {};

  constructor(
    private route: ActivatedRoute,
    private fontS: FontsService,
    private fontInUseS: FontInUseService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fontS.getFont(params["id"]).subscribe(data1 => {
        console.log(data1)
        this.font = data1;
        this.fontInUseS.getFontInUse(this.font.name).subscribe(data2 => {
          console.log("---->>>")
          console.log(data2)
          this.fontUses = data2;
        });
      });
    });
  }
}
