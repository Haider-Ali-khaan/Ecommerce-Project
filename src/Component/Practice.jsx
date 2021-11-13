import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function Practice(props) {
	const options={
		responsiveClass:true,
		 items:5,
		  stagePadding:0,
		   mergeFit:true,
		    loop:true,
			 margin:10,
			 autoplay:true,
			  autoplayTimeout:2000,
			   autoplayHoverPause:true,
	responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
}
	return (
		<>
		
			<OwlCarousel  {...options}> 
				<div class='item'>
					<img src="assets/images/products/tools_equipment_7.jpg" alt="" />
				</div>
				<div class='item'>
					<img src="assets/images/products/tools_equipment_7.jpg" alt="" />
				</div>
				<div class='item'>
					<img src="assets/images/products/tools_equipment_7.jpg" alt="" />
				</div>
				<div class='item'>
					<img src="assets/images/products/tools_equipment_7.jpg" alt="" />
				</div>
				<div class='item'>
					<img src="assets/images/products/tools_equipment_7.jpg" alt="" />
				</div>
				<div class='item'>
					<img src="assets/images/products/tools_equipment_7.jpg" alt="" />
				</div>
				<div class='item'>
					<img src="assets/images/products/tools_equipment_7.jpg" alt="" />
				</div>
				<div class='item'>
					<img src="assets/images/products/tools_equipment_7.jpg" alt="" />
				</div>
				<div class='item'>
					<img src="assets/images/products/tools_equipment_7.jpg" alt="" />
				</div>
				<div class='item'>
					<img src="assets/images/products/tools_equipment_7.jpg" alt="" />
				</div>
				<div class='item'>
					<img src="assets/images/products/tools_equipment_7.jpg" alt="" />
				</div>
			</OwlCarousel>;
		</>
	);
}
