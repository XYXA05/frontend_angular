import { trigger, transition, style, animate, keyframes } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    animate('2200ms cubic-bezier(0.25, 0.8, 0.25, 1)', keyframes([
      style({ opacity: 0, transform: 'scale(0.5) rotateY(0deg) translateX(-100%) translateY(0%)', offset: 0 }),
      style({ opacity: 0.5, transform: 'scale(1.2) rotateY(90deg) translateX(15%) translateY(-10%)', offset: 0.5 }),
      style({ opacity: 1, transform: 'scale(1) rotateY(0deg) translateX(0) translateY(0)', offset: 1 })
    ]))
  ])
]);
export const coolTransition = trigger('coolTransition', [
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('1000ms', style({ opacity: 1 }))
  ])
]);
export const routeAnimations = trigger('routeAnimations', [
  // Define a louder animation for the initial page load
  transition('* => *', [
    style({ opacity: 0, transform: 'scale(0.9)' }),
    animate('0.5s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);