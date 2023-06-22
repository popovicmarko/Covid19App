import NavBar from "../../components/NavBar/NavBar";
import persons from "../../common/persons.json"
import PersonalCard from "../../components/Cards/PersonalCard";


function Team () {
    return (
        <div>
            <NavBar />
            <div>
                {
                    persons.map(e=> <PersonalCard key={e.name} name={e.name} fullName={e.fullName} occupation={e.occupation} description={e.description} gitHubLink={e.gitHubLink}/>)
                }
            </div>
        </div>
    )
}

export default Team;