import { AfterViewInit, Component, Renderer2, ViewEncapsulation } from '@angular/core';
declare var ApexCharts: any;

@Component({
  selector: 'app-grafic0',
  templateUrl: './grafic0.component.html',
  styleUrl: './grafic0.component.scss',
  encapsulation: ViewEncapsulation.Emulated // Default

})
export class Grafic0Component implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.loadScript('https://cdn.jsdelivr.net/npm/apexcharts').then(() => {
      this.loadScript('https://apexcharts.com/samples/assets/stock-prices.js').then(() => {
        this.initializeChart();
      });
    });
  }

  loadScript(src: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const script = this.renderer.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.async = false;
      script.onload = () => {
        resolve();
      };
      script.onerror = (error: any) => {
        reject(error);
      };
      this.renderer.appendChild(document.head, script);
    });
  }

  initializeChart() {
    var options = {
      series: [
        {
          data: [10, 20, 15, 30, 35, 30, 45, 59, 30, 35, 25, 29, 15]
        }
      ],
      chart: {
        type: "area",
        width: 600,
        height: 350,
        background: "#19191E",
        dropShadow: {
          enabled: true,
          color: "#000"
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        colors: ["#FFFFFF"]
      },
      stroke: {
        curve: "smooth",
        width: 3,
        fill: {
          type: "gradient",
          gradient: {
            type: "horizontal",
            colorStops: [
              [
                {
                  offset: 0,
                  color: "#0085FF",
                  opacity: 1
                },
                {
                  offset: 33,
                  color: "#FF2E92",
                  opacity: 1
                },
                {
                  offset: 80,
                  color: "#FFAC2F",
                  opacity: 1
                },
                {
                  offset: 99,
                  color: "#FFFFFF",
                  opacity: 1
                }
              ]
            ]
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          type: "vertical",
          colorStops: [
            [
              {
                offset: 0,
                color: "#F48116",
                opacity: 1.0
              },
              {
                offset: 70,
                color: "#6510F8",
                opacity: 0.2
              },
              {
                offset: 97,
                color: "#6510F8",
                opacity: 0.0
              }
            ]
          ]
        }
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: "#aaa"
          }
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      grid: {
        borderColor: "#222226"
      },
      legend: {
        horizontalAlign: "left"
      },
      theme: {
        mode: "dark"
      }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }
}