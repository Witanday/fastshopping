import React from 'react'
import Header from './Header';
export default function Profile() {
    return (
        <div>
<Header />
<div class="container profile">
  <div class="row">
    <div class="col-md-6 img">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzOpl3-kqfNbPcA_u_qEZcSuvu5Je4Ce_FkTMMjxhB-J1wWin-Q"  alt="" class="img-rounded"/>
    </div>
    <div class="col-md-6 details">
      <blockquote>
        <h5>Fiona Gallagher</h5>
        <small><cite title="Source Title">Chicago, United States of America  <i class="icon-map-marker"></i></cite></small>
      </blockquote>
      <div>
        <p>fionagallager@shameless.com</p> 
        <p>www.bootsnipp.com</p> 
        <p>June 18, 1990</p>
      </div>
    </div>
  </div>
</div>


<footer class="container">
  <p>&copy; Company 2017-2019</p>
</footer>
</div>
    )
}
