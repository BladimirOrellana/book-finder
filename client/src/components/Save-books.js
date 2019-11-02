import React from 'react';

const SavedBooks = () =>{
    return (
        <div className="container-fluid save-books-container">
        <div className="row">
          <div className="col-sm-12 col-md-9">
            <div className="media">
              <div className="media-body">
                <h5 className="mt-0 mb-1">Media object</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
              <img src="..." className="ml-3" alt="..." />
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className="card bg-dark text-white">
              <img src="..." className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default SavedBooks;