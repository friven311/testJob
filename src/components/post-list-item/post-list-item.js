import React from 'react';


const PostListItem =({label, onDelete,onEdit}) => {
        const reg = /(?:^|[ ])#([a-zA-Z]+)/gm;
        let hash = label.match(reg)
        
        return (
            <>
                <div className="app-list-item d-flex justify-content-between">
                    
                        <span className="app-list-item-label">
                        {label}
                        </span>
                        <div className="d-flex justify-content-center align-items-center">
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={onEdit}
                                >Edit</button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={onDelete}>del</button>
                        </div>
                    
                </div>
                <hr/>
                <ul className="app-list-item d-flex justify-content-between">
                    {hash}
                </ul>
                
            </>
        )
    
}

export default PostListItem