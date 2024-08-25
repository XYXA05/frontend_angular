import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
interface DescriptionItem {
  input_term: string;
  namber_build_andsection: string;
}

@Component({
  selector: 'app-input-tern',
  templateUrl: './input-tern.component.html',
  styleUrl: './input-tern.component.scss',
  encapsulation: ViewEncapsulation.Emulated // Default
})
export class InputTernComponent implements OnInit{
  @Input() getMethodDescriptio: any;
  id: string | null = null;

  public jsonDataDescription: DescriptionItem[] = [];
  public uniqueTerms: { input_term: string, sections: string[] }[] = [];
  @Output() selectedTerm = new EventEmitter<string | null>();
  @Output() selectedHouse = new EventEmitter<string | null>();


  constructor(private http: HttpClient, private route: ActivatedRoute, private translate: TranslateService) { 
    this.translate.setDefaultLang('en');
    // Optionally, use browser language as default
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMethodDescription();
    this.getMethodDescriptio(); // Call this method

  }

  public getMethodDescription() {
    this.http.get<DescriptionItem[]>(`https://usskkwk.mark-build.com/get_descriptions_id/${this.id}`).subscribe((data) => {
      console.log(data);
      this.jsonDataDescription = data;

      // Collect unique terms with all associated sections
      const uniqueMap = new Map<string, string[]>();
      data.forEach(item => {
        const sections = uniqueMap.get(item.input_term) || [];
        sections.push(item.namber_build_andsection);
        uniqueMap.set(item.input_term, sections);
      });

      this.uniqueTerms = Array.from(uniqueMap.entries()).map(([input_term, sections]) => ({ input_term, sections }));
    });
  }
  public onSelectTerm(term: string): void {
    this.selectedTerm.emit(term);
  }
  
  public onSelectHouse(house: string): void {
    this.selectedHouse.emit(house);
  }
}
