import { Injectable } from '@angular/core';

import { Character } from '../classes/character';
import { CHARACTERS} from '../mock/characters.mock';

@Injectable()
export class CharactersService {

  getCharacters(): Promise<Character[]> {
    return Promise.resolve(CHARACTERS);
  }

}
