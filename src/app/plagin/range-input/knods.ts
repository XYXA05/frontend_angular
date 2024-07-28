class Knobs {
    constructor(settings: any) {
      this.init(settings);
    }
  
    init(settings: any): void {
      const container: HTMLElement | null = settings.CSSVarTarget;
      if (!container) return;
  
      settings.knobs.forEach((knob: any) => {
        if (typeof knob === 'string') {
          this.addTitle(container, knob);
        } else {
          this.addKnob(container, knob);
        }
      });
    }
  
    addTitle(container: HTMLElement, label: string): void {
      const title = document.createElement('div');
      title.innerHTML = label;
      container.appendChild(title);
    }
  
    addKnob(container: HTMLElement, knob: any): void {
      const { cssVar, label, type, ...params } = knob;
  
      const knobContainer = document.createElement('div');
      knobContainer.classList.add('knob-container');
  
      const knobLabel = document.createElement('label');
      knobLabel.innerHTML = label;
      knobContainer.appendChild(knobLabel);
  
      let inputElement: HTMLInputElement | null = null;
      switch (type) {
        case 'range':
          inputElement = document.createElement('input');
          inputElement.type = 'range';
          inputElement.min = params.min;
          inputElement.max = params.max;
          inputElement.value = params.value || params.min;
          inputElement.addEventListener('input', function(this: HTMLInputElement, event: Event) {
            container.style.setProperty(`--${cssVar[0]}`, `${this.value}${cssVar[1] || ''}`);
          });
          break;
        case 'color':
          inputElement = document.createElement('input');
          inputElement.type = 'color';
          inputElement.value = params.value || '#000000';
          inputElement.addEventListener('input', function(this: HTMLInputElement, event: Event) {
            container.style.setProperty(`--${cssVar[0]}`, this.value);
          });
          break;
        case 'checkbox':
          inputElement = document.createElement('input');
          inputElement.type = 'checkbox';
          inputElement.checked = params.value === 'none';
          inputElement.addEventListener('change', function(this: HTMLInputElement, event: Event) {
            const value = this.checked ? 'none' : '';
            container.style.setProperty(`--${cssVar[0]}`, value);
          });
          break;
      }
  
      if (inputElement) {
        knobContainer.appendChild(inputElement);
        container.appendChild(knobContainer);
      }
    }
  }
  
  export default Knobs;
  