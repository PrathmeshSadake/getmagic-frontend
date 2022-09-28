import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Image from "next/image";

export default function HomeCarousel(props) {
  return (
    <Carousel infiniteLoop={true} showThumbs={true} autoPlay={true} showArrows={true}>
        
      <div>
        <Image height={400} width={400} src="https://images.unsplash.com/photo-1548263594-a71ea65a8598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60" />
      </div>
       <div>
        <Image height={400} width={400} src="https://images.unsplash.com/photo-1548222606-6c4f581fd09d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60" />
      </div>
      <div>
        <Image height={400} width={400} src="https://images.unsplash.com/photo-1663938484950-add11caee87e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80" />
      </div>
    </Carousel>
  );
}
