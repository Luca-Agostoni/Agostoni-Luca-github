import './Selection.css';

export const Selection = () => {
    return(
        <div className="divSelection">
            <select className="selectionClass">
                <option>Seleziona classe</option>
                <option>FullStack Developer 2020/2022</option>
                <option>FullStack Developer 2021/2023</option>
                <option>BigData 2020/2022</option>
                <option>BigData 2021/2023</option>
            </select>
        </div>
    );
}