import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../services/characters.service';
import { Character } from '../classes/character';

const CHARACTERS: Character[] = [
  { _id: 11, _firstname: 'Bob', _lastname:"Dylan1", _gender:"M", _race:"hum", _birthday:"01/01/01" },
  { _id: 12, _firstname: 'Bob', _lastname:"Dylan2", _gender:"M", _race:"hum", _birthday:"01/01/01" },
  { _id: 13, _firstname: 'Bob', _lastname:"Dylan3", _gender:"F", _race:"hum", _birthday:"01/01/01" },
];

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characterList : Character[];
  selectedCharacter : Character;
  isAllCharacterSlotFill : boolean;

  constructor(private CharactersService: CharactersService) { }
  
  getCharacters(): void {
    // this.CharactersService.getCharacters().then(characters => this.characterList = characters);
    // this.CharactersService.getCharacters().then(characters => console.log (characters));
    // console.log ("2 " + this.characterList);    
    this.characterList = CHARACTERS;
  }

  ngOnInit(): void {
    this.getCharacters();
    if (this.characterList!= null && this.characterList.length != 0){
      this.selectedCharacter =  this.characterList[0];
      if (this.characterList.length != 2)
        this.isAllCharacterSlotFill = true;
      else 
        this.isAllCharacterSlotFill = false;
    }
  }

  onSelect(character: Character):void {
    this.selectedCharacter = character;
  }

}
