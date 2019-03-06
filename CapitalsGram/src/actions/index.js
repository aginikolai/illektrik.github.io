const moreClicked = (newName) => {
    return {
        type: 'MORE_CLIKED',
        name: newName
    }
}

const addLike = (id) => {
    return {
        type: 'INCREMENT_LIKES',
        test: id
    }
}

const addComment = (cityName, author, comment) => {
    
    return {
        type: 'ADDING_COMMENT',
        cityName,
        author,
        comment
    }
}

const delComment = (cityName, i) => {
    console.log('hui')
    return {
        type: 'DEL_COMMENT',
        cityName,
        i
    }
}
export {
    moreClicked,
    addLike,
    addComment,
    delComment
}