import '../assets/css/style.css';

const Add = () => {
    return (
        <>
        <div id="modal" className="hidden">
            <div className="modal-content">
                <form action="#">
                <div className="form-group">
                    <label htmlFor="mot">Mot</label>
                    <input type="text" id="mot" name="mot" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="traduction">Traduction</label>
                    <input type="text" id="traduction" name="traduction" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" id="image" name="image" className="form-control" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Ajouter</button>
                    <button type="button" className="btn btn-secondary" onClick="closeModal()">Annuler</button>
                </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Add;