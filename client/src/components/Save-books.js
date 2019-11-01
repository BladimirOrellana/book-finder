import React from 'react';

const SavedBooks = () =>{
    return (
        <div class="container-fluid save-books-container">
        <div class="row">
          <div class="col-sm-12 col-md-9">
            <div class="media">
              <div class="media-body">
                <h5 class="mt-0 mb-1">Media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
              <img src="..." class="ml-3" alt="..." />
            </div>
          </div>
          <div class="col-sm-12 col-md-3">
            <div class="card bg-dark text-white">
              <img src="..." class="card-img" alt="..." />
              <div class="card-img-overlay">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default SavedBooks;