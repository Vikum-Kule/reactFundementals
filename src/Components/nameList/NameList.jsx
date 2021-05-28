import React, {useState, useEffect} from 'react';
import ItemList from '../itemList/ItemList';
function NameList(){

    const [loadData, setLoadData] = useState(new Date());
    const [namelist, setNameList] = useState([
        {
        "id":1,
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
        "id":2,
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
]);

    useEffect(() => {
        fetch("https://randomuser.me/api").then((Response)=>{
            return Response.json();
        }).then(responseData =>{
            setNameList((namelist)=>[...namelist,responseData.results[0]])
        });
    },[]);

    const nameListComp = () =>{
        return namelist.map((x) =>{
                return(
                    <ItemList 
                    key = {x.id}
                    name= {`${x.name.first} ${x.name.last}`}
                    city= {x.location.city}
                    email={x.email}
                    birthday = {x.dob.date}
                    picture= {x.picture.medium}
                />
                );
            }

            
           
        );
        
    };

    const addUser = () =>{
        // const newUser ={
        //     "id":3,
        //     "name": {
        //         "title": "mr",
        //         "first": "brad",
        //         "last": "gibson"
        //     },
        //     "location": {
        //         "street": "9278 new road",
        //         "city": "kilcoole",
        //         "state": "waterford"
        //         },
        //     "email": "brad.gibson@example.com",
        //     "dob": {
        //         "date": "1993-07-20T09:44:18.674Z",
        //         "age": 26
        //     },
        //     "picture": {
        //         "medium": "https://randomuser.me/api/portraits/women/53.jpg"
        //     }
        // };

        //setNameList((namelist)=>namelist.concat(newUser));

        //spred operator..
        //setNameList((namelist)=>[...namelist,newUser]);

        setLoadData(new Date());

    };
    
    return(
        <React.Fragment>
            <div className = "container mt-4">
            <button className="btn btn-primary mb-2" onClick={addUser}>Add</button>
                <ul className= "list-group">
                    {nameListComp()}
                </ul>

            </div>
        </React.Fragment>


    );
}
export default NameList;
