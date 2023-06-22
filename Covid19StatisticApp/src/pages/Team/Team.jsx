import NavBar from "../../components/NavBar/NavBar";
import persons from "../../common/persons.json"
import PersonalCard from "../../components/Cards/PersonalCard";
import "./Team.css"


function Team () {
    return (
        <div>
            <NavBar />
            <div className="wrap">
                {
                    persons.map(e=> <PersonalCard key={e.name} name={e.name} fullName={e.fullName} occupation={e.occupation} description={e.description} gitHubLink={e.gitHubLink}/>)
                }
            </div>
        </div>
    )
}

export default Team;