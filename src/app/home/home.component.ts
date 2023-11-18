import { Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  ngOnInit(){
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.fromTo(".About_Image ",{
      x:-300,
      duration:1.5,
      opacity:0,
      
    },{
      scrollTrigger:{
        trigger:".About_Image ",
        start:"top 80%",
        end:"center 90%",
        // markers:true,
        toggleActions:'play none reverse',
        scrub:2

      },
      x:0,
      opacity:1,
      // duration:1.6
      overflow:'hidden',
    })
// 
    gsap.fromTo(".About_Content ",{
      x:200,
      // display:'none',
      duration:1,
      opacity:0,
      overflow:'hidden',
      scrollBehavior:'smooth'
      
    },{
      scrollTrigger:{
        
        trigger:".About_Content ",
        start:"top 80%",
        end:"center 80%",
        // markers:true,
        toggleActions:'play none reverse',
        scrub:2

      },
      x:0,
      opacity:1,
      overflow:'hidden',
      // duration:1,
      // display:'block',
    })
  }
}
