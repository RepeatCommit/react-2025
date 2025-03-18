import {simpsons} from "../data/simpsons.ts";
import CharacterComponent from "./CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <div>

            {
                simpsons.map((character, index) => {
                    return (
                        <div key={index}>
                            <CharacterComponent item={character}/>

                        </div>
                    );
                })
            }

        </div>
    );
};

export default FamilyComponent;