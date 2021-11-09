import dataRepositorie from "./mock/repositories.json"
import dataUser from "./mock/users.json"

const merge = () => {

    const studentRes = dataUser.dataUser;
    const gitData = dataRepositorie.repositories;
    const mergedRepos = [];

    studentRes.forEach(user => {

        user.repos.forEach(repo => {

            gitData.filter(data => data.url === repo).forEach(filtered =>{ 
                const result = {
                                    surname: user.surname,
                                    name: user.name,
                                    login: user.login,
                                    repositorie_name: filtered.name,
                                    creation_date: filtered.created_at,
                                    update_date: filtered.updated_at,
                                };                
                mergedRepos.push(result);
            }
            )
        }
        )
    }
    )
    console.log(mergedRepos);
    return mergedRepos;
}


export const listRepos = () => {

    const Repositorie = []
    merge().forEach(element => Repositorie.push(element));
    return Repositorie;
}