import { Store } from '@ngrx/store';
import * as store from '../store';

export abstract class Sandbox {

    constructor(
        protected appState$: Store<store.State>) { }

}
