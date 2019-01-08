import { Subject, from } from 'rxjs'
import { switchMap, tap, pluck, catchError } from 'rxjs/operators'

import { getNavigatorGeolocation } from '../utils/geolocation'

export const getUserLocation$ = new Subject()
export const userLocation$ = new Subject(null)

getUserLocation$
  .pipe(
    switchMap(() =>
      from(getNavigatorGeolocation()).pipe(
        tap(res => {
          console.log(res)
        }),
        pluck('coords'),
        catchError(err => console.log(err)),
      ),
    ),
  )
  .subscribe(userLocation$)
