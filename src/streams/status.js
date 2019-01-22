import { BehaviorSubject } from 'rxjs'
import { mapTo } from 'rxjs/operators'

import { getUserLocation$ } from './location'
import { venues$ } from './foursquare'

export const requestStatus$ = new BehaviorSubject('complete') // complete | pending

getUserLocation$.pipe(mapTo('pending')).subscribe(requestStatus$)
venues$.pipe(mapTo('complete')).subscribe(requestStatus$)
