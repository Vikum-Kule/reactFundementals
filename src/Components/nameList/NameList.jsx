import React from 'react';
import ItemList from '../itemList/ItemList';
function NameList(){

    const namelist = [{
        "name": {
            "title": "mr",
            "first": "brad",
            "last": "gibson"
          },
        "location": {
            "street": "9278 new road",
            "city": "kilcoole",
            "state": "waterford"
            },
        "email": "brad.gibson@example.com",
        "dob": {
            "date": "1993-07-20T09:44:18.674Z",
            "age": 26
          },
          "picture": {
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg"
          }
    },
    {
        "name": {
            "title": "mhg",
            "first": "Vikum",
            "last": "Kulathunga"
          },
        "location": {
            "street": "galle road",
            "city": "nakiyadeniya",
            "state": "Galle"
            },
        "email": "vikumkulatunga@gmail.com",
        "dob": {
            "date": "1993-07-20T09:44:18.674Z",
            "age": 26
          },
          "picture": {
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg"
          }
    }

];
    return(
        <React.Fragment>
            <h1> Hello React world </h1>
            <ul>
            
                <ItemList 
                    name= {`${namelist[0].name.first} ${namelist[0].name.last}`}
                    city= {namelist[0].location.city}
                    email={namelist[0].email}
                    birthday = {namelist[0].dob.date}
                    picture= {namelist[0].picture.medium}
                />
                <ItemList
                    name= {`${namelist[1].name.first} ${namelist[1].name.last}`}
                    city= {namelist[1].location.city}
                    email={namelist[1].email}
                    birthday = {namelist[1].dob.date}
                />
            </ul>
        </React.Fragment>


    );
}
export default NameList;
