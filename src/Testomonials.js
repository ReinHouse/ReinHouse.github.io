import React from 'react'
import styles from './Testomonials.css'

function Testomonials() {
  return (
    <div class="body">
<div class="container">
	<div class="row">
		<div class="col-md-8 col-center m-auto">
			<h2 class="testHeader">Testimonials</h2>
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				
				<div class="carousel-inner">
					<div class=" carousel-item active">
						
						<p class="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
						<p class="overview"><b>Jennifer Smith</b>, Office Worker</p>
					</div>
					<div class=" carousel-item">
						
						<p class="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
						<p class="overview"><b>Dauglas McNun</b>, Financial Advisor</p>
					</div>
					<div class=" carousel-item">
					
						<p class="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
						<p class="overview"><b>Hellen Wright</b>, Athelete</p>
					</div>
				</div>
				
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
			</div>
		</div>
	</div>
</div>
</div>
  )
}

export default Testomonials
