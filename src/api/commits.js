import axios from "axios";
export const listCommits = async (owner, repo) => {
    try {
        const response = await axios.get(
            'https://github-funtion-ttf.azurewebsites.net/api/repodetailgithub?owner='+ owner +'&repo='+ repo
        );
        return response.data ? response.data.commits : undefined;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
