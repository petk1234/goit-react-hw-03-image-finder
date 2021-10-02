import React from "react";
import ImageGalleryItem from './ImageGalleryItem.js';
export default function ImageGallery({searches}){
    return (
        <ul>
               {
                   searches.map( search =>
                      (
                          <ImageGalleryItem 
                              key = {search.id}
                              webformatURL ={search.webformatURL}
                              largeImage = {search.largeImageURL}
                              className="ImageGallery"
                          />
                      )
                   )
               }
        </ul>
    )
}