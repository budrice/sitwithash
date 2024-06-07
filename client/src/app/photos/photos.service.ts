import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PhotosService {
  private photos = [
    {
      id: 1,
      title: 'walk by the water',
      group: 'walks',
      image: 'boardwalk-01'
    },
    {
      id: 2,
      title: 'walk by the water',
      group: 'walks',
      image: 'boardwalk-02'
    },
    {
      id: 3,
      title: 'walk by the water',
      group: 'walks',
      image: 'boardwalk-03'
    },
    {
      id: 4,
      title: 'walk by the water',
      group: 'walks',
      image: 'boardwalk-04'
    },
    {
      id: 5,
      title: 'walk by the water',
      group: 'walks',
      image: 'boardwalk-05'
    },
    {
      id: 6,
      title: 'walk by the water',
      group: 'walks',
      image: 'boardwalk-06'
    },
    {
      id: 7,
      title: 'walk by the water',
      group: 'walks',
      image: 'boardwalk-07'
    },
    {
      id: 8,
      title: 'walk by the water',
      group: 'walks',
      image: 'boardwalk-08'
    },
    {
      id: 9,
      title: 'walk by the water',
      group: 'walks',
      image: 'boardwalk-09'
    },
    {
      id: 10,
      title: 'construction working',
      group: 'construction',
      image: 'construction-01'
    },
    {
      id: 11,
      title: 'construction working',
      group: 'construction',
      image: 'construction-02'
    },
    {
      id: 12,
      title: 'construction working',
      group: 'construction',
      image: 'construction-03'
    },
    {
      id: 13,
      title: 'construction working',
      group: 'construction',
      image: 'construction-04'
    },
    {
      id: 14,
      title: 'construction working',
      group: 'construction',
      image: 'construction-05'
    },
    {
      id: 15,
      title: 'construction working',
      group: 'construction',
      image: 'construction-06'
    },
    {
      id: 16,
      title: 'construction working',
      group: 'construction',
      image: 'construction-07'
    },
    {
      id: 17,
      title: 'construction working',
      group: 'construction',
      image: 'construction-08'
    },
    {
      id: 18,
      title: 'construction working',
      group: 'construction',
      image: 'construction-09'
    },
    {
      id: 19,
      title: 'construction working',
      group: 'construction',
      image: 'construction-10'
    },
    {
      id: 20,
      title: 'my jeans look',
      group: 'jeans',
      image: 'jeans-01'
    },
    {
      id: 21,
      title: 'my jeans look',
      group: 'jeans',
      image: 'jeans-02'
    },
    {
      id: 22,
      title: 'my jeans look',
      group: 'jeans',
      image: 'jeans-03'
    },
    {
      id: 23,
      title: 'my jeans look',
      group: 'jeans',
      image: 'jeans-04'
    },
    {
      id: 24,
      title: 'my jeans look',
      group: 'jeans',
      image: 'jeans-05'
    },
    {
      id: 25,
      title: 'walking the rails',
      group: 'railroad',
      image: 'railroad-01'
    },
    {
      id: 26,
      title: 'walking the rails',
      group: 'railroad',
      image: 'railroad-02'
    },
    {
      id: 27,
      title: 'walking the rails',
      group: 'railroad',
      image: 'railroad-03'
    }
  ];

  getPhotosArray(group: string) {
    return this.photos.filter((photo) => photo.group === group);
  }
}
