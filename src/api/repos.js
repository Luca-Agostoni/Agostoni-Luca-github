import {repositories} from "./mock/repositories.json";
import {users} from "./mock/users.json";
export const listRepos = () => {
    return {
            repositories,
            users
    }
}