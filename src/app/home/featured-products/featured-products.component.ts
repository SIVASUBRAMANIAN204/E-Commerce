import { Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent {
  ngOnInit(){
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(".Featured_Title ",{
      y:100,
      // duration:4,
      opacity:0,
      
    },{
      scrollTrigger:{
        trigger:".Featured_Title ",
        start:"top 100%",
        end:"center 100%",
        // markers:true,
        toggleActions:'play none reverse',
        scrub:3

      },
      y:0,
      ease:'ease',
      opacity:1,
      stagger:0.3,
      overflow:'hidden',
    })

    gsap.fromTo(".Product ",{
      y:100,
      // duration:4,
      opacity:0,
      
    },{
      scrollTrigger:{
        trigger:".Product ",
        start:"top 90%",
        end:"+=200 90%",
        // markers:true,
        toggleActions:'play none reverse',
        scrub:3

      },
      y:0,
      ease:'ease',
      opacity:1,
      stagger:0.3,
      overflow:'hidden',
    })
  }
}
