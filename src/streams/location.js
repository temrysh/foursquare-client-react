import { Subject, BehaviorSubject, from } from 'rxjs'
import { switchMap, pluck, catchError } from 'rxjs/operators'

import { getNavigatorGeolocation } from '../utils/geolocation'

export const getUserLocation$ = new Subject()
export const userLocation$ = new BehaviorSubject(null)

getUserLocation$
  .pipe(
    switchMap(() =>
      from(getNavigatorGeolocation()).pipe(
        pluck('coords'),
        catchError(console.log),
      ),
    ),
  )
  .subscribe(userLocation$)
