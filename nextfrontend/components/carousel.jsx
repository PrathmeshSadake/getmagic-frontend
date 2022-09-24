import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Image from "next/image";

export default function HomeCarousel(props) {
  return (
    <Carousel infiniteLoop={true} showThumbs={true} autoPlay={true} showArrows={true}>
        
      <div>
        <Image height={400} width={400} src="https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" />
      </div>
       <div>
        <Image height={400} width={400} src="https://images.unsplash.com/photo-1602545165103-f1f9cb2b4c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      </div>
      <div>
        <Image height={400} width={400} src="https://images.unsplash.com/photo-1663938484950-add11caee87e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      </div>
      {/* <div>
        <Image height={400} width={400} src="https://www.pexels.com/photo/sliced-bread-with-white-cream-on-white-ceramic-plate-13636706/" />
        <p className="legend">Legend 2</p>
      </div> */}
    </Carousel>
  );
}
