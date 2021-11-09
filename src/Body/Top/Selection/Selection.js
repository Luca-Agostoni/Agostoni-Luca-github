import './Selection.css';

export const Selection = () => {
    return(
        <div className="divSelection">
            <select className="selectionClass">
                <option>Seleziona classe</option>
                <option>1°</option>
                <option>2°</option>
            </select>
        </div>
    );
}