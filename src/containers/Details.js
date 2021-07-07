import React from 'react'
import dogs from "../dogsdata"
import { Media } from 'reactstrap';

 const  Details = (props)=> {
    const kopek = props.match.params.kopekid;
    const detail=dogs.filter((dog)=>dog.id===kopek);
    return (
        <div>
            {detail.map((dog) => {
                            return     <div>
                               <Media>
      <Media left href="#">
        <Media  src={`${dog.image}`} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
        {dog.name}
        </Media>
        <Media heading>
        Age:{dog.age}
        </Media>        
        <Media heading>
        Breed:{dog.breed}
        </Media>        
        {dog.description}
      </Media>
    </Media>
                          </div>
                        })}
         
        </div>
      );
}
export default Details;
