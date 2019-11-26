var postOne = document.querySelector('#postOne')
var postTwo = document.querySelector('#postTwo')

const api = 'https://www.minegard.com.au/wp-json/wp/v2/posts?_embed' 

    fetch(api)
    .then(res => {
        return res.json()
    })
    .then(data => {
              
      function month(a){
        var month = new Array();
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";

            return (month[a]);
      }
      
      postOne.innerHTML=`<div class="row no-gutters">
                          <div class="col-md-4">
                            <img src="${data[0]._embedded["wp:featuredmedia"][0].source_url}" class="card-img" alt="Image Post">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <p class="card-text"><small class="txt-orangered">${month((new Date (data[0].date).getMonth()))} ${new Date(data[0].date).getDay()}, ${new Date(data[0].date).getFullYear()}</small></p>
                              <h5 class="card-title">${data[0].title.rendered}</h5>
                              <p class="card-text">${data[0].excerpt.rendered}</p>
                              <a href="${data[0].link}" class="btn btn-orange" role="button" aria-pressed="true">Read More</a>
                            </div>
                          </div>
                        </div>`

      postTwo.innerHTML = `<div class="row no-gutters">
                            <div class="col-md-8">
                              <div class="card-body text-md-right">
                                <p class="card-text"><small class="txt-orangered">${month((new Date (data[1].date).getMonth()))} ${new Date(data[1].date).getDay()}, ${new Date(data[1].date).getFullYear()}</small></p>
                                <h5 class="card-title">${data[1].title.rendered}</h5>
                                <p class="card-text">${data[1].excerpt.rendered}</p>
                                <a href="${data[1].link}" class="btn btn-orange" role="button" aria-pressed="true">Read More</a>
                              </div>
                            </div>
                            <div class="col-md-4">
                              <img src="${data[1]._embedded["wp:featuredmedia"][0].source_url}" class="card-img" alt="Image Post">
                            </div>
                          </div>`

    }).catch((err) => {console.log(err)})