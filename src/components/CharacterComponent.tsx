import {ICharacter} from "../models/ICharacter.ts";
import {FC} from "react";


type CharacterComponentProps = {
    item: ICharacter
}

const CharacterComponent:FC<CharacterComponentProps> = ({item}) => {
    return (
        <div className='bg-orange-200'>
            <img src={item.photo} alt=""/>
            <h2>{item.name} {item.surname}</h2>
            <p> {item.age}</p>
            <p>{item.info}</p>

        </div>
    );
};

export default CharacterComponent;