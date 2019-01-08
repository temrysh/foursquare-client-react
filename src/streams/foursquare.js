import { Subject, BehaviorSubject, from } from 'rxjs'
import { switchMap, map, pluck, catchError } from 'rxjs/operators'

import { pipe, withChar, withCliendId, withClientSeecret, withVersion, withLL, getYYYYMMDD } from '../utils/endpoint'

const clientId = process.env.REACT_APP_CLIENT_ID
const clientSecret = process.env.REACT_APP_CLIENT_SECRET
const baseEndpoint = 'https://api.foursquare.com/v2/venues/explore'

const getEndpoint = ll =>
  pipe(
    withChar('?'),
    withCliendId(clientId),
    withChar('&'),
    withClientSeecret(clientSecret),
    withChar('&'),
    withVersion(getYYYYMMDD),
    withChar('&'),
    withLL(ll),
  )(baseEndpoint)

export const getVenuesByLocation$ = new Subject()
export const venues$ = new BehaviorSubject([])

getVenuesByLocation$
  .pipe(
    map(({ latitude, longitude }) => [latitude, longitude].join(',')),
    map(ll => getEndpoint(ll)),
    switchMap(endpoint =>
      from(fetch(endpoint)).pipe(
        switchMap(res => from(res.json())),
        pluck('response'),
        pluck('groups'),
        pluck('0'),
        pluck('items'),
        catchError(console.log),
      ),
    ),
  )
  .subscribe(venues$)
