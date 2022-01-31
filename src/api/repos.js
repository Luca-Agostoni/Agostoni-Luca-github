import axios from "axios";

export const listRepos = async () => {
    try {
        const response = await axios.get(
            'https://github-funtion-ttf.azurewebsites.net/api/httpstudentsrepos'
        );
        return response.data ? response.data.results : undefined;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
